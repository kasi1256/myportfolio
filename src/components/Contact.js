import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
//hFiIzp48SaSfSYM6-
//template_iu1ueyg
//myEmailService
    const [formData,setFormData] = useState({name:"",email:"",message:"",to:"Kasi Viswanath"});

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formData.email);
        
        emailjs.send('myEmailService', 'template_kyy2q8e', formData,"hFiIzp48SaSfSYM6-")
        .then(function(response) {
            //console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });

        setFormData({...formData,name:"",email:"",message:"",to:"Kasi Viswanath"});
    };

    const handleNameChange = (event) => {
        //console.log(event);
        const data = {...formData,name:event.target.value};
        setFormData(data);
    };

    const handleEmailChange = (event) => {
        const data = {...formData,email:event.target.value};
        setFormData(data);
    };

    const handleMessageChange = (event) => {
        const data = {...formData,message:event.target.value};
        setFormData(data);
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-sky-100 ring-3 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-sky-700 decoration-wavy">
          Contact Me
        </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-2">
                <label className="text-gray-700">Name : </label>
                <input type="text" className="w-full
            block px-2 py-2 mt-2
            border-gray-700
            rounded-md
            shadow-sm
            " value={formData.name} onChange={handleNameChange} />
                </div>
                <div className="mb-2">
                <label className="text-gray-700">Email : </label>
                <input type="email" className="block
            w-full
            mt-2 px-2 py-2
            border-gray-300
            rounded-md
            shadow-sm
            " value={formData.email} onChange={handleEmailChange} />
                </div>
                <div className="mb-2">
                <label className="text-gray-700"> Message : </label>
                <textarea rows="6" className="block
            w-full
            mt-2 px-2 py-2
            border-gray-300
            rounded-md
            shadow-sm
            " value={formData.message} onChange={handleMessageChange}></textarea>
                </div>
                <div class="mb-6">
                <button className="block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            bg-gray-300
            " >Send Message</button>
            </div>
            </form>
        </div>
        </div>
    );
}

export default Contact;