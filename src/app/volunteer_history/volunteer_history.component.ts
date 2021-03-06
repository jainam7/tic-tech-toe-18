import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
    UserAuthenticationService,
    UtilService,
    VolunteerService,
    volunteerhistoryService
    
} from '@shared';
import { Voluteerclass } from '../shared/classes/volunteer_class';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-volunteer-history-page',
    templateUrl: './volunteer_history.component.html',
    styleUrls: ['./volunteer_history.component.scss'],
})

export class VolunteerHistory implements OnInit {
    public volunteer_history:VolunteerHistory[];
    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
        public volunteerhistory_service:volunteerhistoryService
    ){

    }
    ngOnInit() { 
     this.volunteerhistory_service.getVolunteerHistory(parseInt(localStorage.getItem('fk_id'))).subscribe((data:VolunteerHistory[])=>{
        console.log(data); 
        this.volunteer_history=data;
     },
     ()=>{
         console.log("Error")
     },()=>{
         console.log("Completed Call");
     });
    }
    
    initModel() {
    }
}
