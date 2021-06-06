import React from 'react';
import User from './components/User';
import axios from 'axios';
import Friends from './components/Friends';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        user: [],
      }
    }

    // --- MOUNT --- ///

    componentDidMount() {
      console.log("CDM")
      axios.get("https://api.github.com/users/SavvyPlusPlus")
        .then(res => {
          this.setState({
            ...this.state,
            user: res.data
          });
        })
        .catch(err => console.log(err));
    }




    render() {
      return (
        
        <div className="flex w-full  flex-col justify-center items-center  bg-gray-50">
          <User userx={this.state.user}/>
          <Friends />
      
        </div>
        
      )
    }
}

export default App;