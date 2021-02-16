import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: string = '';
  user: User = {} as User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.userService.fetchUserById(this.id).subscribe(
        (user) => {
          console.log(JSON.stringify(user));

          this.user = user;
        },
        (error) => {
          alert(
            'Ocorreu um erro ao procurar esse usuário!\nTente novamente mais tarde!'
          );
          console.error(error);
        }
      );
    });
  }
}
