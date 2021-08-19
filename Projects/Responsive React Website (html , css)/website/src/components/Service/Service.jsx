import React , {useState } from 'react'
import './Serv.css'
import lap from '../../img/lap.jpeg'
import AnimationShape from '../Animation/AnimationShape'
import Minicard from '../MiniCard/Minicard'
import play from '../../img/play.png'

const Service = () => {
    const [open ,setOpen] = useState(true)
    return (
        <div className='container'>
            <div className='left'>
                {
                    open ? <img className='pic' src={lap}  ></img> : <video className='Video' autoPlay loop controls
                    src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761' >

                    </video>
                }
                
            </div>

            <div className="right">
                <div className='wrappe' >
                    <h1 className='titl' >
                        How to Start Learning MERN
                    </h1>

                    <p className='dec' >
                        Get a good guide who is working as MERN stack Developer,
                        Search for good HTML,CSS playlists in Youtube or Good Course in Udemy.
                        Learn HTML,CSS , JavaScript. Get perfect with JavaScript , then move to 
                        Node to learn backend after that learn MySql and MongoDb for database. For frontend Learn React.
                    </p>
                        <div className='carcontainer' >
                                <Minicard/>
                                <Minicard/>
                                <Minicard/>
                        </div>
                        <button className='bttn'
                        onClick={()=>setOpen(false)}
                         > <img className='icon' src={play} ></img> How it Works</button>
                </div>

            </div>
            <AnimationShape />
        </div>
    )
}

export default Service
