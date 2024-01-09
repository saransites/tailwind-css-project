const container=document.querySelector("#box")
const input=document.querySelector("#input")
const box=container.querySelectorAll("div")

input.addEventListener("keyup",()=>{
    const enteredvalue=input.value
    
    for(let i=0;i<box.length;i++){
        var list=box[i].querySelector("h1").textContent
        if(list.includes(enteredvalue)){
            box[i].style.display="block"
        }else{
            box[i].style.display="none"
        }
    }
        
    })