import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../BackButton";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { getAccount, putAccount } from "../../../redux/actions";
import LogoutButton from "../Navbar/LogoutButton";

const ChangeAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idResto } = useParams();
  const account = useSelector((state) => state.account)
  let tokenAdmin = Cookies.get("token-admin");
  const [input, setInput] = useState({
    email: "",
    tables: "",
    title: "",
    logo: "",
    payment_mp: ""
  });
	const [loading, setLoading] = useState(false);
	const override = `
				position: fixed;
				width: 100vw;
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #0008;
				z-index: 1000;
				transition: all .5s ease-out;
		`;

  const handleEditAccount = async () => {

    if (Object.values(input).join('').length > 0) {
      setLoading(true); 
      await dispatch(putAccount(idResto, input, tokenAdmin));
      setLoading(false); 
      await Swal.fire({
          icon: "success",
          title: "Great",
          text: "Your account has been edited",
          timer: 2000
        });
      return navigate(-2);
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Make sure you're editing something",
    });
  }

  function handleInputChanges(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  var validExt = ".png, .jpeg, .jpg, .PNG, .JPEG, .JPG";
  function handleImageSelection(e) {
    var filePath = e.target.value;
    var getFileExt = filePath
      .substring(filePath.lastIndexOf(".") + 1)
      .toLowerCase();
    var pos = validExt.indexOf(getFileExt);
    if (pos < 0) {
      // alert("This file is not allowed, please upload a valid file.");
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
        // alert('Maximum file size is ' + maxSizeImage + 'KB, This file size is: ' + fsize + "KB");
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
    };

    reader.readAsDataURL(file);
  }

  // Getting labels and categories
  useEffect(() => {
    dispatch(getAccount(idResto, tokenAdmin))
  }, [dispatch, idResto, tokenAdmin]);


  // RESIZE WINDOW LOGIC
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);


return (
  <div className="bg-gray-100 h-full">
      {loading && (<PulseLoader
				css={override}
				margin={10}
				size={30}
				color={"#E0125A"}
				loading={loading}
			/>)}
      <nav className=" flex flex-row justify-between bg-pink-700 h-12">
        <BackButton className=" mx-6 "/>
        <div className="flex justify-center text-white text-2xl mx-4 w-20 mt-2  md:w-32">
          <h1>Edit&nbsp;Account</h1>
        </div>
        <LogoutButton/>
      </nav>
      <div className="my-2">

      <form className="w-96 mx-auto h-auto">
        <label className="px-1 text-sm text-gray-600">Change your title</label>
        <input
          type="text"
          name="title"
          maxLength="50"
          className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
          placeholder={account.title}
          value={input.title}
          onChange={(e) => handleInputChanges(e)}
          />

        <label className="px-1 text-sm text-gray-600">Change your token (MP)</label>
        <input
          type="text"
          name="payment_mp"
          maxLength="140"
          className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
          placeholder={account.payment_mp}
          value={input.payment_mp}
          onChange={(e) => handleInputChanges(e)}
          />

        <label className="px-1 text-sm text-gray-600">Change your table number</label>
        <input
          id="tables"
          type="number"
          name="tables"
          min="1"
          maxLength="3"
          value={input.tables}
          className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder={account.tables}
          onChange={(e) => handleInputChanges(e)}
          />

        <label className="px-1 text-sm text-gray-600">Change your e-mail</label>
        <input
          type="email"
          name="email"
          maxLength="50"
          className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          placeholder={account.email}
          value={input.email}
          onChange={(e) => handleInputChanges(e)}
          />

        <label className="px-1 text-sm text-gray-600">Change your logo</label>
        <input
          type="file"
          id="logo"
          name="logo"
          className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          accept="image/*"
          onChange={(e) => handleImageSelection(e)}
        />
        <img className=" mx-auto rounded-xl shadow-md object-cover" 
        	src={input.logo || account.logo} alt="Restaurant Logo" 
        />

        <button
          type="button"
          className="mt-4 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out "
          onClick={handleEditAccount}
        >
          Edit Account
        </button> 
      </form>
      </div>
    </div>
  
  );
};

export default ChangeAccount;
