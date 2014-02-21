$(function(e) {
  var window_width = e(window).width();
  var item_width = $('div.menu li').first().width();
  var button_width = $('div.menu span.button').outerWidth(true);
  menu_width = Math.floor((window_width - button_width) / item_width) * item_width;
  $('div.menu ul.posts').width(menu_width);
  $('div.menu ul.posts').css('left', '-' + menu_width + 'px');
  
  $('span.button').click(function() {
    $('div.menu').toggleClass('open');
    if ($('div.menu').hasClass('open')) {
      // Open
      $('div.menu').css('left', menu_width + 'px');
    } else {
      // Close
      $('div.menu').css('left', 0);
    }
  });
  
  $('div.menu ul.posts a').click(function() {
    window.setTimeout(function() {
      $('span.button').click();
    }, 200);
  });
});