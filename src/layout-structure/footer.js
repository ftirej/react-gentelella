import React, { Component } from 'react';

class Footer extends Component {

    render() {
       return (
           <footer>
               <div className="pull-right">
                   {this.props.children}
               </div>
               <div className="clearfix"/>
           </footer>
       );
    }
}

export default Footer;