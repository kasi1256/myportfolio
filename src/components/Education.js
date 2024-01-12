function Education() {
    return (
        <div className="min-h-screen flex flex-col flex-1 gap-8 items-center justify-center">
            <div className="flex items-center gap-8 float-left">
                <div>
                    <img className="h-48 w-48 rounded-full" src="https://www.columbusstate.edu/scm/_images/logos/CSU_Logo_Primary1.jpg" alt="columbusStateLogo"/>
                    </div>
                <div className="gap-8">
                    <h1 className="mb-2 mt-0 text-5xl font-small text-black">Columbus State University</h1>
                    <p className="font-bold px-3 py-2 text-slate-700 rounded-lg">Masters in Applied Computer Science</p>
                    <p className="font-bold px-3 py-2 text-slate-700 rounded-lg">Software Development Concentration</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-8">
                <div>
                    <img className="h-48 w-48 rounded-full" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Jntuk-logo.png/220px-Jntuk-logo.png" alt="JNTUKLogo"/>
                </div>
                <div className="gap-8">
                    <h1 className="mb-2 text-xl font-medium leading-tight text-black">JNTUK University College of Engineering Vizianagaram</h1>
                    <p className="font-bold px-3 py-2 text-slate-700 rounded-lg">Bachelor of Technology</p>
                    <p className="font-bold px-3 py-2 text-slate-700 rounded-lg">Information Technology Specialization</p>
                </div>
            </div>
        </div>
    );
}

export default Education;