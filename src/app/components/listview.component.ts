import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SKU, globalStorage } from '../models';
import { CustomserviceService } from '../services/customservice.service'

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {


  constructor(private cusSvc: CustomserviceService, private router: Router) {
  }

  ngOnInit() {
  }

  // toInfo(cusId: string){
  dispInfo() {

    console.info(this.cusSvc.svcForm);
    // this.router.navigate(['/info',cusId]);
    // this.router.navigate(['/info']);
  }

  toInfo(cusId: string) {
    console.info('city:', cusId);
    this.router.navigate(['/info', cusId]);
    // this.router.navigate(['/info']);
  }

}
