import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-card',
  imports: [CommonModule],
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.scss',
  standalone: true,
})
export class ScoreCardComponent {
  extraBallPending = false;
  public teams = {
    firstTeam: {
      name: 'Kolkata Knight Riders',
      logo: '/ipl-team-logo/kkr.png',
      players: [
        {
          name: 'Quinton de Kock (wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Sunil Narine',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Ajinkya Rahane (capt)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Venkatesh Iyer',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Angkrish Raghuvanshi',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Rinku Singh',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Andre Russell',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Ramandeep Singh',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Harshit Rana',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Spencer Johnson/Anrich Nortje',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Varun Chakravarthy',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
      ],
    },
    secondTeam: {
      name: 'Rajasthan Royals',
      logo: '/ipl-team-logo/rr.png',
      players: [
        {
          name: 'Sanju S (c)(wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Yashasvi Jaiswal',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Shimron Hetmyer',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Riyan Parag',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Dhruv Jurel',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Nitish Rana',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Wanindu Hasaranga',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Jofra Archer',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Sandeep Sharma',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Fazalhaq Farooqi',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Kumar Kartikeya',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false },
          bowling: { overs: 0, runsConceded: 0, wickets: 0, economy: 0 },
        },
      ],
    },
  };

  firstInnings = { runs: 0, wickets: 0, overs: 0.0, lastBalls: [] as string[] };
  secondInnings = {
    runs: 0,
    wickets: 0,
    overs: 0.0,
    lastBalls: [] as string[],
  };
  isFirstInnings = true;

  get currentInnings() {
    return this.isFirstInnings ? this.firstInnings : this.secondInnings;
  }

  updateScore(run: number) {
    this.currentInnings.runs += run;
    this.addBall(run.toString());
    this.updateOvers();
  }

  updateWicket() {
    this.currentInnings.wickets++;
    this.addBall('W');
    this.updateOvers();
    if (this.currentInnings.wickets === 10) this.switchInnings();
  }

  updateExtra(extra: string, runs: number = 0) {
    this.currentInnings.runs += 1 + runs; // ✅ Extra run + additional runs
    this.addBall(`${extra}${runs > 0 ? `+${runs}` : ''}`);

    if (extra === 'NB' || extra === 'WD') {
      this.extraBallPending = true; // ✅ Mark that an extra ball happened
    }
  }

  updateOvers() {
    if (this.extraBallPending) {
      this.extraBallPending = false; // ✅ Only update over after extra ball is cleared
    } else {
      this.currentInnings.overs += 0.1;
      if (this.currentInnings.overs % 1 >= 0.6) {
        this.currentInnings.overs = Math.ceil(this.currentInnings.overs);
      }
    }

    if (this.currentInnings.overs === 20.0) this.switchInnings();
  }

  addBall(value: string) {
    this.currentInnings.lastBalls.push(value);
    if (this.currentInnings.lastBalls.length > 6)
      this.currentInnings.lastBalls.shift();
  }

  switchInnings() {
    this.isFirstInnings = false;
  }

  getBallClass(ball: string): string {
    if (ball.includes('6')) return 'ball ball-red'; // Red for Six
    if (ball.includes('4')) return 'ball ball-red'; // Red for Four
    if (ball.includes('WD')) return 'ball ball-yellow'; // Yellow for Wide
    if (ball.includes('NB')) return 'ball ball-yellow'; // Yellow for No Ball
    if (ball.includes('W')) return 'ball ball-black'; // Black for Wicket
    if (ball === '0') return 'ball ball-gray'; // Gray for Dot Ball
    return 'ball ball-blue'; // Default Blue
  }
}
