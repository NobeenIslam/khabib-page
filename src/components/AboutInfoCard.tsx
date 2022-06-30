import { AboutDataInterface } from "../utils/interfaces";

interface AboutInfoCardProps {
  data: AboutDataInterface;
}

export function AboutInfoCard({ data }: AboutInfoCardProps): JSX.Element {
  return (
    <section className="d-flex flex-column">
      <h1 className="about--title">{data.title}</h1>
      <div className="d-flex flex-row flex-wrap justify-content-evenly">
        <p className="about--text">{data.text}</p>
        <img className="about--image" src={data.image} alt="" />
      </div>
    </section>
  );
}
