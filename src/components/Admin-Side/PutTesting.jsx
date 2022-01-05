import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteProductFromTable, putTableEating, postPayCash, putTableCashPayment } from '../../redux/actions';

const PutTesting = () => {
  const { idResto } = useParams();
  const dispatch = useDispatch();
  const testToken = "AdminSupremeTest";
  const testTable = 4;
  const testProduct = 1;
  const testQuantity = 1;
  const testTip = 10;

  const putAction = async () => {
    dispatch(putTableEating(idResto, testTable, testToken))
  }

  const deleteAction = () => {
    dispatch(deleteProductFromTable(idResto, testTable, testProduct, testQuantity, testToken))
  }

  const payWithCashAction = () => {
    dispatch(postPayCash(idResto, testTable, testTip))
  }

  const confirmCashPaymentAction = () => {
    dispatch(putTableCashPayment(idResto, testTable, testToken))
  }

  return (
    <div>
      <button onClick={putAction}>PUT</button>
      <br />
      <br />
      <br />
      <button onClick={deleteAction}>DELETE</button>
      <br />
      <br />
      <br />
      <button onClick={payWithCashAction}>PAY WITH CASH</button>
      <br />
      <br />
      <br />
      <button onClick={confirmCashPaymentAction}>CONFIRM CASH PAYMENT</button>
    </div>
  )
}

export default PutTesting
