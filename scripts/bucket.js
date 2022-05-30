// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketData = JSON.parse(localStorage.getItem("coffee"))  || [];
console.log("bucketData:", bucketData);

let total = bucketData.reduce(function (sum, el) {
    return sum + Number(el.price);
}, 0)

document.getElementById("total_amount").innerText = total;

let container = document.getElementById("bucket");
bucketData.forEach(function (el, index) {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let p1 = document.createElement("p");
        p1.innerText = `Type:- ${el.title}`;

        let p2 = document.createElement("p");
        p2.innerText = `Price:- ${el.price}`;

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.setAttribute("id", "remove_coffee");
        btn.addEventListener("click", function(){
            removeItem(el, index);
        })

        div.append(image, p1, p2, btn);

        container.append(div);

    })

    function removeItem(el, index){
        //console.log(el, index);
        bucketData.splice(index, 1);
        //console.log("bucketData:", bucketData);

        localStorage.setItem("coffee", JSON.stringify(bucketData));
        window.location.reload();
    }