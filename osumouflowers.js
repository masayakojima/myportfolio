'use strict'
// aos
AOS.init()

// JQueryでのリンク移動アニメーション設定
$('a[href*="#"]').click(function () {
	const idName= $(this).attr('href'); 
	const sectionTop = $(idName).offset().top;
	$('body,html').animate({scrollTop: sectionTop}, 500); 
	return false;
});



// overlay ハンバーガーメニュー
{
const open =document.querySelector('.bi-list');
const overlay =document.querySelector('.overlay');
const close =document.querySelector('.bi-x');
const conceptclose =document.getElementById('concept-id');
const serviceclose =document.getElementById('service-id');
const galleryclose =document.getElementById('gallery-id');

open.addEventListener('click',()=>{
    overlay.classList.add('show');
    open.classList.add('hide');
});
close.addEventListener('click',()=>{
  overlay.classList.remove('show');
  open.classList.remove('hide');
});
conceptclose.addEventListener('click',()=>{
  overlay.classList.remove('show');
  open.classList.remove('hide');
});
serviceclose.addEventListener('click',()=>{
  overlay.classList.remove('show');
  open.classList.remove('hide');
});
galleryclose.addEventListener('click',()=>{
  overlay.classList.remove('show');
  open.classList.remove('hide');
});
}


// osumousan  JQueryでの実装
function PageTopAnime() {
	const scroll = $(window).scrollTop();
  const osumouline=$('#concept-title').offset().top;
  $('.osumou-top').hide();
	if (scroll >= osumouline){
    $('.osumou-top').show();
	}else{
		$('.osumou-top').hide();
		}
	}
  // 関数の呼び出し 
  $(window).scroll(function () {
    PageTopAnime();
  });
  $(window).on('load', function () {
    PageTopAnime();
  });
  // お相撲さんクリック時イベント ease関数
  $(()=>{
    $('.osumou-top').click(()=>{
        $('.osumou-top').addClass('osumou-clicknon');
        $('.sumou1').addClass('start_animation_click');
      });
      $('.osumou-top').on("animationend",()=>{
        $('.sumou1').removeClass('start_animation_click');
        $('body,html').animate({ scrollTop: 0 }, 1500, 'easeInOutBack');  
        $('.osumou-top').removeClass('osumou-clicknon');
        return false;
      });
    });


  // particle サクラ
  particlesJS("particles-js", {"particles":{"number":{"value":16,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"image","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"flower.png","width":120,"height":120}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8.011985930952697,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"bottom-left","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

// serviceのheight読み取り particleのheightと合わせる
const particle = document.getElementById("particles-js");
const services =document.querySelector(".services");
 function getHeight(){
  const servicesHeight =services.getBoundingClientRect().height;
  particle.style.height =(`${servicesHeight}px`);
 }
 getHeight();
 window.onresize = getHeight;


// slickの導入
$('.slider').slick({
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: false
});