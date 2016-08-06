let $plastiDipContent = $('.plasti-dip-content'),
    $vinylContent = $('.vinyl-content'),
    $hydroContent = $('.hydro-content'),
    $plasti = $('.plasti'),
    $vinyl = $('.vinyl'),
    $hydro = $('.hydro'),
    $images = $('.images'),
    $videos = $('.videos'),
    $overlay = $('#overlay');


function showLightbox() {

  var $image = $('<img>');

  //An image to overlay
  $overlay.append($image);

  //Add overlay
  $('body').append($overlay);

  //Show img
  $('.images a').click(function(event) {
    event.preventDefault();
    var img = $(this).attr('href');
    $image.attr('src', img);
    $overlay.show();
  });

  hideLightbox();
}

function hideLightbox() {
  $overlay.click(function() {
    //Hide the overlay
    $overlay.hide();
  });
}


$(function() {

  $('#home main, .service-content').fadeIn(1000);

  // Toggle service menu item display
  $('.service-items').on('click', 'li', function() {
    $('li').removeClass('selected-service');
    $(this).addClass('selected-service');

    let pos = $(this).index();
    if (pos === 0) {
      $plastiDipContent.fadeIn();
      $plastiDipContent.siblings().hide();
    } else if (pos === 1) {
      $vinylContent.fadeIn();
      $vinylContent.siblings().hide();
    } else {
      $hydroContent.fadeIn();
      $hydroContent.siblings().hide();
    }
  })

  //Toggle image and video gallery
  $('.icons-media').on('click', 'li', function () {
    $(this).siblings().removeClass('selected-media');
    $(this).addClass('selected-media');

    let pos = $(this).index();
    if (pos === 0) {
      $images.fadeIn();
      $videos.hide();
    } else {
      $videos.fadeIn();
      $images.hide();
    }
  })

  showLightbox();

  // SHOW popup
  $('.free-quote').delay(300).animate({
    bottom: '50px'
  }, 'slow');

})
