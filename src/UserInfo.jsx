import { useState, useEffect } from 'react'
import fetchRandomUser from './services/api'

const UserInfo = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const userData = await fetchRandomUser();
            setUser(userData)
        } 
        getUser()
    }, [])

    /*if (!user) return <h3>Loading..</h3> yet another option */
  return (
    <div>
     <h2> User Info</h2>
   
               {/*} <pre>
                    {JSON.stringify(user, null, 2)}
  </pre> */}
  {user ? ( // Check if user data is available
                <div>
                    <h3>{user.name.title}. {user.name.first} {user.name.last}</h3>
                    <img src={user.picture.medium} alt={`user `} />
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
            {/*<h3>{user?.name?.title?} {user?.name?.first?} {user?.name?.last?}</h3> another option to get this to work */}
           
    </div>
  )
}

export default UserInfo
