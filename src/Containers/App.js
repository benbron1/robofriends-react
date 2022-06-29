import React,{Component} from 'react' ; 
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield:''

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>  this.setState({robots: users}));
    }

    onSearch = (event) =>{
        this.setState({ searchfield: event.target.value});
       

    }
    render(){
        const filterMethod = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0 )
        {
            return  <h1>loading</h1>
        }
        else
        {
            return(
                <div className='tc'>
                    <h1>robofriends</h1>
                    <SearchBox searchChange={this.onSearch}/>
                    <Scroll>
                    <CardList robots={filterMethod} />
                    </Scroll>
                </div>
            )
        }
        }
}

export default App;