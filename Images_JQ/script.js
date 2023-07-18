$("#slideshow > div:gt(0)").hide();

var index = 1;
var maxindex = $('#slideshow > div').length;

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    $('ul li').removeClass('active');
    $('ul li:eq(' + index + ')').addClass('active');
    index = index < maxindex - 1 ? index + 1 : 0;
}, 3000);

for (var i = 0; i < maxindex; i++) {
    $('ul').append('<li class="' + (i == 0 ? 'active' : '') + '"></li>');
}




$(document).ready(function() {
    $(".column img").click(function() {
      console.clear();
      var newclass = $(this).attr("src");
      console.log(newclass);
      var oldclass = $("#expandedImg").attr("id");
      console.log(oldclass);
  
      $(".container").show();
      // show .container
  
      $("#expandedImg").attr('src', newclass).hide().fadeIn("slow");
      //set new source and hide element in order to be able to fade it in again
      // fade in works only on hidden elements
  
    });
  });

  $(document).ready(function() {
    var slideIndex = 0;
    var totalSlides = $('.slider-images img').length;
  
   
    showSlide(slideIndex);
  
 
    $('.next-button').click(function() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    });
  
   
    $('.prev-button').click(function() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }
      showSlide(slideIndex);
    });
  
    
    function showSlide(index) {
      $('.slider-images').css('transform', 'translateX(' + (-index * 100) + '%)');
    }
  });
