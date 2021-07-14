export default async function getShops() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const result = await fetch("http://nginx:8080/api/shops", requestOptions)
  .then(response => response.json())
  .catch((error) => console.log("error", error));

  return result;
 
}
