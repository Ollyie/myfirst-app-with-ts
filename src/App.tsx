import React from 'react';
import './App.css';
//import HelloWorld4 from './components/HelloWorld4';
//import HelloWorld7 from './components/helloworld7/HelloWorld7';
//import HelloWorld8 from './components/HelloWorld8';
import UserSms from './components/UserSms';
import UrlProj from './components/UrlProj';

const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <UserSms />
      </div>
        <div className="Column2">
          <UrlProj />
        </div>
      </div>
  );
}
export default App;