console.log(window.screen.width * window.devicePixelRatio);
/* 
Images with an id containing "hero" will be added to the slideshow
*/
const hiRes =
  window.screen.width * window.devicePixelRatio > 1440 ? true : false;
console.log(hiRes);
export default [
  {
    id: "logo",
    url: require("../assets/logo@2x.png")
  },
  {
    id: "hero_1",
    url: require("../assets/hero_1@2x.jpg")
  },
  {
    id: "hero_2",
    url: require("../assets/hero_2@2x.jpg")
  },
  {
    id: "hero_3",
    url: require("../assets/hero_3@2x.jpg")
  }
  /* {
    id: "hero_1",
    url: "/static/images/hero_1@2x.jpg"
  },
  {
    id: "hero_2",
    url: "/static/images/hero_2.jpg"
  },
  {
    id: "hero_3",
    url: "/static/images/hero_3.jpg"
  } */
];
