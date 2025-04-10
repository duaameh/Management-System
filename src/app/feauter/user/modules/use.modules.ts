interface User {
    id?:string,
    name:string ,
    email :string ,
    password :string,
    create_at ?:Date ,
    updated_at ?:Date 


}
export default User