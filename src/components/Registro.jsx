import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Registro.css'

function Registro () {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone:'',
        gender: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        email: Yup.string().email('Formato de correo invalido'). required('El correo es obligatoria'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
            .required('La confirmacion de la contraseña es obligatoria'),
        phone: Yup.string()
            .matches(/^\d+$/, 'El numero de telefono debe contener solo digitos')
            .min(10, 'El numero de telefono debe tener al menos 10 digitos')
            .required('El numero de telefono es obligatoria'),     
        gender: Yup.string().required('El genero es obligatorio'),
        });

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Formulario enviado', values);
        alert('Resgistro exitoso');
        setSubmitting(false); 
    }
        


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form className='form-container'>
                    <div className='form-group'>
                        <label htmlFor="username">Nombre de usuario</label>
                        <Field type="text" id="username" name="username" />
                        <ErrorMessage name="username" component="div" className="error-message" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Correo electronico</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="phone">Numero de telefono</label>
                        <Field type="text" id="phone" name="phone" />
                        <ErrorMessage name="phone" component="div" className="error-message" />
                    </div>
                    <div className='form-radio-group'>
                        <label >
                            <Field type="radio" name="gender" value="male" />
                            Masculino
                        </label>
                        <label >
                            <Field type="radio" name="gender" value="female" />
                            Femenino
                        </label>
                        <ErrorMessage name='gender' component="div" className='error-message' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Contraseña</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name='password' component="div" className='error-message' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirmar contraseña</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" />
                        <ErrorMessage name='confirmPassword' component="div" className='error-message' />
                    </div>
                    
                    <button type='submit' className="submit-button" disabled={isSubmitting}>
                        Registrar
                    </button>
                </Form>
            )}
        </Formik >
    )
}

export default Registro