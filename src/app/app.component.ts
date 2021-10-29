import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('userForm') form:NgForm; 
  
  defaultQst= "pet";
  answer = '';
  genders= ["Male", "Female"];
  gen ="Male";
  submitted = false;
  user ={
    uname : '',
    emailId : '',
    secQst : '',
    ans : '',
    gender : ''
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.setValue({
    //   userData1: {
    //     username : suggestedName,
    //     email : 'ddd'
    //   },
    //   secret: 'pet',
    //   qstAnswer: '',
    //   gender: 'Male'
    // });

    this.form.form.patchValue({
      userData1: {
        username : suggestedName,
      }
    });
  }

  // onSubmit(form : NgForm){
  //   console.log("submitted : " , form);
  // }

  onSubmit(){
    this.submitted = true;
    console.log("submitted : " , this.form);
    this.user.uname = this.form.value.userData1.username;
    this.user.emailId = this.form.value.userData1.email;
    this.user.secQst = this.form.value.secret;
    this.user.ans = this.form.value.qstAnswer;
    this.user.gender = this.form.value.gender;

    this.form.reset();
  }

}
