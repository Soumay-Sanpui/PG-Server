type ROLE = 'TENANT' | 'PG-OWNER';

export class CreateUserDto {
  public fullName: string;
  public username: string;
  public phoneNumber: string;
  public email: string;
  public password: string;
  private role?: ROLE;
}
