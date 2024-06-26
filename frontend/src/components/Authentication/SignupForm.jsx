import LoginImage from '../../assets/login.jpg'
import Logo from  '../../assets/logo.jpg'
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function SignupForm() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "fade-up",
        });
      }, []);
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      fullName: '',
      tel:'',
      confirm_password:'',
      username: '',

    })
            // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

      // Handle form submission
      const handleSubmit =  (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/register', formData, {  headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow requests from all origins
          }})
        .then(response => {
            if (response.status === 201) {
                navigate('/login')
            }else{
                console.error('Sign up failed' );
            }
        }).catch (error =>{
           console.error('error with signup', error);
        })
        setFormData({
          email: '',
          password: '',
          fullName: '',
          tel:'',
          confirm_password:'',
          username: '',
        });
    };

  return (
    <>
    <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
        {/* login container */}
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
            {/* form section */}
            <div className='sm:w-1/2 px-10'>
                <img src={Logo} className='rounded-full h-12 w-12 mx-auto mr-auto mt-12 ' alt="Logo" />
                <h2 className='text-primary font-bold text-center'>GIGI-Travelgirl</h2>
                <p className='text-sm mt-8'>Enter your details to create your account.</p>

                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} placeholder='FullName' className='p-2 mt-8 border rounded-xl'/>
                <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} placeholder='UserName' className='p-2 mt-8 border rounded-xl'/>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder='Email' className='p-2 mt-2 border rounded-xl'/>
                    <input type="tel" name="tel" id="tel" value={formData.tel} onChange={handleInputChange} placeholder='Phone Number' className='p-2 mt-2 border rounded-xl'/>

                    <div className='relative'>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} placeholder='Password' className=' w-full p-2 border rounded-xl' />
                    <svg className='fill-gray-400 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                      </svg>

                    </div>

                    <div className='relative'>
                    <input type="password" name="confirm_password" id="confirm_password" value={formData.confirm_password} onChange={handleInputChange} placeholder='Confirm password' className=' w-full p-2 border rounded-xl' />
                    <svg className='fill-gray-400 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>


                    </div>
                    
                    <button type="submit" className='bg-primary text-white py-2 rounded-xl'>Sign Up</button>
                </form>

                <div className='text-gray-400 mt-10 grid grid-cols-3 items-center'>
                    <hr className='border-gray-400' />
                    <p className='text-center'>or</p>
                    <hr className='border-gray-400' />
                </div>
                
                <button type="submit" className='text-sm flex items-center justify-center bg-white border py-2 w-full rounded-xl mt-5'>
                    <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Login with Google</button>
                        
                  <div className='w-full flex items-center justify-center'>
                      <p className='text-[#060606] text-sm font-normal'>Already have an account? <Link to="/login" className='text-primary font-semibold underline underline-offset-2 cursor-pointer'>Login</Link></p>
                      </div>
                

            </div>

            {/* image section */}
<div className='w-1/2 sm:block hidden relative'> {/* Added relative positioning */}
    <img src={LoginImage} className='rounded-2xl h-full' alt="cover image" />
    {/* text */}
    <div className="absolute top-[20%] left-[40%] transform -translate-x-1/3 -translate-y-1/2 text-center text-white">
        <h2 className="text-white font-bold text-4xl my-4">Planning a trip?</h2>
        <p className="text-white text-xl font-normal">GIGI-TravelGirl got you covered</p> 
    </div>
</div>

        </div>

    </div>
    </>

  )
}

export default SignupForm