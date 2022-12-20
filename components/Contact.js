import Image from 'next/image';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import {EXTERNAL_LINKS} from "../externalLinks";
import {useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name, email, message, subject,
    };

    emailjs.send('service_m4octi9', 'template_w17iqro', templateParams, 'O0HZb2komZIeWMn68')
      .then((response) => {
        alert(response.text);
        clearForm();
      }, (err) => {
        alert(err);
      });
  }

  return (
    <section id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={ContactImg} alt="/"/>
              </div>
              <div>
                <h2 className="py-2">Abdelmejid Oumer Ali</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact me and let&apos;s
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <ul className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  {EXTERNAL_LINKS.map((exLink) => (
                    <li key={exLink.linkUrl}>
                      <a href={exLink.linkUrl}
                         className="inline-block rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">{exLink.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                  <label htmlFor="name" className="uppercase text-sm py-2">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} id="name"
                         className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)}
                         className="border-2 rounded-lg p-3 flex border-gray-300" type="email" id="email"/>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">Subject</label>
                  <input value={subject} onChange={(e) => setSubject(e.target.value)}
                         className="border-2 rounded-lg p-3 flex border-gray-300" type="text" id="subject"/>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="msg" className="uppercase text-sm py-2">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                            className="border-2 rounded-lg p-3 border-gray-300" rows="10" id="msg"/>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-500"
            >
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default Contact;
