import $ from 'jquery'
import Swiper from 'swiper/swiper-bundle'
import  {Fancybox, Carousel}  from '@fancyapps/ui'
window.jQuery = $
window.$ = $
document.addEventListener('DOMContentLoaded', () => {

  //SHOW-MORE

  //BURGER-MENU
  
  $(document).on('click', (e) => {
    if($(e.target).closest('.header__menu-burger, .header__nav').length) return
    $('.header__menu-burger, .header__nav').removeClass('active')
  })

  $('.header__menu-burger').on('click', () => {
    $('.header__menu-burger, .header__nav').toggleClass('active')
  })

  // SWIPER
  const headerSwiper = new Swiper('.slider', {
    effect: 'fade',
    speed: 800,
    centeredSlides: true,
    scrollbar: {
			el: '.slider__scrollbar',
			draggable: true
		},
    navigation: {
			prevEl: '.slider__button-prev',
			nextEl: '.slider__button-next'
		},
    pagination: {
      el: '.slider__pagination',
      type: 'custom',
			renderCustom: function(swiper, current, total) {
				let indT = total >= 10 ? total : `0${total}`
				let indC = current >= 10 ? current : `0${current}`
				return `<b>${indC}</b><span></span> ${indT}`
			}
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    runCallbacksOnInit: true
  })

  const lazzySwiper = new Swiper('.section-about__lazzy-slider', {
    effect: 'fade',
    speed: 1400,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  })

  const blogSwiper = new Swiper('.blog__slider', {
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 45,
    pagination: {
      el: '.blog-slide__pagination',
      clickable: true,
    }
  })

  // TO TOP

  $('.footer__btn').on('click', () => {
    $('html,body').animate({ scrollTop: 0}, 800)
    return false
  })


  //CAROUSEL

  const mainCarousel = new Carousel(document.querySelector('#mainCarousel'), {
    Dots: false,
    friction: 0.8
  })
  
  const navCarousel = new Carousel(document.querySelector('#navCarousel'), {
    Sync: {
      target: mainCarousel,
    },
    Dots: false,
    Navigation: false, 
    infinite: false,
    center: true,
    slidesPerPage: 1,
    
  })


})

