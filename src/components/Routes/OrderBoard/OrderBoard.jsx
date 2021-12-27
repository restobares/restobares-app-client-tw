import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenu, getLabels, getCategories } from "../../../redux/actions";

//componente platillo
import OrderCard from "../../AuxiliarComponents/OrderCard";
import MenuPayBar from "../../ChildrenComponents/MenuPayBar";
import OrderBar from "../../ChildrenComponents/OrderBar";
import PayBar from "../../ChildrenComponents/PayBar";
import SideBar from "../../ChildrenComponents/SideBar";

export default function OrderBoard() {
  const { idResto, idTable } = useParams();

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menus.menu)
  const hidden = useSelector((state) => state.sideBar.sideBar)

  useEffect(() => {
      dispatch(getLabels())
    dispatch(getCategories())
    dispatch(getMenu(idResto, idTable))
  }, [dispatch])


    const handleHidden = e => {
      e.preventDefault();
      hidden &&
      dispatch({
        type: "HIDE_SIDEBAR",
        payload: !hidden
      })
    }
    return (
      <div className='pt-12 flex flex-col'>
        <OrderBar/>
        <div className='fixed min-h-screen right-0 left-0 flex '>
            <SideBar/>
            <div className='w-full pb-28 mx-2 mr-2 mt-2 h-screen flex flex-col overflow-auto '  onClick={e => handleHidden(e)}>
            {menu && menu.map((product) =>(
            <OrderCard
              product_id={product.id}
              key={product.id}
              product={product}
            />

            ))}
        </div>
        <MenuPayBar/>
      </div>
    </div>
  );
}
