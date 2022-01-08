import React from 'react'
import { useState, useEffect } from "react";
// import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { inputValidatorRegister, register } from '../../redux/actions';
// import { useParams } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";
    const [errors, setErrors] = useState({});
    
    const [input, setInput] = useState({
        title: "",
        email: "",
        passAdmin: "",
        passStaff: "",
        logo: "",
        tables: "",
        payment_mp: "",
      });

      function handleInputChanges(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
        setErrors(
            inputValidatorRegister({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
      }

      var validExt = ".png, .jpeg, .jpg, .PNG, .JPEG, .JPG";
  function handleImageSelection(e) {
    var filePath = e.target.value;
    var getFileExt = filePath
      .substring(filePath.lastIndexOf(".") + 1)
      .toLowerCase();
    var pos = validExt.indexOf(getFileExt);
    if (pos < 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This file is not allowed, please upload a valid file.",
      });
      setInput({
        ...input,
        logo: "",
      });
      e.target.value = null;
      return false;
    } else {
      imageSizeValidate(e.target);
      return true;
    }
  }

  var maxSizeImage = "950";
  function imageSizeValidate(eTarget) {
    if (eTarget.files && eTarget.files[0]) {
      var fsize = eTarget.files[0].size / 1000;
      if (fsize > maxSizeImage) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Maximum file size is ${maxSizeImage}KB, This file size is: ${fsize.toFixed(
            0
          )}KB`,
        });
        setInput({
          ...input,
          logo: "",
        });
        eTarget.value = null;
        return false;
      } else {
        encodeImageBase64(eTarget);
        return true;
      }
    }
  }

  function encodeImageBase64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      // console.log('RESULT', reader.result)
      setInput({
        ...input,
        logo: reader.result,
      });
      setErrors(
        inputValidatorRegister({
          ...input,
          logo: reader.result,
        })
      );
    };

    reader.readAsDataURL(file);
  }

  const alert = async (e) => {
    e.preventDefault();
    await dispatch(register(input));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your menu has been sent",
      showConfirmButton: false,
      timer: 2000,
    });
    setInput({
      title: "",
      email: "",
      passAdmin: "",
      passStaff: "",
      logo: "",
      payment_mp: "",
      tables: "",
    });
    
    document.getElementById("logo").value = null;
  };

  const notAlert = (e) =>{
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "All fields are required!",
      showConfirmButton: false,
      timer: 2000,
    });
  }

    return (
        <div className='min-h-screen  flex bg-gray-bg1' style={{ 
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover", 
          }} >
              <div className='inline-block mx-auto my-auto justify-items-center '>
                <div className=' mx-2 bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className="m-5 text-lg font-bold">Restaurant Register</h1>

<form className="w-76 h-40 inline-block">
  <input
    type="text"
    name="title"
    maxLength="50"
    className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
    placeholder="Restaurant Name"
    value={input.title}
    onChange={(e) => handleInputChanges(e)}
  />

  <input
    id="email"
    type="email"
    name="email"
    placeholder='Your Email'
    value={input.email}
    className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
    onChange={(e) => handleInputChanges(e)}
  />

  <input
    type="password"
    id='password'
    name="passAdmin"
    className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
    placeholder='Your Admin-Password'
    value={input.passAdmin}
    onChange={(e) => handleInputChanges(e)}
  />
  <input
    type="password"
    id='password'
    name="passStaff"
    className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
    placeholder='Your Staff-Password'
    value={input.passStaff}
    onChange={(e) => handleInputChanges(e)}
  />
  <input
    type="number"
    id='tables'
    name="tables"
    className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
    placeholder='Number of tables in your local'
    value={input.tables}
    min="1"
    maxLength="4"
    oninput="validity.valid||(value=value.replace(/\D+/g, 0))"
    pattern='^[0-9]+'
    onKeyUp={Number(input.tables) < 0 ? Number(input.tables) * -1 : Number(input.tables)!==0?input.tables: input.tables=1}
    onChange={(e) => handleInputChanges(e)}
  />
  <input
    type="file"
    id="logo"
    name="logo"
    className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
    accept="image/*"
    onChange={(e) => handleImageSelection(e)}
  />
  <input
    type="text"
    name="payment_mp"
    maxLength="50"
    className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
    placeholder="Token Mercado Pago"
    value={input.payment_mp}
    onChange={(e) => handleInputChanges(e)}
  />

  {Object.keys(errors).length > 0 || input.title === "" ?
  <button
    type="submit"
    onClick={notAlert}
    className="text-white bg-gray-600 mt-4  w-32 px-4 py-2 rounded-3xl text-sm font-semibold"
  >
    Check In
  </button>:
  <button
    type="submit"
    onClick={alert}
    className="mt-4 mb-4 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out "
  >
    Check In
  </button> 
  }
                </form>
                </div>
              </div>
        </div>
    )
}

export default Register
