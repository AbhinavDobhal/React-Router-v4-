import React from 'react';


class SideNavigationMenu extends React.Component {
  render() {
    return (
        <div className="side-navigation-menu">
       
        <div className="category-menu-wrapper">
          
            <ul className="categories">
                <li className="square-logo"><img src="https://cssninja.io/themes/cssninja/assets/images/logo/cssninja-icon-white.svg" alt="" /></li>
                <li className="category-link is-active" data-navigation-menu="demo-pages"><i className="sl sl-icon-support"></i></li>
                <li className="category-link" data-navigation-menu="components"><i className="sl sl-icon-basket"></i></li>
                <li className="category-link" data-navigation-menu="extras"><i className="sl sl-icon-present"></i></li>
            </ul>
          
            <ul className="author">
                <li>
                 
                    <a href="javascript:void(0);">
                        <img className="main-menu-author" src="https://cssninja.io/themes/cssninja/assets/images/logo/hanzo.svg" alt="" />
                    </a>
                </li>
            </ul>
        </div>
       
    
     
        <div id="demo-pages" className="navigation-menu-wrapper animated preFadeInRight fadeInRight">
           
            <div className="navigation-menu-header">
                <span>Ressources</span>
                <a className="ml-auto hamburger-btn navigation-close" href="javascript:void(0);" >
                    <span className="menu-toggle">	
                        <span className="icon-box-toggle"> 	
                            <span className="rotate">
                                <i className="icon-line-top"></i>
                                <i className="icon-line-center"></i>
                                <i className="icon-line-bottom"></i> 
                            </span>
                        </span>
                    </span>
                </a>
            </div>
         
            <ul className="navigation-menu">
                <li className="has-children"><a className="parent-link" href="#"><span className="material-icons">explore</span>Blog</a>
                    <ul>
                        <li><a className="is-submenu" href="https://cssninja.io/blog">Home</a></li>
                        <li><a className="is-submenu" href="/blog/category/annoucements">Annoucements</a></li>
                        <li><a className="is-submenu" href="/blog/category/design">Design</a></li>
                        <li><a className="is-submenu" href="/blog/category/code">Code</a></li>
                    </ul>
                </li>
                <li className="has-children"><a className="parent-link" href="#"><span className="material-icons">build</span>Help</a>
                    <ul>
                        <li><a className="is-submenu" href="https://cssninja.io/help/welcome">Welcome</a></li>
                        <li><a className="is-submenu" href="https://cssninja.io/help/ressources">Ressources</a></li>
                        <li><a className="is-submenu" href="https://cssninja.io/help/themes">Themes</a></li>
                        <li><a className="is-submenu" href="https://cssninja.io/help/rules">Rules</a></li>
                        <li><a className="is-submenu" href="https://cssninja.io/help/terms">Terms of use</a></li>
                    </ul>
                </li>
            </ul>
        </div>
       
     
        <div id="components" className="navigation-menu-wrapper animated preFadeInRight fadeInRight is-hidden">
          
            <div className="navigation-menu-header">
                <span>Premium themes</span>
                <a className="ml-auto hamburger-btn navigation-close" href="javascript:void(0);" >
                    <span className="menu-toggle">	
                        <span className="icon-box-toggle"> 	
                            <span className="rotate">
                                <i className="icon-line-top"></i>
                                <i className="icon-line-center"></i>
                                <i className="icon-line-bottom"></i> 
                            </span>
                        </span>
                    </span>
                </a>
            </div>
         
            <ul className="navigation-menu">
                <li className="has-children"><a className="parent-link" href="#"><span className="material-icons">view_agenda</span>Site templates</a>
                    <ul>
                        <li><a className="is-submenu" href="https://cssninja.io/themes/bulkit">Bulkit</a></li>
                    </ul>
                </li>
                <li className="has-children"><a className="parent-link" href="#"><span className="material-icons">dashboard</span>Dashboards</a>
                    <ul>
                        <li><a className="is-submenu" href="https://cssninja.io/themes/dashkit">Dashkit</a></li>
                        <li><a className="is-submenu" href="https://cssninja.io/themes/nephos">Nephos</a></li>
                    </ul>
                </li>
            </ul>
        </div>
      
   
        <div id="extras" className="navigation-menu-wrapper animated preFadeInRight fadeInRight is-hidden">
        
            <div className="navigation-menu-header">
                <span>Freebies</span>
                <a className="ml-auto hamburger-btn navigation-close" href="javascript:void(0);" >
                    <span className="menu-toggle">	
                        <span className="icon-box-toggle"> 	
                            <span className="rotate">
                                <i className="icon-line-top"></i>
                                <i className="icon-line-center"></i>
                                <i className="icon-line-bottom"></i> 
                            </span>
                        </span>
                    </span>
                </a>
            </div>
          
          
        </div>
     
    </div>
    );
  }
}

export default SideNavigationMenu;
