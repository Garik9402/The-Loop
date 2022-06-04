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

 // секция коллекций
 const collectionsWrapper = document.getElementById('collections-w')
 let collections = document.createElement('div')
 let collectionsInner = document.createElement('div')
 let collectionsMensWomensWrapper = document.createElement('div')
 let collectionsMens = document.createElement('div')
 let collectionsWomen = document.createElement('div')
 let collectionsWhole = document.createElement('div')
 collections.classList.add('collections')
 collectionsWrapper.appendChild(collections)
 collectionsInner.classList.add('collections__inner')
 collections.append(collectionsInner)
 collectionsMensWomensWrapper.classList.add('collections__mens-womens-w')
 collectionsInner.append(collectionsMensWomensWrapper)
 collectionsMens.classList.add('collections__mens')
 collectionsInner.append(collectionsMens)
 collectionsWomen.classList.add('collections__womens')
 collectionsInner.append(collectionsWomen)
 collectionsWhole.classList.add('collections-whole')
 collectionsInner.append(collectionsWhole)