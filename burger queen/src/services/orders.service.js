const url = "http://localhost:8080";

export const getOrders = (token) => {
  return fetch(`${url}/orders`, {
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
