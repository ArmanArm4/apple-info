import { useEffect } from "react";
import "./styles.css";

const API_URL =
  "https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2 ";

async function api() {
  let response = await fetch(API_URL);
  let user = await response.json();
  console.log(user.data.phones[0]);
}

// useEffect((async) => )

function App() {
  useEffect(() => {
    api();
  }, []);
  return <button className="btn btn-primary m-4 ">asd</button>;
}

export default App;
