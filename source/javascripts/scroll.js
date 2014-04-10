$(function() {
  $('body').panelSnap({
    $menu: $('.menu'),
    keyboardNavigation: {
      enabled: true
    },
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
