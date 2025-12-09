import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ name: "", surname: "" });
  const [submit, setSubmit] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const token = "Md0twApeHp4NmSgX";

  // Get Record (GET request)
  const getData = () => {
    fetch("https://generateapi.techsnack.online/api/demo", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("GET response:", data);
      if (data.Data && data.Data.length > 0) {
        setSubmit(data.Data);
      } else {
        console.log("There Is No Data!");
      }
    })
    .catch((err) => console.error("Error:", err));
  };

  // Run getData() once when the component first loads
  useEffect((data) => {
    // if(data.status === "success"){
    //   getData();
    // } else {
    //   console.log("There Is No Data!");
    // }
    getData();
  }, []);

  // Add new record (POST request)
  const postData = () => {
    fetch("https://generateapi.techsnack.online/api/demo", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("POST response:", data);
      if (data.Status === "Success") {
        getData();
        setData({ name: "", surname: "" });
      }
    })
    .catch((err) => console.error("Error:", err));
  };

  // Delete record (DELETE request)
  const deleteData = (id) => {
    setSubmit((submit) => submit.filter((item) => item._id !== id));
    fetch(`https://generateapi.techsnack.online/api/demo/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      if (response.ok) {
        console.log("DELETE response: success");
        // setSubmit(submit => {
        //   const newArray = [...submit];
        //   newArray.splice(index, 1);
        //   return newArray;
        // });
        getData();
      } else {
        console.error("DELETE response: failed");
      }
    })
    .catch((err) => console.error("Error:", err));
  };

  // Update existing record (PATCH request)
  const updateData = (id) => {
    fetch(`https://generateapi.techsnack.online/api/demo/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        surname: data.surname
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("PATCH response:", (data));
      if (data.Status === "Success") {
        getData();
      }
    })
    .catch((err) => console.error("Error:", err));
  };

  // Load record into input fields for editing
  const handleEdit = (index) => {
    setEditIndex(index);
    // setData(submit[index]);
    setData({
      name: submit[index].name,
      surname: submit[index].surname
    });
  };

  // Handle submit
  const handleSubmit = () => {
    if (data.name === "" || data.surname === "") {
      alert("You must fill every field.");
      return;
    }
    // update record
    if (editIndex !== null) {
      updateData(submit[editIndex]._id);
      // setSubmit(submit => {
      //   const newValue = [...submit];
      //   newValue[editIndex] = data;
      //   return newValue;
      // });
      setEditIndex(null);
      setData({ name: "", surname: "" });
    }
    else {
      postData();
    }
  };

  return (
    <div>
      Name:{" "} <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}/>{" "}<br /><br />

      Surname:{" "} <input type="text" value={data.surname} onChange={(e) => setData({ ...data, surname: e.target.value })}/>{" "}<br /><br />

      <button onClick={handleSubmit}>Submit</button>&nbsp;&nbsp;
      {/* <button onClick={getData}>Get Data</button><br /><br /> */}

      <table border="1" style={{ marginTop: "20px", width: "50%" }}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {submit.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td> 
              <td>{item.name}</td> 
              <td>{item.surname}</td> 
              <td><button onClick={() => deleteData(index, item._id)}>Delete</button></td>
              <td><button onClick={() => handleEdit(index)}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;