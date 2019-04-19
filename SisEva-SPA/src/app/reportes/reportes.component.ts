import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { EncuestasService } from '../services/encuestas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  model: any[] = [];

  constructor(private encuestasService: EncuestasService, private router: Router) { }

  ngOnInit() {
    this.getEncuestas();
    console.log(this.model);
  }

  getEncuestas() {
    this.encuestasService.verEncuestas().subscribe( (data:any[]) => {
      for(let x = 0; x < data.length ; x++) {
        this.model.push(data[x]);
      }
    }, error => {
      this.model = null;
    })
  }

  test(model:any) {
    this.router.navigate(['/encuesta/' + model.IdEncuesta])
  }

}
