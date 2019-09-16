import BURGUER from '../../data/dummy-data'

const initialState = {
    availableBurguers: BURGUER,
    userProducts: BURGUER.filter(prod => prod.ownerId === 'cl1')
};

export default (state = initialState, action) => {
    return state;
};