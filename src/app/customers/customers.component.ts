import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
    console.log('Customer List 1 : ',this.customers);
    // console.log('String: '+ this.customerService.printString() as string);
    this.customerService.findAll().subscribe(data => {
        this.customers = data;
        console.log('Customer List 2: ',this.customers);
    });
  }

}
