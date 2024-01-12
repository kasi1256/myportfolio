import { useEffect,createContext,useState } from "react";

const NavigationContext = createContext();

function NavProvider({ children }){

    const [currentPath,setCurrentpath] = useState(window.location.pathname);

    useEffect(() => {
        const popHandler = () => {
            setCurrentpath(window.location.pathname);
        };

        window.addEventListener('popstate',popHandler);

        return () => {
            window.removeEventListener('popstate',popHandler);
        }
    },[]);

    const navigate = (to) => {
        window.history.pushState({},'',to);
        setCurrentpath(to);
    }

    const data = {
        currentPath,
        navigate
    };

    return (<NavigationContext.Provider value={data}>
        {children}
    </NavigationContext.Provider>);

}

export { NavProvider };
export default NavigationContext;