// Add the coffee to local storage with key "coffee"

let bucketData = JSON.parse(localStorage.getItem("coffee"))  || [];
console.log("bucketData:", bucketData);

let count = document.getElementById("coffee_count");
count.innerText=bucketData.length;



async function coffeeItems() {
    try{

        let res = await fetch("https://masai-mock-api.herokuapp.com/coffee/menu");

        let items = await res.json();
        append(items.menu.data);
        console.log("items:", items)
    }catch(err) {
        console.log("err:", err);
    }

}
coffeeItems();



function append(data) {

    let container = document.getElementById("menu");
    data.forEach(function (el) {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let p1 = document.createElement("p");
        p1.innerText = `Type:- ${el.title}`;

        let p2 = document.createElement("p");
        p2.innerText = `Price:- ${el.price}`;

        let btn = document.createElement("button");
        btn.innerText = "Add to Bucket";
        btn.setAttribute("id", "add_to_bucket");
        btn.addEventListener("click", function(){
            addTobucket(el);
        })

        div.append(image, p1, p2, btn);

        container.append(div);

    })
}

function addTobucket(el) {
    //console.log("el:", el)

    alert("added");
    
    bucketData.push(el);
    localStorage.setItem("coffee", JSON.stringify(bucketData))
    console.log("bucketData:", bucketData);

    count.innerText = bucketData.length;

}

