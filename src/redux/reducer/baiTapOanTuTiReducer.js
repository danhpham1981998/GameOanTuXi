const stateDefault = {
    mangDatCuoc: [
        {ma:'keo',hinhAnh:'./img/gameOanTuTi/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./img/gameOanTuTi/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./img/gameOanTuTi/bao.png',datCuoc:false}
    ],

    ketQuaOanTuTi : "Game Oắn Tù Xì",
    soBanThang:0,
    soBanChoi:0,
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
        
        case 'END_GAME':
            state.soBanChoi +=1;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo' :
                    if(computer.ma === 'keo') {
                        state.ketQuaOanTuTi = 'Hòa nhau !!!'
                    }else if (computer.ma === 'bua') {
                        state.ketQuaOanTuTi = 'Thua rồi !!!'
                    }else if (computer.ma === 'bao'){
                        state.ketQuaOanTuTi = 'Thắng rồi hay lắm !!!'
                        state.soBanThang +=1;
                    }
                ;break;  
                case 'bua' :
                    if(computer.ma === 'keo') {
                        state.ketQuaOanTuTi = 'Thắng rồi hay lắm !!!'
                        state.soBanThang +=1;
                    }else if (computer.ma === 'bua') {
                        state.ketQuaOanTuTi = 'Hòa nhau !!!'
                    }else if (computer.ma === 'bao'){
                        state.ketQuaOanTuTi = 'Thua rồi !!!'
                    }
                ;break;
                case 'bao' :
                    if(computer.ma === 'keo') {
                        state.ketQuaOanTuTi = 'Thua ròi !!!'
                    }else if (computer.ma === 'bua') {
                        state.ketQuaOanTuTi = 'Thắng rồi hay lắm !!!'
                        state.soBanThang +=1;
                    }else if (computer.ma === 'bao'){
                        state.ketQuaOanTuTi = 'Hòa nhau !!!'
                    }
                ;break;
                default: state.ketQuaOanTuTi = "Ironman 3000"
                }
            return {...state};
        default: return {...state}
    }
}

export default baiTapOanTuTiReDucer;