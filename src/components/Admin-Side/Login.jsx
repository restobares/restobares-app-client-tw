import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    
    let idResto = 1;

    const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };

    const navigate = useNavigate();

    return (
        <div className='h-screen flex bg-gray-bg1' style={{ 
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover", 
          }} >
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        
                        <button
                            className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                            onClick={
                                () => navigate (`/resto/${idResto}/admin`)
                            }
                        >
                            Login
                        </button>

                        <a href="#">Forgot your Password?</a>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;