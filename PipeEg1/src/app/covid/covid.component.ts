import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../service/restapi.service';
import { RootObject } from '../model/data';
import { Country } from '../model/data';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  data: RootObject;
  listOfCountries: Country[];
  totalDeathCountries: Country[];
  covidCount: number;

  constructor(private restapiService: RestapiService) {
    this.covidCount = 20;
    this.getCovidSummaryService();
   }

  ngOnInit() {
  }

  getCovidSummaryService() {
    this.restapiService.getCovidSummary().subscribe((response: RootObject) => {
      this.data = response;
      this.listOfCountries = this.data.Countries;
      console.log('data::' + this.listOfCountries[1].Slug);
    });
  }


  getDeathCountService(t: number): Country[] {
    return this.listOfCountries;
  }

}
