import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
	public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  	constructor() { }

  	addUser(user: string): void {
  		var _u = this.users.value;
  		_u.push(user);
  		this.users.next(_u);
  	}

  	removeUser(i: number): void {
  		var _u = this.users.value;
  		_u.splice(i, 1);
		this.users.next(_u);
  	}
}
