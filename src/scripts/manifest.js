console.log(window.screen.width * window.devicePixelRatio);
/* 
Images with an id containing "hero" will be added to the slideshow
*/
const hiRes =
  window.screen.width * window.devicePixelRatio > 1440 ? true : false;
const imgRes = hiRes == true ? "@2x" : "@1x";
console.log(imgRes);
const imgPath = "assets/images";
export default [
  {
    id: "logo",
    url: require(`@/${imgPath}/logo${imgRes}.png`)
  },
  /*  {
    id: "hero_1",
    url: require(`@/${imgPath}/hero_1${imgRes}.jpg`)
  },
  {
    id: "hero_2",
    url: require(`@/${imgPath}/hero_2${imgRes}.jpg`)
  },
  {
    id: "hero_3",
    url: require(`@/${imgPath}/hero_3${imgRes}.jpg`)
  }, */
  {
    id: "how_we_grow",
    url: require(`@/${imgPath}/how_we_grow${imgRes}.jpg`)
  },
  {
    id: "badger",
    url: require(`@/${imgPath}/badger${imgRes}.png`)
  },
  {
    id: "garden",
    url: require(`@/${imgPath}/order_now${imgRes}.jpg`)
  }
];
