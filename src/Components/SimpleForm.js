import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import './SimpleForm.css';
import { useFormik } from "formik";
import { SignUPSchema } from '../Schemas';

let initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SimpleForm = () => {

    const Formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignUPSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

  return (
    <>
        <Container>
            <div className='header1 text-center'>
                Registration Form
            </div>
            <Form onSubmit={Formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" values={Formik.values.name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                </Form.Group>
                {Formik.errors.name && Formik.touched.name ? (<p className='text-muted'>{Formik.errors.name}</p>) : null}

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Email" values={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                </Form.Group>
                {Formik.errors.email && Formik.touched.email ? (<p className='text-muted'>{Formik.errors.email}</p>) : null}

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter Password" values={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                </Form.Group>
                {Formik.errors.password && Formik.touched.password ? (<p className='text-muted'>{Formik.errors.password}</p>) : null}

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" values={Formik.values.confirmPassword} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                </Form.Group>
                {Formik.errors.confirmPassword && Formik.touched.confirmPassword ? (<p className='text-muted'>{Formik.errors.confirmPassword}</p>) : null}

                <Button variant="primary" type="submit">
                    Register 
                </Button>
            </Form>
        </Container>
    </>
  )
}

export default SimpleForm
