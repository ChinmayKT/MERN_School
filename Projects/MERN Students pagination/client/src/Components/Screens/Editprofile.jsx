import React, {useState , useEffect}from 'react';
import axios from 'axios'

import {useHistory} from 'react-router-dom'


const EditProfile = () => {

    const history =  useHistory()
    const [profile , setProfile ] = useState({
        username : '',
        email: ''     
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
            photoUrl : userdata.photoUrl
           })
       }
    }
    
    getData()
    
    },[]) 

    const onChangeInput =  (e) => {
        const {name , value} = e.target;
        setProfile({...profile , [name]: value})
    }
    
    const editProfile = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
            if(token){
                const {username , email } = profile;
               
                const updateProfile = {
                    username , email
                }
               
               const newPro = await axios.put('/users/profileEdit', updateProfile , {
                    headers : {Authorization : localStorage.getItem('tokenStore')}
                })
              

                return history.push('/profile')
            }
        } catch (err) {
            console.log(err)
        }
    }



    const backHandler = ()=>{
        return history.push('/profile')
    }
    return (
        <div className="create-note" >
        <h2>Profile</h2>
       
     
        <form  autoComplete ="off" onSubmit={editProfile}  >
            <div className="row" >
                <label htmlFor="name" >Name:{profile.username} </label>
                <input type="text" value={profile.username} id="name" placeholder="Name"
                name = "username" onChange = {onChangeInput}   />
            </div>
            <br></br>
            <div className="row" >
                <label htmlFor="email" >Email :{profile.email}  </label>
                <input  type="text" value={profile.email} id="email" placeholder="Email"
                name = "email"  onChange = {onChangeInput}  />
            </div>
            <br></br>
         
            <button  type="submit" >Update</button>
            <button onClick={backHandler}  type="submit" >Back</button>
        </form>
        
    </div>
    )
}

export default EditProfile
