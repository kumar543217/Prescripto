import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* ------------Left Section ---------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
                </div>

                {/* ------------Center Section ---------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className=' flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* ------------Right Section ---------- */}
                <div>
                    <p className=' text-xl font-medium mb-5 whitespace-nowrap'>GET IN TOUCH</p>
                    <ul className=' flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>deepak@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* ------------Copyright Text-------------- */}
            <hr />
            <p className=' py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
        </div>
    )
}

export default Footer


































// const Footer = () => {
//     return (
//         <footer className="bg-white text-gray-700 py-8 border-t border-gray-200">
//             <div className="container mx-auto px-4 flex flex-wrap justify-between">
//                 {/* Logo and Text */}
//                 <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
//                     <div className="flex items-center mb-4">
//                         <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
//                             {/* Icon Placeholder */}
//                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                             </svg>
//                         </div>
//                         <h2 className="ml-3 text-xl font-bold text-gray-800">Prescripto</h2>
//                     </div>
//                     <p className="text-sm text-gray-600">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
//                     </p>
//                 </div>

//                 {/* Links */}
//                 <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
//                     <h3 className="text-gray-800 font-semibold mb-3">Company</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</a></li>
//                     </ul>
//                 </div>

//                 {/* Contact */}
//                 <div className="w-full sm:w-1/3">
//                     <h3 className="text-gray-800 font-semibold mb-3">Get in Touch</h3>
//                     <ul className="space-y-2">
//                         <li className="text-gray-600">+1-212-456-7890</li>
//                         <li className="text-gray-600">greatstackdev@gmail.com</li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Bottom Text */}
//             <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-600 text-sm">
//                 <p>Copyright © 2024 GreatStack – All Right Reserved.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
