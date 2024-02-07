import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    imports: [CommonModule, RouterModule, SidemenuComponent]
})
export default class DashboardComponent {


}
