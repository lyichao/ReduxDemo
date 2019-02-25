// ActionTypes里面存放着App中可能触发的事件
import * as types from './../contants/ActionTypes';
// 初始化值
const initialState = {
    showMsg:'',
    userName:'',
    tel:''
};
// 导出LoginReducer。
export default function LoginReducer(state = initialState, action){
    // 通过switch来判断types的值，在action中实现功能。
    switch (action.type) {
        // 当type=LOGIN_SUCCESS时，会将action中的值，
        // 赋值给showMsg、userName和tel。在Login文件夹下的index.js中就能拿到
        // showMsg、userName和tel的值。
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                showMsg:action.showMsg,
                userName:action.userName,
                tel:action.tel
            });
        case types.LOGIN_FAIL:
            return Object.assign({}, state, {
                showMsg:action.showMsg,
                userName:action.userName,
                tel:action.tel
            });
        case types.SKIP_LOGIN:
            return Object.assign({}, state, {
                showMsg:action.showMsg,
                userName:action.userName,
                tel:action.tel
            });
        default:
            return state;
    }
}