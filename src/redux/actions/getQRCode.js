import { ActionTypes } from "../constants";

export function getQrCode(idResto, tables) {

  return {
    type: ActionTypes.GET_QR_CODE,
    payload: {
      idResto,
      tables
    }
  }
}