import React, { Fragment, useState } from 'react';
import BackButton from '../BackButton';
import Select from "react-select";
import { useDispatch } from 'react-redux';
import { putAccount }from '../../../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Swal from "sweetalert2";

const ChangePass = () => {
  
  const [passwordNewShown, setPasswordNewShown] = useState(false);
  const [passwordRepShown, setPasswordRepShown] = useState(false);

  const { idResto } = useParams();
  let tokenAdmin = Cookies.get("token-admin");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [input, setInput] = useState({
    passType: '',
    currentPass: '',
    newPass: '',
    repeatPass: '',
  });

  function handlePass(e) {
    setInput({
      ...input,
      passType: e.value,
    }); 

  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }


  //checar la action de putAccount
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.newPass === input.repeatPass) {

      if (input.passType === "Password Admin") {
        dispatch(putAccount(idResto, {
          passAdmin: input.newPass
        }, tokenAdmin))
      }
      if (input.passType === "Password Staff") {
        dispatch(putAccount(idResto, {
          passStaff: input.newPass
        }, tokenAdmin))
      }
      await Swal.fire({
      position: "center",
      icon: "success",
      title: `Your ${input.passType} has been updated`,
      showConfirmButton: false,
      timer: 3000,
      });
      return navigate(-1);
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "New Password and Repeat Password must be equal",
    });
  }

  //hideShow

  const toggleNewPassword = (e) => {
    e.preventDefault();
    setPasswordNewShown(!passwordNewShown);
  };

  const toggleRepPassword = (e) => {
    e.preventDefault();
    setPasswordRepShown(!passwordRepShown);
  };

    return (
        <Fragment>
        <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
          <BackButton/>
           <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32"> 
             <h1>Change&nbsp;Password</h1>
           </div>
           <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
             Logout
           </button>
        </nav>

        
      

        <div className="bg-gray-200 font-sans">
          <div className="max-w-sm mx-auto px-6">

          <Select
          options={[{value: "Password Admin", label: "Password Admin"}, {value: "Password Staff", label: "Password Staff"}]}
          onChange={(e) => handlePass(e)}
          placeholder="Choose your password type..."
          className="pt-4"
        />

            <div className="relative flex flex-wrap">
              <div className="w-full relative">
                <div className="mt-6">
                   
                  <form className="mt-8">
                    <div className="mx-auto max-w-lg">

                      <div className="py-2">
                        <span className="px-1 text-sm text-gray-600">New Password</span>

                        <div className="flex">
                          <input placeholder="Enter your new password"
                            name="newPass"
                            onChange={(e) => handleChange(e)}
                            type={passwordNewShown ? "text" : "password"}
                            className="text-md block px-3 py-2  rounded-lg w-full 
                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          />
                          <IconButton onClick={(e) => toggleNewPassword(e)}>
                            {passwordNewShown ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </div>
                      </div>

                      <div className="py-2" x-data="{ show: true }">
                        <span className="px-1 text-sm text-gray-600">Repeat Password</span>

                        <div className="flex">
                          <input placeholder="Repeat your new password"
                            name="repeatPass"
                            onChange={(e) => handleChange(e)}
                            type={passwordRepShown ? "text" : "password"}
                            className="text-md block px-3 py-2 rounded-lg w-full 
                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                            focus:placeholder-gray-500
                            focus:bg-white 
                            focus:border-gray-600  
                            focus:outline-none"
                          />
                          <IconButton onClick={(e) => toggleRepPassword(e)}>
                            {passwordRepShown ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </div>
                      </div>

                      
                      <button className="mt-3 text-lg font-semibold 
                        bg-blue-500 inline-block text-white rounded-lg
                        px-2 py-2 shadow-xl hover:text-white hover:bg-blue-700 mb-2"
                        onClick={(e) => handleSubmit(e)}
                        // disabled={input.newPass !== input.repeatPass}
                        >
                        Change Password
                      </button>
                    </div>
                  </form>
               
                </div>
              </div>
            </div>
          </div>
        </div>



        </Fragment>
    )
}

export default ChangePass;
