import { Component, OnInit } from '@angular/core';
import { datamodel } from '../shared/data.model';
import { DataService } from '../total-task/data.service';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.css']
})
export class InprogressComponent implements OnInit {
  taskdata! : datamodel[];

  constructor(private dataservice:DataService) { }

  ngOnInit(){
    
  
    let userdata= JSON.parse(localStorage.getItem('mydata')|| '{}');
   
    
    
    
   this.taskdata= userdata;
   console.log(this.taskdata);
   
  }
}
