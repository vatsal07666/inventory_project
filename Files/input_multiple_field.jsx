import { useState } from 'react';

function App() {
  const [data, setData] = useState({fname:'', lname:'', password:''});
  const [submit, setSubmit] = useState([]);
  const [editIndex, seteditIndex] = useState(null);
 
  const change = () => {
    if (data.fname.trim() && data.lname.trim() && data.password.trim()) {
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
      setData({fname:'', lname:'', password:''});
    } else {
      alert("You Have To fill Every Field.");
    }
  };

  const Delete = (index) => {
    setSubmit(submit => {
      const newArray = [...submit];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const Update = (index) => {
    seteditIndex(index);
    setData(submit[index]);
  };

  return (
    <div className="App">
      <input type="text" id="data_fname" placeholder='Enter Your First Name' value={data.fname} onChange={(e) => setData({ ...data, fname: e.target.value })}/>&nbsp;&nbsp;<br /><br />
      <input type="text" id="data_lname" placeholder='Enter Your Last Name' value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })}/>&nbsp;&nbsp;<br /><br />
      <input type="password" id="data_password" placeholder='Enter Your Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>&nbsp;&nbsp;<br /><br />
      <button onClick={change} style={{cursor:'pointer'}}>Click me</button>

      <table border="1" style={{ marginTop: '20px', width: '50%' }}>
        <thead>
          <tr>
            <th>Index</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Paasword</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody style={{textAlign: 'center'}}>
          {submit.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.password}</td>
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
  );
}

export default App;

// f   r   e   y   a   s   h   e   t   a
// 6   18  5   25  1   19  8   5   20  1