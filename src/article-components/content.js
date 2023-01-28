import tile1 from "./content-components/tile1";
import tile2 from "./content-components/tile2";
import tile3 from "./content-components/tile3";
async function combineContent(city){
    const container = document.createElement("div");
    container.classList.add("content");
    const div1 = await tile1(city);
    const div2 = await tile2(city);
    const div3 = await tile3(city);
    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);
    return container;
}
export default combineContent;