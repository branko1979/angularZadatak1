import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor(private fb:UntypedFormBuilder){}

  ngOnInit(): void{
    this.contactForm = this.fb.group({
      title:["",Validators.required],
      email:["",Validators.required, Validators.email],
      text:["",Validators.required]
    })
  }  
   save (){

    if(this.contactForm.valid)
    {
     const data = this.contactForm.getRawValue();
     console.log("Formdata",data)
    }
    else{
      console.log("Niste popunili sva polja!")
    }
   }

   

  }


