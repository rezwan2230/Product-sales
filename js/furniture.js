

// For First Card
document.getElementById('fourth-card').addEventListener('click',function(){
    const productPrice = getElementById('price-4')
    const previousTotalPrice = getElementById('Total-price')
    const currentPrice = previousTotalPrice + productPrice
    const formatedPrice = currentPrice.toFixed(2)
    setElementById('Total-price',formatedPrice)
    EntryElement('Single Relax Chair')
    visibleCouponButton()
    visibleMakePurchaseBtn()
})

// For second Card
document.getElementById('fifth-card').addEventListener('click',function(){
   const productPrice = getElementById('price-5')
   const previousTotalPrice = getElementById('Total-price')
   const currentPrice = previousTotalPrice + productPrice
   const formatedPrice = currentPrice.toFixed(2)
   setElementById('Total-price',formatedPrice)
   EntryElement('Children play')
   visibleCouponButton()
   visibleMakePurchaseBtn()
})

// For Third Card
document.getElementById('sixth-card').addEventListener('click',function(){
   const productPrice = getElementById('price-6')
   const previousTotalPrice = getElementById('Total-price')
   const currentPrice = previousTotalPrice + productPrice
   const formatedPrice = currentPrice.toFixed(2)
   setElementById('Total-price',formatedPrice)
   EntryElement('Flexible Sofa')
   visibleCouponButton()
   visibleMakePurchaseBtn()
})


