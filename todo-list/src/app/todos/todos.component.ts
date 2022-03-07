import { Component, OnInit } from '@angular/core';
import { Todo } from '../modals/modals';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  newTodo:string = ''
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        completed: false,
        content: 'Popij sok',
      },
      {
        completed: true,
        content: 'idi na spavanje',
      },
      {
        completed: true,
        content: 'odigraj sony',
      },
    ];
  }
  toggle(i:any){
    this.todos.forEach((a,ii)=>{
     
      if(i == ii) {a.completed = !a.completed;  console.log(a)};

    })
  }

  removeTodoItem(id:number){
    this.todos =  this.todos.filter((a,i)=>{
      console.log(i!=id)
      return i !==id;
    })
  }

  AddTodo(){
    this.todos.push({
      completed:false,
      content :this.newTodo


    })
  }
}
