import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./signin.component.html"
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService, 
        private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(username, password)
            .subscribe(() => {
                this.router.navigate(['user', username]);
            },
            (err) => {
                console.log(err);
                this.loginForm.reset();
                alert('Username or password invalid');
            });
    }

}
