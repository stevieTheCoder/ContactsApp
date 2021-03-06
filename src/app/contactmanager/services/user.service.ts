import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this.usersSubject = new BehaviorSubject<User[]>([]);
   }

   get users(): Observable<User[]> {
     return this.usersSubject.asObservable();
   }

   userById(id: number) {
     return this.dataStore.users.find(u => u.id == id);
   }

   addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this.usersSubject.next(Object.assign({}, this.dataStore).users);
      resolver(user);
    });
   }

   loadAll() {
     const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

     return this.http.get<User[]>(usersUrl)
     .subscribe( data => {
      this.dataStore.users = data;
      this.usersSubject.next(Object.assign({}, this.dataStore).users);
     }, error => {
      console.log('Failed to fetch users');
     });
   }
}
