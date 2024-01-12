
import { useContext } from "react";
import NavigationContext  from "../context/Navigation";

function Link({to,children}){

    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        if(event.keyFn || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return <a href={to} onClick={handleClick} className="mr-5 text-xl font-mono">{children}</a>;
}

export default Link;