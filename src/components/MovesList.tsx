import { useEffect } from "react";
import { movesDisplayInfos } from "../utils/khabibData";
import { SingleMovePage } from "./SingleMovePage";

interface MovesListProps {
  moveView: number;
  setMoveView: (arg0: number) => void;
}

export function MovesList({
  moveView,
  setMoveView,
}: MovesListProps): JSX.Element {
  useEffect(() => {
    setMoveView(0);
  }, [setMoveView]);

  const doubleLegTakeDown = movesDisplayInfos[0];
  const eagleSmesh = movesDisplayInfos[1];
  const flyingKnee = movesDisplayInfos[2];
  const rearNakedChoke = movesDisplayInfos[3];
  const kimura = movesDisplayInfos[4];
  const triangleChoke = movesDisplayInfos[5];
  const overhandRight = movesDisplayInfos[6];
  const shoulderThrow = movesDisplayInfos[7];

  const movesDisplays = movesDisplayInfos.map((movesDisplayInfo) => (
    <div
      className="d-flex flex-column justify-content-center align-items-center m-3 moves--display"
      key={movesDisplayInfo.moveId}
    >
      <h5>{movesDisplayInfo.title}</h5>
      <img
        className="moves--image"
        src={movesDisplayInfo.image}
        alt=""
        onClick={() => setMoveView(movesDisplayInfo.moveId)}
      />
    </div>
  ));
  return (
    <section>
      {moveView === 0 && (
        <div className="d-flex flex-row flex-wrap">{movesDisplays}</div>
      )}
      {moveView === 1 && <SingleMovePage move={doubleLegTakeDown} />}
      {moveView === 2 && <SingleMovePage move={eagleSmesh} />}
      {moveView === 3 && <SingleMovePage move={flyingKnee} />}
      {moveView === 4 && <SingleMovePage move={rearNakedChoke} />}
      {moveView === 5 && <SingleMovePage move={kimura} />}
      {moveView === 6 && <SingleMovePage move={triangleChoke} />}
      {moveView === 7 && <SingleMovePage move={overhandRight} />}
      {moveView === 8 && <SingleMovePage move={shoulderThrow} />}
    </section>
  );
}
