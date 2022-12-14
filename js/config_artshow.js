function prezconfig() {
  var conf = new VizPrezConfig();
// *** No edits above here ***


/*
This first part is for configuration options that apply globally (to the whole presentation)
and for default values for other options
*/

  // Fade time between scenes, in miliseconds
  conf.transitionInterval = 1000;

  // Default layout/grid
  conf.defaultGrid = 12;

  // Set to true to loov video and audio content by default (this can be set per scene/zone)
  conf.loopMedia = false;

  // Background color applied to the entire layout
  // This can also be set per scene
  // Note that a default background will appear before the presentation is started
  // If not set, backgroundColor defaults to black
  conf.backgroundColor = '#000';

  // Default color for text
  // If not set, fontColor defaults to white
  conf.fontColor = '#ddd';



/*
The next part is for defining scenes
Each scene is defined inside of conf.addScene({})
*/

  conf.addScene({

    layout: [
      { zone: 1, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/rucker/rucker_1_1.jpg',
          'media/images/artshow/rucker/rucker_1_2.jpg',
          'media/images/artshow/rucker/rucker_1_3.jpg',
          'media/images/artshow/rucker/rucker_1_4.jpg',
          'media/images/artshow/rucker/rucker_1_5.jpg',
          'media/images/artshow/rucker/rucker_1_6.jpg',
          'media/images/artshow/rucker/rucker_1_7.jpg',
          'media/images/artshow/rucker/rucker_1_8.jpg',
          'media/images/artshow/rucker/rucker_1_9.jpg',
          'media/images/artshow/rucker/rucker_1_10.jpg'
        ], caption: "Rob Rucker<br>Administration"
      },


      // Skip Zone 2 because that's where the door is!


      { zone: 3, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/phillips/phillips_1.jpg',
          'media/images/artshow/phillips/phillips_2.jpg',
          'media/images/artshow/phillips/phillips_3.jpg',
          'media/images/artshow/phillips/phillips_4.jpg',
          'media/images/artshow/phillips/phillips_5.jpg',
          'media/images/artshow/phillips/phillips_6.jpg',
          'media/images/artshow/phillips/phillips_7.jpg',
          'media/images/artshow/phillips/phillips_8.jpg'
        ], caption: "Adam Phillips<br>Access Services"
      },


      { zone: 4, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/pauley/pauley_1.jpg',
          'media/images/artshow/pauley/pauley_2.jpg',
          'media/images/artshow/pauley/pauley_3.jpg',
          'media/images/artshow/pauley/pauley_4.jpg',
          'media/images/artshow/pauley/pauley_5.jpg',
          'media/images/artshow/pauley/pauley_6.jpg',
          'media/images/artshow/pauley/pauley_7.jpg',
          'media/images/artshow/pauley/pauley_8.jpg',
          'media/images/artshow/pauley/pauley_9.jpg',
          'media/images/artshow/pauley/pauley_10.jpg',
          'media/images/artshow/pauley/pauley_11.jpg',
          'media/images/artshow/pauley/pauley_12.jpg',
          'media/images/artshow/pauley/pauley_13.jpg',
          'media/images/artshow/pauley/pauley_14.jpg',
          'media/images/artshow/pauley/pauley_15.jpg'
        ], caption: "Eric Pauley<br>Digital Library Initiatives"
      },


      { zone: 5, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/tourino/tourino_1.jpg',
          'media/images/artshow/tourino/tourino_2.jpg',
          'media/images/artshow/tourino/tourino_3.jpg',
          'media/images/artshow/tourino/tourino_4.jpg',
          'media/images/artshow/tourino/tourino_5.jpg',
          'media/images/artshow/tourino/tourino_6.jpg',
          'media/images/artshow/tourino/tourino_7.jpg',
          'media/images/artshow/tourino/tourino_8.jpg',
          'media/images/artshow/tourino/tourino_9.jpg'
        ], caption: "Greg Tourino<br>Research Engagement"
      },


      // This is a video
      // Note that 'id:' is specified at the end
      // This is used later as a target for the scene to change
      { zone: 6, contentType: 'video', filePath: 'media/video/artshow/langdon/CarryThis.mp4', muted: false,
        caption: "Kyle Langdon<br>Learning Spaces & Services", id: 'langdon'
      },


      { zone: 7, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/emery/emery_1.jpg',
          'media/images/artshow/emery/emery_2.jpg',
          'media/images/artshow/emery/emery_3.jpg',
          'media/images/artshow/emery/emery_4.jpg',
          'media/images/artshow/emery/emery_5.jpg',
          'media/images/artshow/emery/emery_6.jpg',
          'media/images/artshow/emery/emery_7.jpg',
          'media/images/artshow/emery/emery_8.jpg',
          'media/images/artshow/emery/emery_9.jpg'
        ], caption: "Gwen Emery<br>Administration"
      },


      { zone: 8, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/rivers/rivers_1.jpg',
          'media/images/artshow/rivers/rivers_2.jpg',
          'media/images/artshow/rivers/rivers_3.jpg'
        ], caption: "Kristen Rivers<br>Administration"
      },


      { zone: 9, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/bennett/bennett_1_1.jpg',
          'media/images/artshow/bennett/bennett_1_2.jpg',
          'media/images/artshow/bennett/bennett_1_3.jpg',
          'media/images/artshow/bennett/bennett_1_4.jpg',
          'media/images/artshow/bennett/bennett_1_5.jpg',
          'media/images/artshow/bennett/bennett_1_6.jpg',
          'media/images/artshow/bennett/bennett_1_7.jpg',
          'media/images/artshow/bennett/bennett_1_8.jpg',
          'media/images/artshow/bennett/bennett_1_9.jpg',
          'media/images/artshow/bennett/bennett_1_10.jpg',
          'media/images/artshow/bennett/bennett_1_11.jpg',
          'media/images/artshow/bennett/bennett_1_12.jpg',
          'media/images/artshow/bennett/bennett_1_13.jpg',
          'media/images/artshow/bennett/bennett_1_14.jpg',
          'media/images/artshow/bennett/bennett_1_15.jpg',
          'media/images/artshow/bennett/bennett_1_16.jpg',
          'media/images/artshow/bennett/bennett_1_17.jpg',
          'media/images/artshow/bennett/bennett_1_18.jpg',
          'media/images/artshow/bennett/bennett_1_19.jpg'
        ], caption: "Shaun Bennett<br>Research Engagement"
      },


      { zone: 10, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/bennett/bennett_2_1.jpg',
          'media/images/artshow/bennett/bennett_2_2.jpg',
          'media/images/artshow/bennett/bennett_2_3.jpg',
          'media/images/artshow/bennett/bennett_2_4.jpg',
          'media/images/artshow/bennett/bennett_2_5.jpg',
          'media/images/artshow/bennett/bennett_2_6.jpg',
          'media/images/artshow/bennett/bennett_2_7.jpg',
          'media/images/artshow/bennett/bennett_2_8.jpg',
          'media/images/artshow/bennett/bennett_2_9.jpg'
        ], caption: "Shaun Bennett<br>Research Engagement"
      },


      { zone: 11, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/black/Black1.jpg',
          'media/images/artshow/black/Black2.jpg',
          'media/images/artshow/black/Black3.jpg',
          'media/images/artshow/black/Black4.jpg',
          'media/images/artshow/black/Black5.jpg',
          'media/images/artshow/black/Black6.jpg',
          'media/images/artshow/black/Black7.jpg',
          'media/images/artshow/black/Black8.jpg',
          'media/images/artshow/black/Black9.jpg',
          'media/images/artshow/black/Black10.jpg'
        ], caption: "Shelly Black<br>Special Collections"
      },


      { zone: 12, contentType: 'slideshow',
        fileList: [
          'media/images/artshow/rucker/rucker_2_1.jpg',
          'media/images/artshow/rucker/rucker_2_2.jpg',
          'media/images/artshow/rucker/rucker_2_3.jpg',
          'media/images/artshow/rucker/rucker_2_4.jpg',
          'media/images/artshow/rucker/rucker_2_5.jpg', 
          'media/images/artshow/rucker/rucker_2_6.jpg',
          'media/images/artshow/rucker/rucker_2_7.jpg',
          'media/images/artshow/rucker/rucker_2_8.jpg',
          'media/images/artshow/rucker/rucker_2_9.jpg',
          'media/images/artshow/rucker/rucker_2_10.jpg'
        ], caption: "Rob Rucker<br>Administration"
      }

    ], // END LAYOUT

    // Spcifies that the scene should change at the end of the video
    //   with the corresponding id set above
    autoAdvanceMediaId: 'langdon'

    // NOTE: If you don't have a video to target but you still want to advance the scene after a period of time, replace the above with this:
    // autoAdvanceTime: 60
    // replacing 60 with the desired scene duration in seconds
  }) // END conf.addScene

  

  // Add more scenes here via more conf.addScene()



// *** No edits below here ***
  return conf;
}
