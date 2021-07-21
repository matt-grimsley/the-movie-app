export class User {
  constructor(
    public id: string,
    public email: string,
    public first_name: string,
    public last_name: string,
    public name: string,
    public nickname: string,
    public token?: string) {}
}
