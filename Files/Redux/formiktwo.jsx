import { useDispatch, useSelector } from "react-redux"
import { addData, deleteData, setEditIndex, updateData } from "./formiktwoslice"
import { Field, Form, Formik } from "formik"

const FormikTwo = () => {
    const dis = useDispatch()
    const {list, editIndex} = useSelector((state) => state.form)

    const handleSubmit = (values, { resetForm }) => {
        if(editIndex !== null){
            dis(updateData({index: editIndex, newData: values}))
            dis(setEditIndex(null))
        } else {
            dis(addData(values))
        }
        resetForm()
    }


    return(
        <div style={{textAlign:"center"}}>
            <Formik initialValues={{name: '', surname: ''}}
                validate = {(values) => {
                    const errors = {}

                    if(!values.name) errors.name = "Enter Your Name"
                    if(!values.surname) errors.surname = "Enter Your Surname"
                    return errors
                }}
                onSubmit={handleSubmit} >
                {({setValues, errors, touched}) => (
                    <>
                        <Form>
                            <label>Name : </label>
                            <Field name="name" placeholder="Enter Your Name" />
                            {errors.name && touched.name && <div style={{color:"red"}}>{errors.name}</div>}
                            <br /><br />

                            <label>Surname : </label>
                            <Field name="surname" placeholder="Enter Your Surname" />
                            {errors.surname && touched.surname && <div style={{color:"red"}}>{errors.surname}</div>}
                            <br /><br />

                            <button type="submit">{(editIndex !== null) ? 'Update' : 'Submit'}</button>
                        </Form>

                        <table border={1}>
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
                                            <button onClick={() => dis(deleteData(index))}>Delete</button>
                                            <button onClick={() => {setValues(item); dis(setEditIndex(index))}}>Update</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default FormikTwo