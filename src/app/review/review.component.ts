// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-review',
//   templateUrl: './review.component.html',
//   styleUrl: './review.component.css'
// })
// export class ReviewComponent {

// }
// review.component.ts

import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

interface Review {
  id: number;
  feedBack: string;
  // rating: number;
  // Add any other properties as needed
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: any[] = [];
  newReview: any = {id: 0, feedBack: ''};

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe((reviews :any)=> {
      this.reviews = reviews;
    });
  }

  addReview(): void {
    this.reviewService.addReview(this.newReview).subscribe(() => {
      this.loadReviews();
      this.newReview = {id: 0, feedBack: ''}; // Clear the form after submission
    });
  }
  onSubmit(){
    if(this.reviews===null){
    alert('review failed');
  }
  else{
    alert('review submitted successfully');
  }
  }
}
