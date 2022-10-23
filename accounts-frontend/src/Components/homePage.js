import React, {useEffect, useState}from 'react'
import UserCreation from './userCreation'
import UserSearch from './userSearch'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage =()=>{
    const [data, setData]= useState('hi');

    // const getData = async()=>{
    //     let response= await Axios.get('http://localhost:5000/getUserDetails')
    //     console.log(response)
    //     setData(response.data.mobileNo);
    // }

    // useEffect(()=>{
    //     getData()
    // },[]);

    const handleClick=async(e)=>{
        console.log('hi')
        return (<Link to='/userCreation'>UserCreation</Link>); 
    }
    return (
        <div>
            <h1>homepage</h1>
            <div><Link to='/'>Homepage</Link></div>
            <div><Link to='/userSearch'>UserSearch</Link></div>
            <div><Link to='/userCreation'>UserCreation</Link></div>
            
<input type='button' value='UserCreation' onClick={e=>handleClick(e)}></input>
           {/* <UserSearch />
            <UserCreation/>  */}
                {/* <link path='/usersList'>UserList</link> */}
        </div>

    )
}

export default HomePage