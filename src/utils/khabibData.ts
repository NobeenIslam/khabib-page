import {
  AboutDataInterface,
  FightDataInterface,
  MovesInterface,
} from "./interfaces";

export const earlyLifeData: AboutDataInterface = {
  title: "Early Life",
  text: `Khabib Abdulmanapovich Nurmagomedov was born to an Avar family on 20 September 1988, in the village of Sildi in the Tsumadinsky District of the Dagestan ASSR, an autonomous republic within the Russian SFSR, Soviet Union.He has an older brother, Magomed, and younger sister, Amina. His father's family had moved from Sildi to Kirovaul, where his father converted the ground floor of their two-storey building into a gym. Nurmagomedov grew up in the household with his siblings and cousins. His interest in martial arts began when watching students training at the gym.Khabib's training as a child included wrestling a bear when he was nine years old.

  As is common with many children in Dagestan, he began wrestling from an early age: he started at the age of eight under the tutelage of his father, Abdulmanap Nurmagomedov. A decorated athlete and a veteran of the Soviet Army, Abdulmanap had also wrestled from an early age, before undergoing training in judo and sambo in the military.`,
  image: "/images/aboutPics/early-life.png",
};

export const martialArtsData: AboutDataInterface = {
  title: "Martial Arts Training",
  text: `In 2001, his family moved to Makhachkala, the capital of Dagestan,where he trained in wrestling from the age of 12, and judo from 15. He resumed training in combat sambo, under his father, at 17. According to Nurmagomedov, the transition from wrestling to judo was difficult, but his father wanted him to get used to competing in a gi jacket. Abdulmanap was a senior coach for the combat sambo national team in the Republic of Dagestan, training several athletes in sambo in Makhachkala, Russia. Nurmagomedov frequently got into street fights in his youth, before focusing his attention on mixed martial arts.[36] Khabib said that, along with his father, three athletes who inspired him were the American boxers Muhammad Ali and Mike Tyson and the Brazilian footballer Ronaldo.`,
  image: "/images/aboutPics/khabib-wrestling.jpg",
};

export const earlyCareerData: AboutDataInterface = {
  title: "Early Career",
  text: `Nurmagomedov made his professional MMA debut in September 2008 and compiled four wins in under a month. On 11 October, he became the inaugural Atrium Cup tournament champion, having defeated his three opponents at the Moscow event. Over the next three years, he went undefeated, finishing 11 out of 12 opponents. These included a first-round armbar finish of future Bellator title challenger Shahbulat Shamhalaev, which marked his M-1 Global debut. In 2011, he competed in seven fights for the ProFC promotion, all of which he won by TKO or submission.

  A 16–0 record in the regional circuits of Russia and Ukraine generated interested from the Ultimate Fighting Championship (UFC) in signing Nurmagomedov.Later, Nurmagomedov's father revealed in an interview that due to a contract dispute with ProFC they had 11 court cases contesting the legitimacy of Nurmagomedov's UFC contract. After losing six and winning five cases, they reached an agreement and Khabib was able to continue his career.`,
  image: "/images/aboutPics/early-career.jpg",
};

export const movesDisplayInfos: MovesInterface[] = [
  {
    moveId: 1,
    title: "Double Leg Takedown",
    image: "/images/movePics/gsp-double-leg.jpg",
    description: `The double leg takedown (colloquially known as a double leg or double) involves grabbing the opponent with both arms around the opponent's legs while keeping the chest close to the opponent, and using this position to force the opponent to the ground.`,
    youtubeUrl: "https://www.youtube.com/embed/SUD2PYrIN_I?start=168",
  },
  {
    moveId: 2,
    title: "Eagle Smesh",
    image: "/images/movePics/eagle-smesh.jpg",
    description: `Khabib pins you to the ground and SMESHES you`,
    youtubeUrl: "https://www.youtube.com/embed/bORIS2rdxZQ?start=62",
  },
  {
    moveId: 3,
    title: "Flying Knee",
    image: "/images/movePics/flying-knee.jpg",
    description: `A knee strike very similar to a front knee, except that it is performed in stand-up fighting by jumping, and often by rushing towards the opponent.`,
    youtubeUrl: "https://www.youtube.com/embed/pVpJwya8GGk?start=158",
  },
  {
    moveId: 4,
    title: "Rear Naked Choke",
    image: "/images/movePics/rear-naked-choke.jpg",
    description: `A chokehold in martial arts applied from an opponent's back. The word "naked" in this context suggests that, unlike other strangulation techniques found in jujutsu/judo, this hold does not require the use of a keikogi or training uniform.`,
    youtubeUrl: "https://www.youtube.com/embed/EpXyf5sll1E",
  },
  {
    moveId: 5,
    title: "Kimura",
    image: "/images/movePics/kimura.jpg",
    description: `The Kimura works through isolation of the elbow and shoulder joints. It is done by grabbing your attacker under a double wristlock.

    This position enables you to crank behind your opponent’s back. Such a hold puts a tremendous amount of stress on your opponent. It exerts painful pressure on your opponent’s shoulder making it difficult to escape.`,
    youtubeUrl: "https://www.youtube.com/embed/SpyhKC62exw?start=907",
  },
  {
    moveId: 6,
    title: "Triangle Choke",
    image: "/images/movePics/triangle-choke.jpg",
    description: `A triangle choke, or sankaku-jime in judo, is a type of figure-four chokehold that encircles the opponent's neck and one arm with the legs in a configuration similar to the shape of a triangle.`,
    youtubeUrl: "https://www.youtube.com/embed/JDSXzDpVAlI",
  },
  {
    moveId: 7,
    title: "Overhand Right",
    image: "/images/movePics/overhand-right.webp",
    description: `An overhand punch is a semi-circular and vertical punch thrown with the rear hand. It is usually employed when the opponent is bobbing or slipping. The strategic utility of the drop relying on body weight can deliver a great deal of power`,
    youtubeUrl: "https://www.youtube.com/embed/7_nJrFKlApQ?start=28",
  },
  {
    moveId: 8,
    title: "Shoulder Throw",
    image: "/images/movePics/shoulder-throw.webp",
    description: `The shoulder throw involves a competitor turning and lifting their opponent on their back and throwing the opponent over their shoulder.`,
    youtubeUrl: "https://www.youtube.com/embed/pVpJwya8GGk?start=750",
  },
];

export const kVsConnorData: FightDataInterface = {
  title: "UFC 229: Khabib vs McGregor",
  date: "October 6. 2018",
  rounds: 4,
  finish: "Submission (neck crank)",
  description: `Khabib Nurmagomedov beat Conor McGregor on Saturday night in the main event of UFC 229.

  "He bludgeoned him" is probably a more accurate way to describe it. It went precisely how most of the sport's followers predicted it would go: If McGregor could not keep his back off the canvas, he was in big trouble. You know, like every other Khabib fight.`,
  image: "/images/oppPics/k-vs-con.jpg",
};

export const kVsDosAnjosData: FightDataInterface = {
  title: "Khabib vs Dos Anjos",
  date: "April 14. 2014",
  rounds: 3,
  finish: "Decision",
  description:
    "This match has the most beautiful shoulder throw you've ever seen",
  image: "/images/oppPics/k-vs-dos-anjos.jpg",
};

export const kVsGaethjeData: FightDataInterface = {
  title: "UFC 254: Khabib vs. Gaethje",
  date: "October 24. 2020",
  rounds: 2,
  finish: "Technical Submission (Triangle Choke)",
  description: `The main event featured an incredible finish by Khabib Nurmagomedov to choke Justin Gaethje unconscious, and then the real shocker was his decision to leave his gloves in the cage and announce his retirement from MMA`,
  image: "/images/oppPics/k-vs-gaethje.jpg",
};

export const kVsPoirierData: FightDataInterface = {
  title: "UFC 242: Khabib vs. Poirier",
  date: "September 7. 2019",
  rounds: 3,
  finish: "Submission (Rear Naked Choke)",
  description: `Khabib dominated for nearly the entire fight, landing 22 significant strikes to Poirier's 12 and earning seven takedowns to the challenger's zero.`,
  image: "/images/oppPics/k-vs-poirier.jpg",
};
