import React from 'react'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../../redux/actions';
const Search = () => {

  const dispatch = useDispatch();
  const [searchedProduct, setSearchedProduct] = useState("");

  function handleSearchBar(e) {
    e.preventDefault();
    setSearchedProduct(e.target.value);
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    dispatch(getProductsByName(searchedProduct));
    // setSearchedProduct("");
  }

  return <Fragment>
    <form onSubmit={handleSubmitSearch}>
      <input 
        type="search" 
        onChange={handleSearchBar} 
        value={searchedProduct} 
        className='float-left pill w-6/12'
      />
      <button className='float-left ml-2 button' type='submit'>
        <img src="https://img.icons8.com/ios/24/aa0020/search--v1.png" width="24" className='ml-1'/>
        {/* <img src="https://img.icons8.com/material-two-tone/24/aa0020/search.png" width="40"/> */}
      </button>
    </form>
  </Fragment>

  
}
export default Search