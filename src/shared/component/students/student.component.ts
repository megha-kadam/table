import { Component, ElementRef, ViewChild } from "@angular/core";
import { Istudents } from "src/shared/models/student";

@Component({
    selector : "app-students",
    templateUrl : "./student.component.html",
    styleUrls : ["./student.component.scss"]
})
export class studentComponent {
    stdArr : Array<Istudents> = [{
        fName : "Jhon",
        lName : "Doe",
        email : "jd@gmail.com",
        contact : 9886765
    },
    {
        fName : "May",
        lName : "William",
        email : "mw@gmail.com",
        contact : 23456
    },
    {
        fName : "July",
        lName : "Wiliamson",
        email : "jw@gmail.com",
        contact : 657923
    }]

    @ViewChild("fName") fName !: ElementRef;
    @ViewChild("lName") lName !: ElementRef;
    @ViewChild("email") email !: ElementRef;
    @ViewChild("contact") contact !: ElementRef;
    constructor(){

    }

    onAddStd(){
        let stdObj : Istudents = {
            fName : this.fName.nativeElement.value,
            lName : this.lName.nativeElement.value,
            email : this.email.nativeElement.value,
            contact : this.contact.nativeElement.value
        }
        this.stdArr.unshift(stdObj)
        this.fName.nativeElement.value = this.lName.nativeElement.value = 
        this.email.nativeElement.value = this.contact.nativeElement.value = ""
    }
}