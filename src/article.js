import combineContent from "./article-components/content";
import heading from "./article-components/heading";
import image from "./article-components/image";
async function createArticle(city){
    const container = document.createElement("article");
    const header = await heading(city);
    const img = await image(city);
    const content = await combineContent(city);
    container.appendChild(header);
    container.appendChild(img);
    container.appendChild(content);
    return container;
}
export default createArticle;