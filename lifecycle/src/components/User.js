import React from 'react';

class User extends React.Component {

    render() {
        const { userx } = this.props;

       
        return (

            <div className="shadow-lg rounded-2xl w-80 p-4 bg-white dark:bg-gray-800 mt-8">
                <div className="flex flex-row items-start gap-4">
                    <img
                        src={userx.avatar_url}
                        alt={userx.name}
                        className="w-28 h-28 rounded-lg"
                    />

                    {/* --- NAME & USER-NAME --- */}

                    <div className="h-28 w-full flex flex-col justify-between">
                        <div>
                            <p className="text-gray-800 dark:text-white text-xl font-medium">
                                {userx.name}
                            </p>

                            <p class="text-gray-400 text-xs">
                                {userx.login}
                            </p>
                        </div>

                        {/* --- FOLLOWINF & FOLLOWERS + --- */}
                        <div className="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">

                                {/* --- FOLLOWING --- */}
                                <p className="flex flex-col">
                                    Friends
                                    <span className="text-black dark:text-yellow-500 font-bold">
                                        
                                        {userx.following}
                                    </span>
                                </p>

                                {/* --- FOLLOWERS --- */}
                                <p className="flex flex-col">
                                    Followers
                                    <span class="text-black dark:text-yellow-500 font-bold">
                                        
                                        {userx.followers}
                                    </span>
                                </p>

                                {/* --- REPOS --- */}
                                <p className="flex flex-col">
                                    Repos
                                    <span className="text-black dark:text-yellow-500 font-bold">
                                        
                                        {userx.public_repos}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-4 mt-6">
                    <button type="button" className="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 ">
                        Github
                    </button>
                    <button type="button" className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-yellow-300 hover:bg-yellow-400 ">
                        View friends
                    </button>
                </div>

                




            </div>
        )
    }
}

export default User;