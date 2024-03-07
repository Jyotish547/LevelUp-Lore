import type { NextApiRequest, NextApiResponse } from 'next';

import formation5212 from '/public/assets/eafc24/formations/5212.png';
import formation433 from '/public/assets/eafc24/formations/433.jpg';
import formation4321 from '/public/assets/eafc24/formations/4321.jpg';
import formation41212 from '/public/assets/eafc24/formations/41212.jpg';

type Defense = {
  style: string,
  width: number,
  depth: number
}

type Offense = {
  play: string,
  chance: string,
  width: number
}

export type SingleFormationData = {
    key: any,
    formation: string,
    caption: string,
    overview: string,
    flow: string,
    image: any,
    difficulty: string,
    customTactics: {
      defenseCap: string,
      offenseCap: string,
      defense: {
        style: string,
        width: number,
        depth: number
      },
      offense: {
        play: string,
        chance: string,
        width: number
      },
    },
    playerInstructions: {
        CB: {
          prop?: string;
          value?: string;
          attChange?: string;
          defChange?: string;
        }[];
        WB: {
            prop?: string;
            value?: string;
            attChange?: string;
            defChange?: string;
          }[];
        CM: {
          prop?: string;
          value?: string;
          attChange?: string;
          defChange?: string;
        }[];
        CDM: {
          prop?: string;
          value?: string;
          attChange?: string;
          defChange?: string;
        }[];
        CAM: {
          prop?: string;
          value?: string;
          attChange?: string;
          defChange?: string;
        }[];
        ST: {
          prop?: string;
          value?: string;
          attChange?: string;
          defChange?: string;
        }[];
    },
    tacticalTips: string,
    advantages: string[],
    disadvantages: string[],
    counter: string[],
    sugFor: {
      form: string
    }[];
};
  
type FormationData = { 
    gameName: string,
    section: string,
    content: SingleFormationData[]
};
 
export default function formationsAPI(req: NextApiRequest, res: NextApiResponse) {
  
  // Create Variables for all types of player instructions here
    const attSup = "Attacking Support";
    const defPos = "Defensive Position";
    const attRun = "Attacking Runs";
    const runTyp = "Run Type";
    const defSup = "Defensive Support";


    const formations: FormationData[] = [
      // Your formations data here
      {
          gameName: 'Fifa 2024',
          section: 'Formation',
          content: [
            {
              key: 1,
              formation: "5-2-1-2",
              caption: "A balanced formation blending solid defense with potent attack options through the center.",
              overview: "The 5-2-1-2 formation is a balanced approach that combines solid defense with effective attack. It features five defenders, including three central defenders for strength at the back and two wing-backs who contribute to both defense and attack. || The midfield comprises two central players who support defense and help in building attacks, plus an attacking midfielder focused on creating chances for the team. Up front, two strikers work together to capitalize on opportunities. ||This setup is known for its defensive security while still providing plenty of chances to score, making it a popular choice for teams looking for a blend of stability and offensive potential.",
              flow: "Defensive",
              difficulty: "Beginner",
              image: formation5212,
              customTactics: {
                defenseCap: "This setup ensures solid defense while not compromising the ability to transition into attack swiftly.",
                offenseCap: "A Balanced approach with Direct Passing is advisable, keeping the width between 45 to 50. This facilitates a versatile attack capable of adjusting to various in-game situations.",
                defense: 
                  {
                    style: "BALANCED",
                    width: 45,
                    depth: 55
                  }
                ,
                offense: 
                  {
                    play: "BALANCED",
                    chance: "DIRECT PASSING",
                    width: 45
                  }
                ,
              },
              playerInstructions: {
                CB: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                WB: [
                  {
                    prop: runTyp,
                    value: "Overlap"
                  },
                  {
                    prop: attRun,
                    value: "Join the Attack",
                    defChange: "Stay back while Attacking"
                  }
                ],
                CM: [
                  {
                    prop: defPos,
                    value: "Cover Wing"
                  }
                ],
                CAM: [
                  {
                    prop: defSup,
                    value: "Basic Defensive Support"
                  }
                ],
                CDM: [
                  // N/A
                ],
                ST: [
                  {
                    prop: attRun,
                    value: `Balanced (1 Striker) || Get in Behind (1 Striker)`
                  }
                ]
              },
              tacticalTips: "Focus on the overlapping runs of your wingbacks to create scoring opportunities. Properly timing these runs and utilizing cutback passes can be particularly effective. Be mindful of your wingbacks' stamina, as their dual role may require substitutions.||For a formation that appears defensively inclined, the 5-2-1-2 can surprise opponents with its attacking capabilities, especially with strategic use of wingbacks and midfielders to control the game's pace and create chances.",
              advantages: [
                "Defensive Solidity: With five defenders, including three central defenders and two wing-backs, teams have a robust defensive line that's difficult for opponents to break down, especially against direct attacks.",
                "Midfield Control: The presence of two central midfielders, along with a central attacking midfielder, allows for a balanced midfield capable of both defending and initiating attacks.",
                "Wing Play: The wing-backs in the 5-2-1-2 offer width and can overload the flanks, providing crucial support in both defense and attack, creating crossing opportunities.",
                "Attacking Support: The formation allows the two strikers to be supported closely by the CAM, facilitating intricate play and opportunities for through balls in the final third."
              ],
              disadvantages: [
                "Vulnerability on the Wings: While the formation is strong centrally, teams can be vulnerable to attacks down the wings if the wing-backs are caught too high up the pitch.",
                "Midfield Overrun: Against formations with a packed midfield (like a 4-3-3 or a 4-5-1), there's a risk of being outnumbered and overrun in the midfield.",
                "Requires High Stamina: The wing-backs have a lot of ground to cover, requiring players in these positions to have high stamina to maintain effectiveness throughout the match.",
                "Limited Width in Attack: The formation can sometimes become too narrow, especially if wing-backs are not effectively pushing forward or if the team is facing a compact defense."
              ],
              counter: [
                "Exploit the Flanks: The 5-2-1-2 formation is vulnerable on the flanks since it focuses heavily on central defense. Utilizing formations with strong wing play can help in stretching the defense and creating scoring opportunities from wide areas.",
                "Overload the Midfield: With only two midfielders, the 5-2-1-2 can be outnumbered in the midfield. Formations that pack the midfield can dominate possession and disrupt the flow of the opposing team.",
                "High Pressing: Pressing high up the pitch can disrupt their buildup play, forcing them into mistakes. This is effective against teams that rely on building attacks from the back.",
                "Counter-Attacks: Utilizing quick counter-attacks can exploit the space behind the advancing wing-backs, especially if they are caught upfield.",
              ],
              sugFor: [
                {
                  form: "4-3-3"
                },
                {
                  form: "3-5-2"
                },
                {
                  form: "4-4-2"
                },
                {
                  form: "4-5-1"
                },
                {
                  form: "4-2-3-1"
                }
              ]
            },
            {
              // Another Formation Example
              key: 2,
              formation: "4-3-3",
              caption: "A balanced formation blending solid defense with potent attack options through the center.",
              overview: "The 4-3-3 formation offers a balanced mix of defense and attack, with wide players providing crucial support on the flanks.",
              flow: "Balanced",
              difficulty: "Intermediate",
              image: formation433,
              customTactics: {
                defenseCap: "Press After Possession Loss",
                offenseCap: "Fast Build Up",
                defense: 
                  {
                    style: "BALANCED",
                    width: 45,
                    depth: 55
                  }
                ,
                offense: {
                  
                    play: "BALANCED",
                    chance: "DIRECT PASSING",
                    width: 45
                  }
                ,
              },
              playerInstructions: {
                // CB: "Stay Back While Attacking",
                // WB: "Get Forward and Overlap",
                // CM: "One stays back, others support the attack",
                // CAM: "N/A", // Not applicable for this formation
                // ST: "Stay Central and Get In Behind",
                // CDM: "N/A"
                CB: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                WB: [
                  {
                    prop: runTyp,
                    value: "Overlap"
                  },
                  {
                    prop: attRun,
                    value: "Join the Attack"
                  }
                ],
                CM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                CAM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                CDM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                ST: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ]
              },
              tacticalTips: "Utilize the width provided by the wingers to stretch the opposition's defense and create space in the middle.",
              advantages: [
                "Balanced Attack and Defense: Provides a solid defensive base with three midfielders while allowing three forwards to focus on attacking.",
                "Width: Wingers can exploit spaces on the flanks, offering cross opportunities and stretching the defense.",
              ],
              disadvantages: [
                "Midfield Exposure: Can be vulnerable to teams that pack the midfield, as there might be spaces for opponents to exploit.",
                "Defensive Responsibility on Wingers: Requires wingers to track back and help in defense, which might not suit all attacking players.",
              ],
              counter: [
                "Exploit the Flanks: The 5-2-1-2 formation is vulnerable on the flanks since it focuses heavily on central defense. Utilizing formations with strong wing play can help in stretching the defense and creating scoring opportunities from wide areas.",
                "Overload the Midfield: With only two midfielders, the 5-2-1-2 can be outnumbered in the midfield. Formations that pack the midfield can dominate possession and disrupt the flow of the opposing team.",
                "High Pressing: Pressing high up the pitch can disrupt their buildup play, forcing them into mistakes. This is effective against teams that rely on building attacks from the back.",
                "Counter-Attacks: Utilizing quick counter-attacks can exploit the space behind the advancing wing-backs, especially if they are caught upfield."
              ],
              sugFor: [
                {
                  form: "4-3-3"
                },
                {
                  form: "3-5-2"
                },
                {
                  form: "4-4-2"
                },
                {
                  form: "4-5-1"
                },
                {
                  form: "4-2-3-1"
                }
              ]
            },
            {
              key: 3,
              formation: "4-3-2-1",
              caption: "A balanced formation blending solid defense with potent attack options through the center.",
              overview: "Offers a compact midfield with a focus on attacking through the center, providing a strong link between midfield and attack.",
              flow: "Balanced",
              difficulty: "Intermediate",
              image: formation4321,
              customTactics: {
                defenseCap: "High Press after Possession Loss with a width of 40 and depth of 60, encouraging a proactive recovery of the ball.",
                offenseCap: "Possession with emphasis on Short Passing and width of 45, ensuring control and methodical build-up play.",
                defense: 
                  {
                    style: "BALANCED",
                    width: 45,
                    depth: 55
                  }
                ,
                offense: 
                  {
                    play: "BALANCED",
                    chance: "DIRECT PASSING",
                    width: 45
                  }
                ,
              },
              playerInstructions: {
                // CB: "Stay Back While Attacking",
                // WB: "Stay Back While Attacking, providing security on flanks.",
                // CM: "One CM to Drop Between Defenders, others to Support on Attack",
                // CAM: "Stay Forward, Free Roam to create and exploit spaces.",
                // ST: "Get In Behind, acting as the primary target for through balls.",
                // CDM: "N/A"
                CB: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                WB: [
                  {
                    prop: runTyp,
                    value: "Overlap"
                  },
                  {
                    prop: attRun,
                    value: "Join the Attack",
                    defChange: "Stay back while Attacking"
                  }
                ],
                CM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                CAM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                CDM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                ST: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ]
              },
              tacticalTips: "Leverage the CAM's creativity to unlock defenses. The forward trio should dynamically interchange positions to disrupt defensive structures.",
              advantages: [
                "Solid Midfield: The trio in midfield ensures dominance and control, facilitating both defense and attack.",
                "Attacking Variety: Provides multiple channels of attack, focusing on central penetration with options on the wings.",
                "Defensive Coverage: The midfield trio offers adequate defensive support, allowing for quick transitions."
              ],
              disadvantages: [
                "Wing Vulnerability: May struggle against formations that exploit the wings due to the narrow midfield.",
                "High Energy Demand: Requires midfielders with high stamina due to the extensive ground they need to cover."
              ],
              counter: [
                "Exploit the Flanks: The 5-2-1-2 formation is vulnerable on the flanks since it focuses heavily on central defense. Utilizing formations with strong wing play can help in stretching the defense and creating scoring opportunities from wide areas.",
                "Overload the Midfield: With only two midfielders, the 5-2-1-2 can be outnumbered in the midfield. Formations that pack the midfield can dominate possession and disrupt the flow of the opposing team.",
                "High Pressing: Pressing high up the pitch can disrupt their buildup play, forcing them into mistakes. This is effective against teams that rely on building attacks from the back.",
                "Counter-Attacks: Utilizing quick counter-attacks can exploit the space behind the advancing wing-backs, especially if they are caught upfield."
              ],
              sugFor: [
                {
                  form: "4-3-3"
                },
                {
                  form: "3-5-2"
                },
                {
                  form: "4-4-2"
                },
                {
                  form: "4-5-1"
                },
                {
                  form: "4-2-3-1"
                }
              ]
            },
            
            {
              key: 4,
              formation: "4-1-2-1-2 (Narrow)",
              caption: "A balanced formation blending solid defense with potent attack options through the center.",
              overview: "Focuses on central play with a diamond midfield, encouraging short, quick passing.",
              flow: "Offensive",
              difficulty: "Advanced",
              image: formation41212,
              customTactics: {
                defenseCap: "Press on Heavy Touch with a width of 50 and depth of 50, aiming to regain possession in the midfield.",
                offenseCap: "Fast Build Up with width of 40, encouraging quick transitions from defense to attack.",
                defense: 
                  {
                    style: "BALANCED",
                    width: 45,
                    depth: 55
                  }
                ,
                offense: 
                  {
                    play: "BALANCED",
                    chance: "DIRECT PASSING",
                    width: 45
                  }
                ,
              },
              playerInstructions: {
                // CB: "Stay Back While Attacking, anchor the defense.",
                // CDM: "Cut Passing Lanes, Stay Back While Attacking, protect the back four.",
                // CM: "Get Forward, offering options in attack.",
                // CAM: "Stay Forward, act as the link between midfield and strikers.",
                // ST: "Get In Behind, exploit defensive lines with pace.",
                // WB: "N/A"
                CB: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                WB: [
                  {
                    prop: runTyp,
                    value: "Overlap"
                  },
                  {
                    prop: attRun,
                    value: "Join the Attack"
                  }
                ],
                CM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                CAM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                CDM: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ],
                ST: [
                  {
                    prop: attSup,
                    value: "Stay Back While Attacking"
                  }
                ]
              },
              tacticalTips: "Maximize the CAM's position to distribute play effectively. Strikers should offer constant movement to create space and opportunities.",
              advantages: [
                "Midfield Control: The dense midfield can dominate possession and easily transition to defense and attack.",
                "Strong Central Attack: The formation is ideal for teams that excel in central play and quick combinations."
              ],
              disadvantages: [
                "Limited Width: Struggles to provide width, making it predictable against teams that defend well centrally.",
                "Defensive Gaps: The aggressive midfield positioning can leave gaps in defense if not managed properly."
              ],
              counter: [
                "Exploit the Flanks: The 5-2-1-2 formation is vulnerable on the flanks since it focuses heavily on central defense. Utilizing formations with strong wing play can help in stretching the defense and creating scoring opportunities from wide areas.",
                "Overload the Midfield: With only two midfielders, the 5-2-1-2 can be outnumbered in the midfield. Formations that pack the midfield can dominate possession and disrupt the flow of the opposing team.",
                "High Pressing: Pressing high up the pitch can disrupt their buildup play, forcing them into mistakes. This is effective against teams that rely on building attacks from the back.",
                "Counter-Attacks: Utilizing quick counter-attacks can exploit the space behind the advancing wing-backs, especially if they are caught upfield."
              ],
              sugFor: [
                {
                  form: "4-3-3"
                },
                {
                  form: "3-5-2"
                },
                {
                  form: "4-4-2"
                },
                {
                  form: "4-5-1"
                },
                {
                  form: "4-2-3-1"
                }
              ]
            }
          ]
      }
    
    ];
  
    const formationQueryParam = req.query.id // Example query param
    const filteredFormation = formations
      .flatMap(formationData => formationData.content) // Create a flat array of all formations
      .find(formation => formation.formation === formationQueryParam); // Find the formation matching the query param

    if (filteredFormation) {
      res.status(200).json(filteredFormation);
    } else {
      res.status(404).json({ message: "Formation not found" });
    }
  }