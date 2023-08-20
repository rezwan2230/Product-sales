
// For First Card
document.getElementById('first-card').addEventListener('click',function(){
     const productPrice = getElementById('price-1')
     const previousTotalPrice = getElementById('Total-price')
     const currentPrice = previousTotalPrice + productPrice
     const formatedPrice = currentPrice.toFixed(2)
     setElementById('Total-price',formatedPrice)
     EntryElement('K. Accessories')
     visibleCouponButton()
     visibleMakePurchaseBtn()
})

// For second Card
document.getElementById('second-card').addEventListener('click',function(){
    const productPrice = getElementById('price-2')
    const previousTotalPrice = getElementById('Total-price')
    const currentPrice = previousTotalPrice + productPrice
    const formatedPrice = currentPrice.toFixed(2)
    setElementById('Total-price',formatedPrice)
    EntryElement('K. Accessories')
    visibleCouponButton()
    visibleMakePurchaseBtn()
})

// For Third Card
document.getElementById('third-card').addEventListener('click',function(){
    const productPrice = getElementById('price-3')
    const previousTotalPrice = getElementById('Total-price')
    const currentPrice = previousTotalPrice + productPrice
    const formatedPrice = currentPrice.toFixed(2)
    setElementById('Total-price',formatedPrice)
    EntryElement('Home Cooker')
    visibleCouponButton()
    visibleMakePurchaseBtn()
})


