import React, { useState } from 'react';
const EmailWork: React.FC= () => {
    const QRCode = require('qrcode.react');

    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const [showCode, setShowCode] = useState(true);

    const ShowMail = (event: any) => {
        setMail(event.target.value)
    }

    const ShowSub = (event: any) => {
        setSubject(event.target.value)
    }

    const ShowBody = (event: any) => {
        setBody(event.target.value)
    }

    return (
        <div>
                    <div className="title">E-MAIL</div>
                    <div className="subtitle">SEND AN EMAIL</div>


                    <div className="field">
                        <label className="label">Send to</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter email" onInput={ShowMail} />
                        </div>
                    </div>
                    
                {/*this is the area where the subject of the email is entered and is given as "subject"*/}
                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter Subject" onInput={ShowSub} />
                        </div>
                    </div>

                {/*this is the area where the message is entered/inputed and is given as "body" */}
                    <div className="field">
                        <label className="label">Body</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Type Message" onInput={ShowBody}></textarea>
                        </div>
                    </div>

                    <div>

                        <div>
                             {/* line 56 creates the qr code that will allow the user to send an email.  the qualities of the qr code are also stated */}
                            <QRCode value={`mailto:${mail}?subject=${subject}&body=${body}.`} size={256} fgColor="cyan"/>
                        </div>
                    </div>
             </div>

    )
}

export default EmailWork;
