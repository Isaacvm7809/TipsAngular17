import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';
import { TitleComponent } from "../shared/title/title.component";

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styles: ``,
    imports: [RouterLink, TitleComponent]
})
export default class UsersComponent {
  public userService = inject( UsersService ) ;


  constructor(){
    console.log('loading data');



  }

}
