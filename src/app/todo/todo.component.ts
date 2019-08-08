import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  sampleArray: Todo[]= [
    {task:"buy groceries", completed: true},
    {task:"cut grass", completed:false},
    {task:"wash dishes", completed:false}
  ];

  constructor() { }


  

  ngOnInit() {
  }

}
