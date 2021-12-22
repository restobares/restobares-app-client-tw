import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders, putTableEating } from '../../redux/actions';

const PutTesting = () => {
  const { idResto } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(idResto, 4));
  })

  const putAction = async () => {
    await dispatch(putTableEating(idResto))
    dispatch(getOrders(idResto, 4));
  }
  return (
    <div>
      <button onClick={putAction}>PUT</button>
    </div>
  )
}

export default PutTesting
