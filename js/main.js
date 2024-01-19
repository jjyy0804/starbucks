const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('.to-top');

window.addEventListener('scroll',_.throttle(function () {
  
  if (window.scrollY>500){
    //배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(b요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display: 'none'
    });
    //to-top버튼 보이기
    gsap.to(toTopEl, .2, {
      x : 0,
    });
    
  } else {
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    //to-top 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    })
  }
},300));
// throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
  gsap.to(window,.7, {
    scrollTo : 0
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index) {
  //gsap(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay:(index+1) * .7, //0.7, 1.4, 2.1, 2.8
    opacity: 1,
    
  });
})


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true,
});

new Swiper('.promotion .swiper-container' , {
  //기본값
  direction : 'horizontal',
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides : true, //1번 슬라이드가 가운데에 보이기
  loop : true,
  // autoplay : {
  //   delay : 5000
  // },
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation : {
    prevEl :'.promotion .swiper-prev',
    nextEl :'.promotion .swiper-next',
  }
});

new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop : true,
  spaceBetween :30,
  slidesPerView: 5,
  navigation : {
    prevEl:'.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});



const promotionEl =document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn .addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
})

function random(min, max) {
  return parseFloat(Math.random()*(max-min)+min);
}

function flaotingObject(selector,delay,size) {
  // gsap.to(요소,시간,옵션);
  gsap.to(
    selector, //선택자
    random(1.5,2.5),  //애니메이션 동작 시간
  { //옵션
    y: size,
    repeat:-1,  //계속 반복
    yoyo :true, //한번 반복 후 다시 돌아오게끔
    ease : Power1.easeInOut,
    delay: random(0,delay)
  });
}

flaotingObject('.floating1', 1, 15);
flaotingObject('.floating2', .5, 15);
flaotingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook :.8,  //
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
})

