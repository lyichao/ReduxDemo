// 获取actionType中的全部状态，需要哪个就用哪个
import * as types from './../contants/ActionTypes';

export function LoginAction(uid,pwd,flag) {
    return dispatch => {
        if(uid == 'lyichao' && pwd == '123456' && flag == 0){
            dispatch(loginSuccess({
                showMsg:'LoginSuccess',
                userName:'lyichao',
                tel:'13888888888'
            }));
        }else if(uid == '' && pwd == '' && flag == 1){
            dispatch(skipLogin({
                showMsg:'SkipLogin',
                userName:'',
                tel:''
            }));
        }else {
            dispatch(loginFail({
                showMsg:'LoginFail',
                userName:'',
                tel:''
            }));
        }
    }
};

function loginSuccess(data) {
    return {
        // type是必要参数，通过type值判断
        type: types.LOGIN_SUCCESS,
        ...data
    };
}
function loginFail(data) {
    return {
        // type是必要参数，通过type值判断
        type: types.LOGIN_FAIL,
        ...data
    };
}
function skipLogin(data) {
    return {
        type: types.SKIP_LOGIN,
        ...data
    };
}