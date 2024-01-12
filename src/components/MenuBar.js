import Link from "./Link";

function MenuBar(){
    const links = [
        {
            label : "Home",
            to : "/"
        },
        {
            label : "About",
            to : "/about"
        },
        {
            label : "Education",
            to : "/education"
        },
        {
            label : "Skills",
            to : "/skills"
        },
        {
            label : "Experience",
            to : "/experience"
        },
        {
            label : "Contact Me",
            to : "/contact"
        }
    ];

    const renderedData = links.map((link) => {
        return <Link to={link.to} key={link.label} >{link.label}</Link>;
    });

    return (
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {renderedData}
            </div>
    );
}

export default MenuBar;