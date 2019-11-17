import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorSerivice } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SingupService } from './singup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  singupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorSerivice,
    private singupService: SingupService,
    private router: Router) { }

  ngOnInit() {
    this.singupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
  }

  singup() {
    const newUser = this.singupForm.getRawValue() as NewUser;
    this.singupService
      .singup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

}
