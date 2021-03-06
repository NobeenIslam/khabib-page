import { FightDataInterface } from "../utils/interfaces";

interface FightCardProps {
  fightData: FightDataInterface;
}

export function FightCard({ fightData }: FightCardProps): JSX.Element {
  return (
    <div className="card border-dark mb-3 cardSize">
      <img className="card-img-top" src={fightData.image} alt="" />
      <div className="card-body card--textColor">
        <h2 className="card-title text-center text-warning">
          {fightData.title}
        </h2>
        <h3>
          Date: <span className="text-muted">{fightData.date}</span>
        </h3>
        <h3>
          Rounds: <span className="text-muted">{fightData.rounds}</span>
        </h3>
        <h3>
          Finish: <span className="text-muted">{fightData.finish}</span>
        </h3>
        <p className="card-text text-center">{fightData.description}</p>
      </div>
    </div>
  );
}
