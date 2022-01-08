import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link, /* useParams */ } from 'react-router-dom';
import { login } from '../../redux/actions';
import Cookies from "js-cookie";

const Login = () => {

   /* const { idResto } = useParams(); */

    const dispatch = useDispatch();
    const navigate = useNavigate();
    Cookies.remove('token-admin');
    Cookies.remove('token-staff');
    Cookies.remove('logout-code');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";

    function validEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }    

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (validEmail(email)){
          
          let json = await dispatch(login(email, password));        
          // console.log(json);
          if (!json.payload.error) {
            navigate(`../resto/${json.payload.id}/resto-home`)
          } else {
            // this is where the credentials are invalid
            console.log('invalid credentials')
          }
        } else {
          console.log('invalid email');
        }
    };

    return (
        <div className='h-screen flex bg-gray-bg1' style={{ 
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover", 
          }} >
            <div className='inline-block mx-auto my-auto justify-items-center '>

            <div className=' mx-2 bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
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
                             /* onClick={
                                     () => navigate (`/resto/${idResto}/admin/tables`)
                                 }
                                type='submit' */
                                >
                            Login
                        </button>

                      <Link to={`/resto/login/forgotpassword`}>
                        <a className="py-2 px-4 text-blue-500" href="#">Forgot your Password?</a>
                      </Link>
                        
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;