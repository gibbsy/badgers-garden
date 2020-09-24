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
    id: "badger",
    url: require(`@/${imgPath}/badger${imgRes}.png`)
  }
];
