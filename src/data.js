async function getData(city){

    const key = "7355004621882f3bd7938a0a689e67b8";
    const call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    if(call.status === 200){
        const response = await call.json();
        return response;
    }
    alert("give the real name of the city");
}
export default getData;