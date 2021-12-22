import { ActionTypes } from "../constants";

const initialState = [];

function qrCode(state = initialState, action) {

  if (action.type === ActionTypes.GET_QR_CODE) {

    const baseUrl = 'http://api.qrserver.com/v1/create-qr-code/';

    if (action.payload.tables.length === 1) {

      let data = `restobaresUrlFE/resto/ANzbx5Pa3dPizabR/table/${action.payload.tables[0]}`;
      let url = `${baseUrl}?data=${data}&ecc=Q`;

      return [url];
    }
    let newQrCodes = [];

    for (var i = action.payload.tables[0]; i <= action.payload.tables[1]; i++) {
      
      let data = `restobaresUrlFE/resto/ANzbx5Pa3dPizabR/table/${i}`;
      let url = `${baseUrl}?data=${data}&ecc=Q`;

      newQrCodes.push(url);
    }
    return newQrCodes;
  }
  return state;
}

export default qrCode;