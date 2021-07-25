import { Review } from './review.model';

export class Movie {
    constructor(
        public id: number,
        public average_rating: number,
        public created_at: Date,
        public director: string,
        public duration: number,
        public image: null,
        public parental_rating: string,
        public rating: number,
        public reviews: Review[],
        public title: string,
        public total_gross: number,
        public user_id: number,
        public year: number
    ) {}
}
