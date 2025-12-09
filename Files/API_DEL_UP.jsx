import { useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState({name:'', surname:''})
  const [submit, setSubmit] = useState([])
  const [editIndex, seteditIndex] = useState(null)

  const token = "Pmof8Odgw8BDyg3X"

  const change = () => {
    if (data.name.trim() && data.surname.trim()) {
      // POST The Data
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
        console.log("API Response:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });

      // Update Data & Shows Data
      if(editIndex !== null){
        setSubmit(submit => {
          const newValue = [...submit];
          newValue[editIndex] = data;
          return newValue;
        });
        seteditIndex(null);
      }
      else{
        setSubmit([...submit, data]);
      }
      setData({name:'', surname:''});
    } else {
      alert("You Have To fill Every Field.");
    }
  };

  // Delete The Data
  const Delete = (index) => {
    const itemDelete = submit[index];
    
    fetch(`https://generateapi.techsnack.online/api/demo/${itemDelete.id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      if (response.ok) {
        setSubmit(submit => {
          const newArray = [...submit];
          newArray.splice(index, 1);
          return newArray;
        });
        console.log("Item deleted successfully!");
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
  };

  // Update The Data
  const Update = (index) => {
      seteditIndex(index);
      setData(submit[index]);
  };

  // GEt The Data
  const getData = () => {
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
  };


  return (
    <>
      <div>
        Name : <input type="text" id="data_name" value={data.name} onChange={(el) => setData({...data, name: el.target.value})} /> <br /><br />
        Surname : <input type="text" id="data_surname" value={data.surname} onChange={(el) => setData({...data, surname: el.target.value})} /> <br /><br />
        <button onClick={change}>Click Me</button>&nbsp;&nbsp;
        <button onClick={getData}>Get Data</button>

        <table border="1" style={{ marginTop: '20px', width: '50%' }}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {submit.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>
                  <button onClick={() => Delete(index)} style={{cursor:'pointer'}}>Delete</button>
                </td>
                <td>
                  <button onClick={() => Update(index)} style={{cursor:'pointer'}}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
