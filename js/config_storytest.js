function prezconfig() {
  var conf = new VizPrezConfig();

// *** No edits above here ***

  conf.storyMode = true;
  
  // Set transition interval (fade time) in milliseconds
  conf.transitionInterval = 1000;
  conf.defaultGrid = 8;
  conf.loopMedia = false;
  // conf.backgroundColor = '#8bad38';
  conf.masterAudioFilePath = 'media/audio/bees/urban_bees.wav';
  // conf.masterAudioId = 'urban-bees';


  conf.addScene({
    layout: [
      { zone: 1, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' },
      { zone: 3, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' },
      { zone: 5, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' },
      { zone: 7, span: 2, contentType: 'video', filePath: 'media/video/bees/beesblur.mp4' }
    ],

  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_1r.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_1r.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_1r.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_1.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_1r.png' }
    ],
    transitionInterval: 2000,
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
    startTime: 39
  })
 

  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_6r.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_6r.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_6r.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_6r.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' }
    ],
    transitionInterval: 2000,
    startTime: 46
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' }
    ],
    startTime: 50
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_5.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_5.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_5.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_5.png' }
    ],
    startTime: 57
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_7.png' }
    ],
    startTime: 63
  })


  // 1:11 - urban_bees_6.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_8.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' }
    ],
    startTime: 71
  })

  // 1:29 - urban_bees_9.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_9.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_9.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_9.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_6.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_9.png' }
    ],
    startTime: 89
  })

  // 1:57 - urban_bees_10.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_10r.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_10r.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_10r.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_10r.png' }
    ],
    startTime: 117
  })

  
  // 2:15 - urban_bees_11.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_10.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' }
    ],
    startTime: 135
  })

  
  // 2:34 - urban_bees_12.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_11.png' }
    ],
    startTime: 154
  })

  // 2:46 - urban_bees_13.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_12.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' }
    ],
    startTime: 166
  })

  // 3:00 - urban_bees_14.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_13.png' }
    ],
    startTime: 180
  })

  // 3:40 - urban_bees_15.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_14.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' }
    ],
    startTime: 220
  })

  // 4:00 - urban_bees_16.png
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_16.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_16.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_16.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_16.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_15.png' }
    ],
    startTime: 240
  })



  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_17r.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_17.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_17r.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_17.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_17r.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_17.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_17r.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_17.png' }
    ],
    startTime: 275
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' }
    ],
    startTime: 308,
    backgroundColor: "#c00"
  })


  conf.addScene({
    layout: [
      // { zone: 1, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 2, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 3, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 4, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 5, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 6, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 7, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' },
      // { zone: 8, contentType: 'image', filePath: 'media/images/bees/urban_bees_aec.png' }
    ],
    startTime: 323,
    backgroundColor: "#000"
  })

  



  // *** No edits below here ***
  return conf;
}
