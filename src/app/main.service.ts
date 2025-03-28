import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  public ipl2025Teams = {
    kkr: {
      name: 'Kolkata Knight Riders',
      logo: '/ipl-team-logo/srh.png',
      players: [
        {
          name: 'Quinton de Kock (wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Sunil Narine',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Ajinkya Rahane (capt)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Venkatesh Iyer',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Angkrish Raghuvanshi',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Rinku Singh',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Andre Russell',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Ramandeep Singh',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Harshit Rana',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Spencer Johnson/Anrich Nortje',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Varun Chakravarthy',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
      ],
    },
    rr: {
      name: 'Rajasthan Royals',
      logo: '/ipl-team-logo/dc.png',
      players: [
        {
          name: 'Sanju S (c)(wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Yashasvi Jaiswal',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Shimron Hetmyer',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Riyan Parag',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Dhruv Jurel',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Nitish Rana',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Wanindu Hasaranga',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Jofra Archer',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Sandeep Sharma',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Fazalhaq Farooqi',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Kumar Kartikeya',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
      ],
    },
    srh: {
      name: 'Sunrisers Hyderabad',
      logo: '/ipl-team-logo/srh.png',
      players: [
        {
          name: 'Ishan Kishan (wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Travis Head',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Abhishek Sharma',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Nitish Kumar Reddy',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Heinrich Klaasen',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Pat Cummins (c)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Mohammed Shami',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Harshal Patel',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Rahul Chahar',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Adam Zampa',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Atharva Taide',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
      ],
    },
    dc: {
      name: 'Delhi Capitals',
      logo: '/ipl-team-logo/dc.png',
      players: [
        {
          name: 'KL Rahul (wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Jake Fraser-McGurk',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Faf du Plessis',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Harry Brook',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Karun Nair',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Axar Patel',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Ashutosh Sharma',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Mitchell Starc',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'T Natarajan',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Mukesh Kumar',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          name: 'Kuldeep Yadav',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
      ],
    },
    rcb: {
      name: 'Royal Challengers Bengaluru',
      logo: '/ipl-team-logo/rcb.png',
      players: [
        {
          id: 4,
          name: 'Phil Salt (wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 0,
          name: 'Virat Kohli',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 2,
          name: 'Devdutt Padikkal',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 1,
          name: 'Rajat Patidar (c)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 6,
          name: 'Liam Livingstone',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 7,
          name: 'Krunal Pandya',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 17,
          name: 'Rasikh Salam',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 18,
          name: 'Yash Dayal',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 19,
          name: 'Suyash Sharma',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 9,
          name: 'Tim David',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 15,
          name: 'Josh Hazlewood',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 5,
          name: 'Jitesh Sharma (wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 10,
          name: 'Romario Shepherd',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 11,
          name: 'Manoj Bhandage',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 12,
          name: 'Jacob Bethell',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 13,
          name: 'Abhinandan Singh',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 14,
          name: 'Mohit Rathee',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 16,
          name: 'Bhuvneshwar Kumar',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 20,
          name: 'Nuwan Thushara',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 3,
          name: 'Swastik Chhikara',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 8,
          name: 'Swapnil Singh',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
      ],
    },
    csk: {
      name: 'Chennai Super Kings',
      logo: '/ipl-team-logo/csk.png',
      players: [
        {
          id: 9,
          name: 'Rachin Ravindra',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 10,
          name: 'Rahul Tripathi',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 0,
          name: 'Ruturaj Gaikwad (c)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 4,
          name: 'Shivam Dube',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 13,
          name: 'Deepak Hooda',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 11,
          name: 'Sam Curran',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 2,
          name: 'Ravindra Jadeja',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 1,
          name: 'MS Dhoni (wk)',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },

        {
          id: 6,
          name: 'Noor Ahmad',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 7,
          name: 'Ravichandran Ashwin',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 8,
          name: 'Khaleel Ahmed',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        {
          id: 12,
          name: 'Nathan Ellis',
          batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
          bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        },
        // {
        //   id: 14,
        //   name: 'Jamie Overton',
        //   batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
        //   bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        // },
        // {
        //   id: 3,
        //   name: 'Devon Conway',
        //   batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
        //   bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        // },
        // {
        //   id: 5,
        //   name: 'Matheesha Pathirana',
        //   batting: { runs: 0, balls: 0, fours: 0, sixes: 0, out: false, sr: 0 },
        //   bowling: { overs: 0.0, runsConceded: 0, wickets: 0, economy: 0 },
        // },
      ],
    },
  };
}
