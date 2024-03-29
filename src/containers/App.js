import React, { Component} from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

/*const App = () => {
	return (
		<div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox />
		<CardList robots={robots}/>
		</div>
		);
}*/
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then(users => this.setState({ robots: users}));
		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })	
	}


	render() {
		const { robots, searchfield } = this.state;
		const filteredRobot = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		/*if (!robots.length){
			return <h1>Loading</h1>
		} else {
		return (
			<div className='tc'>
			<h1 className='f2'>RoboFriends</h1>
			<SearchBox  searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobot}/>
			</Scroll>
			</div>
			);
		}*/
		return !robots.length ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
			<h1 className='f2'>RoboFriends</h1>
			<SearchBox  searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobot}/>
			</Scroll>
			</div>
			);
	}
	
}

export default App;