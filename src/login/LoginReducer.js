import * as Actions from './Actions';

export default (state = {}, action) => {
    if(action.type === Actions.Types.Login){
        return {
            user: {
                username: action.username,
                password: action.password
            }
        }
    }
    return state;
}