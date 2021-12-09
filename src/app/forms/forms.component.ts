import { Component, OnInit } from '@angular/core'
import { Candidate } from './candidate'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  frameworks:string[] = ['Angular', 'React', 'Vue', 'Next']
  candidates:Candidate[] = []
  candidate:Candidate = new Candidate("","","","","")
  submitted:boolean = false

  constructor() { }

  ngOnInit(): void { 
  }

  onSubmit(form:any):void {
    console.log(form)
    if(form.valid) {
      let newCandidate = new Candidate(this.candidate.fname, this.candidate.lname,this.candidate.email, this.candidate.password, this.candidate.password1)
      this.candidates.push(newCandidate)
      this.submitted = true
    }
    else console.log('Invalid Form Entry')
  }

  // Returns class name based on form validity
  getClass(candidateFrm:any, name:string):string {
    if(candidateFrm.form.controls[name]?.status === 'INVALID') return 'red'
    else if(name == 'password1' && !this.candidate.passwordsMatch) return 'red'
    else if ((name == 'password' || name == 'password1') && this.candidate.passwordsMatch) return 'green'
    return ''
  }

  checkPasswords(form:any):void {
    if(this.candidate.checkPasswords()) {
      form.form.controls['password1'].setErrors(null);
    }
    else {
      form.form.controls['password1'].setErrors({'Doesnt Match': true});
    }
  }

}
