import React, { useState } from 'react';
import '../../styles/Forgot.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendOtp } from '../../services/authService';
import img from "../../assets/phone-img.svg"
import { Link, useNavigate } from 'react-router-dom';
function Forgot() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        console.log("first")
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!phoneNumber) {
            toast('Le numéro de téléphone est requis..')
            return;
        }

        try {
            const response = await sendOtp(phoneNumber);
            toast('Code OTP envoyé avec succès.')
        } catch (error) {
            toast('Échec de l\'envoi du code OTP. Veuillez réessayer.')
            navigate("/otp")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <ToastContainer />
            <div className='container'>

                <h3>Mot de passe oublié ?</h3>
                <img src={img} alt='img' width={150} /><br />
                <div className='infos'>
                    <span>Vous avez oublié votre mot de passe, c'est simple,<br /> insérez votre numéro de téléphone et nous vous<br /> enverrons un OTP.</span>
                </div>
                <br />
                <div className='tel'>
                    <PhoneInput
                        country={'cm'}
                        value={phoneNumber}
                        onChange={(value) => setPhoneNumber(value)}
                    />
                    <button type='submit' className='custom-btn'>Envoyer le code</button><br /><br />
                </div>
                <Link to="/login">Se Connecter ?</Link>
            </div>
        </form>
    );
}

export default Forgot;
