import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  todoList: any = [];

  addToList() {
    const data = document.getElementById('text') as HTMLInputElement;
    this.todoList.push(data.value);
    data.value = '';
  }

  remove(data: any) {
    this.todoList = this.todoList.filter((d: any) => d !== data);
  }
}
