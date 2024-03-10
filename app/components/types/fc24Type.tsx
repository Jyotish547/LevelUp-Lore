export type PlayersData = {
    id: number;
    rank: number;
    overallRating: number;
    firstName: string;
    lastName: string;
    commonName: string | null;
    birthdate: Date;
    height: number;
    skillMoves: number;
    weakFootAbility: number;
    attackingWorkRate: number;
    defensiveWorkRate: number;
    preferredFoot: number;
    leagueName: string;
    weight: number;
    avatarUrl: string;
    shieldUrl: string;
    alternatePositions: AlternatePosition[];
    playStyle: PlayStyle[];
    playStylePlus: PlayStylePlus[];
    gender: Gender;
    nationality: Nationality;
    team: Team;
    position: Position;
    stats: Stats;
  };
  
  type AlternatePosition = {
    id: string;
    label: string;
    shortLabel: string;
  };
  
  type PlayStyle = {
    id: number;
    label: string;
    imageUrl: string;
  };
  
  type PlayStylePlus = PlayStyle; // Assuming PlayStylePlus has the same structure as PlayStyle
  
  type Gender = {
    id: number;
    label: string;
  };
  
  type Nationality = {
    id: number;
    label: string;
    imageUrl: string;
  };
  
  type Team = {
    id: number;
    label: string;
    imageUrl: string;
    isPopular: boolean;
  };
  
  type Position = {
    id: string;
    shortLabel: string;
    label: string;
  };
  
export type Stats = {
    acceleration: StatDetail;
    aggression: StatDetail;
    agility: StatDetail;
    balance: StatDetail;
    ballControl: StatDetail;
    composure: StatDetail;
    crossing: StatDetail;
    curve: StatDetail;
    def: StatDetail;
    defensiveAwareness: StatDetail;
    dri: StatDetail;
    dribbling: StatDetail;
    finishing: StatDetail;
    freeKickAccuracy: StatDetail;
    gkDiving: StatDetail;
    gkHandling: StatDetail;
    gkKicking: StatDetail;
    gkPositioning: StatDetail;
    gkReflexes: StatDetail;
    headingAccuracy: StatDetail;
    interceptions: StatDetail;
    jumping: StatDetail;
    longPassing: StatDetail;
    longShots: StatDetail;
    pac: StatDetail;
    pas: StatDetail;
    penalties: StatDetail;
    phy: StatDetail;
    positioning: StatDetail;
    reactions: StatDetail;
    sho: StatDetail;
    shortPassing: StatDetail;
    shotPower: StatDetail;
    slidingTackle: StatDetail;
    sprintSpeed: StatDetail;
    stamina: StatDetail;
    standingTackle: StatDetail;
    strength: StatDetail;
    vision: StatDetail;
    volleys: StatDetail;
  };
  
export type StatDetail = {
    value: number;
    diff?: number;
  };
  