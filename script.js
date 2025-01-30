import {post_article} from "./template.js"
import {data} from "./data.js"



const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");

burguer.onclick = function (){
    nav.classList.toggle("active")
    burguer.classList.toggle("active")
    
}



const bt_parametre = document.querySelectorAll('.bt_parametre');
const bloc_parametre = document.querySelectorAll('.bloc_parametre');


bt_parametre.forEach((element , index) => {
     element.onclick = ()=> {
      
         element.classList.toggle("toucher");

         if (bloc_parametre[index]) {
            bloc_parametre[index].classList.toggle("active");
        }


         
     } 
});

new WOW().init();


// map donnée bloc  

// const ingredient_left = document.querySelector(".ingredient_left")

const bloc_article = document.querySelector('.bloc_article')

 let les_post = data ;


 const afficherPost = (articles) => {

    articles.forEach((article) =>{

         console.log(article.nom)


        const boite_article = document.createElement("div");
        boite_article.classList.add("boite_article")
        boite_article.setAttribute("data-id" , articles.id);
        boite_article.innerHTML = post_article(article);
       bloc_article.appendChild(boite_article)


    })


 }


afficherPost(les_post) ; 
