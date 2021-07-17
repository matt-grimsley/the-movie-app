export class User {
  constructor(
    public id: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public name: string,
    public nickname: string,
    public token?: string) {}
}
