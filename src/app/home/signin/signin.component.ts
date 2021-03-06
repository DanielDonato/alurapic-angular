import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Component({
    templateUrl: "./signin.component.html"
})
export class SignInComponent implements OnInit {

    fromUrl = '';
    loginForm: FormGroup;
    @ViewChild('usernameInput') // decorator para receber a referencia de um elemento do DOM
    usernameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRouter: ActivatedRoute
        ) { }

    ngOnInit(): void {
        this.activatedRouter.queryParams.subscribe(params => 
            this.fromUrl = params.fromUrl
        );
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() 
        && this.usernameInput.nativeElement.focus();
    }

    login() {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(username, password)
            .subscribe(() => 
                (this.fromUrl)
                    ? this.router.navigateByUrl(this.fromUrl)
                    : this.router.navigate(['user', username])
            ,
            (err) => {
                console.log(err);
                this.loginForm.reset();
                this.platformDetectorService.isPlatformBrowser() 
                    && this.usernameInput.nativeElement.focus();
                alert('Username or password invalid');
            });
    }

}
