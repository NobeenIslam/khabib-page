import { AboutDataInterface } from "../utils/interfaces";

interface AboutInfoCardProps {
  data: AboutDataInterface;
}

export function AboutInfoCard({ data }: AboutInfoCardProps): JSX.Element {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <img src={data.image} alt="" />
    </section>
  );
}
