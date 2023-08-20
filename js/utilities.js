function getElementById(elementId){
    const initialTotal = document.getElementById(elementId).innerText
    const initialTotalValue = parseFloat(initialTotal)
    return initialTotalValue
}

function setElementById(elementId, value){
    const k =  document.getElementById(elementId).innerText = value
}

function EntryElement(productName){
    const entryDiv = document.getElementById('entry-div')
    entryDiv.setAttribute("class","text-xl text-black space-y-1 p-6")
    const count = entryDiv.childElementCount
    const p = document.createElement('p')
    p.innerHTML = `${count+1}. ${productName}`
    entryDiv.appendChild(p)
}