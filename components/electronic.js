let url = "https://fakestoreapi.com/products/category/electronics";
let container = document.getElementById("products")

import { getData,append } from "./fetch.js";

getData(url).then((res)=>{
    append(res,container)
})