import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  signUpForm!: FormGroup;
  invalidSignUp: boolean = false;
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      'name': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(5)]),
    }
    );
  }

  signUp() {
    this.signUpForm.markAllAsTouched();
    if(this.signUpForm.invalid) return;
    else if(this.getFormControl('confirmPassword').value != this.getFormControl('password').value) return;
    else {
      const user = {
        name: this.signUpForm.get('name')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value
      }
      this.authService.createUser(user).subscribe(data => this.router.navigateByUrl('login'), 
      (err:any) => {
        this.invalidSignUp = true;
      })
    }
  }

  getFormControl(name:string):FormControl {
    return this.signUpForm.get(name) ? <FormControl> this.signUpForm.get(name) : new FormControl('', Validators.required);
  }

}
