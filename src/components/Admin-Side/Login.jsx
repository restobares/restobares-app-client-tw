import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions';

const Login = () => {

    const dispatch = useDispatch();
    let idResto = 1;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const token = useSelector((state) => state.token)

    const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";

    function validEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    // useEffect(async () => {
    //   await dispatch(login())
    // }, [email, password])
    

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (validEmail(email)){
          // console.log(email, password);

          dispatch(login(email, password));        
          
          
          if (token.error === "") {
            // console.log(token.error);
            console.log('if test');
          }
        } else {
          console.log('nope');
        }
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

                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                            id='email'
                            placeholder='Your Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                            id='password'
                            placeholder='Your Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        
                        <button
                            className='bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark'
                            // onClick={
                            //     () => navigate (`/resto/${idResto}/admin`)
                            // }
                            type='submit'
                        >
                            Login
                        </button>

                        <a className="py-2 px-4 text-blue-500" href="#">Forgot your Password?</a>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;