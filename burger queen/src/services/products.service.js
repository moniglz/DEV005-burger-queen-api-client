const url = "http://localhost:8080";

export const getProducts = (token) => {
  return fetch(`${url}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });
};