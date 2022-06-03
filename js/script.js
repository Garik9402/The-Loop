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
 //  секция бесплатная доставка
 let deliveryWrapNode = document.getElementById('delivery-w')
 let deliveryNode = document.createElement('div')
 let deliveryInnerNode = document.createElement('div')
 let deliveryTitleNode = document.createElement('h3')
 let deliverySubitleNode = document.createElement('h5')
 deliveryWrapNode.append(deliveryNode)
 deliveryNode.classList.add('delivery')
 deliveryNode.append(deliveryInnerNode)
 deliveryInnerNode.classList.add('delivery__inner')
 deliveryInnerNode.append(deliveryTitleNode)
 deliveryTitleNode.classList.add('delivery__title')
 deliveryTitleNode.innerHTML = 'БЕСПЛАТНАЯ ДОСТАВКА ОТ 3000₽'
 deliverySubitleNode.classList.add('delivery__subtitle')
 deliveryInnerNode.append(deliverySubitleNode)
 deliverySubitleNode.innerHTML = 'Сделайте заказ и получите подарок!'