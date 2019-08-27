function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  } 
const images = importAll(require.context('./imgs', false, /\.(png|svg|jpg|gif)$/));
export default images;