import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, setEditIndex, updateData } from '../Redux/useformikslice'

const UseFormikRedux = () => {
    const dispatch = useDispatch()
    const { list, editIndex } = useSelector((state) => state.form)

    const f = useFormik({
        initialValues: {
            name: '',
            surname: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Enter your name"),
            surname: Yup.string().required("Enter your surname")
        }),
        onSubmit: (values, { resetForm }) => {
            if (editIndex !== null) {
                dispatch(updateData({ index: editIndex, newData: values }))
                dispatch(setEditIndex(null))
            } else {
                dispatch(addData(values))
            }
            resetForm()
        }
    })

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={f.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={f.values.name} onChange={f.handleChange} placeholder="Enter your name"/>
                {f.touched.name && f.errors.name && ( <div style={{ color: 'red' }}>{f.errors.name}</div> )}
                <br /><br />

                <label>Surname:</label>
                <input type="text" name="surname" value={f.values.surname} onChange={f.handleChange} placeholder="Enter your surname"/>
                {f.touched.surname && f.errors.surname && ( <div style={{ color: 'red' }}>{f.errors.surname}</div>)}
                <br /><br />

                <button type="submit">
                    {editIndex !== null ? 'Update' : 'Submit'}
                </button>
            </form>

            <table border="1" cellPadding="8" style={{ marginTop: '20px', width: '400px' }}>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>
                                <button onClick={() => dispatch(deleteData(index))} style={{ marginLeft: '10px' }}>
                                    Delete
                                </button>
                                <button onClick={() => {f.setValues(item); dispatch(setEditIndex(index))}}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UseFormikRedux
