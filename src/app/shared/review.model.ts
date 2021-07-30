export class Review {
    constructor(
        public id: number,
        public title: string,
        public body: string,
        public rating: number,
        public movie_id: number,
        public user_id: number,
        public created_at: Date,
        public updated_at: Date
    ) {}

    public get isUpdated() {
      debugger
      return (this.updated_at && this.updated_at != null);
    }
}
