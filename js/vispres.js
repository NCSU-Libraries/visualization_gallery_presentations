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
  if (this.config.transitionInterval === 0) {
    this.transitionInterval = 0;
  }
  else {
    this.transitionInterval = this.config.transitionInterval || 1000;
  }
}


VisPres.prototype.setRootStyles = function() {
  // if (this.config.backgroundColor) {
  //   this.root.style.background = this.config.backgroundColor;
  // }

  if (this.config.fontColor) {
    this.root.style.color = this.config.fontColor;
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
  this.scenes = this.config.scenes;
  console.log(this.scenes);

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
  
  console.log("loadPrev " + this.sceneIndex);

  var scene = this.scenes[this.sceneIndex];
  this.initializeLayout(this.zoneWrapperNext, scene);
  this.loadContent(this.zoneWrapperNext, scene);
  this.nextScene = scene;
  this.incrementSceneIndex();
}


VisPres.prototype.start = function() {
  var _this = this;
  // this.loadNext();
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
    console.log(this.masterAudio);
    this.playPause(this.masterAudio);
  }

  this.started = true;
}


// NOTE: this.sceneIndex at this point is the index of the scene to be loaded in the background, not the one about to be displayed.
// the current scene use modulo(this.sceneIndex -1, this.scenes.length)
VisPres.prototype.advance = function(options) {
  options ||= {};
  var skip = options.skip || false;
  var back = options.back || false;

  console.log('advance');
  console.log(this.sceneIndex);

  this.transitioning = true;
  var _this = this;

  let transitionInterval = this.transitionInterval;

  if (this.nextScene.transitionInterval === 0) {
   transitionInterval = 0;
  }
  else if (this.nextScene.transitionInterval) {
   transitionInterval = this.nextScene.transitionInterval;
  }

  // // this.loadContent(this.zoneWrapperNext);
  this.zoneWrapperNext.style.opacity = 0;
  this.zoneWrapperNext.style.zIndex = 1000;
  this.zoneWrapperTop.style.zIndex = 0;
  
  this.restartChildVideoPlayers(this.zoneWrapperNext);

  if (skip) {
    console.log('skip');
    console.log(this.nextScene.startTime);
    
    if (this.mediaTimeAdvanceInterval) {
      clearInterval(this.mediaTimeAdvanceInterval);
    }
  }

  let currentSceneIndex = modulo(this.sceneIndex - 1, this.scenes.length);

  fadeIn(this.zoneWrapperNext, transitionInterval, function() {
    var newNext = _this.zoneWrapperTop;
    var newTop = _this.zoneWrapperNext;
    _this.zoneWrapperTop = newTop;
    _this.zoneWrapperNext = newNext;

    //
    _this.zoneWrapperNext.style.opacity = 0;
    _this.zoneWrapperNext.style.zIndex = 1000;
    _this.zoneWrapperTop.style.zIndex = 0;
    //

    _this.loadNext();
    _this.transitioning = false;
    _this.checkElementAutoAdvance(newTop);
  });
  this.startQueuedSlideshows();
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
  var layout = scene.layout;

  layout = layout.sort(function(a,b) { return a.zone - b.zone });
  
  // TODO: Support modification scenes (replace content in specific zones rather than replacing the entire scene)
  removeAllChildNodes(zoneWrapper);

  if (!scene.grid) {
    scene.grid = this.defaultGrid;
  }

  if (scene.modify) {

  }
  else if (scene.backgroundColor) {
    zoneWrapper.style.backgroundColor = scene.backgroundColor;
  }
  else if (this.config.backgroundColor) {
    zoneWrapper.style.background = this.config.backgroundColor;
  }
  else {
    zoneWrapper.style.backgroundColor = null;
  }


  if (scene.backgroundImage) {
    zoneWrapper.style.backgroundImage = "url('" + scene.backgroundImage + "')";
  }
  
  // Reset zone wrapper classes
  for (var i = 0; i < this.grids.length; i++) {
    let classname = 'grid-' + this.grids[i];
    zoneWrapper.classList.remove(classname);
  }

  if (scene.grid && this.grids.indexOf(scene.grid) >= 0) {
    zoneWrapper.classList.add('grid-' + scene.grid);
  }

  for (i = 0; i < layout.length; i++) {
    let zoneConf = layout[i];
    let zoneId = "zone-" + zoneConf.zone;
    let zoneClasses = ['zone', zoneId];
    if (zoneConf.span) {
      zoneClasses.push("span-" + zoneConf.span);
    }
    let zone = generateElement('div', zoneClasses);
    // zone.id = zoneId;
    let wrapper = generateElement('div', 'wrapper');
    zone.appendChild(wrapper);
    zoneWrapper.appendChild(zone);
  }
}

VisPres.prototype.loadContent = function(zoneWrapper, scene) {
  console.log(scene);

  var layout = scene.layout;
  layout = layout.sort(function(a,b) { return a.zone - b.zone });
  
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

  var imgHtml = '<img src="">';
  var videoHtml = '<video src="" class="paused"></video>';
  var divHtml = '<div class="zone-content-html"></div>';

  for (var i = 0; i < layout.length; i++) {
    var zoneConf = layout[i];
    
    zoneConf.loop ||= this.loopMedia;

    var zoneId = "zone-" + zoneConf.zone;
    var zoneSelector = '.zone.' + zoneId;
    var zone = zoneWrapper.querySelector(zoneSelector);

    if (zone) {
      var wrapper = zone.querySelector('.wrapper');
      var el;

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

  // console.log(scene.callback);
}


// Scene auto-advance controls 

VisPres.prototype.checkElementAutoAdvance = function(element) {

  console.log(element);

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
  console.log('mediaTimeAdvance');
  console.log(mediaObject);

  var _this = this;

  time = time / 1000;
  console.log(time);

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
  // console.log(wrapper);

  var img = wrapper.querySelector('img');
  img.src = src;
}


VisPres.prototype.restartChildVideoPlayers = function(element) {
  var players = element.querySelectorAll('video');
  players.forEach(function(player) { pause(player); });
  players.forEach(function(player) { player.currentTime = 0; });
  players.forEach(function(player) { play(player); });
}


VisPres.prototype.startQueuedSlideshows = function() {
  if (this.queuedSlideshows.length > 0) {
    this.queuedSlideshows.forEach(function(slideshow) {
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
      // console.log(element);
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

  // console.log(players);

  players.forEach(function(player) {
    console.log(player);
    playPause(player);
  });
}
