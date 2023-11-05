export class positionModel {
    public id: number;
    public name: string;
    public description: string;
    public openDate?: Date;
    public salaryRange: string;
    public location: string[];

    constructor(
        id: number,
        name: string,
        description: string,
        salaryRange: string,
        location: string[],
        openDate?: Date,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.openDate = openDate;
        this.location = location;
        this.salaryRange = salaryRange;

    }
}