
let login = JSON.parse(localStorage.getItem("login")) || []

let email = document.getElementById(email).value
let password = document.getElementById(password).value
if (login.includes == true) {
    window.location.href = "checkout.html"
}
else {
    login.push(email);
    localStorage.setItem("login", JSON.stringify(login))

}



localStorage.setItem("login", JSON.stringify(login))