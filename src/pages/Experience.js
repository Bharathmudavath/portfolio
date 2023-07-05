import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import "react-vertical-timeline-component/style.min.css";
function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="MARCH 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           TTWRES(BOYS) School, kulkacherla(M), Telangana(S)
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>HIGH SCHOOL</h4>
          <p> CGPA : 9.0/10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             TTWR jr college, Balanagar(M), Telangana(S)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            INTERMEDIATE
          </h4>

          <p> Percentage: 95.5%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             NIT Surathkal University, Karnataka (S), India(C)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B.Tech in Mechanical Engineer
          </h4>
          <p> CGPA : 7.33</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - Future"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Experience
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            I have experience of completing 4 projects
          </h4>
          <p>
            #placementinyourcompany
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education;