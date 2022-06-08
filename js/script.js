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
 let collectionsMensInner = document.createElement('div')
 let collectionsWomen = document.createElement('div')
 let collectionsWomenInner = document.createElement('div')
 let collectionsWhole = document.createElement('div')
 let collectionsMensItems = document.createElement('div')
 let collectionsMensTitle = document.createElement('h4')
 let collectionsMensSubtitle = document.createElement('p')
 let collectionsWomenTitle = document.createElement('h4')
 let collectionsWomenSubtitle = document.createElement('p')
 collectionsWomenTitle.textContent = "ЖЕНСКАЯ КОЛЛЕКЦИЯ"
 collectionsWomenSubtitle.textContent = "Обувь, полуверы, костюмы"
 let collectionsWomenItems = document.createElement('div')
 collectionsMensTitle.classList.add('collections__mens-title')
 collectionsMensTitle.textContent = 'МУЖСКАЯ КОЛЛЕКЦИЯ'
 collectionsMensItems.append(collectionsMensTitle)
 collectionsMensSubtitle.classList.add('collections__mens-subtitle')
 collectionsMensSubtitle.textContent = 'Обувь, полуверы, костюмы'
 collectionsMensItems.append(collectionsMensSubtitle)
 collectionsWomenTitle.classList.add('collections__women-title')
 let collectionsMensPrev = document.createElement('button')
 collectionsMensPrev.classList.add('collections__mens-button')
 collectionsMensItems.append(collectionsMensPrev)
 let collectionsWomenPrev = document.createElement('button')

 collectionsWomenItems.classList.add('collections__women-items')
 collectionsWomenSubtitle.classList.add('collections__women-subtitle')

 function menImg() {
     let img = document.createElement('img')
     img.src = "images/men.png"
     collectionsMensInner.append(img)
 }
 menImg()

 function womenImg() {
     let img = document.createElement('img')
     img.src = 'images/women.png'
     collectionsWomenInner.append(img)
 }
 womenImg()
 collectionsWomenInner.append(collectionsWomenItems)
 collectionsWomenItems.append(collectionsWomenTitle)
 collectionsWomenItems.append(collectionsWomenSubtitle)
 collections.classList.add('collections')
 collectionsWrapper.appendChild(collections)
 collectionsInner.classList.add('collections__inner')
 collections.append(collectionsInner)
 collectionsMensWomensWrapper.classList.add('collections__mens-womens-w')
 collectionsInner.append(collectionsMensWomensWrapper)
 collectionsMens.classList.add('collections__mens')
 collectionsMensWomensWrapper.append(collectionsMens)
 collectionsWomenPrev.classList.add('collections__women-button')
 collectionsWomenItems.appendChild(collectionsWomenPrev)
 collectionsMensInner.classList.add('collections__mens-inner')
 collectionsMens.append(collectionsMensInner)
 collectionsMensItems.classList.add('collections__mens-item')
 collectionsMensInner.append(collectionsMensItems)
 collectionsMensWomensWrapper.append(collectionsWomen)
 collectionsWomen.classList.add('collections__womens')
 collectionsWomenInner.classList.add('collections__women-inner')
 collectionsWomen.append(collectionsWomenInner)
 collectionsWhole.classList.add('collections__whole')
 collectionsInner.append(collectionsWhole)
 let collectionsWholeTop = document.createElement('div')
 collectionsWholeTop.classList.add('collections__whole-top')
 collectionsWhole.append(collectionsWholeTop)

 function collectionsItemTop() {
     let itemsCollection = document.createElement('div')
     let collectionsWhoreParagrafh = document.createElement('p')
     collectionsWhoreParagrafh.classList.add('collections__whole-name')
     collectionsWhoreParagrafh.innerHTML = 'ПЛАТЬЯ'
     itemsCollection.append(collectionsWhoreParagrafh)
     itemsCollection.classList.add('collections__whole-itemstop')
     collectionsWholeTop.append(itemsCollection)
 }
 collectionsItemTop()
 collectionsItemTop()
 collectionsItemTop()
 collectionsItemTop()

 let collectionsWholeBottom = document.createElement('div')
 collectionsWholeBottom.classList.add('collections__whole-bottom')
 collectionsWhole.append(collectionsWholeBottom)

 function collectionsItemBottom() {
     let itemsBottomCollection = document.createElement('div')
     let collectionsWhoreParagrafh = document.createElement('p')
     collectionsWhoreParagrafh.classList.add('collections__whole-name')
     collectionsWhoreParagrafh.innerHTML = 'ПЛАТЬЯ'
     itemsBottomCollection.append(collectionsWhoreParagrafh)
     itemsBottomCollection.classList.add('collections__whole-itemsbottom')
     collectionsWholeBottom.append(itemsBottomCollection)
 }
 collectionsItemBottom()
 collectionsItemBottom()
 collectionsItemBottom()
 collectionsItemBottom()

 // Cекция новые модели
 let modelesWrap = document.getElementById('modeles-w')
 let modeles = document.createElement('div')
 modeles.classList.add('modeles')
 modelesWrap.append(modeles)
 let modelesInner = document.createElement('div')
 modelesInner.classList.add('modeles__inner')
 modeles.append(modelesInner)
 let modelesTitle = document.createElement('h2')
 modelesTitle.classList.add('title')
 modelesTitle.innerHTML = "Новые модели"
 modelesInner.append(modelesTitle)
 let modelesRow = document.createElement('div')
 modelesRow.classList.add('modeles__row')
 modelesInner.append(modelesRow)

 function funcModeles() {
     let modelesItem = document.createElement('div')
     modelesItem.classList.add('modeles__item')
     modelesRow.append(modelesItem)
     let img = document.createElement('img')
     img.src = 'images/modeles-img.png'
     modelesItem.append(img)
     let modelesItemName = document.createElement('p')
     modelesItemName.classList.add('modeles__item-name')
     modelesItemName.innerHTML = 'Коктейльное платье'
     modelesItem.append(modelesItemName)
     let modelesItemPrice = document.createElement('p')
     modelesItemPrice.classList.add('modeles__item-price')
     modelesItemPrice.innerHTML = "₽ 40 000"
     modelesItem.append(modelesItemPrice)
 }
 funcModeles()
 funcModeles()
 funcModeles()
 funcModeles()
 let modelesInnerButton = document.createElement('button')
 modelesInnerButton.classList.add('modeles__inner-button')
 modelesInner.append(modelesInnerButton)