'use strict'


let newMovie=document.getElementById('newMovie');
let result=document.getElementById('result');
let ul=document.createElement('ul');
result.appendChild(ul);
let checkX;
// let images=[
//     'action.png', 'adventure.png', 'animation.png', 'comedy.png', 'detective.png'
//     , 'fantasy.png', 'history.png', 'horror.png', 'musical.png'
//     , 'pirate.png', 'romantic.png' , 'sci-fi.png', 'war.png', 'western.png'
// ]

function Movies(name,image,release){
this.name=name;
this.image=image;
this.release=release;


Movies.arr.push(this);
}
Movies.arr=[];


function handlerMovie(event){
event.preventDefault();


let names=event.target.name.value;
let images='img/'+event.target.image.value.toLowerCase()+'.png';
let releases=event.target.release.value;
new Movies(names,images,releases);
renderList();

localStorage.setItem('Movies',JSON.stringify(Movies.arr));
}


newMovie.addEventListener('submit',handlerMovie);


function renderList(){

    
for(let i=0;i<Movies.arr.length;i++)
{   if(Movies.arr.length>0)
    {i=Movies.arr.length-1 }
    let li =document.createElement('li');
    ul.appendChild(li);
    let p=document.createElement('p');
    li.appendChild(p);
    p.textContent='x';
    checkX=p.innerText;
     li =document.createElement('li');
    ul.appendChild(li);
    let img=document.createElement('img'); 
     li.appendChild(img);
     img.src=Movies.arr[i].image;

      li =document.createElement('li');
    ul.appendChild(li);
     let h3=document.createElement('h3');
     li.appendChild(h3);
     h3.textContent=Movies.arr[i].name;
   
    li =document.createElement('li');
    ul.appendChild(li);
     let h4=document.createElement('h4');
     li.appendChild(h4);
     h4.textContent=Movies.arr[i].release;



}



}


function getLocally(){
let data =JSON.parse(localStorage.getItem('Movies')) ;
if(data){

    for(let i=0;i<data.length;i++){

        new Movies(data[i].name,data[i].image,data[i].release);
        renderList();
    }



}
}

getLocally();


function removeList(e){

console.log(e.target);
if(e.target.innerText=='x'){


let index =Movies.arr.findIndex(function(obj){


return obj.name==e.target.parentNode.childNodes[2];

})
Movies.arr.splice(index,1);

localStorage.setItem('Movies',JSON.stringify(Movies.arr));
}


}

ul.addEventListener('click',removeList);