import LoginReducer from './LoginReducer';

describe('Login Reducer: ', () => {
    it('Should return default state for unknown action', () => {
        const newState = LoginReducer(undefined, 'Some action');
        expect(newState).toEqual({});
    })
    
})