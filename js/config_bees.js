function prezconfig() {
  var conf = new VizPrezConfig();

// *** No edits above here ***

  conf.storyMode = true;
  
  // Set transition interval (fade time) in milliseconds
  conf.transitionInterval = 1000;
  conf.defaultGrid = 8;
  conf.loopMedia = false;
  conf.backgroundColor = '#8bad38';
  conf.masterAudioFilePath = 'media/audio/bees/urban_bees.wav';
  // conf.masterAudioId = 'urban-bees';


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' }
    ],
    transitionInterval: 4000,
    autoAdvanceMediaTime: 35,
    startTime: 22
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' }
    ],
    autoAdvanceMediaTime: 39,
    startTime: 35
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_3.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_3.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_3.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_3.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_2.png' }
    ],
    autoAdvanceMediaTime: 46,
    startTime: 39
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_4.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_4a.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_4.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_4a.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_4.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_4a.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_4.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_4a.png' }
    ],
    transitionInterval: 3000,
    autoAdvanceMediaTime: 500,
    startTime: 46
  })


  conf.addScene({
    layout: [
      { zone: 1, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' },
      { zone: 3, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' },
      { zone: 5, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' },
      { zone: 7, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' }
    ],
    // autoAdvanceMediaId: 'urban-bees',
    autoAdvanceMediaTime: 22
  })




  // *** No edits below here ***
  return conf;
}
