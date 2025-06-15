import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Deputy Manager",
    company: "Schneider Electric",
    startDate: "Aug 2024",
    isCurrentJob: true,
    location: "Chennai, India",
    description: [
      "Developed applications using C# and .NET Framework for enterprise-level solutions.",
      "Built a fine-tuned LLM with enterprise data for internal knowledge sharing portal.",
      "Performed analytics using Power BI and Power Automate.",
      "Implemented OT cybersecurity: system hardening, configuring firewalls and switches.",
    ],
  },
  {
    designation: " IoT and AR Intern",
    company: "Birmingham City University (BCU) ",
    startDate: "Sep 2023",
    endDate: "Apr 2024",
    isCurrentJob: false,
    location: "Ludhiana, India",
    description: [
      "Designed and developed IoT integrated with VR simulation.",
      "Streamlined workflows by eliminating redundant data, boosting efficiency.",
      "Designed a game type interactive interface to promote exercise and workout in individuals.",
      "Created a customizable AI chatbot as a personalized workout partner.",
    ],
  },
  {
    designation: " Embedded System and IoT Intern",
    company: "Averz Technologies",
    startDate: "Jan 2023",
    endDate: "Feb 2023",
    isCurrentJob: false,
    location: "Chennai, India",
    description: [
      "Contributed to embedded system and IoT development",
      "Learnt to fabricate Embedded Systems and circuit boards.",
      "Created a Smart Power Management system to promote power saving in homes and industries.",
    ],
  },
  {
    designation: "ML Intern",
    company: "Fox Trading",
    startDate: "Jan 2022",
    endDate: "Mar 2022",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Worked with supervised and unsupervised ML algorithms.",
      "Used PCA to optimize the ML model for better security.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
  {
    designation: "Deep Learning Intern",
    company: "Finland Labs, IIT Guwahati",
    startDate: "Aug 2020",
    endDate: "Oct 2020",
    isCurrentJob: false,
    location: "IIT Madras, Chennai",
    description: [
      "Built ML and IoT solutions using AWS and Azure.-",
      "Deep dove into Image Processing and CNN to recognize and classify various diseases from Patients data stored in Hospital Database.",
      "Analysed bio-markers and phenotypic parameters of human body to recognize the health status of individuals.",
    ],
  },
];

export default experiences;
