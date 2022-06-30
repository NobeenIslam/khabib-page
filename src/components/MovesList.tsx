import { useState } from "react";
import { movesDisplayInfos } from "../utils/khabibData";

export function MovesList(): JSX.Element {
  const [moveView, setMoveView] = useState<number>(0);
  console.log(moveView);
  const movesDisplays = movesDisplayInfos.map((movesDisplayInfo) => (
    <div key={movesDisplayInfo.moveId}>
      <h5>{movesDisplayInfo.title}</h5>
      <img
        src={movesDisplayInfo.image}
        alt=""
        onClick={() => setMoveView(movesDisplayInfo.moveId)}
      />
    </div>
  ));
  return <section>{movesDisplays}</section>;
}
