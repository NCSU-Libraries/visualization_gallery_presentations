function config() {
  var conf = new VisPresConfig();

  // *** No edits above here ***

  // Set transition interval (fade time) in milliseconds
  conf.transitionInterval = 500;
  // Set default grid  - all examples in this demo use the 8-zone grid
  conf.defaultGrid = 8;


  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' }
    ]
  })


  conf.addScene({
    modScene: true,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
    ]
  })


  conf.addScene({
    grid: 12,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 2, span: 2, contentType: 'video', filePath: 'media/video/demo/count_12x2.mp4' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 5, span: 2, contentType: 'video', filePath: 'media/video/demo/count_12x2.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 8, span: 2, contentType: 'video', filePath: 'media/video/demo/count_12x2.mp4' },
      { zone: 10, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 11, span: 2, contentType: 'video', filePath: 'media/video/demo/count_12x2.mp4' }
    ]
  })


  conf.addScene({
    modScene: true,
    grid: 12,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
      { zone: 10, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
    ]
  })






  // *** No edits below here ***
  return conf;
}
