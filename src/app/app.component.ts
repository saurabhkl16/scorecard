import { Component } from '@angular/core';
import { ScoreCardComponent } from './score-card/score-card.component';

@Component({
  selector: 'app-root',
  imports: [ScoreCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'cricket-scorecard';
}
