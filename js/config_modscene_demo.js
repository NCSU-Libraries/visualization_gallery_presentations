function config() {
  var conf = new VisPresConfig();

  // *** No edits above here ***

  // Set transition interval (fade time) in milliseconds
  conf.transitionInterval = 500;
  // Set default grid  - all examples in this demo use the 8-zone grid
  conf.defaultGrid = 8;


  conf.addScene({
    grid: 8,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/target_2-10.png' },
      { zone: 2, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/target_2-10.png' },
      { zone: 4, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/target_2-10.png' },
      { zone: 6, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/target_2-10.png' },
      { zone: 8, contentType: 'video', filePath: 'media/video/demo/turnstile_1920.mp4' }
    ]
  })


  conf.addScene({
    grid: 8,
    modScene: true,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/demo/demo1.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/demo/demo2.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/demo/demo3.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/demo/demo4.png' },
    ]
  })






  // *** No edits below here ***
  return conf;
}
