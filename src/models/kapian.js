import request from '../util/request';  
// request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
// const delay = (millisecond) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, millisecond);
//   });
// };
// const 
import {testGet, testPost} from '../server'
export default {
    namespace: 'sp',
    state: {
		list: [
			{ id: 1, name: "pingguo_1", num: 5, price: 10, isChecked: false},
			{ id: 2, name: "pingguo_2", num: 5, price: 10, isChecked: true},
			{ id: 3, name: "pingguo_3", num: 5, price: 10, isChecked: false},
			{ id: 4, name: "pingguo_4", num: 5, price: 10, isChecked: false},
		],
	},
	effects: {
		*queryInitCards(_, sagaEffects) {
			// 第一个参数是页面传过来的参数
			const { call, put } = sagaEffects;
			// const url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
			const url = 'aaa/bbb/ccc';
			// Request URL: https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke
			const puzzle = yield call(testGet,url,{name: "zzzsss",age: 10});
			// call参数是一个返回promise对象的函数
			// 第二个参数就传进去第一个函数的参数列表
			// 这样一来就可以进行请求封装了
			yield put({ type: 'jiayi', id: 3 });
	
		//   yield call(delay, 3000);
	
		//   const puzzle2 = yield call(request, endPointURI);
		//   yield put({ type: 'addNewCard', payload: puzzle2 });
		}
	  },
	reducers: {
		addNewCard(state, { payload: newCard }) {
			const nextCounter = state.counter + 1;
			const newCardWithId = { ...newCard, id: nextCounter };
			const nextData = state.data.concat(newCardWithId);
			return {
			  data: nextData,
			  counter: nextCounter,
			};
		  },
		jiayi(state, actions) {
			// console.log(actions);
			const sn = JSON.parse(JSON.stringify(state));
			const index = sn.list.findIndex(i => i.id === actions.id);
			sn.list[index].num++;
			return sn;
		},
		jianyi(state, actions) {
			const sn = JSON.parse(JSON.stringify(state));
			const index = sn.list.findIndex(i => i.id === actions.id);
			sn.list[index].num--;
			return sn;
		},
		delyi(state, actions) {
			const sn = JSON.parse(JSON.stringify(state));
			const index = sn.list.findIndex(i => i.id === actions.id);
			sn.list.splice(index,1)
			return sn;
		},
		changeItem(state, actions) {
			const sn = JSON.parse(JSON.stringify(state));
			const index = sn.list.findIndex(i => i.id === actions.id);
			sn.list[index].isChecked = !sn.list[index].isChecked;
			return sn;
		},
		addItem(state, actions) {
			const sn = JSON.parse(JSON.stringify(state));
			sn.list.push(actions.item);
			return sn;
		},
		changeAll(state, actions) {
			const sn = JSON.parse(JSON.stringify(state));
			sn.list.forEach(item => item.isChecked = actions.value)
			return sn;
		},
	}
  };