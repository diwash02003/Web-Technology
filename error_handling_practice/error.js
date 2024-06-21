async function getAll() {
  /*
        A try block is opened to handle any errors that might occur within the block.
        If an error occurs, control is passed to the corresponding catch block.
    */
  try {
    /*
        A variable url is declared and assigned the URL of the
        REST Countries API endpoint, which provides data for all countries.
    */
    let url = "https://restcountries.com/v3.1/all";

    /*
        The fetch function is called with the url as its argument.
        fetch initiates an HTTP request to the specified URL.
        The await keyword pauses the execution of the getCountries
        function until the fetch promise is resolved (i.e., the response is received). 
        The result is stored in the response variable.
     */
    let response = await fetch(url);

    /*
        This if statement checks if the HTTP response status is 
        not OK (status code is not in the range 200–299). 
        If the response is not OK, an error is thrown with a
        message that includes the HTTP status code.
    */
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    /*
        The json method of the response object is called to parse 
        the JSON body text from the HTTP response. 
        The await keyword pauses the execution until the promise 
        returned by response.json() resolves with the parsed JSON data, 
        which is then stored in the countries_arr variable.
    */
    let countries_arr = await response.json();
    console.log(countries_arr);
  } catch (error) {
    /*
        The catch block is executed if any error occurs during the execution 
        of the try block. The error object, which contains information about 
        the error, is logged to the console with the message 'Error fetching countries:'.
    */
    console.error("Error fetching countries:", error);
  }
}

/*
    The function getCountries is called, 
    initiating the process of fetching and logging the countries data.
*/
getAll();

/*
    ------------------------Summary--------------------------
    sync: Allows await inside the function.
    try...catch: Handles any errors that occur within the try block.
    fetch: Makes an HTTP request to the provided URL.
    await: Pauses execution until the promise resolves.
    response.ok: Checks if the HTTP response status is OK.
    response.json(): Parses the response body as JSON.
    console.log: Logs data to the console.
    console.error: Logs error information to the console.
*/
