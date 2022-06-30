import { useState } from "react";
import {
  earlyCareerData,
  earlyLifeData,
  martialArtsData,
} from "../utils/khabibData";
import { AboutInfoCard } from "./AboutInfoCard";

export function About(): JSX.Element {
  const [aboutView, setAboutView] = useState<string>("early-life");
  return (
    <section>
      <button onClick={() => setAboutView("early-life")}>Early Life</button>
      <button onClick={() => setAboutView("marital-arts-training")}>
        Martial Arts Training
      </button>
      <button onClick={() => setAboutView("early-career")}>Early Career</button>
      {aboutView === "early-life" && <AboutInfoCard data={earlyLifeData} />}
      {aboutView === "marital-arts-training" && (
        <AboutInfoCard data={martialArtsData} />
      )}
      {aboutView === "early-career" && <AboutInfoCard data={earlyCareerData} />}
    </section>
  );
}
