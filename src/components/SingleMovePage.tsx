import { MovesInterface } from "../utils/interfaces";

interface SingleMovePageProps {
  move: MovesInterface;
}

export function SingleMovePage({ move }: SingleMovePageProps): JSX.Element {
  return (
    <section className="d-flex flex-column justify-content-evenly align-items-center">
      <h1 className="m-3">{move.title}</h1>
      <p className="move--text text-center">{move.description}</p>
      <iframe
        className="move--video"
        width="560"
        height="315"
        src={move.youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}
