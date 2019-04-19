import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EncuestasService } from '../services/encuestas.service';

@Component({
  selector: 'app-encuesta-id',
  templateUrl: './encuesta-id.component.html',
  styleUrls: ['./encuesta-id.component.css']
})
export class EncuestaIdComponent implements OnInit {

  model: any = {};
  IdEncuesta: any = {};

  constructor(private router: Router, private encuestasService: EncuestasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.IdEncuesta = {
      IdEncuesta: this.route.snapshot.params.IdEncuesta * 1
    };
    this.getModel();
  }

  volver() {
    this.router.navigate(['reportes']);
  }

  getModel() {
    this.encuestasService.verEncuesta(this.IdEncuesta).subscribe( (data) => {
      this.model = data;
    }, error => {
      this.model = null;
    });
  }
}
