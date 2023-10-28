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
  return (
    <div>
      User Info
    </div>
  )
}

export default UserInfo
