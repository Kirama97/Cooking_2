

export const post_article = (article) => {


  return `
  

      <a class="bloc_article_item  wow fadeInUp" data-wow-delay="0.3s" href="/pages/blog_self.html">
                        <div class="bloc_article_left">
                         <img src="${article.image}" alt="">
                        </div>
                        <div class="bloc_article_right">
                            <h1>${article.nom}</h1>
                            <p>${article.description}</p>
                            <div class="profil_article_right">
                                <div class="a_profil">
                                    <img src="${article.image_profil}" alt="">
                                    <h4>${article.redacteur}</h4>
                                </div>
                                <div class="a_date">
                                  <P>${article.date}</P>
                                </div>
                            </div>
                        </div>
                    </a>


  
  `

}