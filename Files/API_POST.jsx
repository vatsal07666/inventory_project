import { useState } from 'react';
import './App.css';
function apiPost() {

  const [data, setData] = useState({name:'', surname:''})

  var token = "Pmof8Odgw8BDyg3X"

  const change = () => {
    fetch("https://generateapi.techsnack.online/api/demo", {

      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    // .then((result) => result.json())
    // .then((data) => {
    //   console.log("API Response:", data);
    // })
    //  .catch((err) => {
    //    console.error("Error:", err);
    // });
    .then((response) => response.json())
    .then((data) => console.log("API Response:", data.Data))
    .catch((error) => console.error("Error:", error));
  }
  return (
    <>
      <div>
        <input type="text" id="data_name" value={data.name} onChange={(el) => setData({...data, name: el.target.value})} /> <br /><br />
        <input type="text" id="data_surname" value={data.surname} onChange={(el) => setData({...data, surname: el.target.value})} /> <br /><br />
        <button onClick={change}>click me</button>
      </div>
    </>
  );
}

export default apiPost;