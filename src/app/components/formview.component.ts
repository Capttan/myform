import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CustomserviceService } from '../services/customservice.service';
import { SKU, globalStorage, FormData } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formview',
  templateUrl: './formview.component.html',
  styleUrls: ['./formview.component.css']
})
export class FormviewComponent implements OnInit {

  constructor(public cusSvc: CustomserviceService, private router: Router) { }

  ngOnInit() {
    this.logCountryPromise();
  }

  logCountryPromise() {
    this.cusSvc.getCountryInfo().then((result)=>{
      console.info('success: ', result);

      this.cusSvc.ctyForm = result;
      console.info('ctyForm', this.cusSvc.ctyForm);
    }).catch((error)=>{
      console.log('failure: ', error);
    });
  }

  logInputEvent($event, input:NgModel){
    console.info($event);
    console.info(input);

    // console.info(input.errors);

    //event debugging
    // console.info($event.target.value); //for input
    // console.info($event.value); //for radio button
    // console.info(parseInt($event.target.value)); //convert number string to int
    // console.info(parseFloat($event.target.value)); //convert number string to float
    // console.info(Date.parse($event.target.value)); //convert date string to an epoch counter in ms
    

  
  }

  // processForm(form: NgForm){
  //   const values = form.value;
  //   console.info('values: ', values);

  //   //form debugging

  //   //processForm algo

  //   let tempObj:SKU = {
  //     name: values.name,
  //     city: values.city
  //   }

  //   globalStorage.push(tempObj);

  //   this.cusSvc.svcForm.push(tempObj);

  //   console.info('Global Storage: ', globalStorage);
  // }

  processForm(form: NgForm){
    const values = form.value;
    console.info('values: ', values);

    //form debugging
    let dateString = new Date().toLocaleDateString();
    console.info(dateString);

    //processForm algo

    this.cusSvc.formObj = {
      name: values.name,
      password: values.pass,
      email: values.email,
      gender: values.gender,
      dob: values.dob,
      address: values.address,
      country: values.country,
      contact: values.contact
    };

    console.info('formObj', this.cusSvc.formObj);
    this.router.navigate(['/confirm']);
    // this.router.navigate(['/']);
  }

}
