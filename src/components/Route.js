
import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Route({path,children})
{
    const paths = ["/","/about","/skills","/experience","/contact","/education"];
    const { currentPath,navigate } = useContext(NavigationContext);
    let k = paths.indexOf(currentPath);
        if ( k === -1){
            navigate("/");
        }
    console.log(currentPath);
        if(path === currentPath){
            //console.log(path);
            return children;
        }
        
        return;
}



export default Route;