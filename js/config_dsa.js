function prezconfig() {
  var conf = new VizPrezConfig();

// *** No edits above here ***


  // Set transition interval (fade time) in milliseconds
  conf.transitionInterval = 1000;
  conf.defaultGrid = 8;
  conf.loopMedia = false;
  conf.backgroundColor = '#000000';

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/title_slide_2.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/title_slide_1a.png', backgroundColor: '#cc0000' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/title_slide_2.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/title_slide_1a.png', backgroundColor: '#cc0000' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/title_slide_2.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/title_slide_1a.png', backgroundColor: '#cc0000' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/title_slide_2.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/title_slide_1a.png', backgroundColor: '#cc0000' }
    ]
  })



  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa1.mp4', muted: false, id: 'dsa1' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa1.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa1.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa1.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa1.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa1.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa1.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa1.png' }
    ],
    autoAdvanceMediaId: 'dsa1'
  })

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/dsa2.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/dsa/dsa2.mp4', muted: false, id: 'dsa2' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/dsa2.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/dsa/dsa2.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/dsa2.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/dsa/dsa2.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/dsa2.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/dsa/dsa2.mp4' }
    ],
    autoAdvanceMediaId: 'dsa2'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa3.mp4', muted: false, id: 'dsa3' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa3.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa3.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa3.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa3.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa3.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa3.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa3.png' }
    ],
    autoAdvanceMediaId: 'dsa3'
  })

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/dsa4.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/dsa/dsa4.mp4', muted: false, id: 'dsa4' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/dsa4.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/dsa/dsa4.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/dsa4.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/dsa/dsa4.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/dsa4.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/dsa/dsa4.mp4' }
    ],
    autoAdvanceMediaId: 'dsa4'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa5.mp4', muted: false, id: 'dsa5' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa5.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa5.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa5.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa5.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa5.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa5.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa5.png' }
    ],
    autoAdvanceMediaId: 'dsa5'
  })

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/dsa6.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/dsa/dsa6.mp4', muted: false, id: 'dsa6' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/dsa6.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/dsa/dsa6.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/dsa6.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/dsa/dsa6.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/dsa6.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/dsa/dsa6.mp4' }
    ],
    autoAdvanceMediaId: 'dsa6'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa7.mp4', muted: false, id: 'dsa7' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa7.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa7.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa7.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa7.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa7.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa7.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa7.png' }
    ],
    autoAdvanceMediaId: 'dsa7'
  })

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/dsa8.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/dsa/dsa8.mp4', muted: false, id: 'dsa8' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/dsa8.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/dsa/dsa8.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/dsa8.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/dsa/dsa8.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/dsa8.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/dsa/dsa8.mp4' }
    ],
    autoAdvanceMediaId: 'dsa8'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa9.mp4', muted: false, id: 'dsa9' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa9.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa9.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa9.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa9.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa9.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa9.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa9.png' }
    ],
    autoAdvanceMediaId: 'dsa9'
  })

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/dsa10.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/dsa/dsa10.mp4', muted: false, id: 'dsa10' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/dsa10.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/dsa/dsa10.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/dsa10.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/dsa/dsa10.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/dsa10.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/dsa/dsa10.mp4' }
    ],
    autoAdvanceMediaId: 'dsa10'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa11.mp4', muted: false, id: 'dsa11' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa11.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa11.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa11.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa11.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa11.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa11.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa11.png' }
    ],
    autoAdvanceMediaId: 'dsa11'
  })

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/dsa12.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/dsa/dsa12.mp4', muted: false, id: 'dsa12' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/dsa12.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/dsa/dsa12.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/dsa12.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/dsa/dsa12.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/dsa12.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/dsa/dsa12.mp4' }
    ],
    autoAdvanceMediaId: 'dsa12'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa13.mp4', muted: false, id: 'dsa13' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa13.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa13.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa13.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa13.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa13.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa13.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa13.png' }
    ],
    autoAdvanceMediaId: 'dsa13'
  })

  
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/dsa/dsa14.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/dsa/dsa14.mp4', muted: false, id: 'dsa14' },
      { zone: 3, contentType: 'image', filePath: 'media/images/dsa/dsa14.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/dsa/dsa14.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/dsa/dsa14.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/dsa/dsa14.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/dsa/dsa14.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/dsa/dsa14.mp4' }
    ],
    autoAdvanceMediaId: 'dsa14'
  })


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/dsa/dsa15.mp4', muted: false, id: 'dsa15' },
      { zone: 2, contentType: 'image', filePath: 'media/images/dsa/dsa15.png' },
      { zone: 3, contentType: 'video', filePath: 'media/video/dsa/dsa15.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/dsa/dsa15.png' },
      { zone: 5, contentType: 'video', filePath: 'media/video/dsa/dsa15.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/dsa/dsa15.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/dsa/dsa15.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/dsa/dsa15.png' }
    ],
    autoAdvanceMediaId: 'dsa15'
  })



  // *** No edits below here ***
  return conf;
}
