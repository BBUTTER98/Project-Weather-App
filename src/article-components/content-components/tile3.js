import getData from "../../data";
async function tile3(city){
    const data = await getData(city);
    const pressure = data.main.pressure;
    const container = document.createElement("div");
    const title = document.createElement("p");
    const description = document.createElement("p");
    title.textContent = "pressure:";

    description.textContent = `${pressure}hPa`;
    container.appendChild(title);
    container.appendChild(description);
    return container;
}
export default tile3;