import SignupImage from '../../assets/login.jpg';
import Logo from  '../../assets/logo.jpg';
import GoogleIcon from '../../assets/google.webp';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SignupForm({ onToggleForm }) {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "fade-up",
        });
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-full max-w-5xl flex-grow flex justify-center'>
                <div className='relative w-1/2 flex flex-col'>
                    <div className='absolute top-[20%] left-[10%] flex flex-col'>
                        <h1 data-aos="fade-up" className='text-white font-bold text-4xl my-4 '>planning on a trip?</h1>
                        <p data-aos="fade-up" className='text-white text-xl font-normal'>GIGI-TravelGirl got you covered</p>
                    </div>
                    <img src={SignupImage} className='object-cover w-full h-full' alt="cover image" />
                </div>

                <div className='w-1/2 bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                    <img className="mr-auto mt-12 mx-auto h-12 w-12 rounded-full" src={Logo} alt="GIGI-TravelGirl logo" />
                    <span className="mb-10 mt-1 text-xl text-primary font-bold">GIGI-TravelGirl</span>

                    <div className='flex flex-col w-full max-w-[500px]'>
                        <div className='flex flex-col mb-2 w-full'>
                            <p className='text-base mb-2'>Create your account.</p>
                        </div>

                        <div className='w-full flex flex-col'>
                            <input type="text" name="" id="" placeholder='FullName' className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none' required />
                            <input type="email" name="" id="" placeholder='Email' className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none' required />
                            <input type="phone" name="" id="" placeholder='Phone number' className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none' required />
                            <input type="password" name="" id="" placeholder='Password' className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none' required />
                            <input type="password" name="" id="" placeholder='confirm password' className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none' required />
                        </div>

                        <div className='w-full flex flex-col my-4'>
                            <button className='w-full text-white bg-primary text-center p-4 flex items-center justify-center rounded-md cursor-pointer'>
                                Sign Up
                            </button>
                        </div>

                        <div className='relative py-2 w-full flex items-center justify-center'>
                            <div className='w-full bg-black/30 h-[1px]'></div>
                            <p className='absolute bg-[#f5f5f5] text-black/80 text-lg'>or</p>
                        </div>

                        <div className='flex items-center bg-white w-full my-2 text-[#060606] text-center font-semibold p-4 border-2 border-black/30 rounded-md cursor-pointer '>
                        <div className='flex items-center justify-center mx-auto'>
                            <img src={GoogleIcon} className='h-6' alt="Google logo" />
                            Signup with Google
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                    <p className='text-[#060606] text-sm font-normal'>Already have an account? <Link to="#" onClick={onToggleForm} className='text-primary font-semibold underline underline-offset-2 cursor-pointer'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
