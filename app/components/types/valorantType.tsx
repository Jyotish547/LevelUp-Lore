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
  description: string;
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
  location: {
    x: number;
    y: number;
  };
}