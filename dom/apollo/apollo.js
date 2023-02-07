// console.log("yellow")

// const images = ['./breast.jpg','./cough.jpg','./heart.jpg']
// let titles= ["somthing1",'something2','something3']
// const tags =['heart','edhokati','gadidhaguddu'];

// const mainDiv = document.querySelector('.this')
// mainDiv.innerHTML=''

// titles = titles.filter((elm,indx)=> elm ==='somthing1' ? true : false)

// // ['something1']


// console.log(titles)

// titles.map(function (title,index){
//     const div = document.createElement("div");

//     const imageUrl = images[index]
//     const tagTitle = tags[index]

//     const imageTag = document.createElement("img");
//     imageTag.src=imageUrl
    
//     const pTag = document.createElement('p');
//     pTag.innerText=tagTitle

//     const pTitle = document.createElement('p');
//     pTitle.innerText=title

//     const imageDiv = document.createElement('div');
//     imageDiv.append(imageTag)

//     const titleDiv = document.createElement('div');
//     const arrowIcon = document.createElement('img');
//     arrowIcon.src='./ic_arrow_right.svg'

//     titleDiv.append(pTitle,arrowIcon)

//     const rightDiv = document.createElement('div');
//     rightDiv.append(titleDiv,pTag);

//  div.append(imageDiv,rightDiv)
//  div.style='background-color:white;padding: 10px; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;border-radius: 5px;'

//  imageDiv.style='margin-top:2px;'

//  titleDiv.style='display:flex;gap:10px'


 
//  mainDiv.append(div)



// })





// let newDiv = document.getElementById("fr-div")
// document.getElementById("fr-div").addEventListener("click", function(event){
//     newDiv.style.backgroundColor ="red"
//     newDiv.style.padding="2px"
//     newDiv.style.border="solid 1px"
//   });

// // 
// var tis = document.getElementById("demo").addEventListener("click",myFunction)
// function myFunction(p1,p2){
//     return p1 * p2
// }

// console.log(myFunction(4,5))

// document.getElementById("demo").addEventListener("click", function() {
//     console.log(myFunction(4,5));
//   });

//   function myFunction(p1,p2){
//     return p1 * p2;
//   }



let list = document.querySelectorAll(".list")

Array.from(list).map(function (elem){
    elem.addEventListener("click",one)
    
    function one(sec){
        sec.target.style.color = "red"
        console.log(sec)
    }

})
