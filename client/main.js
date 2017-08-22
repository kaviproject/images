//automatically ran of the file

//react module import
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/imageList';
import axios from 'axios';

//create a component

/*const App = () => {
    return (
    <ImageList />
    );
};*/

class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state={images:[]};
	}

        componentWillMount(){
    	console.log("APP component is about to render");
    	axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({images:response.data.data}));
  
    }
	render(){
		return(
			<div>
			<ImageList images={this.state.images}/>
			</div>
			)
	}
}


//Render this component to the view
//Meteor startup is help to wait until the dom is loaded on the web page
Meteor.startup(()=>{
	ReactDOM.render(<App />,document.querySelector('.container'));
	
}
)
