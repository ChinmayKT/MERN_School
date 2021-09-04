import React, {useState , useEffect}from 'react';
import axios from 'axios'

import {Link }from 'react-router-dom';

const Profile = () => {

    const [profile , setProfile ] = useState({
            username : '',
            email: '',
            password: '',
          
    })

    useEffect(()=>{
       const getData = async () => {
           const data = await axios.get('/users/profile' , {
               headers : {Authorization : localStorage.getItem('tokenStore')}
           })
        
           const userdata = data.data.user
       
         
           if(userdata){
               setProfile({
                   username : userdata.username,
                   email : userdata.email,
                  
                   
               })
           }
       }

       getData()

    },[])

    return (
        <div className="create-note" >
            <h2>Profile</h2>
         
            <form  autoComplete ="off"  >
                <div className="row" >
                    <label htmlFor="name" >Name: {profile.username} </label>
                
                </div>
                <br></br>
                <div className="row" >
                    <label htmlFor="email" >Email : {profile.email} </label>
               
                </div>
             
              
                <br></br>
                <Link className="edit" to="/profileEdit"> Edit Profile</Link>
            </form>
            
        </div>
    )
}

export default Profile
