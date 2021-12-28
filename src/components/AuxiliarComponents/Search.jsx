import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../../redux/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

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
    <div className="inline-block ">
      <div className="">
          {search === "" ? <button className="relative float-right mt-3 right-9" type="submit" onClick={ClearInput}>
            <img
              src="https://img.icons8.com/ios/24/aa0020/search--v1.png"
              width="24"
              className="ml-1"
            />
          </button> : 
          <button className="relative float-right mt-3 right-9" type="submit" onClick={ClearInput}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/delete-sign.png"
            width="24"
            className="ml-1"
          />
        </button> 
          }
          <input
            className="inline-block pill w-48 flex-grow-1 pb-2 "
            type="text"
            onChange={onChangeD}
            value={search}
          />
      </div>
    </div>
  );
};
export default Search;
