import React from "react";
import HumanVector from '../assets/human-vector.svg'
import {Button} from '../styled/index'
const Header : React.FC = () =>{
    return(
        <section id="header">
            <div className="header-space">
                <div className="header-text-box">
                    <h1>Hi, I am Burak</h1>
                    <h2>I'm Designer</h2>
                    <h3>I am a modern website and Javascript developer. At the same time; Blogger and Designer.</h3>
                    <Button lg>Hire Now</Button>
                </div>
                <div className="header-image-box">
                    <img src={HumanVector} alt="Developer Man" />
                </div>


            </div>
        </section>
    )
}

export default Header