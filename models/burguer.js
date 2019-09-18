class Burguer {
  constructor(id, ownerId, title, imageURl, description, priceSmaller, biggerBurguer) {
      this.id = id;
      this.ownerId = ownerId;
      this.title = title;
      this.imageURl = imageURl;
      this.description = description;
      this.price = priceSmaller;
      this.sizeOfBurguer = biggerBurguer;
  }
}

export default Burguer;