import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  socket;
  toDoList;
  constructor(private http: HttpClient) {
    this.socket = io();
  }

  ngOnInit() {
    this.getToDos();
    this.socket.on('newTaskAdded', () => {
      this.getToDos();
    })
  }

  addToDo(value) {
    // this.toDoList.push(value);
    this.http.post('/todo', { description: value})
      .subscribe();
  }

  getToDos() {
    this.http.get('/todo')
      .subscribe((toDos) => {
        this.toDoList = toDos;
      });
  }
}
