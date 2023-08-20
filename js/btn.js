

function visibleCouponButton() {
    const TotalPrice = getElementById('Total-price')
    if (TotalPrice >= 200) {
        const btn = document.getElementById('apply-btn')
        btn.removeAttribute('disabled')
        btn.setAttribute("class", "bg-[#E527B2] px-5 py-2 md:px-[10px] md:py-[3px] lg:p-2 rounded-lg text-white md:mt-3")

        document.getElementById('apply-btn').addEventListener('click', function () {
            const TotalPrice = getElementById('Total-price')
            const coupon = document.getElementById('input-field').value
            document.getElementById('input-field').value = ''
            if (coupon === "SELL200") {
                const discount = 20
                const discountAmount = (discount / 100) * TotalPrice
                const finalDiscountPrice = discountAmount.toFixed(2)
                setElementById('discount', finalDiscountPrice)

                const total = TotalPrice - finalDiscountPrice
                setElementById('final-total', total)
            }
        })
    }
}


function visibleMakePurchaseBtn() {
    const TotalPrice = getElementById('Total-price')
    if (TotalPrice > 0) {
        const purchasbtn = document.getElementById('Purchase-btn')
        purchasbtn.removeAttribute('disabled')
        purchasbtn.setAttribute("class", "px-5 py-2 md:px-[10px] md:py-[3px] lg:px-4 lg:py-1 rounded-lg text-white mt-0 bg-[rgb(229,39,178)]")
    }
    const finalPrice = TotalPrice.toFixed(2)
    setElementById('final-total', finalPrice)
}


document.getElementById('go-home-btn').addEventListener('click', function () {
    document.getElementById('Total-price').innerText = " 0.00"
    document.getElementById('discount').innerText = "0.00"
    document.getElementById('final-total').innerText = "0.00"
    let parentDiv = document.getElementById('entry-div'); 
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
 
    const applybtn = document.getElementById('apply-btn')
    applybtn.setAttribute('class','bg-[rgba(229,39,178,0.61)] px-5 py-2 md:px-[10px] md:py-[3px] lg:p-2 rounded-lg text-white md:mt-3')
    const purchasbtn = document.getElementById('Purchase-btn')
    purchasbtn.setAttribute('class','bg-[rgba(229,39,178,0.61)] px-5 py-1 rounded-lg text-white disabled')
})