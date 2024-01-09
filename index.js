const hamburger=document.getElementById("hamburger")
const sidenav=document.getElementById("sidenav")

hamburger.addEventListener("click",()=>{
    sidenav.style.right="0"
})
const xmark=document.getElementById("xmark")
xmark.addEventListener("click",()=>{
    sidenav.style.right="-15rem"
})