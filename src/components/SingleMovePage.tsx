import { MovesInterface } from "../utils/interfaces";

interface SingleMovePageProps {
  move: MovesInterface;
}

export function SingleMovePage({ move }: SingleMovePageProps): JSX.Element {
  return (
    <section>
      <h1>{move.title}</h1>
      <p>{move.description}</p>
    </section>
  );
}
