function getshops(){
// read all entities
fetch("http:localhost:8080/api/shops", {
  "method": "GET",
  
})
.then(response => response.json())
.catch(err => { console.log(err); 
});
}