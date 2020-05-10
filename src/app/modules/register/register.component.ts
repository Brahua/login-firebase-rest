import { UsuarioModel } from '@core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UsuarioModel;

  constructor() {
    this.user = new UsuarioModel();
  }

  ngOnInit(): void {
    // this.usuario = new UsuarioModel();
  }

  register(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }
  }
}
