import { Field, Form, Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { addData, deleteData, setEditIndex, updateData } from './formikslice'

const FormikExample = () => {
    const dispatch = useDispatch()
    const {list, editIndex} = useSelector((state) => state.form)

    const handleSubmit = (values, { resetForm }) => {
        if (editIndex !== null) {
            dispatch(updateData({ index: editIndex, newData: values }))
            dispatch(setEditIndex(null))
        } else {
            dispatch(addData(values))
        }
        resetForm()
    }

    return (
        <div style={{ padding: '20px' }}>
            <Formik initialValues={{ name: '', surname: '' }}
                validate={(values) => {
                    const errors = {}

                    if (!values.name.trim()) {
                        errors.name = 'Name is required'
                    }

                    if (!values.surname.trim()) {
                        errors.surname = 'Surname is required'
                    }

                    return errors
                }}  
                onSubmit={handleSubmit} >
                {({ setValues, errors, touched }) => (
                    <>
                        <Form>
                            <label>Name: </label>
                            <Field name="name" placeholder="Enter name" /> 
                            {errors.name && touched.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                            <br /><br />

                            <label>Surname: </label>
                            <Field name="surname" placeholder="Enter surname" />
                            {errors.surname && touched.surname && <div style={{ color: 'red' }}>{errors.surname}</div>}
                            <br /><br />

                            <button type="submit">
                                {editIndex !== null ? 'Update' : 'Submit'}
                            </button>
                        </Form>

                        <table border="1" cellPadding="8" style={{ marginTop: '20px' }}>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
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
                                            <button onClick={() => { setValues(item); dispatch(setEditIndex(index)) }}> 
                                                Edit 
                                            </button>
                                            <button onClick={() => dispatch(deleteData(index))} style={{ marginLeft: '10px' }}>
                                                Delete
                                            </button>
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

export default FormikExample
