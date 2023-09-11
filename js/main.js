import { fetchText } from "./api.js"

const cube = document.querySelector(".cube")


cube.addEventListener('click' , function(){
    
    fetchText() 
    
})
fetchText()