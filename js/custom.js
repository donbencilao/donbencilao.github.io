
"use strict";

// mySidenav
function openNav() {
  document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
}

function openPassCode(){
  scrollTo(0,0)
  document.getElementById('retailer-box').classList.add('show')
  closeNav()
}

function checkPassCode(passcode){
  const secretPasscode = 'SOLUTIONXMOSQRETAILER'
  if(passcode != secretPasscode){
    document.querySelector('#retailer-box .alert.alert-warning').style.display = 'block';
  }
}

function removeWarning(){
  document.querySelector('#retailer-box .alert.alert-warning').style.display = 'none';

}


// Slider
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});        

// Slider Count
var $slider = $('.multiple-items');

if ($slider.length) {
  let currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' of 6' )
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlideAC) {
    updateSliderCounter(slick, currentSlideAC);
  });

  $slider.slick();
}   
