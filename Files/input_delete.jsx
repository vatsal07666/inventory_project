import { useState } from 'react';
function App() {

  const [data, setData] = useState([])
  const [submit, setSubmit] = useState([])

  const change = () => {
    let text = document.getElementById('data').value;

    if(text !== ''){
      setSubmit([...submit, data]);
      setData('');
    }
  }

  const Delete = (index) => {
    setSubmit(submit => {
      const newArray = [...submit];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  return (
    <div className="App">
      <input type="text" id="data" value={data} onChange={(el) => setData(el.target.value)} />&nbsp;&nbsp;
      <button onClick={change}>click me</button>
      <table border={1} style={{marginTop:30, width: '50%', textAlign:'center'}}>
        <thead>
          <tr>
            <td>No.</td>
            <td>Item</td>
            <td>Delete</td>
          </tr>
        </thead>

        <tbody>
          {submit.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <button onClick={() => Delete(index)} style={{cursor:'pointer'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
