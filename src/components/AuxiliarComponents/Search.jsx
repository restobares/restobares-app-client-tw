import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../../redux/actions';

const Search = () => {

  const dispatch = useDispatch();


  return <Fragment>
      <button className='float-left ml-2 button' type='submit'>
        <img src="https://img.icons8.com/ios/24/aa0020/search--v1.png" alt='search-icon' width="24" className='ml-1'/>

      </button>
    <input 
        className='inline-block pill w-48 flex-grow-1 pb-2 '
        type="search" 
        onChange={(e) => dispatch(getProductsByName(e.target.value))}   
        />
  </Fragment>  
}
export default Search