function createForm(){
    const parent = document.createElement("form");
    const textInput = document.createElement("input");
    const submitButton = document.createElement("input");

    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("id","btn");
    submitButton.setAttribute("value","check");

    textInput.setAttribute("type","text");
    textInput.setAttribute("placeholder","City name");
    textInput.setAttribute("id","input");

    parent.appendChild(textInput);
    parent.appendChild(submitButton);
    return parent;
}
export default createForm;