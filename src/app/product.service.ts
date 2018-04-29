import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {
  url = '/products';

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list(this.url).push(product);
  }

  getAll() {
    return this.db.list(this.url);
  }

  get(productId) {
    return this.db.object(this.url + '/' + productId);
  }

  update(productId, product) {
    return this.db.object(this.url + '/' + productId).update(product);
  }
}
