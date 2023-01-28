import getData from "../../data";
async function tile1(city){
    const data = await getData(city);
    const container = document.createElement("div");
    const title = document.createElement("p");
    const description = document.createElement("p");
    title.textContent = "weather:";
    description.textContent = data.weather[0].description;
    container.appendChild(title);
    container.appendChild(description);
    return container;
}
export default tile1;