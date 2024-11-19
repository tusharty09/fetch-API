import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent implements OnInit {
  todayGames: any[] = [];
  errorMessage: string = '';
  constructor(private userservice: UserService) {}
ngOnInit(): void {
  this.loadTodayGames();
}
loadTodayGames(): void {
  this.userservice.getTodayGames().subscribe({
    next: (response) => {
      // Map the API data to the desired format
      this.todayGames = response.map((game: any) => ({
        time: game.time, // Match time
        seriesname: game.seriesname, // Series name
        matchDetails: game.matchname, // Match details
      }));
    },
    error: (error) => {
      console.error('Error fetching today games', error);
      this.errorMessage = 'Failed to load today games. Please try again later.';
    },
  });
}
}
