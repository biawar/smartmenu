import BURGUERS from '../../data/dummy-data';

const initialState = {
    availableBurguers: BURGUERS,
    userBurguers: BURGUERS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    return state;
};