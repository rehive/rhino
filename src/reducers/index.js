import { combineReducers } from 'redux'
import signup from './signup'
import login from './login'
import campaign from './campaign'
import perk from './perk'
import set_password from './set_password'
import signup_count from './signup_count'

export default combineReducers({
	signup,
	login,
	campaign,
	perk,
	set_password,
	signup_count
})