import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from "../shared/title/title.component";
import { ActivatedRoute } from '@angular/router';
import type { User } from '../../interfaces/req-response';
import { toSignal  } from '@angular/core/rxjs-interop';
import { UsersService } from '../../services/users.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user',
    standalone: true,
    template: `
    <app-title [title]="this.fullComputed()"/>
    @if (user()){
      <section>
      <img
        [srcset]="user()!.avatar"
        [alt]="user()!.first_name"
      >
      <h3 class="text-lg font-semibold text-sky-700">{{ user()!.first_name }}  {{ user()!.last_name }} </h3>
    </section>
    }
    @else {
      <h3>No hay info</h3>
    }
    `,
    imports: [TitleComponent,CommonModule]
})
export default class UserComponent {
  private route  = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  public fullComputed = computed(()=>{
    if(this.user()){
      return `Información del usuario ${ this.user()?.first_name } ${this.user()?.last_name}`;
    }
    else{
      return `Nothing to show`;
    }
  })

  public user = toSignal( this.route.params.pipe(
    switchMap( ({ id }) => this.usersService.getUserbyId(id) )
     )
  )

  constructor(){
  }


}
