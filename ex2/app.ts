import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User | undefined {
        return this.users.find(user => { return user.email === email})
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        this.users.push(user)
    }

    registerBike(bike:Bike): void{
        for(const rBike of this.bikes){
            if(rBike.id === bike.id){
                throw new Error('bike already registered')
            }
        }
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    removeUser(email: string){
       this.users = this.users.filter(rUser => rUser.email !== email)
    }

    rentBike(bike: Bike, user: User, startDate: Date, endDate: Date): void{
        const array = this.rents.filter((bikes)=>bike === bikes.bike)

        const newrent = Rent.create(array, bike, user,startDate, endDate)
        this.rents.push(newrent)
    }

    returnBike(bike: Bike){
       let today = new Date()
       today.getDate
       for(const rRent of this.rents){
        if(rRent.bike === bike){
            rRent.dateReturned = today
        }

    }
  }
}
// import {Bike} from "./bike";
// import {Rent} from "./rent";
// import {User} from "./user";

// export class App{
//     users: User[] = []
//     bikes: Bike[] = []
//     rents: Rent[] = []

//     // register bike
//     // remove user
//     // rent bike
//     // return bike
    
//     findUser(email: string): User | undefined{
//         return this.users.find(user =>{ return user.email === email})
//     }

//     addUser(user: User):void{
//         for(var i = 0;i<this.users.length;i++){
//             if(this.users[i].email===user.email){
//                 throw new Error('duplicate user')

//             }
//         }
        
//         this.users.push(user)
//     }
// }

    
//     //     for(const rUser of this.users){
//     //         if(rUser.email===user.email){ ->>>>>>>>>>>(serve para comparar tipo e valor os ===)
//     //             throw new Error('duplicate user')

//     //         }
//     //     }
        
//     //     this.users.push(user)
//     // }

// //     //addUser(user: User){
// //         //for(const rUser of this.users){
// //             //if(rUser.email === user.email){
// //                 throw new Error('User already registered')
// //             }
// //         }
// //         this.users.push(user)
// //     }
    
// // }


