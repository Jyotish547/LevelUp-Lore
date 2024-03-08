import type { NextApiRequest, NextApiResponse } from 'next';

import formation5212 from '/public/assets/eafc24/formations/5212.png';
import formation433 from '/public/assets/eafc24/formations/433.jpg';
import formation4321 from '/public/assets/eafc24/formations/4321.jpg';
import formation41212 from '/public/assets/eafc24/formations/41212.jpg';

type SingleFormationData = {
    key: any,
    formation: string,
    caption: string,
    overview: string,
    flow: string,
    image: any,
    difficulty: string,
    customTactics: {
        defensiveStyle: string,
        offensiveStyle: string,
    },
    playerInstructions: {
        CB: string,
        WB: string,
        CM: string,
        CDM: string,
        CAM: string,
        ST: string,
    },
    tacticalTips: string,
    advantages: string[],
    disadvantages: string[],
};
  
type FormationData = { 
    gameName: string,
    section: string,
    content: SingleFormationData[]
};
 
export default function formationsAPI(req: NextApiRequest, res: NextApiResponse) {

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
              overview: "The 5-2-1-2 formation is a balanced approach that combines solid defense with effective attack. It features five defenders, including three central defenders for strength at the back and two wing-backs who contribute to both defense and attack. The midfield comprises two central players who support defense and help in building attacks, plus an attacking midfielder focused on creating chances for the team. Up front, two strikers work together to capitalize on opportunities. This setup is known for its defensive security while still providing plenty of chances to score, making it a popular choice for teams looking for a blend of stability and offensive potential.",
              flow: "Defensive",
              difficulty: "Beginner",
              image: formation5212,
              customTactics: {
                defensiveStyle: "Opt for a Balanced defense with a width of 45 and depth around 55. This setup ensures solid defense while not compromising the ability to transition into attack swiftly.",
                offensiveStyle: "A Balanced approach with Direct Passing is advisable, keeping the width between 45 to 50. This facilitates a versatile attack capable of adjusting to various in-game situations."
              },
              playerInstructions: {
                CB: "Remain defensive",
                WB: "Join Attack with Overlap instructions, shifting to Stay Back While Attacking if protecting a lead.",
                CM: "Cover wings and stay back while attacking to support defense.",
                CAM: "Plays a balanced role, contributing to both defense and attack.",
                ST: "Balanced, with one prioritizing Get In Behind runs to exploit spaces.",
                CDM: "N/A"
              },
              tacticalTips: "Focus on the overlapping runs of your wingbacks to create scoring opportunities. Properly timing these runs and utilizing cutback passes can be particularly effective. Be mindful of your wingbacks' stamina, as their dual role may require substitutions.",
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
                defensiveStyle: "Press After Possession Loss",
                offensiveStyle: "Fast Build Up",
              },
              playerInstructions: {
                CB: "Stay Back While Attacking",
                WB: "Get Forward and Overlap",
                CM: "One stays back, others support the attack",
                CAM: "N/A", // Not applicable for this formation
                ST: "Stay Central and Get In Behind",
                CDM: "N/A"
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
                defensiveStyle: "High Press after Possession Loss with a width of 40 and depth of 60, encouraging a proactive recovery of the ball.",
                offensiveStyle: "Possession with emphasis on Short Passing and width of 45, ensuring control and methodical build-up play."
              },
              playerInstructions: {
                CB: "Stay Back While Attacking",
                WB: "Stay Back While Attacking, providing security on flanks.",
                CM: "One CM to Drop Between Defenders, others to Support on Attack",
                CAM: "Stay Forward, Free Roam to create and exploit spaces.",
                ST: "Get In Behind, acting as the primary target for through balls.",
                CDM: "N/A"
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
                defensiveStyle: "Press on Heavy Touch with a width of 50 and depth of 50, aiming to regain possession in the midfield.",
                offensiveStyle: "Fast Build Up with width of 40, encouraging quick transitions from defense to attack."
              },
              playerInstructions: {
                CB: "Stay Back While Attacking, anchor the defense.",
                CDM: "Cut Passing Lanes, Stay Back While Attacking, protect the back four.",
                CM: "Get Forward, offering options in attack.",
                CAM: "Stay Forward, act as the link between midfield and strikers.",
                ST: "Get In Behind, exploit defensive lines with pace.",
                WB: "N/A"
              },
              tacticalTips: "Maximize the CAM's position to distribute play effectively. Strikers should offer constant movement to create space and opportunities.",
              advantages: [
                "Midfield Control: The dense midfield can dominate possession and easily transition to defense and attack.",
                "Strong Central Attack: The formation is ideal for teams that excel in central play and quick combinations."
              ],
              disadvantages: [
                "Limited Width: Struggles to provide width, making it predictable against teams that defend well centrally.",
                "Defensive Gaps: The aggressive midfield positioning can leave gaps in defense if not managed properly."
              ]
            }
          ]
      }
    
    ];

    res.status(200).json(formations);
    

  }