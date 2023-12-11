"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/pro-thin-svg-icons";

// When install or import below code, then the not working
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { solid, regular, light, thin, duotone, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
  return (
    <main className="container-xl">
      <FontAwesomeIcon icon={faThumbsUp} /> {/* This icon is work*/}
      <br />
      <FontAwesomeIcon icon={faDownload} /> {/* Als this icon is work*/}
      <br />
      <FontAwesomeIcon icon={faShieldHalved} /> {/* Also this icon is work*/}
      <br />
      {/* Below icon not working, I want to solution this type of problem.*/}
      <p>When install or import below code, then the not working</p>
      {/* <FontAwesomeIcon icon={solid("shield-halved")} /> */}
    </main>
  );
}
