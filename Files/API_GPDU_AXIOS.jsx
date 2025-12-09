import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState({ name: "", surname: "" });
  const [submit, setSubmit] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const token = "Md0twApeHp4NmSgX";

  const getData = () => {
    axios.get("https://generateapi.techsnack.online/api/demo", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log("GET response:", response.data);
        setSubmit(response.data.Data); 
    })
    .catch((err) => {
      console.error("There Is No Data", err);
    })
    .finally(() => {
      console.log("Request completed.");
    });
  };

  // Run getData() once when the component first loads
  useEffect(() => {
    getData();
  }, []);

  // Add new record (POST request)
  const postData = () => {
    axios.post("https://generateapi.techsnack.online/api/demo",data,{      
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("POST response:", response.data);
      if (response.data.Status === "Success") {
        getData();
        setData({ name: "", surname: "" });
      }
    })
    .catch((err) => { console.error("Error:", err) });
  };

  // Delete record (DELETE request)
  const deleteData = (index, id) => {
    // setSubmit(submit => submit.filter((item) => item._id !== id));
    axios.delete(`https://generateapi.techsnack.online/api/demo/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log("DELETE response status:", response.status);
      if (response.status === 200 || response.status === 204) {
        console.log("Delete response: success", response.status);
        setSubmit((submit) => {
          const newArray = [...submit];
          newArray.splice(index, 1);
          return newArray;
        })
        getData();
      } else {
        console.error("Delete response: failed", response.status);
      }
    })
    .catch((err) => { console.error("Error:", err) });
  };

  // Update existing record (PATCH request)
  const updateData = (id) => {
    axios.patch(`https://generateapi.techsnack.online/api/demo/${id}`,data, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("PATCH response:", response.data);
      if (response.data.Status === "Success") {
        getData();
      }
    })
    .catch((err) => {
      console.error("Error:", err)
    });
  };

  // Load record into input fields for editing
  const handleEdit = (index) => {
    setEditIndex(index);
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
      setEditIndex(null);
      setData({ name: "", surname: "" });
    }
    else {
      postData();
    }
  };

  return (
    <div>
      Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}/><br /><br />

      Surname &nbsp;:&nbsp; <input type="text" value={data.surname} onChange={(e) => setData({ ...data, surname: e.target.value })}/><br /><br />

      <button onClick={handleSubmit}>Submit</button>&nbsp;&nbsp;

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