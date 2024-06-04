import React from 'react'
import '../../styles/Otp.css'
import otp from '../../assets/key.svg'
function Otp() {
    return (
        <div className="container">
            <h3>Entrer le Code de vérification</h3>
            <div className='infos'>
                <span>Nous vous avons fournis un code par,<br /> méssage, Veuillez le remplir ici dans les zones indiquée</span>
            </div><br /><br />
            <img src={otp} alt='otp' width={150} /><br />
            <div id="inputs" className="inputs">
                <input id="input" type="text"
                    inputMode="numeric" maxLength="1" />
                <input id="input" type="text"
                    inputMode="numeric" maxLength="1" />
                <input id="input" type="text"
                    inputMode="numeric" maxLength="1" />
                <input id="input" type="text"
                    inputMode="numeric" maxLength="1" />
            </div><br />
            <button type='submit' className='custom-btn'>Vérifier</button>
        </div>
    )
}

export default Otp