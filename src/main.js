import createArticle from "./article";
import createForm from "./form";
async function mainBar(city){
    const article = await createArticle(city);
    const form = createForm();
    const main = document.createElement("main");
    const searchBar = document.createElement("div");
    const container = document.createElement("div");
    searchBar.classList.add("searchbar");
    searchBar.classList.add("center");
    container.classList.add("container");
    searchBar.appendChild(form);
    container.appendChild(article);

    main.appendChild(searchBar);
    main.appendChild(container);
    return main;
}
export default mainBar;