import { Carousel } from "react-bootstrap";
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
      <Carousel>
        <Carousel.Item>
          <div className="card--container">
            <FightCard fightData={kVsConnorData} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card--container">
            <FightCard fightData={kVsGaethjeData} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card--container">
            <FightCard fightData={kVsPoirierData} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card--container">
            <FightCard fightData={kVsDosAnjosData} />
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
