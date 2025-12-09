import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ firstname: "", lastname: "", date: "", mobile: "" });
  const [submit, setSubmit] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const token = "zLLj0wTcrqPNQf45";

  const getData = () => {
    axios
      .get("https://generateapi.techsnack.online/api/project", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("GET response:", response.data);
        setSubmit(response.data.Data);
        console.log("GET/STORE Data Successfully Done!");
      })
      .catch((err) => {
        console.error("Error : ", err);
        console.error("There Is No Data...!");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const postData = () => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("date", data.date.split("T")[0]);
    formData.append("mobile", data.mobile);

    console.log("Data:", data);

    axios
      .post("https://generateapi.techsnack.online/api/project", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("POST response:", response.data);
        if (response.data.Status === "Success") {
          getData();
          setData({ firstname: "", lastname: "", date: "", mobile: "" });
          console.log("POST/SUBMIT Data Successfully Done!");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const deleteData = (index, id) => {
    axios
      .delete(`https://generateapi.techsnack.online/api/project/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("DELETE response status:", response.status);
        if (response.status === 200 || response.status === 204) {
          console.log("Delete response: success", response.status);
          setSubmit((submit) => submit.filter((_, i) => i !== index));
          getData();
          console.log("DELETE Data Successfully Done!");
        } else {
          console.error("Delete response: failed", response.status);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const updateData = (id) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("date", data.date);
    formData.append("mobile", data.mobile);

    axios
      .patch(`https://generateapi.techsnack.online/api/project/${id}`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("PATCH response:", response.data);
        if (response.data.Status === "Success") {
          getData();
          console.log("PATCH/UPDATE Data Successfully Done!");
        }
      })
      .catch((err) => {
        console.error("PATCH error:", err);
      });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setData({
      firstname: submit[index].firstname,
      lastname: submit[index].lastname,
      date: submit[index].date.split("T")[0],
      mobile: submit[index].mobile,
    });
    setValidationErrors({});
  };

  const handleSubmit = () => {
    const errors = {};

    if (!data.firstname.trim()) errors.firstname = "First name is required.";
    if (!data.lastname.trim()) errors.lastname = "Last name is required.";
    if (!data.date) errors.date = "Birth date is required.";
    if (!data.mobile) errors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(data.mobile)) errors.mobile = "Mobile number must be exactly 10 digits.";
      // { ^ = Start of the string
      //   \d = A digit (0–9)
      //   {10} = Exactly 10 digits
      //   $ = End of the string }
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    if (editIndex !== null) {
      updateData(submit[editIndex]._id);
      setEditIndex(null);
      setData({ firstname: "", lastname: "", date: "", mobile: "" });
    } else {
      postData();
    }
  };

  return (
    <div>
      Firstname:{" "} <input type="text" value={data.firstname} onChange={(e) => {
        setData({ ...data, firstname: e.target.value });
        if (validationErrors.firstname) {
          setValidationErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors.firstname;
            return newErrors;
          });
        }
      }}/><br />
      {validationErrors.firstname && <div style={{ color: "red" }}>{validationErrors.firstname}</div>}<br />

      Lastname:{" "} <input type="text" value={data.lastname} onChange={(e) => {
        setData({ ...data, lastname: e.target.value });
        if (validationErrors.lastname) {
          setValidationErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors.lastname;
            return newErrors;
          });
        }
      }}/><br />
      {validationErrors.lastname && <div style={{ color: "red" }}>{validationErrors.lastname}</div>}<br />

      Birth Date:{" "} <input type="date" value={data.date} onChange={(e) => {
        setData({ ...data, date: e.target.value });
        if (validationErrors.date) {
          setValidationErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors.date;
            return newErrors;
          });
        }
      }}/><br />
      {validationErrors.date && <div style={{ color: "red" }}>{validationErrors.date}</div>}<br />

      Mobile:{" "} <input type="text" value={data.mobile} onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 10);
        setData({ ...data, mobile: value });
        if (validationErrors.mobile) {
          setValidationErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors.mobile;
            return newErrors;
          });
        }
      }}/><br />
      {validationErrors.mobile && <div style={{ color: "red" }}>{validationErrors.mobile}</div>}<br />

      <button onClick={handleSubmit} style={{ cursor: "pointer" }}> Submit </button>&nbsp;&nbsp;

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ padding: "5px" }}>Index</th>
            <th style={{ padding: "5px" }}>Firstname</th>
            <th style={{ padding: "5px" }}>Lastname</th>
            <th style={{ padding: "5px" }}>Birth Date</th>
            <th style={{ padding: "5px" }}>Mobile No.</th>
            <th style={{ padding: "5px" }}>Delete</th>
            <th style={{ padding: "5px" }}>Update</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {submit.map((item, index) => (
            <tr key={item._id}>
              <td style={{ padding: "5px" }}>{index + 1}</td>
              <td style={{ padding: "5px" }}>{item.firstname}</td>
              <td style={{ padding: "5px" }}>{item.lastname}</td>
              <td style={{ padding: "5px" }}>{item.date.split("T")[0]}</td>
              <td style={{ padding: "5px" }}>{item.mobile}</td>
              <td style={{ padding: "5px" }}>
                <button onClick={() => deleteData(index, item._id)} style={{ cursor: "pointer" }}>Delete</button>
              </td>
              <td style={{ padding: "5px" }}>
                <button onClick={() => handleEdit(index)} style={{ cursor: "pointer" }}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;