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

{/* this is to create text area where the desired url for access by the user  is entered. I added a place holder that will be replaced by the url on input */}
        <div className="field">
            <label className="label">Connect Url</label>
            <div className="control">
                <input className="input is link" type="text" placeholder="Enter url" onInput={ShowURL} />
            </div>
        </div>
        <div>
            {/* this line is to generate the qr code which will access the specified url on input. the size and colour  of the qr code is also specified */}
                <QRCode value={url} size={256} fgColor="purple" />
          </div>
         </div>
   )
}


export default UrlProj;