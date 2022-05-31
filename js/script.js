 const drropdownsNode = document.querySelectorAll('.header-nav-drropdown');
 drropdownsNode.forEach(function(event) {
     event.addEventListener('mouseover', function() {
         event.classList.add('active')
     })


 })