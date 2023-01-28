function createHeader(){
    const container = document.createElement("header");
    const heading = document.createElement("h1");
    heading.textContent = "Weather App";
    container.appendChild(heading)
    return container;
}
export default createHeader;