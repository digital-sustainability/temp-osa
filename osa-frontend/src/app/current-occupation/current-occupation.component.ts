import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-current-occupation',
  templateUrl: './current-occupation.component.html',
  styleUrls: ['./current-occupation.component.scss'],
})
export class CurrentOccupationComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      student: [false],
      university_student: [false],
      apprentice: [false],
      working_fulltime_parttime: [false],
      other: [false],
    });
  }

  updateModel() {
    const id = this.userService.getUserIdFromURL();
    if (id == '') {
      this.router.navigateByUrl('/personality-trait-scales');
    } else {
      this.userService.addDataToUser(id, this.form.value).subscribe((res) => {
        // console.log(res);
      });
      this.router.navigateByUrl(`/personality-trait-scales?id=${id}`);
    }
  }
}
