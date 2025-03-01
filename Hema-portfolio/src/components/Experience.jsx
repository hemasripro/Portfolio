import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';

const internships = [
  {
    role: "Google Android Developer Intern",
    company: "Google",
    duration: "May 2024 - June 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg", // Android logo
    url: "your_internship_link",
    points: [
      "Improved the user interface of an Android application.",
      "Developed an Android app with enhanced performance and user experience.",
      "Implemented new features and optimized app responsiveness."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Online",
    duration: "June 2024 - August 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/NumPy_logo_2020.svg", // NumPy logo (replace if needed)
    url: "your_internship_link", 
    points: [
      "Developed scripts using Pandas and NumPy.",
      "Created detailed visual reports including Box plots, Pair plots, and Heat maps.",
      "Enhanced data analysis efficiency through optimized scripts."
    ]
  },
  {
    role: "Java Full Stack Intern",
    company: "Online",
    duration: "July 2024 - August 2024",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", // Java logo
    url: "your_internship_link",
    points: [
      "Developed dynamic web applications using HTML, CSS, Bootstrap, and JavaScript.",
      "Integrated backend services using Core Java, Spring Framework, Hibernate, and MySQL.",
      "Enhanced application efficiency and user experience through optimized backend integration."
    ]
  }
];

const Internships = () => {
  return (
    <div className='internships bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='internships'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Internships.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {internships.map((internship) => (
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={internship.duration}
            iconStyle={{
              background: internship.role === "Data Science Intern" ? "transparent" : "#fff", 
              display: internship.role === "Data Science Intern" ? "none" : "flex", 
              alignItems: "center", 
              justifyContent: "center"
            }}
            icon={
              internship.role !== "Data Science Intern" ? (
                <a className='flex justify-center items-center w-full h-full' href={internship.url} target='_blank' rel="noopener noreferrer">
                  <img
                    src={internship.logo}
                    alt={internship.company}
                    className='w-[50%] h-[50%] object-contain'
                  />
                </a>
              ) : null
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{internship.role}</h3>
              <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                {internship.company}
              </p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {internship.points.map((point, index) => (
                <li key={`internship-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Footer />
    </div>
  );
};

export default Internships;
