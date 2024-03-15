import { Images } from "./Images";

export interface Items {
    id:string;
    image: string;
    name: string;
    hospital: string;
    isPayed:boolean;
    payment:number;
    experience:number;
    distance:number;
    equipments:string;
}


export const itemsArray = [
    {
        id:1,
        image:Images.profile,
        name:"Suraj Singh",
        hospital:"Seven Hills Hospital",
        isPayed:false,
        payment:750,
        experience: 1.5,
        distance: 2,
        equipments: 'Oxygen system,\n cardiac monitor IV Suplies'
    },
    {
        id:2,
        image:Images.profile,
        name:"Jagdeesh Sinha",
        hospital:"Holi Spirit Hospital",
        isPayed:true,
        payment:900,
        experience: 1.5,
        distance: 2,
        equipments: 'Oxygen system,\n cardiac monitor IV Suplies'
    },
    {
        id:3,
        image:Images.profile,
        name:"Pankaj Panday",
        hospital:"Seven Hills Hospital",
        isPayed:true,
        payment:850,
        experience: 1.5,
        distance: 0.5,
        equipments: 'Oxygen system,\n cardiac monitor IV Suplies'
    },
    {
        id:4,
        image:Images.profile,
        name:"Umar Arman",
        hospital:"Holi Spirit Hospital",
        isPayed:true,
        payment:750,
        experience: 1.5,
        distance: 3,
        equipments: 'Oxygen system,\n cardiac monitor IV Suplies'
    },
    {
        id:5,
        image:Images.profile,
        name:"Mahesh Kumar",
        hospital:"Seven Hills Hospital",
        isPayed:true,
        payment:600,
        experience: 1,
        distance: 5,
        equipments: 'Oxygen system,\n cardiac monitor IV Suplies'
    },
]