import React, { useState } from 'react';
import img from '../../assets/undraw_pay_online_re_aqe6.svg';
import "../../styles/Login.css";
import InputCustom from '../InputCustom';
import { login } from '../../services/authService';
import alertImg from '../../assets/alerte.png';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Réinitialiser les messages d'erreur
        setPhoneNumberError('');
        setPasswordError('');

        // Validation des champs
        let isValid = true;
        if (!phoneNumber.trim()) {
            toast('Le numéro de téléphone est requis..')
            isValid = false;
        }
        
        if (!password.trim()) {
            toast('Le mot de passe est requis.')
            isValid = false;
        }
        else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(password.trim())) {
            toast('Le mot de passe doit contenir au moins 8 caractères avec au moins une majuscule et un symbole.')
            isValid = false;
        }
        if (isValid) {
            const userData = {
                phoneNumber: phoneNumber,
                password: password
            };
            console.log(userData)
            try {
                const data = await login(userData);
                console.log('Login successful:', data);
                // Handle successful login here (e.g., redirect to another page)
            } catch (error) {
                console.error('Error during login:', error);
                toast('Échec de la connexion. Veuillez réessayer.')
            }
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='img'>
                        <img src={img} alt='img' />
                    </div>
                    <div className='form'>
                        <form onSubmit={handleSubmit}>
                            <h3>Connexion</h3>
                            <div className='span'>
                                <span>Votre plateforme De suivi<br />  et contrôle des dépenses.</span>
                            </div>
                            <br /><br />
                            <div className='body-form'>
                                <PhoneInput
                                    country={'cm'}
                                    value={phoneNumber}
                                    onChange={(value) => setPhoneNumber(value)}
                                />
                                <InputCustom
                                    title="XXXXXXXX"
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Link to="/forgot-password">mot de passe oublié ?</Link>
                                <ToastContainer/>
                                <button type='submit' className='custom-btn'>envoyer</button>
                                <div><span>Pas de compte ?</span>  <a>créé en un ici</a> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
