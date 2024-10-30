async function getData() {
    
    // GET request --> asynchronus
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // parse json --> asynchronus 
    let data = await response.json();

    //process data --> synchronus
    console.log(data);  

}   

getData()

