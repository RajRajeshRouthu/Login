import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Validator,FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {AccountService} from 'src/app/services/account.service';
import {AlertService} from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
    ) 
    { 

  }

  ngOnInit(): void {
 this.form=this.formBuilder.group(
   {
     username:['',Validators.required],
     password:['',Validators.required]
   }
 );

 this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
get f()
{
  return  this.form.controls;
}
onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.loading = true;
  this.accountService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}
