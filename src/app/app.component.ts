import { Component, OnInit } from '@angular/core';
import { SERVICIOService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'LLamando rutas API Rest Tareas';


  constructor(private _httpService: SERVICIOService) { }

  ngOnInit() {
    this.getTasksFromService();
    this.getTaskByIdFromService();
  }

  tasks: any = [];
  task: any = {};

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
      //this.tasks = JSON.stringify(data);
    });
  }


  getTaskByIdFromService() {
    let observable = this._httpService.getTaskById("");
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.task = data;
      //this.tasks = JSON.stringify(data);
    });
  }


  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    // llama el método de servicio para publicar los datos, pero asegúrate que los datos están agrupados en un objeto
    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log("Got our data!", data));
}

onButtonClickGetAllTasks(): void {
  console.log("Dentro de onButtonClickGetAllTasks");
  // llama el método de servicio para publicar los datos, pero asegúrate que los datos están agrupados en un objeto
  let observable = this._httpService.getTasks();
  observable.subscribe(data => console.log("Got our data in onButtonClickGetAllTasks!", data));
}

onButtonClickGetTask(_id: string): void {
  console.log("Dentro de onButtonClickGetTask: " +_id);
  // llama el método de servicio para publicar los datos, pero asegúrate que los datos están agrupados en un objeto
  let observable = this._httpService.getTaskById(_id);
  observable.subscribe(data => console.log("Got our data in onButtonClickGetTask!", data));
}



}

