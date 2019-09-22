import Burguer from '../models/burguer';

const BURGUERS = [
    new Burguer(
        'b1',
        'u1',
        'Pilsen',
            'https://du7ybees82p4m.cloudfront.net/5b3e302517f8b1.20430934.jpg?width=910&height=512',
        'Burguer de fraldinha, queijo derretido, alface, tomate e maionese à escolha. No pão bola.',
        16.0,
        130.0
    ),

    new Burguer(
        'b2',
        'u1',
        'Porter',
        'https://uploads.metropoles.com/wp-content/uploads/2016/11/14122354/14853282_1119907968099805_905300533646922714_o.jpg',
        'Burguer de fraldinha (180g), molho de gorgonzola e crispy de couve, no pão australiano.',
        24.0,
        180.0
    ),
];

export default BURGUERS;