import navbar from "../components/navbar.js"
// console.log(navbar)
import "../Styles/navbar.css"
let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML= navbar()

let url = "https://fakestoreapi.com/products/category/electronics";
let container = document.getElementById("products")

import { getData,append } from "../components/fetch.js";

getData(url).then((res)=>{
    append(res,container)
})