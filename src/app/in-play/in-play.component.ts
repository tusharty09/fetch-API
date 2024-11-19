import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { InPlayGame } from '../data';

@Component({
  selector: 'app-in-play',
  templateUrl: './in-play.component.html',
  styleUrl: './in-play.component.css'
})
export class InPlayComponent implements OnInit{
  inPlayGames: InPlayGame[] = [];

  constructor(private inPlayService: UserService) { }

  ngOnInit(): void {
    this.loadInPlayGames();
  }

  loadInPlayGames(): void {
    this.inPlayService.getInPlayGames().subscribe(
      (data) => {
        this.inPlayGames = data;  // Set the response data to inPlayGames
      },
      (error) => {
        console.error('Error fetching in-play games', error);
      }
    );
  }
}
