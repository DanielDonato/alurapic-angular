import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorSerivice } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SingupService } from './singup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { userNamePasswordValidator } from './username-password.validator';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [ UserNotTakenValidatorSerivice ]
})
export class SingupComponent implements OnInit {

  singupForm: FormGroup;
  @ViewChild('emailInput') 
  emailInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorSerivice,
    private singupService: SingupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) { }

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
    }, {
      validator:userNamePasswordValidator
    });
    this.platformDetectorService.isPlatformBrowser() 
    && this.emailInput.nativeElement.focus();
  }

  singup() {
    if (this.singupForm.valid && !this.singupForm.pending) {
        const newUser = this.singupForm.getRawValue() as NewUser;
        this.singupService
        .singup(newUser)
        .subscribe(
          () => this.router.navigate(['']),
          err => console.log(err)
          );
      }
  }

}
