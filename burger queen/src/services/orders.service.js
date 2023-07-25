//Obtener
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

//Mandar
export const sendOrder = (token, order) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      if (response.status === 201) {
        console.log("¡Orden enviada con éxito!");
        return response.json();
      } else if (response.status >= 400) {
        throw new Error("Error al enviar la orden");
      }
    })
    .catch((error) => {
      console.error("Error al enviar la orden:", error);
      throw error;
    });
};