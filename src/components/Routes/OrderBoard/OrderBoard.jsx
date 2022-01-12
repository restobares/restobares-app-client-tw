import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenu, getLabels, getCategories } from "../../../redux/actions";

//componente platillo
import OrderCard from "../../AuxiliarComponents/OrderCard";
import MenuPayBar from "../../ChildrenComponents/MenuPayBar";
import OrderBar from "../../ChildrenComponents/OrderBar";
import SideBar from "../../ChildrenComponents/SideBar";
import WaiterCallButton from "../../ChildrenComponents/WaiterCallButton";

export default function OrderBoard() {
  const { idResto, idTable } = useParams();

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menus.menu);
  const hidden = useSelector((state) => state.sideBar.sideBar);

  useEffect(() => {
    dispatch(getLabels());
    dispatch(getCategories());
    dispatch(getMenu(idResto, idTable));
  }, [dispatch, idResto, idTable]);

  const handleHidden = (e) => {
    e.preventDefault();
    hidden &&
      dispatch({
        type: "HIDE_SIDEBAR",
        payload: !hidden,
      });
  };
  return (
    <div className="pt-12 flex flex-col">
      <OrderBar />
      <div className="fixed min-h-screen right-0 left-0 flex ">
        <SideBar />
        {menu.length === 0 ? (
          
          <div className=" h-full flex-shrink-0 mt-4 shadow-lg font-semibold text-xl mx-auto border-2 border-pink-700 rounded-lg py-2 px-4">
            
            Does not match any results!</div>) : (
          <div
            className="w-full pb-32 mx-2 mr-2 mt-2 h-screen flex flex-col overflow-auto "
            onClick={(e) => handleHidden(e)}
          >
            {menu.map((product) => (
              <OrderCard
                product_id={product.id}
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
        <MenuPayBar />
      </div>
    </div>
  );
}
