import { MovesInterface } from "../utils/interfaces";

interface SingleMovePageProps {
  move: MovesInterface;
}

export function SingleMovePage({ move }: SingleMovePageProps): JSX.Element {
  return (
    <section>
      <h1>{move.title}</h1>
      <p>{move.description}</p>
      <div className="d-flex flex-column align-items-center">
        <iframe
          width="560"
          height="315"
          src={move.youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
