import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;
  _id:number=null;
lastName:string='';
firstName:string='';
num_cnr:number=null;
grade:string='';
jours_dipo:Date=null;
isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEmployee(this.route.snapshot.params['id']);
    this.employeeForm = this.formBuilder.group({
      'lastName' : [null, Validators.required],
      'firstName' : [null, Validators.required],
      'num_cnr' : [null, Validators.required],
      'grade' : [null, Validators.required],
      'jours_dipo' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addEmployee(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/employee-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getEmployee(id) {
    this.api.getEmployee(id).subscribe(data => {
      this._id = data.id;
      this.employeeForm.setValue({
        lastName: data.lastName,
        firstName: data.firstName,
        num_cnr: data.num_cnr,
        grade: data.grade,
        jours_dispo: data.jours_dispo
      });
    });
  }

  productDetails() {
    this.router.navigate(['/employee-details', this._id]);
  }

}
