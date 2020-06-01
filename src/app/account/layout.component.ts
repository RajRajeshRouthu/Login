import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( private router:Router,private account:AccountService) { 
   if (this.account.userValue)
   {
     this.router.navigate(['/']);

   }
  }

  ngOnInit(): void {
  }

}
