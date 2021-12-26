import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1, 'name':'Learn Angular', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/card.jpg'},
    {'id':2, 'name':'Learn TypeScript', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/type.jpg'},
    {'id':3, 'name':'Learn NodeJs', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/note.jpg'},
    {'id':4, 'name':'Learn ReactJs', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'image':'../../assets/react.jpg'}
  ]
}
