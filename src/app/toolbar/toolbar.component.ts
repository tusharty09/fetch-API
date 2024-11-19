import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  selectedIndex = 0;

  constructor(private router: Router) {}

  onTabChange(event: any): void {
    const selectedTab = event.index;
    switch (selectedTab) {
      case 0:
        this.router.navigate(['/in-play']);
        break;
      case 1:
        this.router.navigate(['/today']);
        break;
      case 2:
        this.router.navigate(['/tommorrow']);
        break;
    }
  }
}
