import React from 'react';




class AllFriends extends React.Component {

    render() {
        const { frs } = this.props;
        return (
            <>
                <div className="p-4">
                    <div className="flex-col  flex justify-center items-center">
                        <div className="flex-shrink-0">


                                <img 
                                alt="profil" 
                                src={frs.avatar_url}
                                className="mx-auto object-cover rounded-full h-20 w-20 " 
                                />
                            
                        </div>
                        <div className="mt-2 text-center flex flex-col">
                            <span className="text-gray-600 dark:text-white text-lg font-medium">
                                {frs.login}
                    </span>
                           
                        </div>
                    </div>
                </div>
           

            </>
        )
    }
}

export default AllFriends;