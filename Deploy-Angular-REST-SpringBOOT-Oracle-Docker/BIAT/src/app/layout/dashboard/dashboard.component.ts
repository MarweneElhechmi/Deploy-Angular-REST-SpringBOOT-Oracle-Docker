import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider4.jpg',
                label: '',
                text: ''

            },
            {
                imagePath: 'assets/images/slider6.jpg',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/slider5.jpg',
                label: '',
                text: ''
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: ``
            },
            {
                id: 2,
                type: 'warning',
                message: ``
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
