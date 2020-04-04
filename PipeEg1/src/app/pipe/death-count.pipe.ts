import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../model/data';

@Pipe({
  name: 'deathCount',
})
export class DeathCountPipe implements PipeTransform {
  newCountries: Country[] = new Array<Country>();
  transform(value: Country[], totalDeath: number): Country[] {
    // console.log('value ::::' + value + '::any::' + totalDeath);
    this.newCountries = new Array<Country>();
    if (value) {
    for (const c of value) {
    // console.log('for loop::' + c.TotalDeaths);
      if (c.TotalDeaths > totalDeath) {
       this.newCountries.push(c);
     }
   }
    console.log('Total array length::' + this.newCountries.length + '::total:;' + value.length);
    return this.newCountries;
  } else {
    return value;
  }

  }

}
