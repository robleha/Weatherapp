const key = '2cfd1d32a7b9c0cb35c7bf4ca2315fb6';

/*const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Coventry&appid=2cfd1d32a7b9c0cb35c7bf4ca2315fb6';

fetch(baseURL)
    .then((data) => {console.log('response', data.json()) })
    .catch((error) => {
        console.log(error);
    });*/

    const requestCity = async (city) => {
    
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = '?q='+city+'&appid='+key;

      //const query = '?q=${city}&ppid=${key}'; <-- not working for some reason
    // fetch (or promise) call

    const response = await fetch(baseURL + query);
    
    //promise data
    const data = await response.json();
    return data;
    //console.log(data); <-- this fetches data for me

    }

    //requestCity('London');