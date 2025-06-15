import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Data Science",
    icons: [
      "/skills/PowerBi.svg",
      "/skills/tableau.svg",
      "/skills/SQL.svg",
      "/skills/statistics.svg",
      "/skills/VertexAI.webp",
    ],
    shortDescription:
      "I bring a data-first mindset to solving real-world problems with measurable impact.",
    description:
      "Experienced in building AI-driven solutions, I specialize in machine learning, deep learning, and data analytics. I’ve developed predictive models, fine-tuned LLMs, and created insightful dashboards using Power BI. My work spans cloud platforms like Azure and GCP, with a strong focus on MLOps and A/B testing.",
  },
  {
    id: 2,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/ASP.jpg",
      "/skills/nextjs.jpg",
      "/skills/tailwind.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/ASP.jpg",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 4,
    title: "Cybersecurity",
    icons: [
      "/skills/azureAD.svg",
      "/skills/bitlocker-lock-icon.png",
      "/skills/cisco.svg",
      "/skills/fortinet.png",
      "/skills/mcafee.svg",
    ],
    shortDescription:
      "I bring a proactive approach to safeguarding critical assets across hybrid environments.",
    description:
      "Skilled in securing both IT and OT infrastructures, I specialize in system hardening, firewall configuration, and network segmentation. I’ve implemented cybersecurity solutions using tools like FortiGate, Trellix, and Cisco ASA, ensuring compliance and resilience. My experience includes OT network simulation, patch management, and threat detection in industrial systems.",
  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/git.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery. Improve your workflow with DevOps solutions.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/azureAD.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
];

export default services;
