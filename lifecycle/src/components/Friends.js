import React from 'react';
import AllFriends from './AllFriends';
import axios from 'axios';

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        console.log("CDM")
        axios.get("https://api.github.com/users/SavvyPlusPlus/followers")
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (

            <>
                <div className="shadow-lg rounded-2xl  p-4 bg-white dark:bg-gray-800 mt-8 mb-10"> 

                    <p className="text-center text-2xl font-bold text-gray-800 dark:text-white">
                        My Friends List
                    </p>

                    <p class="text-center mb-12 text-l font-normal text-gray-500 dark:text-gray-300">
                        Meet the crew!
                    </p>

                    
                    <div className="flex items-center flex-col md:flex-row justify evenly">


                        {this.state.friends.map(frs => (
                        <AllFriends key={frs.id} frs={frs} />
                    ))}
                            


                    </div>
                    
                   


                </div>
            </>
        )
    }
}

export default Friends;