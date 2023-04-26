VisPresConfig.prototype.spanwrapRequired = function(zoneConf) {
  return (zoneConf.zone + zoneConf.span - 1) > 12;
}


VisPres.prototype.initializeLayout = function(zoneWrapper, scene) {
  var layout = scene.layout;
  layout = layout.sort(function(a,b) { return a.zone - b.zone });
  removeAllChildNodes(zoneWrapper);

  if (scene.backgroundColor) {
    zoneWrapper.style.backgroundColor = scene.backgroundColor;
  }
  else {
    zoneWrapper.style.backgroundColor = null;
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
    let zoneWrap = this.spanwrapRequired(zoneConf);

    if (zoneConf.span) {
      zoneClasses.push("span-" + zoneConf.span);
    }

    let zone = generateElement('div', zoneClasses);
    // zone.id = zoneId;
    let wrapper = generateElement('div', 'wrapper');
    zone.appendChild(wrapper);
    zoneWrapper.appendChild(zone);

    // if zoneWrap is true, clone the wrapper and add it to a new zone at z-index + 1
    if (zoneWrap) {

    }
  }
}
