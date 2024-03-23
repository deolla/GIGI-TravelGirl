import LoginImage from '../../assets/login.jpg'
import Logo from  '../../assets/logo.jpg'
import GoogleIcon from '../../assets/google.webp'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



function LoginForm({ onToggleForm }) {
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
            <img src={LoginImage} className='object-cover w-full h-full' alt="cover image" />
        </div>

        <div className='w-1/2 bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
            <img className="mr-auto mt-12 mx-auto h-12 w-12 rounded-full" src={Logo} alt="GIGI-TravelGirl logo" />
            <span className="mb-10 mt-1 text-xl text-primary font-bold">GIGI-TravelGirl</span>

            <div className='flex flex-col w-full max-w-[500px]'>
                <div className='flex flex-col mb-2 w-full'>
                    <p className='text-base mb-2'>Welcome back! Enter your details.</p>
                </div>

                <div className='w-full flex flex-col'>
                    <input type="email" name="" id="" placeholder='Email' className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none' required />
                    <input type="password" name="" id="" placeholder='Password' className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none' required />
                </div>

                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox" className='w-4 h-4 mr-2' name="" id="" />
                        <p className='text-sm'>Remember me</p>
                    </div>

                    <p className='text-sm cursor-pointer font-medium whitespace-nowrap underline underline-offset-2'>Forgot password?</p>
                </div>

                <div className='w-full flex flex-col my-4'>
                    <button className='w-full text-white bg-primary text-center p-4 flex items-center justify-center rounded-md cursor-pointer'>
                        Log In
                    </button>
                </div>

                <div className='relative py-2 w-full flex items-center justify-center'>
                    <div className='w-full bg-black/30 h-[1px]'></div>
                    <p className='absolute bg-[#f5f5f5] text-black/80 text-lg'>or</p>
                </div>

                <div className='flex items-center bg-white w-full my-2 text-[#060606] text-center font-semibold p-4 border-2 border-black/30 rounded-md cursor-pointer '>
                    <div className='flex items-center justify-center mx-auto'>
                    <img src={GoogleIcon} className='h-6 ' alt="Google logo" />
                    Login with Google
                    </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-center'>
            <p className='text-[#060606] text-sm font-normal'>Don't have an account yet? <Link to="#" onClick={onToggleForm} className='text-primary font-semibold underline underline-offset-2 cursor-pointer'>Sign Up</Link></p>
            </div>
        </div>
    </div>
</div>

  )
}

export default LoginForm