// Fetch API
/*
    The fetch API provides an interface for fetching (sending/receiving) resources
    It uses Request and Resource objects.
    The fetch() method is used to fetch a resource (data).

  Syntax:

    window.fetch(url, [option]) 
    or
    fetch(url, [option]) 

    where,
    URL       −> It is an API endpoint where you need to make a request.
    [options] −> It is an optional parameter. It is an object containing the method, headers, etc., as a key.

*/


const display = document.getElementById("fetchapi");

function getdata(){
  fetch("http://localhost:5500/fetch/api.txt")
     .then(response => response.text())
     .then((data) => {
       display.innerText = data;
  console.log("Fetch API");
     })
}




  const display2 = document.getElementById("fetchapi2");

  async function getdata2() {
     const res = await fetch("http://localhost:5500/fetch/api.txt");
     const data2 = await res.text();
     
     display2.innerText = data2;
     console.log("Fetch API 2"); 
    }
  




/*
  const getFacts = async function getdata2() => {
  const url="http://localhost:5500/fetch/api.txt";
  const data = await fetch(url);
  console.log(data);
  console.log("Getting data ......");
  const response = await fetch(URL);
  console.log(response);
  console.log(response);
};

*/


// Geo-location API 
