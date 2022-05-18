export class contract {
  public firstname: string;
  public lastname: string;
  public gender: string;
  public submitChannel: string;

  constructor(firstname: string, lastname: string, gender: string, submitChannel: string){
   this.firstname = firstname;
   this.lastname = lastname;
   this.gender = gender;
   this.submitChannel = submitChannel;
  }
}
