import { Review } from './review.model';

export interface MovieBase {
  title: string;
  director: string;
  year: number;
  total_gross: number;
  duration: number;
  parental_rating: string;
}
export class Movie implements MovieBase{
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
