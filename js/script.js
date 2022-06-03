 const drropdownsNode = document.querySelectorAll('.nav__items-drropdown');
 drropdownsNode.forEach(function(event) {
     event.addEventListener('mouseover', function() {
         event.classList.add('active')
     })
     event.addEventListener('mouseout', function() {
         event.classList.remove('active')
     })
 })

 //  slider Jquery
 $(document).ready(function() {
     $('.slider').slick({
         arrows: false,
         dots: true,
         slidesToShow: 1,
         speed: 1000,
         autoplay: true,
         centerMode: true,
     })
 });