import { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [submit, setSubmit] = useState([]);
  const [editIndex, seteditIndex] = useState(null);
 
  const change = () => {
    if (data.trim() !== '') {
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
      setData('');
    } else {
      alert("Write Something.");
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
      <input type="text" id="data" value={data} onChange={(e) => setData(e.target.value)}/>&nbsp;&nbsp;
      <button onClick={change} style={{cursor:'pointer'}}>Click me</button>

      <table border="1" style={{ marginTop: '20px', width: '50%' }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Item</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody style={{textAlign: 'center'}}>
          {submit.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
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