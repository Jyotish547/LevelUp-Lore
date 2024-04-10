// Agent Data

export type AgentData = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  killfeedPortrait: string;
  background: string;
  isPlayableCharacter: boolean;
  role: Role;
  recruitmentData: null;
  abilities: Ability[];
};

type Ability = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
};
  
type Role = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
};

export type MapData = {
  uuid: string;
  displayName: string;
  narrativeDescription: string;
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  splash: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: Callout[];
}

interface Callout {
  regionName: string;
  superRegionName: string;
  location: {
    x: number;
    y: number;
  };
}

export type CrosshairData = {
  key: any,
  username: string,
  displayIcon: any,
  title: string,
  rank: any,
  crosshair: any,
  code: string
}[]

export type GuideData = {
  id: any,
  snippet: Snippet
}[]

interface Snippet {
  publishedAt: any,
  title: string,
  description: string,
  thumbnails: Thumbnails,
  channelTitle: string,
  resourceId: {
    videoId: string
  }
}

interface Thumbnails {
  default: Thumbnail,
  medium: Thumbnail,
  high: Thumbnail,
  standard: Thumbnail,
  maxres: Thumbnail,
}

interface Thumbnail {
  url: string,
  width: number,
  height: number
}


// Map
export type LineupMap = {
  id: number;
  map: string;
  username: string;
  date: string;
  agents: LineupAgent;
}[];

// Agent
type LineupAgent = {
  id: number;
  name: string;
  lineups: Lineup;
}[];

// Lineups
type Lineup = {
  id: number;
  source: string;
  ability: string;
  location: string[];
  thumbnail: string;
  title: string;
  description: string[];
  side: boolean;
  images: Images;
  note?: string;
}[];

// Lineup images
type Images = {
  id: number,
  url: string,
}[]