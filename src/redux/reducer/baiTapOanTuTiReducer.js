const stateDefault = {
    mangDatCuoc: [
        {ma:'keo',hinhAnh:'./img/gameOanTuTi/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./img/gameOanTuTi/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./img/gameOanTuTi/bao.png',datCuoc:false}
    ],

    ketQuaOanTuTi : "I love you 3000 !!!",
    soBanThang:0,
    soBanThua:0,
    computer: {ma:'keo',hinhAnh:'./img/gameOanTuTi/bao.png'}
}

const baiTapOanTuTiReDucer = (state = stateDefault,action) => {
    switch (action.type) {

        case 'CHON_KEO_BUA_BAO': {
            //Reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item,index) => {
                if(item.ma === action.maCuoc) {
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            // console.log('mangCuocUpdate',mangCuocUpdate);
            // console.log('obj',action);
            // let index = mangCuocUpdate.findIndex(qc=>qc.ma === action.maCuoc)
            // if (index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true;
            // }
            state.mangDatCuoc=mangCuocUpdate;
            return {...state};
        }

        case 'RAN_DOM': {

            let soNgauNhien = Math.floor(Math.random() *3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien;

            console.log('random', action);
            return {...state};
        }
        

        default: return {...state}
    }
}

export default baiTapOanTuTiReDucer;