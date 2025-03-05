import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(''); // New state for status message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(''); // Clear any previous messages

    emailjs
      .send(
        'service_vosqg83',
        'template_946frhs',
        {
          from_name: form.name,
          to_name: 'Christopher Nwokwule',
          from_email: form.email,
          from_phone: form.phone,
          to_email: 'christopher_webdev@outlook.com',
          message: form.message,
        },
        'lE1w_v1liEXZNF7jS'
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage('Thank you! I will get back to you as soon as possible.'); // Set success message
          setForm({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setStatusMessage('Something went wrong. Please try again.'); // Set error message
        }
      );
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Phone Number</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out">
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>

          {/* Status Message */}
          {statusMessage && (
            <p className={`text-center mt-4 ${statusMessage.includes('Thank you') ? 'text-green-500' : 'text-red-500'}`}>
              {statusMessage}
            </p>
          )}
        </form>
      </motion.div>

      {/* Contact Details Section */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-[0.25] bg-eerieBlack p-6 rounded-2xl flex flex-col gap-6">
        <h3 className="text-taupe text-[22px] font-bold">Contact Details</h3>
        
        <div className="flex items-center gap-4">
          <svg className="w-6 h-6 text-timberWolf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16v16H4z"/>
          </svg>
          <span className="text-timberWolf text-[16px]">christopher_webdev@outlook.com</span>
        </div>

        <div className="flex items-center gap-4">
          <svg className="w-6 h-6 text-timberWolf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16v16H4z"/>
          </svg>
          <span className="text-timberWolf text-[16px]">+234 704 279 4511</span>
        </div>

        <div className="flex items-center gap-4">
          <svg className="w-6 h-6 text-timberWolf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16v16H4z"/>
          </svg>
          <span className="text-timberWolf text-[16px]">
            WhatsApp: <a href="https://wa.me/2347042794511" target="_blank" rel="noopener noreferrer" className="text-battleGray underline">Chat Now</a>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

// import { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
// import { styles } from '../styles';
// import { SectionWrapper } from '../hoc';
// import { slideIn } from '../utils/motion';
// import { send, sendHover } from '../assets';

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // sign up on emailjs.com (select the gmail service and connect your account).
//     //click on create a new template then click on save.
//     emailjs
//       .send(
//         'serviceID', // paste your ServiceID here (you'll get one when your service is created).
//         'templateID', // paste your TemplateID here (you'll find it under email templates).
//         {
//           from_name: form.name,
//           to_name: 'YourName', // put your name here.
//           from_email: form.email,
//           to_email: 'youremail@gmail.com', //put your email here.
//           message: form.message,
//         },
//         'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert('Thank you. I will get back to you as soon as possible.');

//           setForm({
//             name: '',
//             email: '',
//             message: '',
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.log(error);
//           alert('Something went wrong. Please try again.');
//         }
//       );
//   };

//   return (
//     <div
//       className="-mt-[8rem] xl:flex-row flex-col-reverse 
//       flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn('left', 'tween', 0.2, 1)}
//         className="flex-[0.75] bg-jet p-8 rounded-2xl">
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-10 flex flex-col gap-6 font-poppins">
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your name?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">Your Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your email?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-timberWolf font-medium mb-4">
//               Your Message
//             </span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="What's your message?"
//               className="bg-eerieBlack py-4 px-6
//               placeholder:text-taupe
//               text-timberWolf rounded-lg outline-none
//               border-none font-medium resize-none"
//             />
//           </label>

//           <button
//             type="submit"
//             className="live-demo flex justify-center sm:gap-4 
//             gap-3 sm:text-[20px] text-[16px] text-timberWolf 
//             font-bold font-beckman items-center py-5
//             whitespace-nowrap sm:w-[130px] sm:h-[50px] 
//             w-[100px] h-[45px] rounded-[10px] bg-night 
//             hover:bg-battleGray hover:text-eerieBlack 
//             transition duration-[0.2s] ease-in-out"
//             onMouseOver={() => {
//               document
//                 .querySelector('.contact-btn')
//                 .setAttribute('src', sendHover);
//             }}
//             onMouseOut={() => {
//               document.querySelector('.contact-btn').setAttribute('src', send);
//             }}>
//             {loading ? 'Sending' : 'Send'}
//             <img
//               src={send}
//               alt="send"
//               className="contact-btn sm:w-[26px] sm:h-[26px] 
//               w-[23px] h-[23px] object-contain"
//             />
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, 'contact');
