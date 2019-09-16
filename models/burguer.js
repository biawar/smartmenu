class Burguer {
    constructor(id, ownerId, titulo, imagemURL, description, [priceSmaller, priceBigger], [smallerBurguer, biggerBurguer]) {
        this.id = id;
        this.ownerId = ownerId;
        this.titulo = titulo;
        this.imagemURL = imagemURL;
        this.description = description;
        this.price = [priceSmaller, priceBigger];
        this.sizeOfBurguer = [smallerBurguer, biggerBurguer];
    }
}

export default Burguer;