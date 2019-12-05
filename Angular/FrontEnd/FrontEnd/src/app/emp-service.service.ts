import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmpModel} from './EmpModel';
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  selectedEmployee:EmpModel;
employee:EmpModel[];
readonly rootURL='http://localhost:8000';

  constructor(private http:HttpClient) { }
  
  insertemp(emp:EmpModel)
  {
    return this.http.post(this.rootURL,emp);
  }

  getemp()
  {
    return this.http.get(this.rootURL);
  }

  deleteEmployee(_id:string)
    {
      return this.http.delete(this.rootURL+`/${_id}`);
    }
    update(emp:EmpModel)
    {
      return this.http.put(this.rootURL+`/${emp._id}`,emp);
    }

    search(name:string)
    {
      return this.http.get(this.rootURL+`/${name}`);
    }
}



