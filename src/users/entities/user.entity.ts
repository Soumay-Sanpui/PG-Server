type ROLE = 'TENANT' | 'PG-OWNER';

export class User {
  public fullName: string;
  public username: string;
  public phoneNumber: string;
  public email: string;
  public password: string;
  private role?: ROLE;
}
