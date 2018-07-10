import React from 'react';
import Header from '../component/Header';
import SideNavigationMenu from '../component/SideNavigationMenu';


class HomePage extends React.Component {
  render() {
    return (
      <div class="container">
      <Header/>
  
     <main className="main">
     </main>
     <SideNavigationMenu />
     </div>
    );
  }
}

export default HomePage;