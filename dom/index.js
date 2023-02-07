// document.getElementById("btn").addEventListener("click",()=>{
//    let num = document.getElementById("int").value||0
//    let res = document.getElementById("res")
//    if(num%2 == 0) {
//     res.style.color = "red"
//     res.innerText = "even"
//     console.log("even")
//    }
//    else{
//     res.innerText = "odd"
//     console.log("odd")
//    }
// })


function verify(){
   let num = document.getElementById("int").value||0
   let res = document.getElementById("res")
   if(num%2 == 0 && num != 0) {
     res.style.color = "red"
     res.innerText = "even"
     console.log("even")
   }
   else{
     res.style = ""
     res.innerText = "odd"
     console.log("odd")
   }
} 
