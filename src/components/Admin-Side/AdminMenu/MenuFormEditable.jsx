import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import BackButton from "../BackButton";
import Swal from "sweetalert2";
import {
  getLabels,
  getCategories,
  putMenu,
} from "../../../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function MenuFormEditable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idResto, idProduct } = useParams();

  const menu = useSelector((state) => state.menus.menuAdmin);
  const product = menu.find((product) => product.id === Number(idProduct));

  let tokenAdmin = Cookies.get("token-admin");
  const labels = useSelector((state) => state.labels);
  const categories = useSelector((state) => state.categories);
  let categorySelected;
  categorySelected = categories.find(
    (category) => category.id === product.CategoryId
  );

  let labelNamesPlaceholder = [];

  for (var i = 0; i < product.Labels.length; i++) {
    let labelIdSelected = product.Labels[i];
    let labelNameFound = labels.find((label) => label.id === labelIdSelected);
    labelNamesPlaceholder.push(labelNameFound ? labelNameFound.name : "");
  }

  const [input, setInput] = useState({
    name: "",
    price: "",
    detail: "",
    image: "",
    CategoryId: "",
    id_label: [],
    DiscountId: null,
  });
  const [reactSelectInput, setReactSelectInput] = useState({
    categorySelector: "",
    labelsSelector: "",
  });

  let options = [];
  let optionsCategories = [];

  for (var j = 0; j < labels.length; j++) {
    let eachOption = {
      value: labels[j].id,
      label: labels[j].name,
    };
    options.push(eachOption);
  }
  for (var k = 0; k < categories.length; k++) {
    let eachOption = {
      value: categories[k].id,
      label: categories[k].name,
    };
    optionsCategories.push(eachOption);
  }

  function handleInputChanges(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleLabelSelection(e) {
    let labelsSelected = e.map((label) => label.value);
    setInput({
      ...input,
      id_label: labelsSelected,
    });
    setReactSelectInput({
      ...reactSelectInput,
      labelsSelector: e,
    });
  }

  function handleCategorySelection(e) {
    setInput({
      ...input,
      CategoryId: e.value,
    });
    setReactSelectInput({
      ...reactSelectInput,
      categorySelector: e,
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
        image: "",
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
          image: "",
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
      setInput({
        ...input,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  // Getting labels and categories
  useEffect(() => {
    dispatch(getLabels());
    dispatch(getCategories());
  }, [dispatch]);


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let json = dispatch(putMenu(idResto, idProduct, input, tokenAdmin));
    await Swal.fire({
      position: "center",
      icon: "success",
      title: "Your menu has been edited",
      showConfirmButton: false,
      timer: 3000,
    });
    setInput({
      name: "",
      price: "",
      detail: "",
      image: "",
      CategoryId: "",
      id_label: [],
      DiscountId: null,
    });
    setReactSelectInput({
      categorySelector: "",
      labelsSelector: "",
    });
    document.getElementById("image").value = null;
    navigate(-1);
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

  return (
    <Fragment>
      <div>
        <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
          <BackButton />
          <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32">
            <h1>Editable&nbsp;Form&nbsp;Menu</h1>
          </div>
          <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
            Logout
          </button>
        </nav>

        <h1 className="m-5 text-lg font-bold">Edit your Menu</h1>

        <form className="w-96 inline-block">
          <input
            type="text"
            name="name"
            maxLength="50"
            className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
            placeholder={product.name}
            value={input.name}
            onChange={(e) => handleInputChanges(e)}
          />

          <input
            type="number"
            name="price"
            min="1"
            maxLength="4"
            value={input.price}
            //  oninput="validity.valid||(value=value.replace(/\D+/g, 0))"
            // pattern='^[0-9]+'
            //  onKeyUp={Number(input.price) < 0 ? Number(input.price) * -1 : input.price}
            className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            placeholder={product.price}
            //  value={Number(input.price)}
            onChange={(e) => handleInputChanges(e)}
          />

          <input
            type="text"
            name="detail"
            maxLength="140"
            className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            placeholder={product.detail}
            value={input.detail}
            onChange={(e) => handleInputChanges(e)}
          />

          <input
            type="file"
            id="image"
            name="image"
            className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
            accept="image/*"
            onChange={(e) => handleImageSelection(e)}
          />

          <img src={product.image} alt="" className="px-5 py-3 rounded-lg" />

          <Select
            options={optionsCategories}
            value={reactSelectInput.categorySelector}
            onChange={(e) => handleCategorySelection(e)}
            placeholder={categorySelected ? categorySelected.name : ""}
            className="pb-3"
          />

          <Select
            isMulti
            options={options}
            value={reactSelectInput.labelsSelector}
            onChange={(e) => handleLabelSelection(e)}
            placeholder={labelNamesPlaceholder.join(", ")}
          />
          {Object.values(input).join("").length === 0 ? (
            <button
              type="submit"
              onClick={notAlert}
              className="text-white bg-gray-600 mt-4 mb-36 w-32 px-4 py-2 rounded-3xl text-sm font-semibold"
            >
              Save Changes
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </Fragment>
  );
}

export default MenuFormEditable;
