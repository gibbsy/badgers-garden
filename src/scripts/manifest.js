/* 
Images with an id containing "hero" will be added to the slideshow
*/
const hiRes = window.innerWidth * window.devicePixelRatio > 1440 ? true : false;
const imgRes = hiRes == true ? "@2x" : "@1x";
//console.log(imgRes);
const imgPath = "assets/images";
export default [
  {
    id: "logo",
    url: require(`@/${imgPath}/logo${imgRes}.png`)
  },
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
