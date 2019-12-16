/*
 * @Description: 
 * @Autor: cuiJian
 * @Date: 2019-12-16 16:43:03
 * @LastEditors: cuiJian
 * @LastEditTime: 2019-12-16 17:33:15
 */
import {testGet, login} from "../api/login";
const obj = {
    namespace: "hello",
    state: {
        ts: "原始的",
    },
    effects: {
		*handInitTs(_, sagaEffects) {
            console.log(_);
			const { call, put } = sagaEffects;
            const res = yield call(testGet,_.url);
            console.log(res)
			yield put({ type: 'initTs', value: res.data});
        },
        *testPost(_, {call,put}) {
            console.log(_);
            const res = yield call(login, _.url ,_.data);
            console.log(res)
        }
	},
    reducers: {
        initTs(state, actions) {
            const ns = JSON.parse(JSON.stringify(state));
            ns.ts = actions.value;
            return ns;
        },
    }
}
export default obj;