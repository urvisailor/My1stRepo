import { Component, OnInit } from '@angular/core';
import {EmpServiceService} from '../emp-service.service';
import {NgForm} from '@angular/forms';
import {EmpModel} from '../EmpModel';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private eservice : EmpServiceService) { }

  ngOnInit() {
    this.resetform();
    this.getDetails();

  }

  resetform(form?: NgForm)
  {
    if(form)
      form.reset();
      this.eservice.selectedEmployee={
        _id:'',
        name:'',
        salary:null
        
      }
    
  }

  getDetails()
  {
    this.eservice.getemp().subscribe
    (
      res=>{
        this.eservice.employee=res as EmpModel[];
      }
    )
  }


  onSubmit(form:NgForm)
  {
    if(form.value._id=="")
    {
    this.eservice.insertemp(form.value).subscribe
    (
      
      (res)=>
      {
      });
    }
    else
    {
      this.eservice.update(form.value).subscribe
      (
        (res)=>
      {
        
        //console.log(res);
      });
      
    }
    this.resetform(form);
    this.getDetails();

  }
  onDelete(_id:string,form:NgForm)
  {
    if(confirm('Are you sure to delete'))
    {
      this.eservice.deleteEmployee(_id).subscribe(
        res=>{
        // this.getDetails();
        }
      );
      this.getDetails();
    }
  }

  onEdit(emp:EmpModel)
  {
    this.eservice.selectedEmployee=emp;
  }

  onsearch(name:string)
  {
    this.eservice.search(name).subscribe(
      (res)=>{
        this.eservice.employee=res as EmpModel[];
      }
    )
  }
}



  
  
 
  
  


