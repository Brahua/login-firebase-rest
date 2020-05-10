import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '@core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UsuarioModel;

  constructor(private router: Router) {
    this.user = new UsuarioModel();
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    // this.router.navigate(['./main']);
  }
}
