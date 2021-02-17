import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { MapService } from '../../core/services/map.service';
import { User } from '../../core/models/user';
import * as L from 'leaflet';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: string = '';
  user: User = {} as User;

  public map: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.userService.fetchUserById(this.id).subscribe(
        (user) => {
          this.user = user;

          this.mapService.fetchLocation(this.user.location).subscribe(
            (location) => {
              const { lat, lng } = location.results[0].geometry.location;

              this.map = L.map('map', {
                center: [lat, lng],
                zoom: 12,
              });

              L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: 'Map data © OpenStreetMap contributors',
              }).addTo(this.map);

              L.circle([lat, lng], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500,
              }).addTo(this.map);
            },
            (error) => {
              console.error(error);
              alert(
                'Ocorreu um erro ao buscar a localização do usuário!\nTente novamente mais tarde!'
              );
            }
          );
        },
        (error) => {
          console.error(error);
          alert(
            'Ocorreu um erro ao procurar esse usuário!\nTente novamente mais tarde!'
          );
        }
      );
    });
  }
}
