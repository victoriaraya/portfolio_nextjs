const ProjectList = [
  {
    name: "Meaningful EndCare",
    urlName: "meaningful-endcare",
    description:
      "This project was created with love and care for a local business dedicated to supporting individuals and families during the end-of-life journey. The site is designed to educate visitors about what a death doula is, highlight the benefits of these services, and guide clients in connecting with the doula for support during a meaningful and sensitive time. I designed the website, created a custom logo, and developed the site using Next.js to deliver a comfortable and engaging user experience.",
    images: [
      "meaningfulendcare",
      "meaningfulendcare1",
      "meaningfulendcare2",
      "meaningfulendcare3",
      "meaningfulendcare4",
      "meaningfulendcare5",
    ],
    imageName: "meaningful-endcare-compressed",
    category: "Web Development",
    technologies: ["Typescript", "Next.js", "Tailwind", "Git", "Vercel"],
    url: "https://meaningfulendcare.com/",
  },
  {
    name: "Groovy",
    urlName: "groovy",
    description:
      "Groovy is an interactive music website where users can explore some of my favorite artists, listen to their music, stay updated on their upcoming shows, and chat with an AI assistant to learn more about them. I created this app to deepen my experience with React, Next.js, AI, and external APIs. I wanted to build a project that integrates my passion for music, offering everything I'd want to know about an artist in one convenient place. This project not only highlights my technical skills but also gives users a glimpse into my personality through the music I love.",
    images: ["groovy", "groovy1", "groovy2", "groovy3"],
    imageName: "groovy-compressed",
    category: "Web Development",
    technologies: [
      "Typescript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "NeonDB",
      "Clerk",
      "Ticketmaster Discovery API",
      "OpenAI API",
      "Git",
    ],
    url: "https://groovy-sigma.vercel.app/",
  },

  {
    name: "Victoria's Shop",
    urlName: "victorias-shop",
    description:
      "Victoria's Shop is an e-commerce website I designed and developed using React and Express, with Stripe integration for payment processing. This project was my first major solo endeavor, designed to enhance my skills in React, REST API design, database management, authentication, third-party API integration, and CSS. I featured products I’m actually interested in as a fun and practical way to gain experience. Throughout this project, I gained valuable insights into React, including managing context and state, integrating components effectively and linking the UI with data handling to enhance their interaction. Completing this project has equipped me with the knowledge to handle similar tasks more efficiently in the future.",
    images: [
      "victoriashop",
      "victoriashop1",
      "victoriashop2",
      "victoriashop3",
      "victoriashop4",
      "victoriashop5",
      "victoriashop6",
    ],
    imageName: "victorias-shop-compressed",
    category: "Web Development",
    technologies: [
      "JavaScript",
      "CSS",
      "React",
      "Express",
      "Prisma",
      "MongoDB",
      "Stripe API",
      "Git",
    ],
    url: "https://victoriashop.fun/",
  },

  {
    name: "Email Deleter",
    urlName: "email-deleter",
    description:
      "This Node.js script uses node-imap to delete emails from specific senders via IMAP. Inspired by the numerous spam emails I receive daily, I wanted to automate the process of deleting these unwanted messages without risking exposure to malicious links. Setting up a cron job to run this script twice daily has saved me from the tedious task of manually deleting over 20 emails each day. Through this project, I gained valuable experience with IMAP, asynchronous task management, and configuring cron jobs, including handling environment variables and permissions.",
    images: ["email"],
    imageName: "email",
    category: "Backend",
    technologies: ["JavaScript", "Node.js", "IMAP", "Cron", "Git"],
    url: "https://github.com/victoriaraya/email_deleter",
  },
];

const getProject = (name) => {
  let project = ProjectList.find((project) => project.urlName === name);

  return project;
};

export { ProjectList, getProject };
