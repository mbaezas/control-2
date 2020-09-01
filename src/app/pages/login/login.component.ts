import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const response = this.sessionService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
      if (response) {
        this.sessionService.setToken(response);
        this.router.navigate(['/home']);
      }
    }
  }

}
