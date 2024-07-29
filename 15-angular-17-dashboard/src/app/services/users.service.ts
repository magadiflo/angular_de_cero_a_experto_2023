import { Injectable, signal, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { Observable, delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);

  //#, el numeral hace a la variable privada
  //es lo mismo que poner el private, con la diferencia de que private es para TypeScript
  //mientras que #, es para cuando se haga la transpilación y en el ecmascript diga que sí o sí es privado.
  //En resumen, es ideal colocar el #, para decir que la variable es privada
  #state = signal<State>({ users: [], loading: true });
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.httpClient.get<UsersResponse>(`https://reqres.in/api/users`)
      .pipe(delay(2000))
      .subscribe(resp => {

        this.#state.set({
          loading: false,
          users: resp.data,
        });

      });
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(2000),
        map(resp => resp.data)
      );
  }
}
