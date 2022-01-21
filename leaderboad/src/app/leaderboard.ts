interface languageDTO{
  name:string;
  rank:number;
}
export interface LeaderboardInterface{
  username:string;
  name:string;
  clan:string;
  honour:number;
  languages:languageDTO[];
  overall_rank:number
}
export class Leaderboard implements LeaderboardInterface{
  username:string;
  name:string;
  clan:string;
  honour:number;
  languages:languageDTO[];
  overall_rank:number;

  constructor(userName:string,name:string,clan:string,honor:number,languages:languageDTO[],overall_rank:number) {
    this.username = userName;
    this.name = name;
    this.clan = clan;
    this.honour = honor;
    this.languages = languages;
    this.overall_rank = overall_rank;

  }
}
