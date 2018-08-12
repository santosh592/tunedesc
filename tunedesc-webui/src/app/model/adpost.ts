export class AdPost {


    private companyName: string;

    private businessCategory: string;

    private aboutcompany: string;

    private description: string;

    private postType: string;

    private title: string;

    private userId: string;


    constructor(companyName: string, businessCategory: string, aboutcompany: string, description: string,postType:string,userId:string) {

        this.companyName = companyName;
        this.aboutcompany = aboutcompany;
        this.description = description;
        this.businessCategory = businessCategory;
        this.postType=postType;
        this.userId=userId;

    }

}