'use strict';
{
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const sliders =document.querySelector('.sliders')
  const slides =sliders.children;
  let currentIndex=0;

  function updateButtons(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    if(currentIndex ===0){
      prev.classList.add('hidden');
    }
    if(currentIndex === slides.length -1){
      next.classList.add('hidden');
    }
  }
  updateButtons();

  next.addEventListener('click',()=>{
      currentIndex++;
      updateButtons();
      const slideWidth =slides[0].getBoundingClientRect().width;
      sliders.style.transform =`translateX(${-1*slideWidth*currentIndex}px)`;
  });

  prev.addEventListener('click',()=>{
    currentIndex--;
    updateButtons();
    const slideWidth =slides[0].getBoundingClientRect().width;
    sliders.style.transform =`translateX(${-1*slideWidth*currentIndex}px)`;
});

}