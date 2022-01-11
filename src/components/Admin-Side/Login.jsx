import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link, /* useParams */ } from 'react-router-dom';
import { login } from '../../redux/actions';
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import dingbellLogo from "../../img/dingbell_white.png";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    Cookies.remove('token-admin');
    Cookies.remove('token-staff');
    Cookies.remove('logout-code');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordLogin, setPasswordLogin] = useState(false);

    const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";

    function validEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }    

  	const togglePasswordLogin = (e) => {
  	  e.preventDefault();
  	  setPasswordLogin(!passwordLogin);
  	};

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (validEmail(email)){
          
          let json = await dispatch(login(email, password));
          
          if (!json.payload.error) {
            navigate(`../resto/${json.payload.id}/resto-home`)
            
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email or Password are incorrect",
            });
          }
        } else {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email or Password are incorrect",
          });
          //console.log('invalid email');
        }
    };

    return (
        <div className='h-screen flex bg-gray-bg1' style={{ 
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover", 
          }} >
           <Link to="/">
          <div className="absolute flex text-sm text-white mb-1 mt-1">
           <img className="mx-auto"  src={dingbellLogo} width="40" alt="" />
            <h1 className="my-auto text-lg font-roboto font-semibold">DingBell</h1>
            </div>
           </Link> 
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
                    <label htmlFor='password'>Password</label>
                    <div className="flex">
                        <input
            	  						type={passwordLogin ? "text" : "password"}
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                            id='password'
                            placeholder='Your Password'
                            onChange={(e) => setPassword(e.target.value)}
                            />
            						<IconButton className="inline-block h-10 w-10 mt-2" onClick={(e) => togglePasswordLogin(e)}>
            						  {passwordLogin ? <Visibility /> : <VisibilityOff />}
            						</IconButton>
                    </div>
                    {/* <div>
                        <label htmlFor=''>idStaff</label>
                        <input
                            type='number'
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                            id='idStaff'
                            placeholder='Your ID'
                            min="0"
                            onChange={(e) => setIdStaffInput(e.target.value)}
                            />
                    </div> */}

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
                        <a className="py-2 px-4 text-blue-500" href="/#">Forgot your Password?</a>
                      </Link>
                        
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;
