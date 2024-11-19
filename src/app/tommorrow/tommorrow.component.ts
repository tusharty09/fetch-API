import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tommorrow',
  templateUrl: './tommorrow.component.html',
  styleUrl: './tommorrow.component.css'
})
export class TommorrowComponent implements OnInit {
  tomorrowGames: any[] = [];
  errorMessage: string = '';
  constructor(private userservice: UserService) {}
  ngOnInit(): void {
    this.loadTomorrowGames();

  }
  loadTomorrowGames(): void {
    this.userservice.getTomorrowGames().subscribe({
      next: (response) => {
        // Map the API data to the desired format
        this.tomorrowGames = response.map((game: any) => ({
          time: game.time, // Match time
          seriesname: game.seriesname, // Series name
          matchDetails: game.matchname, // Match details
        }));
      },
      error: (error) => {
        console.error('Error fetching tomorrow games', error);
        this.errorMessage = 'Failed to load tomorrow games. Please try again later.';
      },
    });
  }

}
