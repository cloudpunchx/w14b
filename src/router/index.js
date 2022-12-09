import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import GameView from '@/views/GameView'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: LoginPage,
    meta: [
      {
        title: "Login - Rock Paper Scissors"
      },
      {
        name: "description",
        content: "Rock Paper Scissors Game Log-In Page"
      },
      {
        name: "keywords",
        content: "Rock Paper Scissors, Game, Log In, Free Game, Play Online"
      },
      {
        name: "author",
        content: "Siobhan Bonardi",
      }
    ]
  },
  {
    path: "/game-start",
    component: GameView,
    meta: [
      {
        title: "Start! - Rock Paper Scissors"
      },
      {
        name: "description",
        content: "Rock Paper Scissors Game Start!"
      },
      {
        name: "keywords",
        content: "Rock Paper Scissors, Game, Free Game, Play Online"
      },
      {
        name: "author",
        content: "Siobhan Bonardi",
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  // Get all meta tags
  let metaTags = document.querySelectorAll('meta');
  // Loop through the tags and remove each - for OF loop
  for (let meta of metaTags){
    meta.remove();
  }
  // to.meta (navigating TO.meta.title)
  let newTags = to.meta;
  document.querySelector('title').innerText = newTags[0].title;
  // we already grabbed the title so we can start with i = 1
  for (let i = 1; i<newTags.length; i++){
    document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
                                                      `<meta name:"${newTags[i].name}" description="${newTags[i].content}">`);
  }
  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
                                                    `<meta charset="utf-8">
                                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                                    <meta name="viewport" content="width=device-width,initial-scale=1.0">`
                                                    );
  // I'm leaving the From and Next blank
  from;
  next();
})

export default router
