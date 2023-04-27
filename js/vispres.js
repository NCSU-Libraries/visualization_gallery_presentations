// ** VisPresConfig **
// VisPresConfig handles configuration for VisPres

function VisPresConfig() {
  this.scenes = [];
  this.transitionInterval = null;
  // We can add more config attributes later
}

VisPresConfig.prototype.addScene = function(sceneConfig) {
  if (sceneConfig.layouts) {
    sceneConfig.layouts.sort(function(a,b) { return a.zone - b.zone });
  }
  this.scenes.push(sceneConfig);
}


// ** VisPres **
// VisPres is the presentation proper

function VisPres(selector, config) {
  this.root = document.querySelector(selector);

  if (!this.root) {
    console.log("Root element '" + selector + "' element does not exist!");
  }
  else if (!config) {
    console.log('config is required!');
  }
  else if (!config.scenes) {
    console.log("config must include at least one scene in config['scenes']!");
  }
  else {
    this.config = config;
    this.initialize();
  }

  return this;
}


// configuration and initialization

VisPres.prototype.initialize = function() {
  this.setDefaults();
  this.setRootStyles();
  this.initializeZoneWrappers();
  this.initializeScenes();
  this.enableKeyboardConrol();
}


VisPres.prototype.setDefaults = function() {
  this.started = false;
  this.transitioning = false;
  this.sceneIndex = 0;
  this.zoneWrapperTopIndex = 0;
  this.zoneWrapperNextIndex = 1;
  this.grids = [12,10,8];
  this.defaultGrid = this.config.defaultGrid || null; // null default will use 12-zone grid
  this.loopMedia = (this.config.loopMedia !== false) ? true : false
  this.queuedSlideshows = [];
  this.backgroundColor = this.config.backgroundColor || '#000';
  if (this.config.transitionInterval === 0) {
    this.transitionInterval = 0;
  }
  else {
    this.transitionInterval = this.config.transitionInterval || 1000;
  }
  // NOT THIS: this.scenes = this.config.scenes;
  // INSTEAD: deep copy config.scenes to this.scenes
  this.scenes = [];
  for (const scene of this.config.scenes) {
    this.scenes.push(scene);
  }

  this.processScenes();
}


VisPres.prototype.setRootStyles = function() {
  // if (this.config.backgroundColor) {
  //   this.root.style.background = this.config.backgroundColor;
  // }

  if (this.config.fontColor) {
    this.root.style.color = this.config.fontColor;
  }
}


// Make some values explicit and  fix inconsistencies in layout
VisPres.prototype.processScenes = function() {
  for (let i = 0; i < this.scenes.length; i++) {
    let thisScene = this.scenes[i];
    let nextScene = (i == this.scenes.length - 1) ? null : this.scenes[i + 1];
    let prevScene = (i == 0) ? null : this.scenes[i - 1];

    // add grid
    if (!thisScene.grid) {
      thisScene.grid = this.defaultGrid;
    }

    // check modScenes
    if (thisScene.modScene) {
      // unser modScene of first scene or grids do not match
      if (!prevScene || thisScene.grid != prevScene.grid) {
        thisScene.modScene = false;
      }
    }
  }
}


VisPres.prototype.initializeZoneWrappers = function() {
  // Delete everything in this.root first
  removeAllChildNodes(this.root);
  this.zoneWrapperTop = htmlToElement('<div class="zone-wrapper to-fade-in" id="zone-wrapper-1"></div>');
  this.zoneWrapperNext = htmlToElement('<div class="zone-wrapper to-fade-in" id="zone-wrapper-2"></div>');
  this.root.appendChild(this.zoneWrapperTop);
  this.root.appendChild(this.zoneWrapperNext);
  this.zoneWrapperTop.style.zIndex = 1;
  this.zoneWrapperNext.style.zIndex = 0;
}


VisPres.prototype.initializeScenes = function() {
  let scene1 = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperTop, scene1);
  this.loadContent(this.zoneWrapperTop, scene1);
  this.incrementSceneIndex();

  let scene2 = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperNext, scene2);
  this.loadContent(this.zoneWrapperNext, scene2);
  this.nextScene = scene2;
  this.incrementSceneIndex();
}


// Presentation control

VisPres.prototype.incrementSceneIndex = function() {
  // this.sceneIndex = increment(this.sceneIndex, this.scenes.length - 1);
  this.sceneIndex = (this.sceneIndex + 1) % this.scenes.length;
}


VisPres.prototype.loadNext = function() {
  var scene = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperNext, scene);
  this.loadContent(this.zoneWrapperNext, scene);
  this.nextScene = scene;
  this.incrementSceneIndex();
}


VisPres.prototype.loadPrev = function() {
  // At this point the next scene has already been loaded, and this.sceneIndex has been incremented to the one after
  // That means that this.sceneIndex is 2 past the current scene's index
  // So to load the previous one, you need to set that number back by 3
  var indexMinus2 = modulo((this.sceneIndex - 3), this.scenes.length);
  this.sceneIndex = (indexMinus2 >= 0) ? indexMinus2 : ((this.scenes.length - 1) + indexMinus2);
  var scene = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperNext, scene);
  this.loadContent(this.zoneWrapperNext, scene);
  this.nextScene = scene;
  this.incrementSceneIndex();
}


VisPres.prototype.start = function() {
  var _this = this;
  this.restartChildVideoPlayers(this.zoneWrapperTop);
  this.transitioning = true;

  fadeIn(this.zoneWrapperTop, this.transitionInterval, function() {
    let top = _this.zoneWrapperTop;
    top.classList.remove('to-fade-in');
    _this.transitioning = false;
    _this.checkElementAutoAdvance(top);
  });

  this.startQueuedSlideshows();
  
  if (this.masterAudio) {
    this.playPause(this.masterAudio);
  }

  this.started = true;
}


// NOTE: this.sceneIndex at this point is the index of the scene to be loaded in the background, not the one about to be displayed.
// the current scene use modulo(this.sceneIndex -1, this.scenes.length)
VisPres.prototype.advance = function(options) {
  var _this = this;
  options ||= {};
  let skip = options.skip || false;
  let back = options.back || false;
  let transitionInterval = this.transitionInterval;
  let currentSceneIndex = modulo(this.sceneIndex - 1, this.scenes.length);

  if (this.nextScene.transitionInterval === 0) {
   transitionInterval = 0;
  }
  else if (this.nextScene.transitionInterval) {
   transitionInterval = this.nextScene.transitionInterval;
  }

  this.transitioning = true;
  this.zoneWrapperNext.style.opacity = 0;
  this.zoneWrapperNext.style.zIndex = 1000;
  this.zoneWrapperTop.style.zIndex = 0;
  this.restartChildVideoPlayers(this.zoneWrapperNext);
  
  if (skip) {
    console.log('skip to scene index ' + currentSceneIndex);
    if (this.mediaTimeAdvanceInterval) {
      clearInterval(this.mediaTimeAdvanceInterval);
    }
  }

  fadeIn(this.zoneWrapperNext, transitionInterval, function() {
    let oldTop = _this.zoneWrapperTop;
    let newNext = oldTop;
    let newTop = _this.zoneWrapperNext;

    if (newTop.hasAttribute('data-modscene')) {
      _this.finalizeModScene(newTop, oldTop);
    }

    _this.zoneWrapperTop = newTop;
    _this.zoneWrapperNext = newNext;
    _this.zoneWrapperNext.style.opacity = 0;
    _this.zoneWrapperNext.style.zIndex = 1000;
    _this.zoneWrapperTop.style.zIndex = 0;
    _this.loadNext();
    _this.transitioning = false;
    _this.checkElementAutoAdvance(newTop);
  });
  this.startQueuedSlideshows();
}


VisPres.prototype.finalizeModScene = function(targetZoneWrapper, sourceZoneWrapper) {
  var _this = this;
  var emptyTargetZones = targetZoneWrapper.querySelectorAll('.zone.empty');

  emptyTargetZones.forEach(zone => {
    // let targetSpan = zoneSpanFromElement(zone);
    let zoneNum = zoneNumberFromElement(zone);
    let sourceZone = sourceZoneWrapper.querySelector('.zone-' + zoneNum);

    if (sourceZone) {
      let sourceWrapper = sourceZone.querySelector('.wrapper');
      let sourceSpan = zoneSpanFromElement(sourceZone);

      if (sourceSpan == 1) {
        if (sourceWrapper) {
          zone.appendChild(sourceWrapper);
        }
      }
      else {
        let allowSpan = true;
        let emptyZoneNums = Array.from(emptyTargetZones).map(z => zoneNumberFromElement(z));

        for (let i = 1; i < sourceSpan; i++) {
          let testZone = zoneNum + 1;
          if (!emptyZoneNums.includes(testZone)) {
            allowSpan = false;
            break;
          }
        }

        if (allowSpan) {
          zone.classList.add('span-' + sourceSpan);
          
          if (sourceWrapper) {
            zone.appendChild(sourceWrapper);
          }
        }
      }
    }
  });
}


VisPres.prototype.reverse = function() {
  console.log('reverse');
  this.loadPrev();
  this.advance({skip: true});
}


VisPres.prototype.enableKeyboardConrol = function() {
  var _this = this;
  document.addEventListener('keydown', function(event) {
    var keyCode = event.keyCode;
    // s for start
    if (!_this.started) {
      _this.start();
    }
    else if (_this.started) {
      switch(keyCode) {
        // spacebar
        case 32:
          _this.playPause();
          break;
        // n
        case 78:
          if (!_this.transitioning) {
            _this.advance({skip: true});
          }
        // b
        case 66:
          if (!_this.transitioning) {
            _this.reverse();
          }
          break;
        // p
        case 80:
          break;
        // arrow right
        case 39:
          break;
        // arrow left
        case 37:
          break;
      }
    }
    
  });
}


// Scene controls

VisPres.prototype.initializeLayout = function(zoneWrapper, scene) {
  var layout = scene.layout.sort(function(a,b) { return a.zone - b.zone });

  if (scene.modScene) {
    let emptyZones = this.getEmptyZones(scene);
    for (let i=0; i < emptyZones.length; i++) {
      layout.push( { zone: emptyZones[i], empty: true } )
    }
  }

  var layout = scene.layout.sort(function(a,b) { return a.zone - b.zone });

  removeAllChildNodes(zoneWrapper);

  if (scene.modScene) {
    zoneWrapper.style.backgroundColor = null;
  }
  else if (scene.backgroundColor) {
    zoneWrapper.style.backgroundColor = scene.backgroundColor;
  }
  else {
    zoneWrapper.style.backgroundColor = this.backgroundColor;
  }

  if (scene.backgroundImage) {
    zoneWrapper.style.backgroundImage = "url('" + scene.backgroundImage + "')";
  }
  
  // Reset zone wrapper classes
  for (let i = 0; i < this.grids.length; i++) {
    let classname = 'grid-' + this.grids[i];
    zoneWrapper.classList.remove(classname);
  }

  if (scene.grid && this.grids.indexOf(scene.grid) >= 0) {
    zoneWrapper.classList.add('grid-' + scene.grid);
  }

  for (let i = 0; i < layout.length; i++) {
    let zoneConf = layout[i];
    let zoneId = "zone-" + zoneConf.zone;
    let zoneClasses = ['zone', zoneId];

    if (zoneConf.span) {
      zoneClasses.push("span-" + zoneConf.span);
    }
    
    if (zoneConf.empty) {
      zoneClasses.push('empty');
    }

    let zone = generateElement('div', zoneClasses);

    if (!zoneConf.empty) {
      let wrapper = generateElement('div', 'wrapper');
      zone.appendChild(wrapper);
    }
    
    zoneWrapper.appendChild(zone);
  }
}


VisPres.prototype.getEmptyZones = function(scene) {
  var emptyZones = [];
  let layout = scene.layout.sort(function(a,b) { return a.zone - b.zone });
  let zoneCount = parseInt(scene.grid);
  let occupiedZones = [];

  for (let i = 0; i < layout.length; i++) {
    let zoneConf = layout[i];
    let zone = zoneConf.zone;
    let span = zoneConf.span || 1;
    occupiedZones.push(zone);
    for (let ii = 1; ii < span; ii++) {
      occupiedZones.push(zone + ii)
    }
  }

  for (let i = 1; i <= zoneCount; i++) {
    if (!occupiedZones.includes(i)) {
      emptyZones.push(i)
    }
  }

  return emptyZones;
}


VisPres.prototype.loadContent = function(zoneWrapper, scene) {
  var layout = scene.layout;
  layout = layout.sort(function(a,b) { return a.zone - b.zone });
  zoneWrapper.removeAttribute('data-modscene');
  zoneWrapper.removeAttribute('data-auto-advance-media-id');
  zoneWrapper.removeAttribute('data-auto-advance-time');
  zoneWrapper.removeAttribute('data-auto-advance-media-time');

  if (scene.autoAdvanceTime) {
    zoneWrapper.setAttribute('data-auto-advance-time', scene.autoAdvanceTime);
  }
  else if (scene.autoAdvanceMediaId) {
    zoneWrapper.setAttribute('data-auto-advance-media-id', scene.autoAdvanceMediaId);
    if (scene.autoAdvanceMediaTime) {
      zoneWrapper.setAttribute('data-auto-advance-media-time', scene.autoAdvanceMediaTime);
    }
  }

  if (scene.modScene) {
    zoneWrapper.setAttribute('data-modscene', 'true');
  }

  var imgHtml = '<img src="">';
  var videoHtml = '<video src="" class="paused"></video>';
  var divHtml = '<div class="zone-content-html"></div>';

  for (let i = 0; i < layout.length; i++) {
    var zoneConf = layout[i];
    zoneConf.loop ||= this.loopMedia;
    var zoneId = "zone-" + zoneConf.zone;
    var zoneSelector = '.zone.' + zoneId;
    var zone = zoneWrapper.querySelector(zoneSelector);

    if (zone) {
      let wrapper = zone.querySelector('.wrapper');
      let el;

      switch (zoneConf.contentType) {
      case 'video':
        el = htmlToElement(videoHtml);
        el.src = zoneConf.filePath;
        
        if (zoneConf.loop !== false) {
          el.setAttribute('loop','loop');
        }

        if (zoneConf.muted !== false) {
          // el.setAttribute('muted',1);
          el.muted = "muted";
        }
        break;
      case 'image':
        el = htmlToElement(imgHtml);
        el.src = zoneConf.filePath;
        break;
      case 'slideshow':
        el = htmlToElement('<div class="slideshow" id="slideshow"></div>');
        break;
      case 'html':
        el = htmlToElement(divHtml);
        if (zoneConf.content) {
          el.innerHTML = zoneConf.content;
        }
        break;
      }

      if (zoneConf.id) {
        el.setAttribute('id', zoneConf.id);
      }

      if (el) {
        if (zoneConf.caption) {
          let contentEl = generateElement('div','content');
          contentEl.appendChild(el);
          let caption = generateElement('div','caption');
          caption.innerHTML = zoneConf.caption;
          wrapper.classList.add('with-caption');
          wrapper.appendChild(contentEl);
          wrapper.appendChild(caption);
        }
        else {
          wrapper.appendChild(el);
        }
      }

      if (zoneConf.contentType == 'slideshow') {
        let list = zoneConf.fileList;
        let interval = zoneConf.interval ? (parseFloat(zoneConf.interval) * 1000) : null;
        let slideshow = new Slideshow({ element: el, playlist: list, displayInterval: interval, autoStart: false });
        this.queuedSlideshows.push(slideshow)
      }

      if (zoneConf.backgroundColor) {
        wrapper.style.backgroundColor = zoneConf.backgroundColor;
      }

      if (zoneConf.callback) {
        executeCallback(zoneConf.callback);
      }
    }
  }

}


// Scene auto-advance controls 

VisPres.prototype.checkElementAutoAdvance = function(element) {
  if (element.hasAttribute('data-auto-advance-time')) {
    let time = parseFloat(element.getAttribute('data-auto-advance-time'));

    if (time && !Number.isNaN(time)) {
      this.intervalAdvance(time * 1000);
    }
    
  }
  else if (element.hasAttribute('data-auto-advance-media-id')) {
    let selector = '#' + element.getAttribute('data-auto-advance-media-id');
    let mediaObject = document.querySelector(selector);

    if (mediaObject) {
      if (element.hasAttribute('data-auto-advance-media-time')) {
        let time = parseFloat(element.getAttribute('data-auto-advance-media-time'));
        this.mediaTimeAdvance(mediaObject,time * 1000);
      }
      else {
        this.mediaAdvance(mediaObject);
      }
    }
  }
}


VisPres.prototype.mediaTimeAdvance = function(mediaObject, time) {
  var _this = this;
  time = time / 1000;

  console.log('mediaTimeAdvance: ' + time);

  this.mediaTimeAdvanceInterval = setInterval(function() {
    if (mediaObject.currentTime >= time) {
      clearInterval(_this.mediaTimeAdvanceInterval);
      _this.advance();
    }
  }, 10);
}


VisPres.prototype.intervalAdvance = function(interval) {
  var _this = this;
  setTimeout(function() {
    _this.advance();
  }, interval);
}


VisPres.prototype.mediaAdvance = function(mediaObject) {
  var _this = this;
  mediaObject.addEventListener('ended', function() {
    _this.advance();
  });
}


// Content controls

VisPres.prototype.loadVideo = function(wrapper, src) {
  var player = wrapper.querySelector('video');
  player.src = src;
}


VisPres.prototype.loadImage = function(wrapper, src) {
  var img = wrapper.querySelector('img');
  img.src = src;
}


VisPres.prototype.restartChildVideoPlayers = function(element) {
  var players = element.querySelectorAll('video');
  players.forEach(player => { pause(player); });
  players.forEach(player => { player.currentTime = 0; });
  players.forEach(player => { play(player); });
}


VisPres.prototype.startQueuedSlideshows = function() {
  if (this.queuedSlideshows.length > 0) {
    this.queuedSlideshows.forEach(slideshow => {
      slideshow.cycleImages();
    });
    this.queuedSlideshows = [];
  }
}


VisPres.prototype.playPause = function(element) {
  var players;

  if (element) {
    let name = element.tagName.toLowerCase();

    if (name == 'audio' || element.tagName == 'video') {
      players = [element];
    }
    else {
      players = element.querySelectorAll('video,audio');
    }

  }
  else {
    players = this.zoneWrapperTop.querySelectorAll('video,audio');
    players = Array.prototype.slice.call(players);

    if (this.masterAudio) {
      players.push(this.masterAudio);
    }

  }

  players.forEach(player => {
    playPause(player);
  });
}
