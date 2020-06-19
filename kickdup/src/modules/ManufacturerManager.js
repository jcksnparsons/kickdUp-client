const baseUrl = "http://127.0.0.1:8000";

const getManufacturers = () => {
  return fetch(`${baseUrl}/manufacturers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(),
  }).then((resp) => resp.json());
};

export default getManufacturers