import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signUpUsers : any[] = [];
  signUpObj : any = {
    userID: '',
    email: '',
    password: ''
  }

  loginObj : any = {
    userID: '',
    password: ''
  }

  constructor(private route:ActivatedRoute,private router:Router){}

  displayMessage : string = '';

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null)
    {
      this.signUpUsers = JSON.parse(localData);
    }
    
  }
  onSignUp()
  {
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers))
    this.signUpObj = {
      userID: '',
      email: '',
      password: ''
    }
  }

  onLogin()
  {
    const userExists = this.signUpUsers.find(m => m.userID === this.loginObj.userID && m.password === this.loginObj.password)
    if(userExists != undefined)
    {
      this.router.navigate(['/home']).then(()=> window.location.reload()); 
    }
    else
    {
      this.displayMessage = 'Login Failed Please Check Your ID and Password';
      alert("incorrect login or password");
    }
  }

}
