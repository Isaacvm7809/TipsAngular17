import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-response'
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';


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
  public users   = computed(()=> this.#state().users);

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users/')
    .pipe(delay(1500))
    .subscribe( res => {
      this.#state.set({
        loading  : true,
        users: res.data
      })
  });
}

getUserbyId(id:string){
  return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
  .pipe(
    delay(1500),
    map( (res) =>  (res.data)  )
  );

}



}
