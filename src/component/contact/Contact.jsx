import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [submit,setsubmit]=useState('Send');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_APP_SERVICE, import.meta.env.VITE_APP_TEMP, form.current, import.meta.env.VITE_APP_KEY)
     // console.log(import.meta.env.VITE_APP_SERVICE)
      //console.log(import.meta.env.VITE_APP_TEMP)
      //console.log(import.meta.env.VITE_APP_KEY)
      .then((result) => {
        console.log(result.text);
        setsubmit('Sent');
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <h2 className="font-PlayfairDisplaySC font-bold mx-auto items-center text-center text-black text-4xl mt-10">Contact</h2>
      <div className='w-[10/12] lg:px-[100px] py-2 flex flex-col lg:flex-row justify-center item-center'>
        <div className='lg:w-[800px] flex items-center md:w-[400px] mx-auto w-[300px]'>
          <img src="/assets/Wavy_Bus-19_Single-03.jpg" width={'100%'} height={'100%'} alt="" />
        </div>
        <div className='w-full flex items-center justify-center'>
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-md mt-8 p-4  rounded shadow-md font-sen">
            <div className="mb-4">
              <label htmlFor="from_name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" name="from_name" id="from_name" required className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="from_email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" name="from_email" id="from_email" required className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea name="message" id="message" required className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#fff] text-black hover:text-gray-600 font-sen font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
             <div className='flex justify-center items-center gap-10'>
              {submit}
              <img src="/assets/icons8-sent.gif" alt=""  className='w-[20px]'/>
             </div>
              </button>
          </form>
        </div>
      </div>
    </div>

  );
};
export default Contact;