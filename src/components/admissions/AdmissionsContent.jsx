import * as React from "react";

import { admissions } from "../../data";

import ContentHeader from "../common/ContentHeader";
import Card from "../common/Card";

import "./AdmissionsContent.scss";


const AdmissionsContent = () => {
  return (
    <main className="admissions wrapper">
      <section className="admissions-body">
        <ContentHeader>Admission Requirements</ContentHeader>

        <p className="admissions-info">You should bring the following in order for you to enroll your child / children.</p>

        <div className="admissions-list">
          {admissions.map((admission, i) => (
            <Card className="admissions-item" key={i}>
              <h3 className="admissions-title">{admission.for}</h3>
              <ul>
                {admission.requirements.map((requirement, i) => (
                  <li className="admissions-requirement" key={i}><span>-</span><span>{requirement}</span></li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};


export default AdmissionsContent;
