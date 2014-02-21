$(function() {
  $('body').panelSnap({
    $menu: $('.menu'),
    onActivate: function() {
      // Load images
      var active_section = $('section.active');
      active_section.add(active_section.next()).add(active_section.next().next()).addClass('loaded');
      
      if ($('section[data-panel=lumiere]').hasClass('active')) {
        lights_timeout = window.setTimeout(function() {
          ($('section[data-panel=lumiere]').addClass('off'));
        }, 6000);
      }
    }    
  });
});

$(window).load(function() {
  // Load menu images
  $('.menu a').addClass('loaded');
});

// $(function() {
//   $(".main").onepage_scroll({
//      sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
//      easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//      animationTime: 500, // AnimationTime let you define how long each section takes to animate
//      pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
//      updateURL: true, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//      beforeMove: function(index) {
//        var section = $('section')[index];
//        var next_section = $('section')[index + 1];
//        $.each([section, next_section], function(index, value) {
//          if (!$(value).attr('id') && $(value).attr('data-id')) {
//            $(value).attr('id', $(value).attr('data-id'));
//          }
//        })
//      }, // This option accepts a callback function. The function will be called before the page moves.
//      afterMove: function(index) {
//        if ($('#lumiere').hasClass('active')) {
//          lights_timeout = window.setTimeout(function() {
//            ($('#lumiere').addClass('off'));
//          }, 8000);
//        }
//      }, // This option accepts a callback function. The function will be called after the page moves.
//      loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//      responsiveFallback: false // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
//   });
// })
