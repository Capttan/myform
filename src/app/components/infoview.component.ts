import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CustomserviceService } from '../services/customservice.service'
import { Weather } from '../models'

@Component({
  selector: 'app-infoview',
  templateUrl: './infoview.component.html',
  styleUrls: ['./infoview.component.css']
})

export class InfoviewComponent implements OnInit {

  // cusId: string;
  // model: Weather = { cityName:"Singapore", temp:0 };
  // WEATHER_API_KEY = "476e23fe1116f4e69d2a3e68672604e1";

  constructor(private cusSvc: CustomserviceService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  localPass:string;

  ngOnInit() {
    // this.cusId = this.activatedRoute.snapshot.params.cusId;
    // console.info('cusId:', this.cusId);
    // this.getWeatherFromAPI(this.cusId);

    this.localPass = this.cusSvc.formObj.password;

    console.info('localPass', this.localPass);

    for(let i=1;i<this.localPass.length-1;i++){
      this.localPass = this.localPass.substring(0, i) + '*' + this.localPass.substring(i+1);
    }

    console.info('localPass', this.localPass);
  }



  toHome(){
    this.router.navigate(['/']);
  }

}
