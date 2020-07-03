function initModal() {
  $('[data-modal-button]').on('click', function() {
    const container = $(this).attr('data-modal-button');
    $(`[data-modal-content=${container}]`).addClass('modal--active');
    $('html').addClass('modal-opened');

    if ($('.js-product-photo-widget-slider--main-content')[0]) {
      $('.js-product-photo-widget-slider--main-content')[0].slick.setPosition();
      $('.js-product-photo-widget-slider--main-nav')[0].slick.setPosition();
    }

    
  });

  $('[data-modal-close]').on('click', function() {
    $('[data-modal-content]').removeClass('modal--active');
    $('html').removeClass('modal-opened');
  });

}