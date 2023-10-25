export class ProductsModel{

    public name: string;
    public amount: number;
    public category: string;
    public description?: string;
    public imagePath?: string;
    constructor(
         name: string,
         amount: number,
         category: string,
         description?: string,
         imagePath?: string
    ){
        this.name = name;
        this.amount = amount;
        this.category = category;
        this.description = description;
        this.imagePath = imagePath;
    }

    
}