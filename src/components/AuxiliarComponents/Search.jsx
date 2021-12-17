import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../../redux/actions';

const Search = () => {

  const dispatch = useDispatch();

  return <Fragment>
    <input
        className=''
        type="search" 
        onChange={(e) => dispatch(getProductsByName(e.target.value))}
        
      />
      <button className='float-left ml-2 button' type='submit'>
        <img src="https://img.icons8.com/ios/24/aa0020/search--v1.png" alt='search-icon' width="24" className='ml-1'/>
        {/* <img src="https://img.icons8.com/material-two-tone/24/aa0020/search.png" width="40"/> */}
      </button>
  </Fragment>

  
}
export default Search