import React, { useState } from 'react';
import img from '../../assets/undraw_pay_online_re_aqe6.svg';
import "../../styles/Login.css";
import InputCustom from '../InputCustom';
import { login } from '../../services/authService';
import alertImg from '../../assets/alerte.png';
import PhoneInput from 'react-phone-input-2'
import { Password } from 'primereact/password';
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';

function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [visible, setVisible] = useState(false)

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
                                <Password value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    toggleMask
                                    promptLabel="Entrez votre mot de passe" weakLabel="Trop faible" mediumLabel="Mot de passe Moyen" strongLabel="Mot de passe Complexe "
                                />
                                <Link to="/forgot-password">mot de passe oublié ?</Link>
                                <ToastContainer />
                                <button type='submit' className='custom-btn'>envoyer</button>
                                <div><span>Pas de compte ?</span>  <a href='#' onClick={(e) => setVisible(true)}>créé en un ici</a> </div>
                            </div>
                            <Dialog
                                visible={visible}
                                modal
                                header="Créer un compte"
                                style={{ width: '80vw' }}
                                onHide={() => setVisible(false)}
                            ><br/>
                                <div className='body'>
                                    <div className='row'>
                                    <InputCustom  title="entrer un prénom" />
                                    <InputCustom  title="entrer un  nom" />
                                    <InputCustom type="password" title="entrer un mot de passe" />
                                    <InputCustom type="password" title="confirmer votre mot de passe"/>
                                    </div>
                                    <div className='footer'>
                                    <button type='submit' className='custom-btn'>Enregistrer</button>
                                    </div>
                                   
                                </div>
                            </Dialog>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
