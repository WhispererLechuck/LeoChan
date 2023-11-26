export class AboutModel{
    public id: number;
    public title: string;
    public description: string;
    public imgPath: string;

    constructor(
        id: number,
        title: string,
        description: string,
        imgPath: string,
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgPath = imgPath;

    }
}