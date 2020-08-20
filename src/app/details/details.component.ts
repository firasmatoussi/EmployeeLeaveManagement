import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  employee: Employee = { id: null, lastName: '', firstName: '', num_cnr: null, grade: '', jours_dispo: null };
isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getEmployeeDetails(this.route.snapshot.params['id']);
  }

  getEmployeeDetails(id) {
    this.api.getEmployee(id)
      .subscribe(data => {
        this.employee = data;
        console.log(this.employee);
        this.isLoadingResults = false;
      });
  }

  deleteEmployee(id) {
    this.isLoadingResults = true;
    this.api.deleteEmployee(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/employees']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
