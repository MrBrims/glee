$(function () {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 35,
    // slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.tabs__top-item').removeClass('tabs__top-item--active');
    $(this).addClass('tabs__top-item--active');

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  $('.store-thumb__left').slick({
    asNavFor: '.store-thumb__right',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.store-thumb__right').slick({
    asNavFor: '.store-thumb__left',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.store__info-input').styler();

  $('.shop__content-btn').on('click', function () {
    $('.shop__content-btn').removeClass('shop__content-btn--active');
    $(this).addClass('shop__content-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.shop__content-items').addClass('shop__content--list');
  });

  $('.button-grid').on('click', function () {
    $('.shop__content-items').removeClass('shop__content--list');
  });

  $('.price-filter__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__min').text(data.from);
      $('.price-filter__max').text(data.to);
    },
    onChange: function (data) {
      $('.price-filter__min').text(data.from);
      $('.price-filter__max').text(data.to);
    },
    step: 0.01
  });

  $('.star').rateYo({
    starWidth: '11px',
    spacing: '7px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 47.94 47.94"><path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>'
  });

  $('.product-item__star').rateYo({
    starWidth: '18px',
    spacing: '13px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 47.94 47.94"><path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>'
  });

  $('.slider__items').slick({
    dots: true,
    arrows: false
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  
});