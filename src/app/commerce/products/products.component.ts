import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../../services/get-product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private _GetProductService:GetProductService){}
products:any[]=[];
getproducts(){

this._GetProductService.getProduct().subscribe({
  next:(res)=>{
    this.products=res.data;
    console.log(this.products);
  }
})

}
  ngOnInit(): void{
    this.getproducts();
  }
}
