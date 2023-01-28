function createFooter(){
    const container = document.createElement("footer");
    const p = document.createElement("p");
    p.innerHTML = `Copyright ${new Date().getFullYear()} BBUTTER | Application uses <a href='openweathermap.org'>OpenWeatherMap API</a>`;
    container.appendChild(p)
    return container;
}
export default createFooter;