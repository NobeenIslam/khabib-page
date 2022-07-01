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
    <section className="d-flex flex-column ">
      <div className="d-flex flex-row justify-content-center about--navigation">
        {" "}
        <button
          className="btn btn-info me-2"
          onClick={() => setAboutView("early-life")}
        >
          Early Life
        </button>
        <button
          className="btn btn-info me-2"
          onClick={() => setAboutView("marital-arts-training")}
        >
          Martial Arts Training
        </button>
        <button
          className="btn btn-info me-2"
          onClick={() => setAboutView("early-career")}
        >
          Early Career
        </button>
      </div>
      {aboutView === "early-life" && <AboutInfoCard data={earlyLifeData} />}
      {aboutView === "marital-arts-training" && (
        <AboutInfoCard data={martialArtsData} />
      )}
      {aboutView === "early-career" && <AboutInfoCard data={earlyCareerData} />}
    </section>
  );
}
