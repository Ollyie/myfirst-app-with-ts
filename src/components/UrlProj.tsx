import React, { useState } from 'react';
/* create constant variables that will be implemented later */
const UrlProj: React.FC = () => {
    const QRCode = require('qrcode.react');
    const [url, setUrl] = useState('');

    const ShowURL = (event: any) => {
        setUrl(event.target.value);
    }

    return (
     <div>
         {/* This creates space for title and subtitle */}
         <div className="title">URL</div>
         <div className="subtitle">URL IS LINKING</div>

{/* this area is where the user eneters the url of their choice it is given as "connect url". */}
        <div className="field">
            <label className="label">Connect Url</label>
            <div className="control">
                <input className="input is link" type="text" placeholder="Enter url" onInput={ShowURL} />
            </div>
        </div>
        <div>
            {/* this line is to create the qr code which will link the url once it is given . the qualites of the qr code are also stated */}
                <QRCode value={url} size={256} fgColor="purple" />
          </div>
         </div>
   )
}


export default UrlProj;