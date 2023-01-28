import './styles.css';
import mainBar from './main';
import createHeader from './header';
import createFooter from './footer';
import createArticle from './article';
async function firstGeneratingData(){
    const main = await mainBar("London");
    const header = createHeader();
    const footer = createFooter();
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
    document.querySelector("form").addEventListener("submit",function(e){
        e.preventDefault();
        generateForNew();
    });
}
async function generateForNew(){
    if(document.querySelector("input#input").value==''){
        alert("You cannot search weather for no city");
    }
    else{
        const city = document.querySelector("input#input").value;
        const main = document.querySelector("main .container");
        const oldArticle = document.querySelector("article");
        const newArticle = await createArticle(city);
        main.removeChild(oldArticle);
        main.appendChild(newArticle);
    }
    
}
firstGeneratingData();
