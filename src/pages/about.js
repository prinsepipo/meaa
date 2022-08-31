import * as React from "react";

import Default from "../layout/Default";
import AboutSection from "../components/about/AboutSection";
import EventsActivities from "../components/about/EventsActivities";


const About = () => {
  return (
    <Default>
      <main className="wrapper">
        <AboutSection header="About MEAA">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </AboutSection>
        <AboutSection header="Mission">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </AboutSection>
        <AboutSection header="Vision">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </AboutSection>
        <AboutSection header="Core Values">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </AboutSection>
        <AboutSection header="Events and Activities">
          <p>Aside from just studying, students are engaged in fun and challenging extracurricular activities.</p>
          <EventsActivities />
        </AboutSection>
      </main>
    </Default>
  );
};


export default About;
