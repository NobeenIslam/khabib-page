import {
  kVsConnorData,
  kVsDosAnjosData,
  kVsGaethjeData,
  kVsPoirierData,
} from "../utils/khabibData";
import { FightCard } from "./FightCard";

export function FormidableOpponents(): JSX.Element {
  return (
    <section>
      <FightCard fightData={kVsConnorData} />
      <FightCard fightData={kVsGaethjeData} />
      <FightCard fightData={kVsPoirierData} />
      <FightCard fightData={kVsDosAnjosData} />
    </section>
  );
}
