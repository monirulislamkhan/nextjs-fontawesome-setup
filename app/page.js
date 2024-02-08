"use client";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far, fab } from "@awesome.me/kit-e7972d293c/icons";
// import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons";

// When install or import below code, then the not working
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { solid, regular, light, thin, duotone, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
  return (
    <main className="container-xl">
      <FontAwesomeIcon icon={far.faHouse} />
      <FontAwesomeIcon icon={far.faMouse} />
      <FontAwesomeIcon icon={far.faCheese} />
      <FontAwesomeIcon icon={far.faPersonSwimming} />
      <FontAwesomeIcon icon={far.faDownload} />
      <FontAwesomeIcon icon={far.faHeart} />
      <p>When install or import below code, then the not working</p>
      <FontAwesomeIcon icon={far.faBed} />
      <FontAwesomeIcon icon={fab.faFacebook} />
      <FontAwesomeIcon icon={fab.faTwitter} />
      <FontAwesomeIcon icon={fab.faLinkedin} />
      <FontAwesomeIcon icon={fab.faLinkedin} />
      <FontAwesomeIcon icon={far.faBomb} />
      <FontAwesomeIcon icon={far.faImage} />
      <FontAwesomeIcon icon={far.faLocationDot} />
      {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
      {/* <FontAwesomeIcon icon={solid("shield-halved")} /> */}
    </main>
  );
}
