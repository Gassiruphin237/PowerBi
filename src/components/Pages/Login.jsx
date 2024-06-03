import React, { useState } from 'react';
import img from '../../assets/undraw_pay_online_re_aqe6.svg';
import "../../styles/Login.css";
import InputCustom from '../InputCustom';
import { login } from '../../services/authService';
import alertImg from '../../assets/alerte.png';


function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Réinitialiser les messages d'erreur
        setPhoneNumberError('');
        setPasswordError('');
        setLoginError('');

        // Validation des champs
        let isValid = true;
        if (!phoneNumber.trim()) {
            setPhoneNumberError('Le numéro de téléphone est requis.');
            isValid = false;
        } else if (!/^\d{9}$/.test(phoneNumber.trim())) {
            setPhoneNumberError('Le numéro de téléphone doit contenir au moins 9 chiffres.');
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError('Le mot de passe est requis.');
            isValid = false;
        }
        // } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(password.trim())) {
        //     setPasswordError('Le mot de passe doit contenir au \n moins 8 caractères  avec \n au moins une majuscule et un symbole.');
        //     isValid = false;
        // }

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
                alert('Échec de la connexion. Veuillez réessayer.')
                setLoginError('Échec de la connexion. Veuillez réessayer.');
            }
        }
    };

    return (
        <>
            {/* Affichage du message d'erreur général */}
            {/* {loginError && (
                <div className='alert'>
                    <div className='row'>
                        <div className='message'>
                            <img src={alert} alt='img' width={20} /> {loginError}
                        </div>
                        <span className='close' title='close'>X</span>
                    </div>
                </div>
            )} */}

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
                                <InputCustom
                                    title="+237 XXX XXX XXX"
                                    type='text'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {phoneNumberError && <div className='error'>{phoneNumberError}</div>}
                                <InputCustom
                                    title="XXXXXXXX"
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <div className='error'>{passwordError}</div>}
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
