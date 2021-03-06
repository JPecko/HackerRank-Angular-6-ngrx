import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Product } from '@app/modules/product/models/product.model';

@Injectable()
export class ProductService {
    apiUrl = 'http://localhost:3000/products'
    getProducts() {
        return this.http.get<Product[]>(this.apiUrl)
    }

    getProduct(id: string) {
        return this.http.get<Product>(this.apiUrl + '/' + id)
    }

    constructor(private http: HttpClient) {
    }
}
