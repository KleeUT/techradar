import HistoryReducer from './HistoryReducer';
import AppActions from '../actions/Actions';

const emptyObject = Object.freeze({});
const item1 = Object.freeze({
    name:'item1',
    ring:'of death',
    section:'segment',
    notes:'note'   
})
describe('History Reducer: ', () => {
    it('Should initialise from unknown event', () => {
        const newState = HistoryReducer(undefined, {type:'Its a me eventio'});
        expect(newState).toEqual(emptyObject);
    });

    it('Should add a history entry when an item is added', () =>{
        const netState = HistoryReducer(emptyObject, AppActions.AddRadarItem(item1))
        expect(newState).toEqual({item1:[{}]}) // I think i need time here how do I do that testabley
    })
});