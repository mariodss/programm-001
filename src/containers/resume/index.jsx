import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils"
import "react-vertical-timeline-component/style.min.css"
import './styles.scss';
import { MdWork } from 'react-icons/md';



const Resume = () => {
    return (

        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="timeline">
                <div className="timeline_experience">

                    <h3 className="timeline_experience_header-text" >
                        Experience
                    </h3>



                    <VerticalTimeline

                        layout={'1 column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >

                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline_experience_vertical-timeline-element"
                                    contentStyle={{

                                        background: 'none',
                                        color: 'gray',
                                        border: '1.5px solid var(--yellow-theme-sub-text-color)'
                                    }}

                                    icon={<MdWork />}
                                    iconStyle={{

                                        background: 'black',
                                        color: 'var(--yellow-theme-main-color)'
                                    }}


                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 >

                                            {item.title}

                                        </h3>

                                        <h4 >

                                            {item.company}


                                        </h4>

                                        <p>
                                            {item.description}
                                        </p>



                                    </div>





                                </VerticalTimelineElement>


                            ))

                        }

                    </VerticalTimeline>

                </div>

                <div className="timeline_education">

                    <h3 className="timeline_education_header-text">
                        Education

                    </h3>

                    <VerticalTimeline

                        layout={'1 column'}
                        lineColor="var(--yellow-theme-main-color)"

                    >

                        {
                            data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline_education_vertical-timeline-element"
                                    contentStyle={{

                                        background: 'none',
                                        color: 'gray',
                                        border: '1.5px solid var(--yellow-theme-sub-text-color)'


                                    }}
                                    icon={<MdWork />}
                                    iconStyle={{

                                        background: 'black',
                                        color: 'var(--yellow-theme-main-color)'
                                    }}

                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 >

                                            {item.title}

                                        </h3>

                                        <h4 >

                                            {item.institution}


                                        </h4>

                                        <h4  >
                                            {item.location}
                                        </h4>

                                        <h4 >
                                            {item.graduation}
                                        </h4>




                                    </div>




                                </VerticalTimelineElement>


                            ))


                        }

                    </VerticalTimeline>





                </div>



            </div>




        </section>

    )

}

export default Resume;