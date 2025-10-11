import { React, useState } from 'react'
import { BsFillPatchCheckFill, BsGlobe } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import Modal from '../Components/Modal.jsx';
import { MdSunny, MdOutlineSupportAgent, MdDesignServices } from "react-icons/md";
import { IoIosArrowDroprightCircle, IoMdMail } from "react-icons/io";
function Services() {

        // Modals
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    
  return (
    <div>

        <div className='mt-10'>                
            <h2 className='dark:text-white text-xl text-center font-semibold py-4'>My Services</h2>
            <h4 className='dark:text-white text-2xl text-center py-2'>What I can Offer</h4>
        </div>
        <div className='flex flex-wrap justify-center'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3 flex-shrink-0'>
                <div className='shadow-lg my-2 p-10 lg:p-8 pb-0 bg-white rounded-lg dark:bg-[#142f5a] dark:text-white'>
                    <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500'><BsGlobe/></div>
                    <h3 className='text-lg font-semibold mt-5'>Web Development</h3>
                    <div className='flex py-5 my-2'>
                        <button className='flex items-center' onClick={() => setOpen(true)}>See More 
                            <IoIosArrowDroprightCircle className='dark:text-yellow-300 text-green-500'/>
                        </button>
                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className='text-center w-80 my-5'>
                                <BsGlobe size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                <div className='mx-auto my-4 w-80 text-justify'>
                                    <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>Web Development</h3>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Building websites with HTML, CSS, and JavaScript.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Utilizing frameworks such as Bootstrap and Tailwind.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Integration of website to Progressive Web App &#40;PWA&#41;</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Less experience with Wordpress or Wix but can manage.</p>
                                    </div>
                                </div>
                            </div>  
                        </Modal>
                    </div>
                </div>
                <div className='shadow-lg my-2 p-10 lg:p-8 pb-0 bg-white rounded-lg dark:bg-[#142f5a] dark:text-white'>
                    <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500 '><MdOutlineSupportAgent/></div>
                    <h3 className='text-lg font-semibold mt-5'>IT Support Service</h3>
                    <div className='flex py-5 my-2'>
                        <button className='flex items-center' onClick={() => setOpen2(true)}>See More <IoIosArrowDroprightCircle 
                        className='dark:text-yellow-300 text-green-500'/>
                        </button>
                        <Modal open={open2} onClose={() => setOpen2(false)}>
                            <div className='text-center w-80 my-5'>
                                <MdOutlineSupportAgent size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                <div className='mx-auto my-4 w-80 text-justify'>
                                    <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>IT Support Service</h3>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Analyzing and identifying vulnerabilities of computer systems.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Proficiency in handling and resolving customer's inquiries.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Providing assistance in troubleshooting technological problems.</p>
                                    </div>
                                </div>
                            </div>  
                        </Modal>
                    </div>
                </div>
                <div className='shadow-lg my-2 p-10 lg:p-8 pb-0 bg-white rounded-lg dark:bg-[#142f5a] dark:text-white'>
                    <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500'><MdDesignServices/></div>
                    <h3 className='text-lg font-semibold mt-5 text-center'>UI/UX Design</h3>
                    <div className='flex py-5 my-2'>
                        <button className='flex items-center' onClick={() => setOpen3(true)}>See More <IoIosArrowDroprightCircle 
                        className='dark:text-yellow-300 text-green-500'/>
                        </button>
                        <Modal open={open3} onClose={() => setOpen3(false)}>
                            <div className='text-center w-80 my-5'>
                                <MdDesignServices size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                <div className='mx-auto my-4 w-80 text-justify'>
                                    <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>UI/UX Design</h3>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Proficiency in using Photoshop, Canva, or Figma.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Executing high quality design like landing pages, icons, logos, etc.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Delivering satisfying user experience and responsiveness.</p>
                                    </div>
                                </div>
                            </div>  
                        </Modal>
                    </div>
                </div>
                <div className='shadow-lg my-2 p-10 lg:p-8 pb-0 bg-white rounded-lg dark:bg-[#142f5a] dark:text-white'>
                    <div className='flex justify-center text-5xl dark:text-yellow-300 text-green-500'><SiAdobephotoshop/></div>
                    <h3 className='text-lg font-semibold mt-5 text-center'>Pixel Animation</h3>
                    <div className='flex py-5 my-2'>
                        <button className='flex items-center' onClick={() => setOpen4(true)}>See More <IoIosArrowDroprightCircle 
                        className='dark:text-yellow-300 text-green-500'/>
                        </button>
                        <Modal open={open4} onClose={() => setOpen4(false)}>
                            <div className='text-center w-80 my-5'>
                                <SiAdobephotoshop size={56} className='mx-auto text-green-500 dark:text-yellow-300'/>
                                <div className='mx-auto my-4 w-80 text-justify'>
                                    <h3 className='text-lg font-black text-gray-800 my-5 text-center dark:text-white'>Pixel Animation</h3>
                                    <div className='text-sm text-gray-500 mb-2 '>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Proficiency in using Photoshop and Adobe Animate.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Delivering high quality Storytelling 2D Sprite Animations.</p>
                                    </div>
                                    <div className='text-sm text-gray-500 mb-2'>
                                        <p className='flex justify-center dark:text-white'>
                                            <BsFillPatchCheckFill size={20} className='text-green-500 dark:text-yellow-300'/>
                                            Creating storyboards, effects, and custom 2D Sprite Art.</p>
                                    </div>
                                </div>
                            </div>  
                        </Modal>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services