// 'use client'

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// // Assuming FormationData is defined somewhere else and imported
// interface FormationData {
//     key: string,
//     formation: string;
//     overview: string;
//     flow: string;
//     image: string;
//     difficulty: string;
//     customTactics: {
//     defensiveStyle: string;
//     offensiveStyle: string;
//     };
//     playerInstructions: {
//     CB: string;
//     WB: string;
//     CM: string;
//     CDM?: string;
//     CAM: string;
//     ST: string;
//     };
//     tacticalTips: string;
//     advantages: string[];
//     disadvantages: string[];
// }

// interface FormationsEAFCProps {
//   onPageChange: (pageName: string) => void;
// }

// const FormationPage: React.FC<FormationsEAFCProps> = ({ onPageChange }) => {
  
//   const [formationDetails, setFormationDetails] = useState<FormationData | null>(null);

//   const router = useRouter();
//   // const formation = router.query.formation as string;

//   useEffect(() => {
//     const fetchFormationDetails = async () => {
//       if (router) {
//         const response = await fetch(`/api/eafc24/formations?formation=${formation}`);
//         const data = await response.json();
//         setFormationDetails(data.content.find((f: FormationData) => f.formation === formation) || null);
//         console.log(`Fetching details for formation: ${formation}`);
//       }
//     };

//     fetchFormationDetails();
//   }, [formation]);

//   if (!formationDetails) {
//     console.log(formationDetails)
//     return (<div>Loading...</div>);
//   }

//   return (
//     <div>
//       {/* Display formationDetails content */}
//       {/* Example: */}
//       <h1>{formationDetails.formation}</h1>
//       <p>{formationDetails.overview}</p>
//       This one here
//     </div>
//   );
// };

// export default FormationPage;
