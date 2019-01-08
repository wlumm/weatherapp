import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

// const App = () => {
// } 

class App extends React.Component{
    // constructor(props){
    //     super(props);

    //     //this is the only time we direct assigns state, otherwise need use setState
    //     this.state = { lat: '', errorMessage: ''};
    // }

    state = { lat: '', errorMessage: '' }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            //we call setSate
            (position) => {
                //correct ways
                this.setState({lat: position.coords.latitude});
                //wrong ways
                // this.state.lat = position.coords.latitude
                
            console.log(position)
        },
           err => {
               this.setState({errorMessage: err.message})
           }
        )
    }

    renderContent(){

        if(this.state.errorMessage && !this.state.lat){
            return(
                <div><p>Error: {this.state.errorMessage}</p></div>
            )
        }

        if (!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat }/>
                </div>   
            )
        }
        if(!this.state.errorMessage && !this.state.lat){
            return(
                <div><Spinner message="Please accept location request"/></div>
            )
        }
    }

    render(){
        return(
            <div className="border red">{this.renderContent()}</div>
        )
    }

    
}

ReactDOM.render( < App /> , document.querySelector('#root'))