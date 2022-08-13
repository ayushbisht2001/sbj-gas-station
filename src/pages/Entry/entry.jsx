import React, { Component } from 'react';
import Entry from  '../../Components/Entry/entry';
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
 
class EntryPage extends Component {
    render() { 
        return ( 
           <>
                <NavBar />
                <Entry type = {this.props.type} />
                <Footer />
                </>
         );
    }
}
 
export default EntryPage;