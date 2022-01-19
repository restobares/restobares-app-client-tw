import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenu, getLabels, getCategories } from "../../../redux/actions";
import { PulseLoader } from "react-spinners";

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

	const [loading, setLoading] = useState(false);
	const override = `
				display: flex;
				margin-top: 40px;
				justify-content: center;
	`;

  useEffect(async() => {
		setLoading(true);
    await dispatch(getLabels());
    await dispatch(getCategories());
    await dispatch(getMenu(idResto, idTable));
		setLoading(false);
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
    <div className="flex flex-col">
      <OrderBar />
      <div className="min-h-screen mt-12 right-0 left-0 flex justify-center ">
        <SideBar />
        {loading 
					? (<PulseLoader
						css={override}
						margin={10}
						size={30}
						color={"#D0124A"}
						loading={loading}
					/>)
        	: menu.length === 0 ? (
          
          <div className=" h-full  mt-4 shadow-lg font-semibold text-xl mx-2 border-2 border-pink-700 rounded-lg py-2 px-4">
            Does not match any results!</div>) : (
          <div
            className="w-full pb-44 mx-2 mr-2 mt-2 h-screen flex flex-col overflow-auto "
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
