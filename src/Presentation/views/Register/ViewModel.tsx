import { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/usecases/auth/RegisterAuth";


const RegisterViewModel =() =>{
    const [errorMessage, setErrorMessage] =useState('');
    const[values, setValues] = useState({
        name:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    });

    const onChange = (property: string, value: any) =>{
        setValues({...values, [property]: value});
    }
        
    const isValidForm = (): boolean => {
        if (values.name === ''){
            setErrorMessage('El nombre es requerido');
            return false;
        }

        else if (values.lastname === ''){
            setErrorMessage('El apellido es requerido');
            return false;
        }
        
        else if (values.email === ''){
            setErrorMessage('El correo es requerido');
            return false;
        }
        else if (values.phone === ''){
            setErrorMessage('El teléfono es requerido');
            return false;
        }
        else if (values.password === ''){
            setErrorMessage('La contraseña es requerida');
            return false;
        }
        else if (values.confirmPassword === ''){
            setErrorMessage('La confirmación de contraseña es requerida');
            return false;
        }
        else if (values.password !== values.confirmPassword){
            setErrorMessage('las contraseñas no coinciden');
            return false;
        }
        else {
            return true;
        }
    }

    const register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('Result' + JSON.stringify(response));
        }
    }
        
    return{
        ...values,
        onChange,
        register,
        errorMessage
    }
}

export default RegisterViewModel;
