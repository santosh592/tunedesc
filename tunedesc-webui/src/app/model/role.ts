export class Role {
  private id: number;
  private role: string;
  private roleDescription: string;


  constructor(id: number, role: string, roleDescription: string) {
    this.id = id;
    this.role = role;
    this.roleDescription = roleDescription;

  }

}