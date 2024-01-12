import {
  ecommerceWeb,
  easyBillsHubMedia,
  protafolioPhone,
  protafolioWeb,
  portfolioDarkMainPage,
  ecommerceproducts,
  socialMedia,
  laptopfontview1,
  calculatorImg,
  youtubeClone,
  countdownapp,
  googleClone,
  hangManGame,
  QuizApp,
  tictactoeGame,
  todoListApp,
  pairgame,
  basicPokedex,
  pokedexPro,
  certificationFreeCodeCampResponsiveWebDesign,
  aimedge_logo,
  bavaria_logo,
  DST_logo,
  technoglass_logo,
  webmid_logo,
} from "/public/images.js";

const reactProjects = {
  EasyBillsHub: {
    title: "Easy Bills Hub",
    url: "comming soon",
    imgLink: easyBillsHubMedia,
    gh: "https://github.com/juandre1298/e-commerce/tree/main/e-commerce",
    description:
      "Welcome to Easy Bills Hub – your all-in-one Invoice Manager. Clients can effortlessly track purchases and bills, while admins manage invoices, apply discounts, and generate image vouchers securely stored in AWS S3. Detailed billing information is accessible in real-time through the user-friendly interface. Experience streamlined invoicing with Easy Bills Hub – the ultimate solution for efficient financial management.",
    moreDetails: `<h3>1. <strong>AWS S3 Integration (Backend):</strong></h3>

    <ul>
      <li>Configured AWS S3 integration using provided <strong>Access Key</strong>, <strong>Secret Key</strong>, and <strong>bucket name</strong>.</li>
      <li>Implemented a secure method for uploading invoice screenshots, utilizing pre-signed URLs for temporary and secure access.</li>
      <li>Set up IAM roles and configured permissions on the S3 bucket to restrict access to authorized users.</li>
      <li>Technologies: AWS SDK for Node.js, IAM (Identity and Access Management).</li>
    </ul>
    
    <h3>2. <strong>Security (Backend):</strong></h3>
    
    <ul>
      <li>Implemented password hashing using the <strong>bcrypt algorithm</strong> to secure user passwords.</li>
      <li>Ensured secure storage of sensitive information, such as API keys and credentials, by utilizing <strong>environment variables</strong>.</li>
      <li>Technologies: bcrypt, environment variables.</li>
    </ul>
    
    <h3>3. <strong>User Interface (Frontend):</strong></h3>
    
    <ul>
      <li>Designed a responsive and user-friendly interface based on wireframes, utilizing <strong>React components</strong> for UI elements.</li>
      <li>Implemented <strong>React Router</strong> for intuitive client-side navigation.</li>
      <li>Tested the interface on various devices and browsers, ensuring compatibility through responsive design principles.</li>
      <li>Technologies: React JS, JavaScript, React Router.</li>
    </ul>
    
    <h3>4. <strong>Unique Identifiers (Backend):</strong></h3>
    
    <ul>
      <li>Developed logic to generate and assign unique identifiers for clients and products.</li>
      <li>Implemented validation to ensure the uniqueness of these identifiers during creation, checking for existing identifiers in the database.</li>
      <li>Technologies: NodeJS, Express, MySQL.</li>
    </ul>
    
    <h3>5. <strong>Discount Values Validation (Backend):</strong></h3>
    
    <ul>
      <li>Implemented logic to calculate and validate discount values based on customer history.</li>
      <li>Set limits on discount values according to specified conditions, ensuring adherence to defined ranges.</li>
      <li>Technologies: NodeJS, Express, MySQL.</li>
    </ul>
    
    <h3>Additional Considerations:</h3>
    
    <ul>
      <li>Implemented comprehensive error handling throughout the application to provide meaningful feedback to users.</li>
      <li>Regularly updated and patched dependencies to address potential security vulnerabilities.</li>
      <li>Conducted thorough testing, including unit tests, integration tests, and user acceptance tests, using tools like <strong>Jest</strong> for React components and backend logic.</li>
      <li>Version control using <strong>Git</strong> and hosting the project repository on <strong>GitHub</strong>.</li>
    </ul>
    `,
    techDeatils: `Frontend Technologies:

    React JS: Our frontend is built on the React JS library, providing a dynamic and responsive user interface that ensures a smooth experience for clients and admins alike.
    JavaScript: The backbone of interactivity on our platform, JavaScript enhances the user experience by enabling real-time updates and dynamic content manipulation.
    Backend Technologies:
    
    NodeJS: Powering the backend, NodeJS ensures high performance and scalability, handling server-side logic for efficient data processing.
    Express: Leveraging the Express framework, we've created a lightweight and flexible backend to seamlessly handle HTTP requests and responses.
    State Management:
    
    Redux: For state management, Redux plays a crucial role in maintaining a consistent application state, making data retrieval and updates more efficient.
    Cloud Storage:
    
    AWS S3: Your image vouchers are securely stored in the Amazon Simple Storage Service (S3), ensuring reliable and scalable cloud storage for all your billing attachments.
    Database:
    
    MySQL: Our choice of MySQL as the relational database ensures structured and organized data storage, enhancing the reliability and speed of information retrieval.
    Version Control:
    
    Git: Throughout the development process, Git enables version control, allowing for collaborative development, tracking changes, and maintaining code integrity.
    Collaboration Platform:
    
    GitHub: Our project repository is hosted on GitHub, providing a collaborative platform for development, issue tracking, and code review.
    Easy Bills Hub is not just a financial management platform; it's a testament to the power of technology in simplifying and enhancing your invoicing experience. Our choice of these technologies ensures a secure, scalable, and efficient platform that meets the highest standards of modern web development.`,
    technologies: [
      "React JS",
      "JavaScript",
      "NodeJS",
      "Redux",
      "Express",
      "AWS s3",
      "MySQL",
      "Git",
      "GitHub",
    ],
  },
  AwesomeEcommerce: {
    title: "Awesome E-commerce ",
    url: "https://awesome-shop-app.web.app",
    imgLink: ecommerceWeb,
    gh: "https://github.com/juandre1298/e-commerce/tree/main/e-commerce",
    description:
      "I have successfully built a fully functional e-commerce website using React, TailwindCSS, and Firebase. This project showcases my solid understanding of front-end development and back-end integration, as well as my ability to create web applications from scratch and deploy them live. As a junior developer, this experience has been invaluable in enhancing my skills in component-based development, state management, and utilizing modern tools and technologies. It demonstrates my commitment to staying updated with the latest trends in the tech industry and my ability to confidently build real-world projects. I am excited to continue my career journey, utilizing these skills and experiences to contribute to future projects and further grow as a developer.",
    technologies: [
      "React",
      "Tailwind",
      "react-toastify",
      "Dynamic Routing",
      "redux-toolkit",
      "redux-persist",
      "GIT",
      "GITHUB",
    ],
  },
  incredibleportfolio: {
    title: "Incredible Portfolio",
    url: "https://portfolio-juandretech.vercel.app/",
    imgLink: protafolioWeb,
    phone: [
      "/../public/projectImg/portofolioPhoneDarkMainPage.webp",
      "/../public/projectImg/portofolioPhoneLightMainPage.webp",
      "/../public/projectImg/portofolioPhoneLightAboutMePage.webp",
      "/../public/projectImg/portofolioPhoneDarkAboutMePage.webp",
      "/../public/projectImg/portofolioPhoneLightProjects.webp",
      "/../public/projectImg/portofolioPhoneDarkProjects.webp",
      "/../public/projectImg/portofolioPhoneLightDetails.webp",
      "/../public/projectImg/portofolioPhoneDarkDetails.webp",
      "/../public/projectImg/portofolioPhoneLightContactMePage.webp",
      "/../public/projectImg/portofolioPhoneDarkContactMePage.webp",
    ],
    gh: "https://github.com/juandre1298/portfolio",
    description:
      "I have worked on this portfolio project that showcases my expertise in front-end development. Using my artistic vision and skills in Next.js, Tailwind, React, and responsive design, I created a visually stunning website that functions seamlessly across all devices. To enhance the user experience, I implemented third-party libraries such as React-toastify and React Collapsible, and used EmailJS for seamless communication with website users. Additionally, I used Git and GitHub for version control and collaboration, and created dynamic routes and pages that are personalized to the user's needs. This portfolio project is a testament to my skills as a front-end developer and my ability to create high-quality, user-friendly websites.",
    technologies: [
      "Next.js",
      "Tailwind",
      "React",
      "Responsive Design",
      "react-toastify",
      "EmailJS",
      "Dynamic Routing",
      "React Collapsible",
      "Git",
      "GitHub",
    ],
  },
  socialMedia: {
    title: "social media app",
    url: "https://react-course-69a26.firebaseapp.com/",
    imgLink: socialMedia,
    gh: "https://github.com/juandre1298/CodeJourney/tree/main/react-code/module18-deploying-a-firebase-react-app",
    description:
      "I have successfully developed and deployed a TypeScript React app using Firebase for user authentication and deployment. With the use of technologies such as Redux, API management, and react-router-dom, I have gained valuable experience as a junior front-end developer. This is a simple example of the great things we can do with Firebase. Here, you can create posts that can inspire all the Trendscreamers out there, and you can like or dislike opinions thanks to the Firebase database.",
    technologies: [
      "typescript",
      "React Js",
      "FireBase ",
      "CSS",
      "react-router-dom",
    ],
  },

  pokedexPro: {
    title: "Simple pokedex",
    url: "https://pokedexpro-faece.web.app/",
    imgLink: pokedexPro,
    gh: "https://github.com/juandre1298/pokedex/tree/main/pokedex-pro",
    description:
      "As a junior front-end developer, I found building a Pokedex using PokeAPI and React to be an excellent opportunity. It provided practical application of my skills, opportunities to learn, room for creativity, and a showcase for my portfolio. I applied my front-end development skills to a real-world project, deepened my understanding of React concepts, showcased my creativity through UI design, and demonstrated my abilities to potential employers. This project allowed me to gain practical experience and enhanced my employability in the competitive tech industry.",
    technologies: [
      "React",
      "Redux",
      "API axious",
      "CSS",
      "JSX",
      "react-router-dom",
    ],
  },
  /*   basicPokedex: {
    title: "preview of a more complex pokedex",
    url: "https://basicpokedex.web.app/",
    imgLink: basicPokedex,
    gh: "https://github.com/juandre1298/pokedex-v1",
    phone: [
      "/../public/projectImg/basicPokedexPhone.webp",
      "/../public/projectImg/basicPokedexPhone.webp",
    ],
    description:
      "This pokedex will not use pagination as the desplay feature, but it will integrate a lazy loading .",
    technologies: [
      "React",
      "Redux",
      "API axious",
      "CSS",
      "JSX",
      "react-router-dom",
    ],
  }, */
};
const htmlProjects = {
  youtubeclone: {
    title: "Youtube Clone",
    url: "https://juandre1298.github.io/youtubeClone/",
    imgLink: youtubeClone,
    gh: "https://github.com/juandre1298/youtubeClone",
    description:
      "This is a clone of a previous version of the YouTube homepage. In this project, I skillfully managed to replicate the style and structure of youtube.com webpage, making it responsive and incorporating various animation features. Please check it out and let me know what you think about it!",
    technologies: ["HTML", "CSS"],
  },
  googleclone: {
    title: "Google Clone",
    url: "https://juandre1298.github.io/GoogleClone/",
    imgLink: googleClone,
    gh: "https://github.com/juandre1298/GoogleClone",
    description:
      "This is a clone of the Google homepage. In this project, I single-handedly managed to replicate the style and structure of the youtube.com webpage, making it responsive and incorporating several animation features. Please check it out and let me know what you think about it!",
    technologies: ["HTML", "CSS"],
  },
};

const JSProjects = {
  pairgame: {
    title: "Pair Game",
    url: "https://juandre1298.github.io/pair-game/",
    imgLink: pairgame,
    gh: "https://github.com/juandre1298/pair-game",
    description:
      "I designed a captivating and visually appealing JavaScript pairs game with dynamic animations that bring the game to life. Players can enjoy smooth card flipping animations, engaging transition effects, and visually appealing feedback animations that enhance the overall user experience. The combination of interactive gameplay and eye-catching animations adds a touch of excitement and polish to the game, showcasing my skills in creating immersive and visually appealing web applications",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  calculator: {
    title: "Awesome Calculator",
    url: "https://juandre1298.github.io/calculator/",
    imgLink: calculatorImg,
    phone: ["/../public/projectImg/phone-calculator.webp"],
    description:
      "In this project, I used Vanilla JS to create a simple and intuitive, yet effective calculator with an elegant style and cool 3D animation buttons. Please check it out and let me know what you think about it!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  hangmangame: {
    title: "Hang Man Game",
    url: "https://juandre1298.github.io/JSHangmanGame/",
    imgLink: hangManGame,
    gh: "https://github.com/juandre1298/JSHangmanGame",
    description:
      "I created this tribute to the game that is a part of the childhood of all of us. I used JavaScript to program the logic that could take or not take the life of our little buddy! Please enter and save his life, and you will see some cool animations as the poor guy appears.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  countDown: {
    title: "CountDown",
    url: "https://juandre1298.github.io/CountDown/",
    imgLink: countdownapp,
    gh: "https://github.com/juandre1298/calculator",
    description:
      "This is an app for those people who can't wait for special dates! With this app, you will be able to check exactly how much time is left until any holiday or important date!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  quizapp: {
    title: "Quiz App",
    url: "https://juandre1298.github.io/JSQuizApp/",
    imgLink: QuizApp,
    gh: "https://github.com/juandre1298/JSQuizApp",
    description:
      "I successfully created a simple yet effective quiz app using my skills in HTML, CSS, and JavaScript. Showing knowlegde in designing an attractive UI, implementing logic, and leveraging DOM manipulation and UX/UI design principles, I was able to create a functional and user-friendly quiz app.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  todolist: {
    title: "To do List",
    url: "https://juandre1298.github.io/JSTodoList/",
    imgLink: todoListApp,
    gh: "https://github.com/juandre1298/JSTodoList",
    description:
      "This is a useful tool that we all need if we want to be productive. With this page, you can organize all your tasks so that you can bring out your most productive side.",
    technologies: ["HTML", "JavaScript"],
  },
};

export const projects = {
  reactJs: reactProjects,
  javascript: JSProjects,
  html: htmlProjects,
};
export const aboutMe = {
  greeting: "Hey,\nI'm Juan Andres Salas.",
  presentation:
    "I'm a dynamic FullStack developer with expertise in React.js, Node.js, MySQL, and WordPress. Excited about crafting impactful solutions, I'm eager to discuss how my diverse skill set can contribute to your team's success. I am open to learning and dedicated to solving a wide variety of problems, ensuring adaptability and innovation in every project.    ",
  aboutMe:
    "\tI am a dynamic FullStack software developer and solution-oriented engineer with a passion for creating impactful solutions. Leveraging my background in mechanical engineering, I bring a holistic approach to software development. Proficient in both frontend and backend technologies such as React.js, Node.js, MySQL, and WordPress, I thrive in crafting innovative solutions that bridge the gap between user experience and technical functionality. With a keen eye for detail and a track record of successful project delivery, I am eager to contribute my diverse skill set to drive excellence in every project and engineer meaningful solutions.",
  moreAboutMe:
    "\tAs someone who is passionate about contributing, learning, and growing, I am excited about the opportunity to join a team where I can make a meaningful impact. I believe that my skills in mechanical engineering, leadership, teamwork, and artistic creativity make me a valuable asset as a junior front-end developer. I am open to connecting on LinkedIn for further review of my skills and experience.\n I am eager to discuss how I can add value to your organization and contribute to your team's success. Please do not hesitate to contact me to further discuss my qualifications.",
  skills: {
    frontendTech: [
      "React JS",
      "Next.JS",
      "JavaScript",
      "Redux",
      "TypeScript",
      "Tailwind",
      "MUI (Material-UI)",
    ],
    backendTech: ["NodeJS", "Express", "AWS S3", "SQL", "Python", "ffmpeg"],
    otherTech: [
      "Git",
      "GitHub",
      "Jira",
      "Bitbucket",
      "Zapier",
      "Otter",
      "Tiny Tech",
    ],
  },
};
export const professionalExperience = [
  {
    title: "Full Stack Software Developer",
    companyName: "Aim Edge Apps",
    startDate: "01-06-2023",
    finishDate: "current",
    jobDescription: `<ul>
    <li>Contributed to building a cutting-edge web platform for transcription orders, addressing both client-side and internal back office needs.</li>
    <li>Managed client relationships, incorporating feedback for optimal results.</li>
    <li>Demonstrated front-end mastery with React.js and Material UI, ensuring visually striking interfaces.</li>
    <li>Showcased back-end expertise using Node.js and MySQL for seamless data management.</li>
    <li>Integrated Square for secure payments and leveraged AWS (S3) for scalable file management.</li>
    <li>Optimized audio capabilities with Otter and AWS transcription service, ffmpeg, ensuring high-quality outputs.</li>
    <li>Streamlined workflows with Zapier, enhancing operational efficiency.</li>
    <li>Implemented Tiny Tech for an intuitive text input editor.</li>
    <li>Orchestrated end-to-end development, delivering a robust platform tailored to transcription needs for high usage.</li>
  </ul>`,
    companyLogo: aimedge_logo,
    companyLink: "https://aimedgeapps.com/",
    technologies: [
      "Zapier",
      "JavaScript",
      "JIRA",
      "Bitbucket",
      "Redux.js",
      "Material-UI",
      "Node.js",
      "MySQL",
      "Amazon S3",
      "Amazon Web Services (AWS)",
      "Git",
      "React.js",
    ],
    location: "Remote",
  },
  {
    title: "Frontend Developer",
    companyName: "Webmid",
    startDate: "01-06-2022",
    finishDate: "01-06-2023",
    jobDescription: `<ul>
    <li>Developed visually appealing and responsive user interfaces using <strong>React.js</strong> and <strong>React Mobile</strong>.</li>
    <li>Implemented functionalities with <strong>JavaScript</strong>, enhancing user experiences.</li>
    <li>Utilized <strong>WordPress</strong> for efficient content management.</li>
    <li>Improved code quality with <strong>TypeScript</strong>.</li>
    <li>Optimized performance through code refactoring.</li>
    <li>Collaborated cross-functionally to translate design concepts into web applications.</li>
    <li>Enhanced workflows and version control using <strong>Git</strong>.</li>
  </ul>
  `,
    companyLogo: webmid_logo,
    companyLink: "https://web-mid.com/",
    technologies: [
      "Javascript",
      "WordPress",
      "Redux.js",
      "Tailwind CSS",
      "Material-UI",
      "React.js",
    ],
    location: "Remote",
  },
];
export const certifications = [
  {
    title: "Responsive Web Design",
    url: "https://freecodecamp.org/certification/juandre1298/responsive-web-design",
    imgLink: certificationFreeCodeCampResponsiveWebDesign,
    IssuedDate: "April 29, 2023",
    description:
      "Developer Certification, representing approximately 300 hours of coursework.",
    technologies: ["HTML", "CSS"],
  },
];
