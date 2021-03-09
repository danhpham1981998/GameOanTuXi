const initialState = {
  xucXacReducer: {
    banChon: "Tài",
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
      { diem: 1, hinhAnh: "./img/1.png" },
      { diem: 1, hinhAnh: "./img/1.png" },
      { diem: 1, hinhAnh: "./img/1.png" },
    ],
  },
};

const xucXacReducer = (state = initialState, action) => {
  return { ...state };
};

export default xucXacReducer;
