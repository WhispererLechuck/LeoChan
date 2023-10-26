export class ProductsModel{
    public id: number;
    public name: string;
    public amount: number;
    public price: number;
    public category: string;
    public description?: string;
    public imagePath?: string;
    
    constructor(
         id: number,
         name: string,
         amount: number,
         category: string,
         price: number,
         description?: string,
         imagePath?: string
    ){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.category = category;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
    }

    
}