import { ExchangeService } from './../exchange.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tab = [];
  msg = '';
  

  constructor(private exchange: ExchangeService) {}

  ngOnInit() {
  
    this.exchange.getAllValues().subscribe({
      next: (data) => {
        console.log(data['quotes']);//data.quotes
        for(const element in data['quotes']) {
          this.tab.push(element.slice(-3));
          
        }
        console.log(this.tab);
    
      },
    });
  }
  
  onChange(c2Value) {
    console.log(c2Value);
    this.exchange.getAllValues().subscribe({
      next: (data) => {
        console.log(data['quotes']); //data.quotes
        let req = `usd${c2Value}`;
        this.msg = `Today, 1 usd worths ${data['quotes'][req]} ${c2Value}`;
      },
    });

  }
}


