import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  render() {
    return (
        <header className="header">
        <img className="menu-icon" src="./assets/icon/view-sequential.svg" alt="exibir menu" />
       
      
        <div className="search">
                    
                </div>
        <div className="user-info">
            <img className="user-info__icon-notification" src="./assets/icon/bell.svg" alt="notification" />
            <img className="user-info__icon-profile" src="./assets/img/profile-picture.jpg" alt="Abhinav" />
        </div>
        </header>
    );
  }
}

export default Header;



