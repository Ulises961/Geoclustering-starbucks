export default async function getShops() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch("http://nginx:8080/api/clustered-shops", requestOptions)
  .catch((error) => console.log("error", error));

  return response.json();
 
}
