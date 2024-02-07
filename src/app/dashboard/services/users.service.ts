import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse } from '../interfaces/req-response'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs';


interface State{
  users: User[],
  loading:boolean,
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private http = inject( HttpClient ) ;

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public loading = computed(()=> this.#state().loading);
  public users = computed(()=> this.#state().users);

  constructor() {
    this.http.get<UserResponse>('https://reqres.in/api/users/')
    .pipe(delay(1500))
    .subscribe( res => {
      this.#state.set({
        loading  : true,
        users: res.data
      })
      console.log(res);
  });}
}
