<<<<<<< HEAD
import React from "react";
import { useState } from "react";
=======
import React from 'react'
import { useState } from "react";
// import { useNavigate, Link } from 'react-router-dom';
>>>>>>> 2d5b72f48b31479f1abd99434ec2a7933e156905
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { inputValidatorRegister, register } from "../../redux/actions";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import dingbellLogo from "../../img/dingbell_white.png";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordRepShown, setPasswordRepShown] = useState(false);
  const [passwordStaffShown, setPasswordStaffShown] = useState(false);
  const [passwordStaffRepShown, setPasswordStaffRepShown] = useState(false);

  const dispatch = useDispatch();
  const bgimg =
    "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    email: "",
    passAdmin: "",
    passAdminRepeat: "",
    passStaff: "",
    passStaffRepeat: "",
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
    if (
      input.passAdmin !== input.passAdminRepeat ||
      input.passStaff !== input.passStaffRepeat
    ) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " Password and Repeat Password must be equal",
      });
    }
    else if  (input.passAdmin === input.passStaff) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The password of the admin and the staff must not be the same",
      });
    }
    else {
        e.preventDefault();
        await dispatch(register(input));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been registered, check your email, 📧 ",
          showConfirmButton: false,
          timer: 2000,
        });
        setInput({
          title: "",
          email: "",
          passAdmin: "",
          passAdminRepeat: "",
          passStaff: "",
          passStaffRepeat: "",
          logo: "",
          payment_mp: "",
          tables: "",
        });

        document.getElementById("logo").value = null;
      
    }
  
  };

  const notAlert = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "All fields are required!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const toggleRepPassword = (e) => {
    e.preventDefault();
    setPasswordRepShown(!passwordRepShown);
  };
  const toggleStaffPassword = (e) => {
    e.preventDefault();
    setPasswordStaffShown(!passwordStaffShown);
  };

  const toggleStaffRepPassword = (e) => {
    e.preventDefault();
    setPasswordStaffRepShown(!passwordStaffRepShown);
  };

  return (
    <div className="min-h-screen  flex bg-gray-bg1"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
      }}
    >
      <span className="text-sm text-white mb-1 mt-1">
      <img className="mx-5 invisible md:visible"  src={dingbellLogo} width="40" alt="" />
      <h1 className=" text-lg font-bold">DingBell</h1>
      </span>
      <div className="inline-block mx-auto my-auto justify-items-center ">
        <div className=" mx-2 bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
          <h1 className="m-5 text-lg font-bold">Restaurant Register 📝</h1>

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
              placeholder="Your Email"
              value={input.email}
              className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              onChange={(e) => handleInputChanges(e)}
            />

            <input
              id="password"
              name="passAdmin"
              type={passwordShown ? "text" : "password"}
              className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Your Admin-Password"
              value={input.passAdmin}
              onChange={(e) => handleInputChanges(e)}
            />
            <IconButton onClick={(e) => togglePassword(e)}>
              {passwordShown ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            <input
              type={passwordRepShown ? "text" : "password"}
              id="password"
              name="passAdminRepeat"
              className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Repeat Admin-Password"
              value={input.passAdminRepeat}
              onChange={(e) => handleInputChanges(e)}
            />
            <IconButton onClick={(e) => toggleRepPassword(e)}>
              {passwordRepShown ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            <input
              type={passwordStaffShown ? "text" : "password"}
              id="password"
              name="passStaff"
              className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Your Staff-Password"
              value={input.passStaff}
              onChange={(e) => handleInputChanges(e)}
            />
            <IconButton onClick={(e) => toggleStaffPassword(e)}>
              {passwordStaffShown ? <Visibility /> : <VisibilityOff />}
            </IconButton>

            <input
              type={passwordStaffRepShown ? "text" : "password"}
              id="password"
              name="passStaffRepeat"
              className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Repeat Staff-Password"
              value={input.passStaffRepeat}
              onChange={(e) => handleInputChanges(e)}
            />
            <IconButton onClick={(e) => toggleStaffRepPassword(e)}>
              {passwordStaffRepShown ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            <input
              type="number"
              id="tables"
              name="tables"
              className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Number of tables in your local"
              value={input.tables}
              min="1"
              maxLength="4"
              oninput="validity.valid||(value=value.replace(/\D+/g, 0))"
              pattern="^[0-9]+"
              onKeyUp={
                Number(input.tables) < 0
                  ? Number(input.tables) * -1
                  : Number(input.tables) !== 0
                  ? input.tables
                  : (input.tables = 1)
              }
              onChange={(e) => handleInputChanges(e)}
            />
            <label>
              Select your restaurant Logo
            </label>
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

            {Object.keys(errors).length > 0 || input.title === "" ? (
              <button
                type="submit"
                onClick={notAlert}
                className="text-white bg-gray-600 mt-4  w-32 px-4 py-2 rounded-3xl text-sm font-semibold"
              >
                Check In
              </button>
            ) : (
              <button
                type="submit"
                onClick={alert}
                className="mt-4 mb-4 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out "
              >
                Check In
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
