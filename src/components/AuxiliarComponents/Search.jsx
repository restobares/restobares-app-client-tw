import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../../redux/actions';

const Search = () => {

  const dispatch = useDispatch();


  return <div className='inline-block '>
      <div className=''>
      <button className='relative float-right mt-3 right-9' type='submit'>
        <img src="https://img.icons8.com/ios/24/aa0020/search--v1.png" width="24" className='ml-1'/>
      </button>
    <input 
        className='inline-block pill w-48 flex-grow-1 pb-2 '
        type="search" 
        onChange={(e) => dispatch(getProductsByName(e.target.value))}   
        />
      </div>
  </div>  
}
export default Search