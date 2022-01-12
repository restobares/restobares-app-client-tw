import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByName } from "../../redux/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const {state} = useSelector((state)=> state);

  function onChangeD (e){
    dispatch(getProductsByName(e.target.value))
    setSearch(e.target.value)
  }

  function ClearInput(e) {
    e.preventDefault();
    setSearch("");
    dispatch(getProductsByName(""))
  }

  return (
    <div className="inline-block shadow-lg text-lg">
       <div className="">
          {search === "" ? <button className="relative float-right mt-3 right-9" type="submit" onClick={ClearInput}>
            <img
              src="https://img.icons8.com/ios/50/be185d/search--v1.png"
              width="24"
              className="ml-1"
              alt=""
            />
          </button> : 
            <button className="relative float-right mt-3 right-9" type="submit" onClick={ClearInput}>
          <img
            src="https://img.icons8.com/ios-filled/50/be185d/delete-sign.png"
            width="24"
            className="ml-1"
            alt=""
          />
        </button>  
          }
          <input
            className="truncate text-pink-700 pill w-48 flex-grow-1 pb-1 "
            type="text"
            onChange={onChangeD}
            value={search}
            alt=""
          />
      </div>
    </div>
  );
};
export default Search;
