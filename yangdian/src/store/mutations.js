import state from './state.js'
import * as types from './mutation-types.js'
export default {
	[types.ADD](state,payload){
		state.a += payload.value
	},
	reduce(state){
		state.b--
	}
}