import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";

import ContentMain from "../common/ContentMain";
import ContentHeader from "../common/ContentHeader";
import Card from "../common/Card";


import "./AdmissionsContent.scss";


const AdmissionsContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allAdmissionsJson {
        edges {
          node {
            for
            requirements
          }
        }
      }
    }
  `);

  const admissions = data.allAdmissionsJson.edges;

  return (
    <ContentMain className="admissions wrapper">
      <section className="admissions-body">
        <ContentHeader>Admission Requirements</ContentHeader>

        <p className="admissions-info">You should bring the following in order for you to enroll your child / children.</p>

        <div className="admissions-list">
          {admissions.map((item, i) => {
            const admission = item.node;

            return (
              <Card className="admissions-item" key={i}>
                <h3 className="admissions-title">{admission.for}</h3>
                <ul>
                  {admission.requirements.map((requirement, i) => (
                    <li className="admissions-requirement" key={i}><span>-</span><span>{requirement}</span></li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>
    </ContentMain>
  );
};


export default AdmissionsContent;
