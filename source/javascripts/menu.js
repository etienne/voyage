$(function(e) {
  var window_width = e(window).width();
  var item_width = $('div.all li').first().width();
  var button_width = $('div.all span.button').outerWidth(true);
  menu_width = Math.floor((window_width - button_width) / item_width) * item_width;
  $('div.all ul.posts').width(menu_width);
  $('div.all ul.posts').css('left', '-' + menu_width + 'px');
  
  $('span.button').click(function() {
    $('div.all').toggleClass('open');
    if ($('div.all').hasClass('open')) {
      // Open
      $('div.all').css('left', menu_width + 'px');
    } else {
      // Close
      $('div.all').css('left', 0);
    }
  });
  
  $('div.all ul.posts a').click(function() {
    window.setTimeout(function() {
      $('span.button').click();
    }, 410);
    
    $('.main').moveTo($(this).attr('data-index'));
    // Yuck
    section = $('section')[$(this).attr('data-index') - 1];
    if (!$(section).attr('id') && $(section).attr('data-id')) {
      $(section).attr('id', $(section).attr('data-id'));
    }
  });
});