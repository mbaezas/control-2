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
  public error = {
    loginError: false,
  }

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

  async onSubmit() {
    if (this.loginForm.valid) {
      const response = await this.sessionService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
      if (response) {
        this.error.loginError = false;
        const tokenResponse: string = response.data;
        this.sessionService.setToken(tokenResponse);
        this.router.navigate(['/home']);
      }

      if (!response) {
        this.error.loginError = true;
      }
    }
  }

}
