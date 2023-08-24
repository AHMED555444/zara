$(document).ready(function() {
    // Function to animate the "About Us" content
    function animateAboutContent() {
      $('.about-content').animate({
        opacity: 1,
        top: 0
      }, 1000); // Adjust the duration as needed
    }
  
    // Call the animateAboutContent function when the element is in the viewport
    $(window).on('scroll', function() {
      var windowBottom = $(this).scrollTop() + $(this).height();
      var aboutTop = $('.about-content').offset().top + 100; // Adjust the offset as needed
  
      if (windowBottom > aboutTop) {
        animateAboutContent();
        // Remove the scroll listener once the animation is triggered
        $(window).off('scroll');
      }
    });
  });
  $(document).ready(function() {
    // Function to animate the "About Us" content
    function animateAboutContent() {
      $('.about-content').animate({
        opacity: 1,
        top: 0
      }, 1000); // Adjust the duration as needed
    }
  
    // Call the animateAboutContent function when the document is ready
    animateAboutContent();
  });
    