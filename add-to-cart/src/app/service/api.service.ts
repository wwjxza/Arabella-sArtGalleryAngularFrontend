import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { find, map, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // get() param1 can also be relative path besides full url
  // but the files should be under assets folder
  // As such, for front-end design, we don't need external mock database
  // pipe() 是 Observable 的一个方法，可以实现串连多个操作符，i.e., operator function
  // 以简化操作和代码. Observable 没有 map() 方法，所以，只能通过 pipe() 来对返回值进行相应操作
  // 由于这里的map()并没有对get()的返回值做任何处理，故我们不需要pipe()
  // getProducts(): Observable<any> {
  //   return this.http.get<any>("assets/products.json");
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  public search: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public categoryBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getProducts(): Observable<any> {
    return this.http.get<any>("assets/products.json");
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>("assets/products.json")
    .pipe(
      concatMap(x => x),
      find<any>(x => x.id === id),
      )
  }

  

}
