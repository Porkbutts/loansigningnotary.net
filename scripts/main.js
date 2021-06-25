(function() {
  "use strict";

  window.addEventListener('load', () => {
    on_page_load()
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }

  /**
   * Navbar effects and smooth scroll buttons
   */
  const navbar = document.getElementById('header-nav')
  var body = document.getElementsByTagName("body")[0]
  const scrollTop = document.getElementById('scrolltop')
  window.onscroll = () => {
      if (window.scrollY > 0) {
          navbar.classList.add('fixed-top', 'shadow-sm')
          body.style.paddingTop = navbar.offsetHeight + "px"
          scrollTop.style.visibility = "visible";
          scrollTop.style.opacity = 1;
      } else {
          navbar.classList.remove('fixed-top', 'shadow-sm')
          body.style.paddingTop = "0px"
          scrollTop.style.visibility = "hidden";
          scrollTop.style.opacity = 0;
      }
  };

  /**
   * Smooth scroll to elements with header offset
   * Add class .smooth-scroll on the anchor links for this effect to take place
   */
  document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    smoothScroll(anchor)
  });

  function smoothScroll(element) {
    element.addEventListener('click', function (e) {
      var target = document.querySelector(this.hash)
      if(target) {
        e.preventDefault()        
        const navbarContent = document.getElementById("navbarSupportedContent")
        var offset = navbar.offsetHeight - navbarContent.offsetHeight
        var elementPosition = target.offsetTop
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      } else {
        // click for different page
      }
    });
  }

  //scroll to top

  function ScrollToTop() {
    if(window.scrollY!=0)
    {
        setTimeout(function() {
           window.scrollTo(0,window.scrollY-30);
            ScrollToTop();
        }, 20);
     }
  }


  /**
   * Masonry Grid
   */
  var elem = document.querySelector('.grid');
  if(elem) {
    imagesLoaded(elem, function() {
      new Masonry(elem, {
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true
      });
    })
  }

  // Add your javascript here


})();