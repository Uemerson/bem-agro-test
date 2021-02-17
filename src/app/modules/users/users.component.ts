import { Component, OnInit } from '@angular/core';

import { User } from '../../core/models/user';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  faTrash = faTrash;

  usernameForm = this.formBuilder.group({
    username: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit(): void {
    const username = this.usernameForm.value.username;

    if (!username) {
      alert('Campo vazio!');

      return;
    }

    this.userService.fetchUser(username).subscribe(
      (user) => {
        this.users.push(user);
      },
      (error) => {
        alert(
          'Ocorreu um erro ao procurar esse usuário!\nTente novamente mais tarde!'
        );
        console.error(error);
      }
    );
    this.usernameForm.reset();
  }

  handleDelete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  handleDetail(user: User) {
    this.router.navigateByUrl(`/user/${user.id}`);
  }

  ngOnInit(): void {}
}
