//import { VscMail,VscSymbolRuler, } from "react-icons/vsc";
import { AiFillGoogleCircle,AiFillFileText,AiFillGithub,AiFillLinkedin } from "react-icons/ai";
//import { useState } from "react";
import "./tooltip.css";
import resume from '../resume.pdf';
import Myimage from '../resume_image.jpeg';
function Home() {
   
    return (
       <div className="flex flex-wrap h-screen justify-center gap-4">
        <div className="w-6/12 sm:w-4/12 px-4">
            <img className="h-96 w-96 rounded-full object-cover object-center" src={Myimage} alt="my" />
        </div>
        <div className="flex flex-col gap-6">
            <div>
            <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Kasi Viswanath Gundapaneedi</h1>
            </div>
            <div className="flex flex-col gap-2">
                
                <p className="text-5xl font-medium leading-tight text-primary">Currently pursuing Masters in Columbus State University</p>
                    <div className="flex flex-row gap-4">
                        <div className="tooltip"><AiFillGoogleCircle className="size-6"/><span className="tooltiptext">viswanathgundapaneedi97@gmail.com</span></div> 
                            <div className="">
                                <a href={resume} target="_blank"
                                    rel="noreferrer">
                                    <AiFillFileText className="size-6"/>
                                </a>
                                </div>
                                <div className="">
                                <a href="https://github.com/kasi1256" target="_blank"
                                    rel="noreferrer"> <AiFillGithub className="size-6"/></a>
                                </div>
                                <div className="">
                                <a href="https://www.linkedin.com/in/kasi-viswanath-gundapaneedi-18173912a/" target="_blank"
                                    rel="noreferrer"> <AiFillLinkedin className="size-6"/></a>
                                </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Home;