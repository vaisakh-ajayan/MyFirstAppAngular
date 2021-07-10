import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  submitAuthForm(data){
    if(this.isLoginMode){
      this.authService.login(data.email, data.password).subscribe(
        (response)=>{
          console.log(response)
          this.router.navigate(['/'])
        },
        (error)=>{
          console.log(error)
        }
      )
    }
    else{
      this.authService.signUp(data.email, data.password).subscribe(
        (response)=>{
          console.log(response)
          this.router.navigate(['/'])
        },
        (error)=>{
          console.log(error)
        }
      )
    }
  }

}
