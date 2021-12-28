import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { putTableEating } from '../../redux/actions';

const PutTesting = () => {
  const { idResto } = useParams();
  const dispatch = useDispatch();


  const putAction = async () => {
    dispatch(putTableEating(idResto))
  }
  return (
    <div>
      <button onClick={putAction}>PUT</button>
    </div>
  )
}

export default PutTesting
