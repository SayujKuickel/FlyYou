import HeroImage from "./Assets/hero-image.jpg";

// <Home page>
import Projects_IMG_1 from "./Assets/hero-image.jpg";
import Projects_IMG_2 from "./Assets/hero-image.jpg";
import Projects_IMG_3 from "./Assets/hero-image.jpg";

export const projects = [
  {
    id: 1,
    title: "Registered Support Organization",
    description: `We speak Chinese, Japanese, English, Hindi and Nepali. We always have more than 100 people registered, so we will select the right person for your company.`,
    image: Projects_IMG_1,
    link: "/projects/registered_support_organization",
  },
  {
    id: 2,
    title: "Namaste Recruit",
    description: `Namasute Recruit is a specialized human resource matching service connecting "foreigners" with "companies seeking foreign talent," with a focus on Nepalese and South Asians. Our goal is to create employment opportunities that align with the company's needs.`,
    image: Projects_IMG_2,
    link: "/projects/namaste_recruit",
  },
  {
    id: 3,
    title: "ABS English Conversation",
    description: `ABS English consists of Filipino instructors experienced in teaching English to Koreans, Taiwanese, Chinese, Vietnamese, and Japanese individuals. We'll match you with a suitable teacher, ensuring that even beginners can learn English comfortably and confidently.`,
    image: Projects_IMG_3,
    link: "/projects/abs_english_conversation",
  },
];
// </Home page>

//
//

import RSO_IMG_1 from "./Assets/hero-image.jpg";
import RSO_IMG_2 from "./Assets/hero-image.jpg";
import RSO_IMG_3 from "./Assets/hero-image.jpg";

// <registered_support_organization>
export const RSOLayout = [
  {
    id: 1,
    title: "Registered Support Organization",
    description: `When hiring workers with specific skills, for the first specific skill, companies that accept foreigners are required to provide a lot of support to foreigners. This obligation can be outsourced, and the organization that can receive this obligation is called a 'registered support organization'.`,
    image: RSO_IMG_1,
  },
  {
    id: 2,
    title: "Specific Skills",
    description: `From April 2019, 4, it has become possible to accept new foreign human resources with 'specified skills' in industrial fields where labor shortages are serious.`,
    image: RSO_IMG_2,
  },
  {
    id: 3,
    title: "Work Visa",
    description: `There are a total of 19 types of work visas. In particular, 'Technical, Humanities, and International Services' will be the main focus. You can learn mainly what you have learned at university or vocational school.`,
    image: RSO_IMG_3,
  },
];

export const RSOFeatures = [
  {
    id: 1,
    title: "Implementation of advance guidance.",
    body: "After the employment contract is concluded, we will explain the working conditions, activities, immigration procedures, whether or not security deposits are collected, etc. face-to-face or by videophone.",
  },
  {
    id: 2,
    title: "Pick-up and drop-off at the time of entry and exit",
    body: "Upon entry, we will provide transfers to the airport and business or residence. In addition, when you return to your home country, you will be picked up and accompanied to the security checkpoint at the airport.",
  },
  {
    id: 3,
    title:
      "Support for securing housing and contracts necessary for daily life",
    body: "We will act as a joint guarantor and provide housing. In addition, we support the opening of bank accounts, contracts for mobile phones, etc., and various procedures.",
  },
  {
    id: 4,
    title: "Life orientation",
    body: "We will explain the rules of Japan in daily life, how to use public institutions, measures in the event of a disaster, etc.",
  },
  {
    id: 5,
    title: "Accompaniment to official proceedings",
    body: "We will accompany you on procedures related to your place of residence, social security, tax, etc., and support you in preparing documents.",
  },
  {
    id: 6,
    title: "Provide Japanese learning opportunities",
    body: "We will provide you with the information necessary for learning Japanese, such as introduction of Japanese classrooms and guidance on teaching materials",
  },
  {
    id: 7,
    title: "Responding to consultations and complaints",
    body: "We will respond to consultations in the workplace and daily life in a language that foreigners can fully understand, and provide advice and guidance as necessary.",
  },
  {
    id: 8,
    title: "Interaction with Japanese people",
    body: "We will provide opportunities for interaction with local residents such as residents' associations and communication opportunities.",
  },
  {
    id: 9,
    title: "Career change support",
    body: "If the employment contract is canceled for the convenience of the receiving party, we will support the foreigner in changing jobs. We will also provide you with information on administrative procedures necessary for job searching.",
  },
  {
    id: 10,
    title: "Interviews and reports to administrative agencies",
    body: "We will conduct regular interviews with foreigners and their superiors.",
  },
];

// </ registered service organization>

// <Serviecs>
import Agriculture from "./Assets/icons/1188086.png";
import Accommodation from "./Assets/icons/5241697.png";
import Aviation from "./Assets/icons/4230843.png";
import Construction from "./Assets/icons/2204128.png";
import FoodServiceIndustry from "./Assets/icons/3575841.png";
import BuildingCareIndustry from "./Assets/icons/6454118.png";
import AutomobileMaintenanceIndustry from "./Assets/icons/4879657.png";
import ShipbuildingAndShipbuilding from "./Assets/icons/7029741.png";
import IndustrialMachineryManufacturingIndustry from "./Assets/icons/1186305.png";
import FoodAndBeverageManufacturingIndustry from "./Assets/icons/3572470.png";
import ElectricalElectronicAndInformationIndustries from "./Assets/icons/3572470.png";
import FabricatedMaterialsIndustry from "./Assets/icons/9170887.png";
import NursingCareIndustry from "./Assets/icons/1165491.png";

export const services = [
  {
    id: 1,
    name: "Agriculture",
    url: Agriculture,
  },
  {
    id: 2,
    name: "Accommodation",
    url: Accommodation,
  },
  {
    id: 3,
    name: "Aviation",
    url: Aviation,
  },
  {
    id: 4,
    name: "Construction",
    url: Construction,
  },
  {
    id: 5,
    name: "Food Service Industry",
    url: FoodServiceIndustry,
  },
  {
    id: 6,
    name: "Building Care Industry",
    url: BuildingCareIndustry,
  },
  {
    id: 7,
    name: "Fabricated Materials Industry",
    url: FabricatedMaterialsIndustry,
  },
  {
    id: 8,
    name: "Automobile Maintenance Industry",
    url: AutomobileMaintenanceIndustry,
  },
  {
    id: 9,
    name: "Shipbuilding And Shipbuilding",
    url: ShipbuildingAndShipbuilding,
  },
  {
    id: 10,
    name: "Industrial Machinery Manufacturing Industry",
    url: IndustrialMachineryManufacturingIndustry,
  },
  {
    id: 11,
    name: "Food And Beverage Manufacturing Industry",
    url: FoodAndBeverageManufacturingIndustry,
  },
  {
    id: 12,
    name: "Electrical, Electronic, And Information Industries",
    url: ElectricalElectronicAndInformationIndustries,
  },
  {
    id: 13,
    name: "Nursing Care Industry",
    url: NursingCareIndustry,
  },
];
// </ Serviecs>

//
//

import Namaste_IMG_1 from "./Assets/hero-image.jpg";
import Namaste_IMG_2 from "./Assets/hero-image.jpg";
import Namaste_IMG_3 from "./Assets/hero-image.jpg";

// <Namaste Recuit>
export const NamasteRecruitLayout = [
  {
    id: 1,
    title: "What is Namaste Recruit?",
    description: `Namasute Recruit connects Nepalese and South Asian individuals, often termed 'foreigners,' with companies seeking a diverse workforce. Our mission crafts tailored opportunities for job seekers and employers. We stand out with a fee structure tied to successful recruitment. Namasute Recruit means accessing talent and fostering inclusivity in your career or organization.`,
    image: Namaste_IMG_1,
  },
  {
    id: 2,
    title: "Connecting Foreign Talent with Opportunity",
    description: `Our unwavering commitment lies in the art of crafting employment opportunities that not only match but also exceed the specific wishes, goals, and strategic needs of companies looking to harness the exceptional talents and unique perspectives of foreign human resources.`,
    image: Namaste_IMG_2,
  },
  {
    id: 3,
    title: "Zero-Cost Recruitment Success",
    description: `Our innovative recruitment model centers on a revolutionary zero-cost framework. Companies achieve their hiring goals risk-free until we meet their staffing needs. This approach underscores our dedication to your success, aligning our interests for mutual benefit. This cost-effective strategy empowers you to explore a diverse workforce and global talent pool without upfront expenses.`,
    image: Namaste_IMG_3,
  },
];

export const NamasteFeatures = [
  {
    id: 1,
    title: "Low Risk",
    body: "Recruitment through job advertisement media incurs costs from the recruitment stage.Namaste Recruit is a complete success fee type, so the cost until successful recruitment is 0 yen.For details, please refer to 'Service Fee'.",
  },
  {
    id: 2,
    title: "Japanese Proficiency",
    body: "We have people from level N1 to N4 at Japanese. We can introduce human resources that meet the Japanese level you are looking for.",
  },
  {
    id: 3,
    title: "Age Range",
    body: "Age range Most of the job seekers employed at our company are in their 20s ~ early 30s. We will also introduce this according to your request.",
  },
  {
    id: 4,
    title: "After Sales",
    body: "After-sales follow-up We will also fully support the follow-up after joining the company, such as choosing a residence for the hire. If you have any problems, please contact us at any time.",
  },
  {
    id: 5,
    title: "Refund Service",
    body: "Refund Service if you retire within the period specified by us, we will refund a certain amount of money based on our refund policy.",
  },
];
// </Namaste Recuit>

//
//

import ABS_IMG_1 from "./Assets/hero-image.jpg";
import ABS_IMG_2 from "./Assets/hero-image.jpg";
import ABS_IMG_3 from "./Assets/hero-image.jpg";

// < ABS PAGE>
export const ABSLayout = [
  {
    id: 1,
    title: "What is ABS English?",
    description: `ABS English consists of Filipino instructors who have taught English to Korean, Taiwanese, Chinese, Vietnamese and Japan people. We introduce teachers that are suitable for each student, so even beginners can learn English with peace of mind.`,
    image: ABS_IMG_1,
  },
  {
    id: 2,
    title: "What kind of people are the teachers?",
    description: `ABS English is a distinguished team of highly skilled Filipino teachers who possess a wealth of experience in teaching English to a diverse range of students, including Koreans, Taiwanese, Chinese, Vietnamese, and Japanese individuals. Our dedicated instructors are well-equipped to provide top-notch language education tailored to the unique needs and backgrounds of each learner, ensuring a comprehensive and effective English language learning experience.`,
    image: ABS_IMG_2,
  },
  {
    id: 3,
    title: "What is the atmosphere like in the class?",
    description: `English is a type of communication tool, so I have lessons with the motto of having fun while learning rather than studying.We will thoroughly interview the students before the lesson and select the appropriate teacher.`,
    image: ABS_IMG_3,
  },
];

export const ABSFeatures = [
  {
    id: 1,
    title: "Low Risk",
    body: "Recruitment through job advertisement media incurs costs from the recruitment stage.Namaste Recruit is a complete success fee type, so the cost until successful recruitment is 0 yen.For details, please refer to 'Service Fee'.",
  },
  {
    id: 2,
    title: "Japanese Proficiency",
    body: "We have people from level N1 to N4 at Japanese. We can introduce human resources that meet the Japanese level you are looking for.",
  },
  {
    id: 3,
    title: "Age Range",
    body: "Age range Most of the job seekers employed at our company are in their 20s ~ early 30s. We will also introduce this according to your request.",
  },
  {
    id: 4,
    title: "After Sales",
    body: "After-sales follow-up We will also fully support the follow-up after joining the company, such as choosing a residence for the hire. If you have any problems, please contact us at any time.",
  },
  {
    id: 5,
    title: "Refund Service",
    body: "Refund Service if you retire within the period specified by us, we will refund a certain amount of money based on our refund policy.",
  },
];
// </ ABS PAGE>

// articles for home page
export const articles = [
  {
    id: 1,
    title: `FLYYOU Co., Ltd.: Bridging Gaps, Creating Opportunities"`,
    image: HeroImage,
  },
  {
    id: 2,
    title: `ABS English: Tailored Learning for Every Student`,
    image: HeroImage,
  },
  {
    id: 3,
    title: `Namasute Recruit: Connecting Global Talent and Companies`,
    image: HeroImage,
  },
];
