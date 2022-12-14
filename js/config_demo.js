function config() {
  var conf = new VizPrezConfig();

  // *** No edits above here ***

  // Set transition interval (fade time) in milliseconds
  conf.transitionInterval = 0;

  // Below are some examples of defining scenes with different layouts and content types
  conf.addScene({
    layout: [
      { zone: 1, span: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 3, span: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 5, span: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 7, span: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 9, span: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 11, span: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' }
    ]
  })

  // This scene has 8 zones.
  // Each zone in this layout spans 2 zones. Note that the 'zone' values skip every other number.
  conf.addScene({
    grid: 8,
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/target_2-10.png' }
    ]
  })



  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 9, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 10, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 11, contentType: 'image', filePath: 'media/images/target_2-10.png' },
      { zone: 12, contentType: 'image', filePath: 'media/images/target_2-10.png' }
    ]
  })

  // This scene uses 12 zones, alternating image and video.
  // The 'contentType' values are set to 'image' or 'video' as appropriate
  //   and the 'filePath' values specify where the content files are
  // Note that filePaths are relative to the root directory for the presentation
  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/fake_charts1.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/bees1.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/fake_charts3.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/bees2.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/fake_charts2.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/bees3.png' },
      { zone: 7, contentType: 'image', filePath: 'media/images/fake_charts4.png' },
      { zone: 8, contentType: 'image', filePath: 'media/images/bees1.png' },
      { zone: 9, contentType: 'image', filePath: 'media/images/fake_charts1.png' },
      { zone: 10, contentType: 'image', filePath: 'media/images/bees2.png' },
      { zone: 11, contentType: 'image', filePath: 'media/images/fake_charts2.png' },
      { zone: 12, contentType: 'image', filePath: 'media/images/bees3.png' }
    ]
  })



  conf.addScene({
    layout: [
      { zone: 1, contentType: 'image', filePath: 'media/images/muybridge1.png' },
      { zone: 2, contentType: 'image', filePath: 'media/images/muybridge2.png' },
      { zone: 3, contentType: 'image', filePath: 'media/images/muybridge3.png' },
      { zone: 4, contentType: 'image', filePath: 'media/images/muybridge4.png' },
      { zone: 5, contentType: 'image', filePath: 'media/images/muybridge5.png' },
      { zone: 6, contentType: 'image', filePath: 'media/images/muybridge6.png' },
      { zone: 7, contentType: 'video', filePath: 'media/video/hybomitra.mp4' },
      { zone: 8, contentType: 'image', filePath: 'media/images/muybridge7.png' },
      { zone: 9, contentType: 'image', filePath: 'media/images/muybridge8.png' },
      { zone: 10, contentType: 'image', filePath: 'media/images/muybridge9.png' },
      { zone: 11, contentType: 'image', filePath: 'media/images/muybridge10.png' },
      { zone: 12, contentType: 'image', filePath: 'media/images/muybridge11.png' }
    ]
  })


  // This scene uses alternating long and short zones, with video and images
  conf.addScene({
    layout: [
      { zone: 1, span: 2, contentType: 'video', filePath: 'media/video/anemone_wide.mp4'  },
      { zone: 3, contentType: 'image', filePath: 'media/images/anemone1.png' },
      { zone: 4, span: 2, contentType: 'video', filePath: 'media/video/anemone_wide.mp4' },
      { zone: 6, contentType: 'image', filePath: 'media/images/anemone2.png' },
      { zone: 7, span: 2, contentType: 'video', filePath: 'media/video/anemone_wide.mp4' },
      { zone: 9, contentType: 'image', filePath: 'media/images/anemone3.png' },
      { zone: 10, span: 2, contentType: 'video', filePath: 'media/video/anemone_wide.mp4' },
      { zone: 12, contentType: 'image', filePath: 'media/images/anemone4.png' }
    ]
  })


  conf.addScene({
    grid: 10,
    layout: [
      { zone: 1, contentType: 'video', filePath: 'media/video/sequence_01.mp4' },
      { zone: 2, contentType: 'video', filePath: 'media/video/sequence_02.mp4' },
      { zone: 3, contentType: 'video', filePath: 'media/video/sequence_03.mp4' },
      { zone: 4, contentType: 'video', filePath: 'media/video/sequence_04.mp4' },
      { zone: 5, contentType: 'video', filePath: 'media/video/sequence_05.mp4' },
      { zone: 6, contentType: 'video', filePath: 'media/video/sequence_06.mp4' },
      { zone: 7, contentType: 'video', filePath: 'media/video/sequence_07.mp4' },
      { zone: 8, contentType: 'video', filePath: 'media/video/sequence_08.mp4' },
      { zone: 9, contentType: 'video', filePath: 'media/video/sequence_09.mp4' },
      { zone: 10, contentType: 'video', filePath: 'media/video/sequence_10.mp4' }
    ]
  })





  // This scene displays one big image spanning the whole room (one zone that spans all 12 zones of the grid)
  conf.addScene({
    layout: [
      { zone: 1, span: 12, contentType: 'image', filePath: 'media/images/pano.png'}
    ]
  })


  // This scene uses 12 zones with vertical video (from a phone camera).
  // Note that the video is centered withing the width of the zone.
  // Also note that backgroundColor is set for the entire scene.

  // conf.addScene({
  //   backgroundImage: 'media/images/stripes.png',
  //   layout: [
  //     { zone: 1, contentType: 'video', filePath: 'media/video/vertical/spinner.mp4' },
  //     { zone: 2, contentType: 'video', filePath: 'media/video/vertical/critters.mp4' },
  //     { zone: 3, contentType: 'video', filePath: 'media/video/vertical/dino.mp4' },
  //     { zone: 4, contentType: 'video', filePath: 'media/video/vertical/ooze.mp4' },
  //     { zone: 5, contentType: 'video', filePath: 'media/video/vertical/sign.mp4' },
  //     { zone: 6, contentType: 'video', filePath: 'media/video/vertical/sparkler.mp4' },
  //     { zone: 7, contentType: 'video', filePath: 'media/video/vertical/waterfall.mp4' },
  //     { zone: 8, contentType: 'video', filePath: 'media/video/vertical/dino2.mp4' },
  //     { zone: 9, contentType: 'video', filePath: 'media/video/vertical/dog.mp4' },
  //     { zone: 10, contentType: 'video', filePath: 'media/video/vertical/wolf.mp4' },
  //     { zone: 11, contentType: 'video', filePath: 'media/video/vertical/koi.mp4' },
  //     { zone: 12, contentType: 'video', filePath: 'media/video/vertical/bubbles.mp4' }
  //   ]
  // })


  // This scene features 5 zones, using the 10-zone grid
  // This example specifies the grid (grid: 10) before the layout
  // These images are narrower than the total width of the zone,
  //   so the default black background color shows on either side,
  //   but since the images also have a black background you can't tell
  conf.addScene({
    layout: [
      { zone: 1, span: 2, contentType: 'image', filePath: 'media/images/prarie_2-10.png' },
      { zone: 3, span: 2, contentType: 'image', filePath: 'media/images/beach_2-10.png' },
      { zone: 5, span: 2, contentType: 'image', filePath: 'media/images/desert_2-10.png' },
      { zone: 7, span: 2, contentType: 'image', filePath: 'media/images/tundra_2-10.png' },
      { zone: 9, span: 2, contentType: 'image', filePath: 'media/images/forest_2-10.png' },
      { zone: 11, span: 2, contentType: 'image', filePath: 'media/images/swamp_2-10.png' }
    ]
  })


  conf.addScene({
    layout: [
      { zone: 1, span: 3, contentType: 'image', filePath: 'media/images/perspective_3wide.png' },
      { zone: 4, span: 3, contentType: 'image', filePath: 'media/images/perspective_3wide.png' },
      { zone: 7, span: 3, contentType: 'image', filePath: 'media/images/perspective_3wide.png' },
      { zone: 10, span: 3, contentType: 'image', filePath: 'media/images/perspective_3wide.png' }
    ]
  })


  // *** No edits below here ***
  return conf;
}
