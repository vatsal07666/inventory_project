// import { useDispatch, useSelector } from "react-redux";
// import { adduser, deleteuser, updateuser } from "./slice";
// import { useState } from "react";

// const Ui = () => {
//     const usernames = useSelector((state) => state.buttonByme.username);
//     const dispatch = useDispatch();

//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [editIndex, setEditIndex] = useState(null);

//     const ages = Number(age);

//     const handleSubmit = () => {
//         if (name.trim() === "" || age.trim() === "" || mobile.trim() === "") {
//             alert("You have to fill all the fields.");
//             return;
//         } else if (ages <= 0 || ages > 100) {
//             alert("Please enter a valid age.");
//             return;
//         } else if (mobile.length !== 10) {
//             alert("Mobile number must be exactly 10 digits.");
//             return;
//         }

//         if (editIndex !== null) {
//             // Update user
//             dispatch(updateuser({ index: editIndex, name, age, mobile }));
//             setEditIndex(null);
//         } else {
//             dispatch(adduser({ name, age, mobile }));
//         }

//         setName("");
//         setAge("");
//         setMobile("");
//     };

//     const handleEdit = (index) => {
//         const user = usernames[index];
//         setName(user.name);
//         setAge(user.age);
//         setMobile(user.mobile);
//         setEditIndex(index);
//     };

//     return (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
//                 style={{ fontSize: "12px", padding: "5px 20px", marginRight: "4px" }} />
//             <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value.replace(/\D/g, ""))}
//                 style={{ fontSize: "12px", padding: "5px 20px", marginRight: "4px" }} />
//             <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
//                 style={{ fontSize: "12px", padding: "5px 20px", marginRight: "4px" }} />

//             <button onClick={handleSubmit}> {editIndex !== null ? "Update" : "Submit"} </button>

//             <table border="1" style={{ marginTop: "20px", width: "60%", margin: "20px auto", borderCollapse: "collapse" }}>
//                 <thead>
//                     <tr>
//                         <th>Index</th>
//                         <th>Username</th>
//                         <th>Age</th>
//                         <th>Mobile</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody style={{ textAlign: "center" }}>
//                     {usernames.map((item, index) => (
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>{item.name}</td>
//                             <td>{item.age}</td>
//                             <td>{item.mobile}</td>
//                             <td style={{padding:"8px 0px"}}>
//                                 <button onClick={() => dispatch(deleteuser(index))} style={{marginRight:"5px"}}>Delete</button>
//                                 <button onClick={() => handleEdit(index)}>Edit</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Ui;



import { useDispatch, useSelector } from "react-redux";
import {
  adduser,
  deleteuser,
  updateuser,
  setFormField,
  setEditIndex,
  resetForm,
} from "./slice";

const Ui = () => {
  const { username, form } = useSelector((state) => state.buttonByme);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const { name, age, mobile, editIndex } = form;
    const ages = Number(age);

    // ✅ Validations
    if (!name.trim() || !age.trim() || !mobile.trim()) {
      alert("You have to fill all the fields.");
      return;
    } else if (ages <= 0 || ages > 100) {
      alert("Please enter a valid age.");
      return;
    } else if (mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    // ✅ Add or Update
    if (editIndex !== null) {
      dispatch(updateuser({ index: editIndex, name, age, mobile }));
    } else {
      dispatch(adduser({ name, age, mobile }));
    }

    dispatch(resetForm());
  };

  const handleEdit = (index) => {
    const user = username[index];
    dispatch(setFormField({ field: "name", value: user.name }));
    dispatch(setFormField({ field: "age", value: user.age }));
    dispatch(setFormField({ field: "mobile", value: user.mobile }));
    dispatch(setEditIndex(index));
  };

  const handleCancel = () => {
    dispatch(resetForm());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Management</h2>

      <input
        type="text"
        value={form.name}
        onChange={(e) =>
          dispatch(setFormField({ field: "name", value: e.target.value }))
        }
        placeholder="Enter name"
        style={{ padding: "5px 10px", marginRight: "5px" }}
      />

      <input
        type="text"
        value={form.age}
        onChange={(e) =>
          dispatch(
            setFormField({ field: "age", value: e.target.value.replace(/\D/g, "") })
          )
        }
        placeholder="Enter age"
        style={{ padding: "5px 10px", marginRight: "5px" }}
      />

      <input
        type="text"
        value={form.mobile}
        onChange={(e) =>
          dispatch(
            setFormField({
              field: "mobile",
              value: e.target.value.replace(/\D/g, "").slice(0, 10),
            })
          )
        }
        placeholder="Enter mobile"
        style={{ padding: "5px 10px", marginRight: "5px" }}
      />

      <button onClick={handleSubmit} style={{ marginRight: "5px" }}>
        {form.editIndex !== null ? "Update" : "Submit"}
      </button>

      {form.editIndex !== null && (
        <button onClick={handleCancel}>Cancel Edit</button>
      )}

      <table
        border="1"
        style={{
          marginTop: "20px",
          width: "60%",
          margin: "20px auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Index</th>
            <th>Username</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {username.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>
                <button onClick={() => dispatch(deleteuser(index))}>
                  Delete
                </button>
                <button onClick={() => handleEdit(index)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ui;