import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function Registro () {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        email: Yup.string().email('Formato de correo invalido'). required('El correo es obligatoria'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
            .required('La confirmacion de la contraseña es obligatoria'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Formulario enviado', values);
        alert('Resgistro exitoso');
        setSubmitting(false); 
    };


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="username">Nombre de usuario</label>
                        <Field type="text" id="username" name="username" />
                        <ErrorMessage name='username' component="div" />
                    </div>
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name='email' component="div" />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name='password' component="div" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirmar contraseña</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" />
                        <ErrorMessage name='confirmPassword' component="div" />
                    </div>
                    <button type='submit' disabled={isSubmitting}>
                        Registrar
                    </button>
                </Form>
            )}
        </Formik >
    )
}

export default Registro