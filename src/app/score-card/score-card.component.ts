import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-score-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.scss',
  standalone: true,
})
export class ScoreCardComponent {
  public selectedPlayer1 = '';
  public selectedPlayer2 = '';
  public selectedBowler = '';
  public playerOneIndex = 0;
  public playerTwoIndex = 1;
  public curBowlerId = 10;
  public extraBallPending = false;
  public teams: any;
  public onSriker = 'player-one';
  public hideTable = true;

  firstInnings = { runs: 0, wickets: 0, overs: 0.0, lastBalls: [] as string[] };
  secondInnings = {
    runs: 0,
    wickets: 0,
    overs: 0.0,
    lastBalls: [] as string[],
  };
  isFirstInnings = true;
  public batsOneList: any;
  public batsTwoList: any;
  public bowlerList: any;

  constructor(private service: MainService) {}

  ngOnInit() {
    this.teams = {
      firstTeam: this.service.ipl2025Teams.rcb,
      secondTeam: this.service.ipl2025Teams.csk,
    };
    this.batsOneList = this.teams.firstTeam.players;
    this.batsTwoList = this.teams.firstTeam.players;
    this.bowlerList = this.teams.secondTeam.players;
  }

  get currentInnings() {
    return this.isFirstInnings ? this.firstInnings : this.secondInnings;
  }

  updateScore(run: number) {
    this.currentInnings.runs += run;
    this.addBall(run.toString());
    if (this.isFirstInnings) {
      const playerList = this.teams.firstTeam.players;
      const playerList2 = this.teams.secondTeam.players;
      for (let i = 0; i < playerList.length; i++) {
        if (
          this.selectedPlayer1 === playerList[i].name &&
          this.onSriker === 'player-one'
        ) {
          playerList[i].batting.runs += run;
          playerList[i].batting.balls += 1;
          this.playerOneIndex = this.teams.firstTeam.players[i].id;
          run === 4
            ? (playerList[i].batting.fours += 1)
            : playerList[i].batting.fours;
          run === 6
            ? (playerList[i].batting.sixes += 1)
            : playerList[i].batting.sixes;
          playerList[i].batting.sr =
            (playerList[i].batting.runs / playerList[i].batting.balls) * 100;
          console.log(playerList, this.teams.secondTeam.players);
          break;
        } else if (
          this.selectedPlayer2 === playerList[i].name &&
          this.onSriker === 'player-two'
        ) {
          playerList[i].batting.runs += run;
          playerList[i].batting.balls += 1;
          this.playerTwoIndex = this.teams.firstTeam.players[i].id;
          run === 4
            ? (playerList[i].batting.fours += 1)
            : playerList[i].batting.fours;
          run === 6
            ? (playerList[i].batting.sixes += 1)
            : playerList[i].batting.sixes;
          playerList[i].batting.sr =
            (playerList[i].batting.runs / playerList[i].batting.balls) * 100;
          console.log(playerList);
          break;
        }
      }
      for (let i = 0; i < playerList2.length; i++) {
        if (this.selectedBowler === playerList2[i].name) {
          playerList2[i].bowling.runsConceded += run;
          playerList2[i].bowling.overs = parseFloat(
            (playerList2[i].bowling.overs + 0.1).toFixed(1)
          );
          playerList2[i].bowling.economy =
            Math.round(
              (playerList2[i].bowling.runsConceded /
                playerList2[i].bowling.overs) *
                100
            ) / 100;
          debugger;
          if (playerList2[i].bowling.overs % 1 >= 0.6) {
            playerList2[i].bowling.overs =
              Math.floor(playerList2[i].bowling.overs) + 1;
          }
          if (
            playerList2[i].bowling.overs == 1 ||
            playerList2[i].bowling.overs == 2 ||
            playerList2[i].bowling.overs == 3 ||
            playerList2[i].bowling.overs == 4
          ) {
            this.selectedBowler = '';
          }
          this.curBowlerId = playerList2[i].id;
          break;
        }
      }
    }
    this.onStrikerPlayer(run);
    this.updateOvers();
  }

  updateWicket() {
    this.currentInnings.wickets++;
    this.addBall('W');
    this.updateOvers();
    if (this.isFirstInnings) {
      const playerList = this.teams.firstTeam.players;
      const playerList2 = this.teams.secondTeam.players;
      for (let i = 0; i < playerList.length; i++) {
        if (this.selectedPlayer1 === playerList[i].name) {
          playerList[i].batting.balls += 1;
          this.teams.firstTeam.players[i].batting.out = true;
          if (this.onSriker === 'player-one') {
            this.selectedPlayer1 = '';
            this.playerOneIndex = this.teams.firstTeam.players[i].id;
          } else if (this.onSriker === 'player-two') {
            this.selectedPlayer2 = '';
            this.playerTwoIndex = this.teams.firstTeam.players[i].id;
          }
          break;
        }
      }
      for (let i = 0; i < playerList2.length; i++) {
        if (this.selectedBowler === playerList2[i].name) {
          this.curBowlerId = playerList2[i].id;
          playerList2[i].bowling.wickets += 1;
          playerList2[i].bowling.overs += 0.1;
          if (playerList2[i].bowling.overs % 1 >= 0.6) {
            playerList2[i].bowling.overs = Math.ceil(
              playerList2[i].bowling.overs
            );
          }
          if (
            playerList2[i].bowling.overs == 1 ||
            playerList2[i].bowling.overs == 2 ||
            playerList2[i].bowling.overs == 3 ||
            playerList2[i].bowling.overs == 4
          ) {
            this.selectedBowler = '';
          }
          break;
        }
      }
    }
    if (this.currentInnings.wickets === 10) this.switchInnings();
  }

  updateExtra(extra: string, runs: number = 0) {
    this.currentInnings.runs += 1 + runs; // ✅ Extra run + additional runs
    this.addBall(`${extra}${runs > 0 ? `+${runs}` : ''}`);

    if (extra === 'NB' || extra === 'WD') {
      this.extraBallPending = true; // ✅ Mark that an extra ball happened
    }
    debugger;
    const playerList2 = this.teams.secondTeam.players;
    for (let i = 0; i < playerList2.length; i++) {
      if (this.selectedBowler === playerList2[i].name) {
        this.curBowlerId = playerList2[i].id;
        playerList2[i].bowling.runsConceded += 1 + runs;
      }
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
    this.batsOneList = this.teams.secondTeam.players;
    this.batsTwoList = this.teams.secondTeam.players;
    this.bowlerList = this.teams.firstTeam.players;
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

  public onStrikerPlayer(run: number) {
    if (run === 1 || run === 3) {
      this.onSriker === 'player-one'
        ? (this.onSriker = 'player-two')
        : (this.onSriker = 'player-one');
    }
  }
}
