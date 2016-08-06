let $plastiDipContent = $('.plasti-dip-content'),
    $vinylContent = $('.vinyl-content'),
    $hydroContent = $('.hydro-content'),
    $plasti = $('.plasti'),
    $vinyl = $('.vinyl'),
    $hydro = $('.hydro');


$(function () {

// Toggle service menu item display
  $('.service-items').on('click', 'li', function () {
    $('li').removeClass('selected-service');
    $(this).addClass('selected-service');

    $pos = $(this).index();
    if ($pos === 0) {
      $plastiDipContent.fadeIn();
      $plastiDipContent.siblings().hide();
    } else if ($pos === 1) {
      $vinylContent.fadeIn();
      $vinylContent.siblings().hide();
    } else {
      $hydroContent.fadeIn();
      $hydroContent.siblings().hide();
    }
  })

  // SHOW popup
  $('.free-quote').delay(2000).animate({bottom: '50px'}, 'slow');

})
