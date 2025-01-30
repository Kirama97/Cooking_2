import { post_article } from "./template.js";
import { data } from "./data.js";

const burguer = document.querySelector(".burguer");
const nav = document.querySelector("nav");

burguer.addEventListener("click", () => {
  nav.classList.toggle("active");
  burguer.classList.toggle("active");
});

const bt_parametre = document.querySelectorAll(".bt_parametre");
const bloc_parametre = document.querySelectorAll(".bloc_parametre");

bt_parametre.forEach((element, index) => {
  element.onclick = () => {
    element.classList.toggle("toucher");

    if (bloc_parametre[index]) {
      bloc_parametre[index].classList.toggle("active");
    }
  };
});

new WOW().init();

// page bloc 

const bloc_article = document.querySelector(".bloc_article");

let les_post = data;

localStorage.setItem("articles", JSON.stringify(data));

const afficherPost = (articles) => {
  articles.forEach((article) => {
    console.log(article.nom);

    const boite_article = document.createElement("div");
    boite_article.classList.add("boite_article");
    boite_article.setAttribute("data-id", article.id);
    boite_article.innerHTML = post_article(article);
    bloc_article.appendChild(boite_article);

    boite_article.addEventListener("click", () => {
      window.location.href = `/pages/article.html?id=${article.id}`;
    });
  });
};

afficherPost(les_post);

