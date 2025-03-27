import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

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
}
