import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  loginForm!: FormGroup;
  invalidLogin = false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    }
    );
  }

  login() {
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) return;
    this.authService.validateUser(this.loginForm.value).subscribe((data:any)=> {
      if(data && data.success) {
        localStorage.setItem("auth-token", data.success);
        this.router.navigateByUrl("");
      }
      else 
        this.invalidLogin = true;
    }, (err:any) =>{
      this.invalidLogin = true;
    });
  }

  getFormControl(name:string):FormControl {
    return this.loginForm.get(name) ? <FormControl> this.loginForm.get(name) : new FormControl('', Validators.required);
  }

}
