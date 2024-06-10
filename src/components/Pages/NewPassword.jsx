import React, { useState } from 'react';
import { Password } from 'primereact/password';
import "../../styles/NewPassword.css";
import pass from '../../assets/pass.svg';
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import { newPassword } from '../../services/authService';

function NewPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const validatePasswords = () => {
        return password === confirmPassword;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier si les champs de mot de passe sont vides
        if (!password || !confirmPassword) {
            toast('Veuillez remplir tous les champs.');
            return; // Arrêter le traitement si un champ est vide
        }

        if (validatePasswords()) {
            const data = {
                password: password,
                confirmPassword: confirmPassword
            };
            console.log(data)
            try {
                const passwordData = await newPassword(data);
                console.log('Réinitialisation du mot de passe réussie', passwordData);
                toast('Réinitialisation du mot de passe réussie');
                // Gérer la mise à jour réussie ici (par exemple, redirection vers une autre page)
            } catch (error) {
                console.error('Error:', error);
                toast('Une erreur est survenue. Veuillez réessayer.');
            }
        } else {
            toast('Les mots de passe ne correspondent pas. Veuillez réessayer.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container new'>
                <h3>Créez un nouveau mot de passe</h3>
                <div className="infos">
                    <span>Veuillez indiquer un nouveau mot de passe<br />une fois changer vous serez redirigé<br /> vers la page de connexion</span>
                </div>
                <br />
                <img src={pass} alt="otp" width={200} />
                <br />
                <Password
                    toggleMask
                    value={password}
                    onChange={handlePasswordChange}
                    promptLabel="Entrez votre mot de passe"
                    weakLabel="Trop faible"
                    mediumLabel="Mot de passe Moyen"
                    strongLabel="Mot de passe Complexe "
                />
                <Password
                    toggleMask
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    promptLabel="Confirmez votre mot de passe"
                    weakLabel="Trop faible"
                    mediumLabel="Mot de passe Moyen"
                    strongLabel="Mot de passe Complexe "
                />
                <ToastContainer />
                <button type='submit' className='custom-btn'>Modifier</button>
            </div>
        </form>
    );
}

export default NewPassword;
