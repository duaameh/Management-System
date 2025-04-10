import { promises } from "node:dns";
import User from "../modules/use.modules";
import { resolve } from "node:path";
import { rejects } from "node:assert";

 const users :User[] = [
    {
        id: 'user-1',
        name :'duaa',
        email :'duaa@gmail.com',
        password :'1234',
        create_at: new Date ()
    },
    {
        id: 'user-2',
        name :'israa',
        email :'soso@gmail.com',
        password :'1234',
        create_at: new Date ()
    }
]
export const getUsers = () :Promise <User[]> =>
{
return new Promise((resolve ,rejects)=> {
    setTimeout(() => {
        resolve(users)
    }, 1000);
})
}


export const AddUsers = (user:User) :Promise <User> =>
    {
    return new Promise((resolve ,rejects)=> {
        setTimeout(() => {
            user.id= 'user-'+ (users.length+1); // example -> user-user-3
            user.create_at =new Date();
            users.push(user);
            resolve(user);
        }, 1000);
    })
    }
    export const GetUser = (id:string) :Promise <User> =>
        {
        return new Promise((resolve ,rejects)=> {
            setTimeout(() => {
          const user = users.find((user :User )=> user.id === id)
            if(user)
                {
                    resolve(user)
                }
            else
            {
                rejects('user not found')
            }
        }, 1000);
        })
        //data type of return value from promise is resolve data 
        }
        export const UpdateUser = (userUpdated:User) :Promise <User> =>
            {
            return new Promise((resolve ,rejects)=> {
                setTimeout(() => {
              let userIndex = users.findIndex((user :User )=> user.id === userUpdated.id);
                if(userIndex !=-1)
                    {
                        const user=users[userIndex] = {...userUpdated}
                        user.updated_at =new Date();
                        
                       resolve(user)
                    }
                else
                {
                    rejects('user not found')
                }
            }, 1000);
            })
            //data type of return value from promise is resolve data 
            }
            
            export const loginUser = (email:string,password:string ) :Promise <User> =>
                {
                return new Promise((resolve ,rejects)=> {
                    setTimeout(() => {
                  const user = 
                  users.find((user :User )=> user.email === email && user.password ===password)
                    if(user)
                        {
                            resolve(user)
                        }
                    else
                    {
                        rejects('invalid email or password')
                    }
                }, 1000);
                })
                //data type of return value from promise is resolve data 
                }