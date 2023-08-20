

// For First Card
document.getElementById('seventh-card').addEventListener('click',function(){
    const productPrice = getElementById('price-7')
    const previousTotalPrice = getElementById('Total-price')
    const currentPrice = previousTotalPrice + productPrice
    const formatedPrice = currentPrice.toFixed(2)
    setElementById('Total-price',formatedPrice)
    EntryElement('Sports Back Cap')
    visibleCouponButton()
    visibleMakePurchaseBtn()
})

// For second Card
document.getElementById('eight-card').addEventListener('click',function(){
   const productPrice = getElementById('price-8')
   const previousTotalPrice = getElementById('Total-price')
   const currentPrice = previousTotalPrice + productPrice
   const formatedPrice = currentPrice.toFixed(2)
   setElementById('Total-price',formatedPrice)
   EntryElement('Full Jersey Set')
   visibleCouponButton()
   visibleMakePurchaseBtn()
})

// For second Card
document.getElementById('nine-card').addEventListener('click',function(){
   const productPrice = getElementById('price-9')
   const previousTotalPrice = getElementById('Total-price')
   const currentPrice = previousTotalPrice + productPrice
   const formatedPrice = currentPrice.toFixed(2)
   setElementById('Total-price',formatedPrice)
   EntryElement('Sports cates')
   visibleCouponButton()
   visibleMakePurchaseBtn()
})


