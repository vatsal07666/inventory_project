import { useEffect } from 'react';
import './App.css';
function App() {

  var token = "nS3LHgHKvORWq4ka"

  useEffect(() => {
    fetch("https://generateapi.techsnack.online/api/demo", {

      method: "GET",
      headers: {
        Authorization: token,
      }
    })
      .then((result) => result.json())
      .then((data) => {
        console.log("API Response:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [])

  // .then((response) => response.json())
  // .then((data) => console.log("API Response:", data.Data))
  // .catch((error) => console.error("Error:", error));

  return (
    <>

      <input type="text" />
      <button>click me</button>
    </>
  );
}

export default App;