lights_timeout = null;

$(function() {
  $('span.link').click(function() {
    var slug = $(this).attr('data-slug');
    var i = $('#' + slug).index() + 1;
    $('.main').moveTo(i);
  });
  
  $('#lumiere').mousemove(function() {
    $(this).removeClass('off');
    if (lights_timeout != null) {
      window.clearTimeout(lights_timeout);
    }
    lights_timeout = window.setTimeout(function() {
      ($('#lumiere').addClass('off'));
    }, 8000);
  });
});
