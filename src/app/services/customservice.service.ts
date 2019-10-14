import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SKU, globalStorage, FormData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CustomserviceService {

  svcForm: SKU[] = [];
  ctyForm: SKU[] = [];
  formObj: FormData;

  constructor(private httpSvc: HttpClient) { }

  getWeather(city: string, apiKey: string): Promise<any>{

    const api_url = 'http://api.openweathermap.org/data/2.5/weather';

    const params = new HttpParams()
      .set("q", city)
      .set("appid", apiKey);

      console.info("getWeather:", api_url ,{params: params});

    return this.httpSvc.get(api_url,{params: params}).toPromise();
  }

  getBitcoinInfo(): Promise<any>{
    const params = new HttpParams().set('crypto', 'BTC').set('fiat', 'SGD');
    const headers = new HttpHeaders().set('X-testing', 'testing');

    const api_hack = 'https://cors-anywhere.herokuapp.com/';

    const api_url = api_hack+'https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=SGD';

    console.info("getBitcoinInfo:", {headers: headers}, api_url, {params: params});

    // return this.httpSvc.get(api_url,{headers: headers}).toPromise();

    return new Promise((resolve,reject)=>{
      if(1){
        resolve('True');
      }else{
        reject('False');
      }
    });

    
  }

  getCountryInfo(): Promise<any>{
    const params = new HttpParams().set('crypto', 'BTC').set('fiat', 'SGD');
    const headers = new HttpHeaders().set('X-testing', 'testing');


    const api_hack = 'https://cors-anywhere.herokuapp.com/';
    const api_url = api_hack+'http://ec2-13-229-233-153.ap-southeast-1.compute.amazonaws.com:3000/countries';

    // console.info("getBitcoinInfo:", {headers: headers}, api_url, {params: params});

    // return this.httpSvc.get(api_url,{headers: headers}).toPromise();

    return this.httpSvc.get(api_url).toPromise();
    
  }
}
