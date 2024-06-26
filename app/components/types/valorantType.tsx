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

export type Ability = {
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

export type AgentDataExtended = AgentData & {
  defaultAbility: string;
};

export interface AgentListProps {
  agentData: AgentDataExtended[];
}

export type MapFilter = {
  displayName: string;
  splash: string;
  narrativeDescription?: string;
}

export type AgentFilter = {
  displayName: string;
  displayIcon: string;
  abilities: Ability[];
  isPlayableCharacter: boolean;
}

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

// Lineup Agent
interface LineupAgent {
  id: number;
  name: string;
  lineups: Lineup[];
  abilities?: Ability[];
};

// Lineups
export interface Lineup {
  id: number;
  username: string;
  date: string;
  source: string;
  ability: string;
  location: string[];
  thumbnail: string;
  title: string;
  description: string[];
  side: string;
  images: Images[];
  note?: string;
  displayIcon?: string;
  abilityIcon?: string;
};

// Lineup images
interface Images {
  id: number,
  url: string,
}

// Lineup Map
export interface LineupData {
  id: number;
  map: string;
  agents: LineupAgent[];
};

export type LineupDatabase = {
  agents: AgentData[],
  maps: MapData[],
  lineups: LineupData[]
}

export interface LineupFilterProps {
  data: LineupDatabase;
}

export type RoleType = 'All' | 'Initiator' | 'Duelist' | 'Controller' | 'Sentinel';