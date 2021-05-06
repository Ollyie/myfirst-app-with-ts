import React, { useState } from 'react';
/* there is need to create constant variables that will be implemented later. if not the variable used will not be recognised */
const UserSms: React.FC = () => {

    const QRCode = require('qrcode.react');

    const [number, setSms] = useState('');

    const ShowSMS = (event: any) => {
        setSms(event.target.value);
    }
    
    const [message, setMessage] = useState('');

    const ShowMessage = (event: any) => {
        setMessage (event.target.value);
    }  



    return (
        <div>
            {/* the lines 23-25 show how to add title and subtitle */}
            <div className="title">SMS</div>
            <div className="subtitle">SMS IS WORKING</div>

            {/*  the lines 28-33 is where the users phone number is entered. the place holder "enter phone" will be replaced by the users phone number on input */}
            <div className="field">
                <div className="label">User's number</div>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter phone" onInput={ShowSMS} />
                </div>
            </div>
            
            {/*this is to create text area "message" where the message to be sent is entered. I added a place holder that will be replaced by the actual message on input*/}
            <div className="field">
                <div className="label">Message</div>
                <div className="control">
                    <textarea className="textarea" placeholder="Type Message" onInput={ShowMessage}></textarea>
                </div>
            </div>

                
            <div>
                {/* this line is to generate the qr code which will send  a written message to the specified phone nuber. the size of the qr code is also specified */}
                <QRCode value={`SMS:${number}:${message}`} size={256}  fgColor={"pink"}/>
            </div>
        </div >
    )
}


export default UserSms;
