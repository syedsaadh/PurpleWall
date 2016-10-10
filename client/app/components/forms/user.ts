export class user {
  username: string;
  password: string;
  email:string;
  name:string;
}
export class registerModel {
 constructor(
     public success:boolean,
     public message:string
 ){}
}

export class authenticateModel {
 constructor(
     public success:boolean,
     public message:string
 ){}
}