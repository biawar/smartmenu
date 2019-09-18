class Burguer {
  constructor(id, ownerId, titulo, imagemURL, description, priceSmaller, biggerBurguer) {
      this.id = id;
      this.ownerId = ownerId;
      this.titulo = titulo;
      this.imagemURL = imagemURL;
      this.description = description;
      this.price = priceSmaller;
      this.sizeOfBurguer = biggerBurguer;
  }
}

export default Burguer;