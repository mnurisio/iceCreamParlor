
const flavors = [
    {
        name: 'Chocolate',
        price: 2.00,
        quantity: 0
    },
    {
        name: 'Vanilla',
        price: 1.00,
        quantity: 0
    },
    {
        name: 'Mint Chip',
        price: 15.00,
        quantity: 0
    },
    {
        name: 'Strawberry',
        price: 1.50,
        quantity: 0
    },
    {
        name: 'Cookie Dough',
        price: 3.00,
        quantity: 0
    },
    {
        name: 'Cookies n Cream',
        price: 2.50,
        quantity: 0
    },
]

function flavorbyName(flavorName) {
    for (let f = 0; f < flavors.length; f++) {
        let item = flavors[f]
        if (item.name == flavorName) {
            item.quantity += 1
            console.table([item])
        }
    }
    drawCart()
}

function calcCartTotal(){
    let total = 0
    for (let f = 0; f < flavors.length; f++) {
        let item = flavors[f]
        total += item.price * item.quantity
    }
    return total
}

function checkout(){
    const cartTotal = calcCartTotal()
    const confirmed = confirm(`you sure you want this fire ice cream?! For a grand total of ${cartTotal}`)
    if (confirmed){
        for (let f = 0; f < flavors.length; f++){
            let item = flavors[f]
            item.quantity = 0
        }
        drawCart()
    }
}

function drawCart() {
    let content = ''
    for (let f = 0; f < flavors.length; f++) {
        let item = flavors[f]
        if (item.quantity > 0) {
            content += `<p>${item.name} ${item.quantity}</span>     <span>$${item.price}</span>  <span>$${item.price * item.quantity}</span></p>`
        }
    }
    const cartElem = document.getElementById('cart-display')
    cartElem.innerHTML = content
    drawTotal()
}

function drawTotal(){
    let cartTotal = calcCartTotal()
    const totalElem = document.getElementById('cart-total')
    totalElem.innerText = cartTotal.toFixed(2)
}