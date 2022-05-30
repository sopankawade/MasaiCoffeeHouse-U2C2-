

function confirmOrder(event) {
    event.preventDefault()
    let name = document.getElementById("name").value;
    let mobile  = document.getElementById("number").value;
    let address = document.getElementById("address").value;
    if(name===""  && mobile==="" && address===""){
        alert("Please Fill the Information");
    }
    else{

    let id1 = setInterval(function() {
        alert("Your order is accepted")
        clearInterval(id1)
    }, 0)

    let id2 = setInterval(function() {
        alert("Your order is being Prepared")
        clearInterval(id2)
    }, 3000)

    let id3 = setInterval(function() {
        alert("Your order is being packed")
        clearInterval(id3)
    }, 8000)

    let id4 = setInterval(function() {
        alert("Your order is out for delivery")
        clearInterval(id4)
    }, 10000)

    let id5 = setInterval(function() {
        alert("Order delivered")
        clearInterval(id5)
    }, 12000)
}
}