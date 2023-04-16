import { Injectable } from '@angular/core';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  selectedCity: City;

  cities: City[] = [
    {
      name: "Belakhum",
      description: "Lorem ipsum dolor sit amet, Ipsum labitur lucilius mel id, ad has appareat.",
      image: "./assets/Belakhum.jpg"
    },
    {
      name: "Sajek Velly",
      description: "Lorem ipsum dolor sit amet, Ipsum labitur lucilius mel id, ad has appareat.",
      image: "./assets/sajekVelly.jpg"
    },
    {
      name: "Amsterdam",
      description: "Lorem ipsum dolor sit amet, Ipsum labitur lucilius mel id, ad has appareat.",
      image: "./assets/Amsterdam.jpg"
    }, {
      name: "Egypt",
      description: "Lorem ipsum dolor sit amet, Ipsum labitur lucilius mel id, ad has appareat.",
      image: "./assets/Egypt.jpg"
    }, {
      name: "Switzerland",
      description: "Lorem ipsum dolor sit amet, Ipsum labitur lucilius mel id, ad has appareat.",
      image: "./assets/Switzerland.jpg"
    }, {
      name: "Venice",
      description: "Lorem ipsum dolor sit amet, Ipsum labitur lucilius mel id, ad has appareat.",
      image: "./assets/Venice.jpg"
    },
  ];
  constructor() { }

  getCities() {
    return this.cities;
  }

  selectCity(city: City) {
    this.selectedCity = city;
  }

  filterCities(text: string) {
    if (text == undefined) {
      return this.cities;
    }

    var cities = this.cities.filter((city) => {
      return city.name.toLowerCase().includes(text.toLowerCase())
    });
    
    return cities
  }
}
