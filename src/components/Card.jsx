import React from 'react'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import '../App.css'

function Card({title, icon}) {

    const renderIcon = () => {
        switch(icon){
            case "BsInstagram":
                console.log("insta")
                return (
                    <span className='icon-container'>
                        <BsInstagram/>
                    </span>
                )
            case "BsTwitter":
                return (
                    <span className='icon-container'>
                        <BsTwitter/>
                    </span>
                )
            case "BsYoutube":
                return (
                    <span className='icon-container'>
                        <BsYoutube/>
                    </span>
                )
            default:
                return null
        }
    }

    console.log(icon)
    return (
        <div className={title === "TWITTER" || title === "YOUTUBE" ? "card-blackwhite" : "card-colour"}>
            {renderIcon()}
            <h2 className='title'>{title}</h2>
            <p className='card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis optio maxime perferendis ratione tempore corrupti ut est in nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, accusamus.</p>
            <button className={title === "TWITTER" || title === "YOUTUBE" ? "btn-blackwhite" : "btn-colour"} >READ MORE</button>
        </div>
        
    )
}

export default Card