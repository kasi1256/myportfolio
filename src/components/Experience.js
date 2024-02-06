function Experience() {
    return (
        <div className="flex flex-col h-screen items-center gap-4">
        <div className="pt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" alt="Infosys Logo" />
        </div>
        <div>
            <p className="ms-2 font-semibold text-gray-500 dark:text-gray-400">I have worked in Infosys Limited, Hyderabad, India for four years</p>
        </div>
        <div>
            <p className="ms-2 font-semibold text-gray-500 dark:text-gray-400">Below are the projects I have worked on during my work experience</p>
        </div>
        <div className="grid grid-cols-2 content-center">
            <div>
                <div className="pl-20"><h1 className=" mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 md:text-3xl lg:text-3xl dark:text-white">Intel Technologies Limited</h1>
                <h4 className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 underline">Roles and Responsibillities</h4>
                </div>
                <div className="pl-20">
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Development of REST APIs using Java Spring Boot
                    </p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Production enhancement and support for Java applications
                    </p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Applied Java and Python code modules in Mule 4 Components to improve performance
                    </p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Conversion of Java code to Mule 4 applications 
                    </p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Migration of Mule3.9 applications to Mule4
                    </p>
                    </div>
            </div>
            <div>
            <div>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 md:text-3xl lg:text-3xl dark:text-white">Cypress Semiconductor Corporation</h1>
                <h4 className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400 underline">Roles and Responsibillities</h4>
                    </div><p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Development, enhancement, and support for the daily audits automated using Python
programming
                    </p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Migrated the Java based audits to Python
                    </p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Performed enhancement and Support activities for EDI transactions using webMethods
                    </p>
                    <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Handled Production support and performed daily audits for the client delivery.
                    </p>
                    
            </div>
        </div>
        </div>
    );
}

export default Experience;