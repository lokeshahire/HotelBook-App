async function hotelFun() {

    let query = document.getElementById("query").value
    const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
    let res = await fetch(url);
    let data = await res.json();
    // let hotel = await data.json()
    console.log(data)
    appendData(data.hotels)

}
hotelFun()

let hotels_list = document.getElementById("hotels_list")
hotels_list.innerHTML = ""
let users = JSON.parse(localStorage.getItem("users")) || []
let login = JSON.parse(localStorage.getItem("login"))


function appendData(data) {

    data.map(function (el) {
        var div = document.createElement("div");
        div.setAttribute("id", "hotel")
        let hotelImg = document.createElement("img");
        hotelImg.src = el.Images.one

        let hotelName = document.createElement("p");
        hotelName.innerText = el.Title

        let hotelPrice = document.createElement("p");
        hotelPrice.innerText = el.Price


        let hotelAC = document.createElement("p");
        hotelAC.innerText = el.Ac

        let hotelRating = document.createElement("p");
        hotelRating.innerText = el.Rating

        let bookBtn = document.createElement("button");
        bookBtn.innerText = "BOOK NOW"
        bookBtn.setAttribute("class", "book")

        bookBtn.addEventListener("click", function () {
            addTocheckOut(el, hotelImg, hotelName, hotelPrice)
        })

        div.append(hotelImg, hotelName, hotelPrice, hotelAC, bookBtn)
        hotels_list.append(div)
        localStorage.setItem("users", JSON.stringify(data.hotels))

    })

    function addTocheckOut(el, hotelImg, hotelName, hotelPrice) {
        // let login = JSON.parse(localStorage.getItem("login"))
        // if (login = true) {
        //     window.location.href = "checkout.html"
        //     users.push(el)
        //     localStorage.setItem("users", JSON.stringify(users))
        // }
        // else {
        //     alert("Log In to continue!")
        // }
        users.push(el)
        window.location.href = "checkout.html"
        localStorage.setItem("users", JSON.stringify(users))

    }
}

