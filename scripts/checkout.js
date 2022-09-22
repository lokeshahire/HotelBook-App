let users = JSON.parse(localStorage.getItem("users")) || [];

users.map(function (el) {
    var div = document.createElement("div");
    div.setAttribute("id", "hotel_details")

    let chekImgOne = document.createElement("img");
    chekImgOne.src = el.Images.one
    let chekImgTwo = document.createElement("img");
    chekImgTwo.src = el.Images.two
    let checkName = document.createElement("p");
    checkName = el.Title;
    let checkPrice = document.createElement("p");
    checkPrice = el.Price
    div.append(chekImgOne, chekImgTwo, checkName, checkPrice)
    document.getElementById("checkout").append(div)
})


function bookfun() {
    setTimeout(function () {
        alert(" Your booking is successful!")
    }, 5000)
}