import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BackButton from "../BackButton";
import { Switch } from "@headlessui/react";
import {
  deleteProduct,
  getMenu,
  putAvailableProduct,
} from "../../../redux/actions";
import Cookies from "js-cookie";

const EditMenu = () => {
  const dispatch = useDispatch();
  const { idResto } = useParams();
  const tokenAdmin = Cookies.get("token-admin");
  const menu = useSelector((state) => state.menus.menuAdmin);


    

    const dispatch = useDispatch();
    const { idResto } = useParams();
    const tokenAdmin = Cookies.get("token-admin");
    const tokenStaff = Cookies.get("token-staff");
    const menu = useSelector((state) => state.menus.menuAdmin)

    const handlePutAvailableProduct = async (idProduct) => {
      if (tokenAdmin) {
        await dispatch(putAvailableProduct(idResto, idProduct, tokenAdmin));
      }
      if (!tokenAdmin && tokenStaff) {
        await dispatch(putAvailableProduct(idResto, idProduct, tokenStaff));
      }
      dispatch(getMenu(idResto, 1))
    }

    const handleDeleteProduct = async (idProduct) => {
      if (tokenAdmin) {
        await dispatch(deleteProduct(idResto, idProduct, tokenAdmin));
      }
      
      dispatch(getMenu(idResto, 1));
    }


  useEffect(() => {
    dispatch(getMenu(idResto, 1));
  }, [dispatch, idResto]);

  return (
    <Fragment>
      <div>
        <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
          <BackButton />
          <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32">
            <h1>Edit&nbsp;Menus</h1>
          </div>
          <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
            Logout
          </button>
        </nav>
      </div>

      {menu.length > 0 &&
        menu.map((product) => {
          let productDetailShortened;
          if (product.detail.length > 60) {
            productDetailShortened = product.detail.slice(0, 60) + "...";
          } else {
            productDetailShortened = product.detail;
          }

          return (

          <div className="flex h-14 w-full mt-2 border-b-2 border-pink-700" key={product.id}>
          <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0"> 
            <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full "
            src={product.image}
            alt=""/>
          </div>
          <div className="float-left align-baseline text-left inline-block h-4 w-full">
            <div className=" inline-block w-full align-bottom">
              <p className="inline-block ml-2 text-black text-truncate text-sm font-bold">{product.name}</p>
              <button disabled={!tokenAdmin} onClick={() => handleDeleteProduct(product.id)} className=" align-bottom inline-block  font-semibold float-right mr-2 mb-1 text-sm bg-pink-500 w-12 rounded-xl">Delete</button>
        
              <Link to={`/resto/${idResto}/resto-home/editmenu/${product.id}`} body={product}>
                <button disabled={!tokenAdmin} className=" align-bottom inline-block  font-semibold float-right mr-2 mb-1 text-sm bg-pink-500 w-10 rounded-xl">Edit</button>
              </Link>


                  <Link
                    to={`/resto/${idResto}/resto-home/editmenu/${product.id}`}
                    body={product}
                  >
                    <button className=" align-bottom inline-block  font-semibold float-right mr-2 mb-1 text-sm bg-pink-500 w-10 rounded-xl">
                      Edit
                    </button>
                  </Link>


            <div className="float-right h-6 mr-3 mt-1"> 
            {/* Boton switch - ui */}
              <Switch
                checked={product.available}
                onChange={() => handlePutAvailableProduct(product.id)}
                // onChange={handlePutAvailableProduct}
                className={`${
                    product.available ? 'bg-pink-500' : 'bg-gray-200'
                  } relative inline-flex items-center h-6 rounded-full w-11`}> 
              
              <span
                className={`${
                  product.available ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
            {/* termina boton switch - ui */}             
            </div>


                <div className="float-right h-6 mr-3 mt-1">
                  {/* Boton switch - ui */}
                  <Switch
                    checked={product.available}
                    onChange={() =>
                      handlePutAvailableProduct(idResto, product.id, tokenAdmin)
                    }
                    // onChange={handlePutAvailableProduct}
                    className={`${
                      product.available ? "bg-pink-500" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11`}
                  >
                    <span
                      className={`${
                        product.available ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                  </Switch>
                  {/* termina boton switch - ui */}
                </div>

                <div className="float-right h-6 mr-4 mt-1 text-black font-semibold text-sm">
                  <p>Available:</p>
                </div>

                <p className=" w-9/12 ml-2 text-truncate text-black text-lg">
                  {productDetailShortened}
                </p>

                <div className="float-right h-6 mr-1">
                  <p className="inline-block text-left ml-4 align-middle mx-auto">
                    {" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default EditMenu;
