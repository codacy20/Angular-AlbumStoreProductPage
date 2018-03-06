import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private id:number;
  private _albumUrl = '../assets/album.json';
  constructor(private _http:Http) { }

  getAlbum(id):any{
    return this._http.get(this._albumUrl)
    .map((response: Response) => {
      const data = response.json(); 
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAlbum(12);
  }
}
