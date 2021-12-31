import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(private router: Router, private activatedroute: ActivatedRoute) {
    }
    storeValue: Array<any>;
    firstname: string;
    lastname: string;
    counter: number = 0;
    store: object;
    @ViewChild("emailInput") Email: ElementRef;
    @ViewChild("passwordInput") Password: ElementRef;
    @ViewChild("loginform") loginForm: any;


    submitValue(formData: NgForm) {
        console.log("function", formData);
        this.storeValue = JSON.parse(localStorage.getItem("userDetails")) || [];
        for (let x in this.storeValue) {
            if (this.Email.nativeElement.value == this.storeValue[x].email &&
                this.Password.nativeElement.value == this.storeValue[x].password) {
                this.store = {
                    firstname: this.storeValue[x].firstname,
                    lastname: this.storeValue[x].lastname,
                    email: this.storeValue[x].email,
                    password: this.storeValue[x].password
                };
                sessionStorage.setItem("userDetails", JSON.stringify(this.store));
                this.router.navigate(['welcome'], { queryParams: { firstname: this.storeValue[x].firstname, lastname: this.storeValue[x].lastname } });
                return;
            }
        }
        for (let x in this.storeValue) {
            if (this.Email.nativeElement.value != this.storeValue[x].email
                || this.Password.nativeElement.value != this.storeValue[x].password) {
                this.counter = this.counter + 1;
            }
        }
        if (this.storeValue.length == this.counter) {
            alert("Entered email does not exist or check your credentials");
            this.counter = 0;
        }
    }
    formData() {
        console.log("reference", this.loginForm);
    }
}