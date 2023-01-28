import getData from "../data";
async function heading(city){
    const data = await getData(city);
    const country = data.sys.country;
    const cityName = data.name;
    const tempValue = Math.floor((data.main.temp-273.15)*10)/10;
    const tempValueF = tempValue*(9/5)+32;
    const tempC = tempValue+"*C";
    const tempF = tempValueF+"F";
    const container = document.createElement("div");
    container.classList.add("heading");
    container.textContent = `(${country}) ${cityName} ${tempC}`;
    return container;
}
export default heading;