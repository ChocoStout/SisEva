import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasService } from '../services/encuestas.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  model: any = {};

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private encuestasService: EncuestasService, public authService: AuthService) { }

  ngOnInit() {
    this.model.Evaluador = this.authService.getDecodedToken().Nombre;
  }

  guardar() {
    this.model.Fecha = this.getFechaHoy();
    console.log(this.model);
    return this.encuestasService.crearEncuesta(this.model).subscribe(next => {
      alert('saved');
    }, error => {
      alert('sad');
    }, () => {
      this.router.navigate(['reportes']);
    });
  }

  cancelar() {
    this.router.navigate(['']);
  }

  getFechaHoy() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  }
}
