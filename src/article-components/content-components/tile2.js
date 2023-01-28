import getData from "../../data";
async function tile2(city){
    const data = await getData(city);
    const tempValue = data.main.feels_like;
    const temp = Math.floor((tempValue-273.15)*10)/10;
    const container = document.createElement("div");
    const title = document.createElement("p");
    const description = document.createElement("p");
    title.textContent = "feels like:";

    description.textContent = `${temp}*C`;
    container.appendChild(title);
    container.appendChild(description);
    return container;
}
export default tile2;