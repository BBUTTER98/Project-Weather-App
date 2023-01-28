import getData from "../data";
async function image(city){
    const data = await getData(city);
    const id = data.weather[0].icon;
    const alt = data.weather[0].description;
    //const src = `https://openweathermap.org/img/wn/${id}.png`;
    const src = `https://openweathermap.org/img/wn/${id}@2x.png`;
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image");
    imgContainer.classList.add("center");
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${alt} icon`;
    imgContainer.appendChild(img);
    return imgContainer;
}
export default image;