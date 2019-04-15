import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    // console.log(this.model);
    this.authService.registrar(this.model).subscribe( next => {
      console.log('sip');
    }, error => {
      console.log('err');
    }, () => {
      this.router.navigate(['']);
    });
  }
}
