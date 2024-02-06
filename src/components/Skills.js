import Java from "../java.svg";
import JavaScript from "../js.svg";
import Python from "../python.svg";
import Rt from "../logo192.png";
import Sp from "../spring.svg";
import Boot from "../boot.png";

function Skills() {
    return (
        <div className="pl-35 min-h-screen grid grid-cols-4 gap-4 items-center justify-center">
            <div className="flex flex-col items-center">
                <img className="h-48 w-48 rounded-full" src={Java} alt="java logo"/>
                <div>
                    <strong>Java</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-48 w-48 rounded-full" alt="java logo" src={Java}/>
                    <div>
                        <strong>J2EE</strong>
                    </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full" src={Python} alt="Python logo"/>
                <div>
                    <strong>Python</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full" src={Rt} alt="react icon"/>
                <div>
                    <strong>React Js</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full" src={Sp} alt="Spring"/>
                <div>
                    <strong>Spring Framework</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full" src={Boot} alt="Spring boot"/>
                <div>
                    <strong>Spring Boot</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full object-center" src="https://www.svgrepo.com/show/197982/html.svg" alt="html logo"/>
                <div>
                    <strong>HTML</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full" src={JavaScript} alt="JS logo"/>
                <div>
                    <strong>JavaScript</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS logo"/>
                <div>
                    <strong>CSS</strong>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <img className="h-48 w-48 rounded-full" alt="Oracle logo" src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"/>
                <div>
                    <strong>SQL</strong>
                </div>
            </div>
            
        </div>
    );
}

export default Skills;