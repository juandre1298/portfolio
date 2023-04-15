import {
  ecommerceWeb,
  protafolioPhone,
  protafolioWeb,
  portofolioDarkMainPage,
  ecommerceproducts,
  socialMediaPosts,
  laptopfontview1,
  calculator,
  youtubeClone,
  countdownapp,
  googleClone,
  hangManGame,
  QuizApp,
  tictactoeGame,
  todoListApp,
  pairgame,
  basicPokedex1,
  pokedexPro,
} from "/public/images.js";

const reactProjects = {
  AwesomeEcommerce: {
    title: "Awesome E-commerce ",
    url: "https://awesome-shop-app.web.app",
    imgLink: ecommerceWeb,

    description:
      "I have successfully built a fully functional e-commerce website using React, TailwindCSS, and Firebase. This project showcases my solid understanding of front-end development and back-end integration, as well as my ability to create web applications from scratch and deploy them live. As a junior developer, this experience has been invaluable in enhancing my skills in component-based development, state management, and utilizing modern tools and technologies. It demonstrates my commitment to staying updated with the latest trends in the tech industry and my ability to confidently build real-world projects. I am excited to continue my career journey, utilizing these skills and experiences to contribute to future projects and further grow as a developer.",
    technologies: [
      " react",
      "TailWind",
      "react-toastify",
      "Dynamic Routing",
      "redux-tookits",
      "redux-persist ",
      "GIT",
      "GITHUB",
    ],
  },
  basicPokedex: {
    title: "Basic pokedex",
    url: "https://basicpokedex.web.app/",
    imgLink: [basicPokedex1, "/../public/projectImg/basicPokedex2.png"],
    gh: "https://github.com/juandre1298/pokedex-v1",
    phone: "/../public/projectImg/basicPokedexPhone.png",
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
  socialMedia: {
    title: "social media app",
    url: "https://react-course-69a26.firebaseapp.com/",
    imgLink: [
      socialMediaPosts,

      "/../public/projectImg/socialMediaAppGoogleLogin.png",
      "/../public/projectImg/socialMediaAppPost.png",
    ],

    description:
      "I have successfully developed and deployed a TypeScript React app using Firebase for user authentication and deployment. With the use of technologies such as Redux, API management, and react-router-dom, I have gained valuable experience as a junior front-end developer. The incorporation of TypeScript and Firebase has contributed to a secure application, demonstrating my growing proficiency in front-end development. I am proud of this accomplishment and excited to continue learning and improving my skills in the dynamic tech industry.",
    technologies: [
      "typescript",
      "React Js",
      "FireBase ",
      "CSS",
      "react-router-dom",
    ],
  },
  pokedexPro: {
    title: "pokedex",
    url: "https://pokedexpro-faece.web.app/",
    imgLink: pokedexPro,
    phone: "/projectImg/phone-calculator.png",
    description:
      "In this project I use Vanilla JS to create a simple and intuitive but effective calculator with an elegant style and cool 3d animation buttons. Please check it out and tell me what you think about it!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  incrediblePortofolio: {
    title: "incredible portofolio",
    url: "https://portofolio-juandretech.vercel.app/",
    imgLink: protafolioWeb,
    phone: [
      "/../public/projectImg/portofolioPhoneDarkMainPage.png",
      "/../public/projectImg/portofolioPhoneLightMainPage.png",
      "/../public/projectImg/portofolioPhoneLightAboutMePage.png",
      "/../public/projectImg/portofolioPhoneDarkAboutMePage.png",
      "/../public/projectImg/portofolioPhoneLightProjects.png",
      "/../public/projectImg/portofolioPhoneDarkProjects.png",
      "/../public/projectImg/portofolioPhoneLightDetails.png",
      "/../public/projectImg/portofolioPhoneDarkDetails.png",
      "/../public/projectImg/portofolioPhoneLightContactMePage.png",
      "/../public/projectImg/portofolioPhoneDarkContactMePage.png",
    ],
    description:
      "I am pleased to share that I have successfully managed to develop and train my skills as a junior software engineer while creating an intuitive UI and responsive portfolio webpage using Next.js, React.js, TailwindCSS, Email.js, and other technologies. Throughout the project, I gained valuable hands-on experience in front-end development, UI/UX design, JavaScript, state management, API integration, deployment, problem-solving, and collaboration. This accomplishment has equipped me with a diverse range of skills, showcasing my ability to create professional-quality webpages using modern web technologies.",
    technologies: [
      "Next.js",
      "TailWind",
      "Responsive Design",
      "react",
      "react-toastify",
      "Email js",
      "Dynamic Routing",
      "React Collaps",
      "GIT",
      "GITHUB",
    ],
  },
};
const htmlProjects = {
  youtubeclone: {
    title: "Youtube Clone",
    url: "https://juandre1298.github.io/youtubeClone/",
    imgLink: youtubeClone,
    description:
      "This is a clone of a previous version of youtube homepage, in this project I single handle manage to replicate the style and structure of youtube.com webpage. Making it responsive and using several animation features. Please check it out and tell me what you think about it!",
    technologies: ["HTML", "CSS"],
  },
  googleclone: {
    title: "Google Clone",
    url: "https://juandre1298.github.io/GoogleClone/",
    imgLink: googleClone,
    description:
      "This is a clone of google homepage, in this project I single handle manage to replicate the style and structure of youtube.com webpage. Making it responsive and using several animation features. Please check it out and tell me what you think about it!",
    technologies: ["HTML", "CSS"],
  },
};

const JSProjects = {
  calculator: {
    title: "Awesome Calculator",
    url: "https://juandre1298.github.io/calculator/",
    imgLink: calculator,
    phone: "/../public/projectImg/phone-calculator.png",
    description:
      "In this project I use Vanilla JS to create a simple and intuitive but effective calculator with an elegant style and cool 3d animation buttons. Please check it out and tell me what you think about it!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  countDown: {
    title: "CountDown",
    url: "https://juandre1298.github.io/CountDown/",
    imgLink: countdownapp,
    description:
      "This is an app for those people that can't wait for the special dates! with this app you will be able to check exactly how many time is left to any holly day or important date!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  hangmangame: {
    title: "Hang Man Game",
    url: "https://juandre1298.github.io/JSHangmanGame/",
    imgLink: hangManGame,
    description:
      "I create this tribute to the game that is part of the childhood of all of us. I use JavaScript to program the logict that could take or not the life of our little budy! Please enter and save his life and you will see some cool animation as the poor guy appears",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  quizapp: {
    title: "Quiz App",
    url: "https://juandre1298.github.io/JSQuizApp/",
    imgLink: QuizApp,
    description:
      "This is a game that has always save us in those borring school days! So how not incluid ti!? As you case you can interact with the size of the table and it can real-time check hows the winner!",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  todolist: {
    title: "To do List",
    url: "https://juandre1298.github.io/JSTodoList/",
    imgLink: todoListApp,
    description:
      "This is a usefull tool that we all need if we want to be productive, With this page you can organize all your tasks so that you can bring out your most productive side.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  pairgame: {
    title: "Pair Game",
    url: "https://juandre1298.github.io/JSTodoList/",
    imgLink: pairgame,
    description:
      "This is a usefull tool that we all need if we want to be productive, With this page you can organize all your tasks so that you can bring out your most productive side.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
};

export const projects = {
  reactJs: reactProjects,
  javascript: JSProjects,
  html: htmlProjects,
};
export const aboutMe = {
  greeting: "Hi!\nI'm Juan Andres Salas!",
  presentation:
    "I'm passionate front-end developer with a keen eye for detail and a love for creating visually appealing and user-friendly websites and I'm ready to contribute with my passion and hard work! ",
  aboutMe:
    "\tAs a Jr. front-end developer with a background in mechanical engineering and experience in product ownership and project management within technology companies, I bring a unique blend of technical expertise, artistic flair, leadership skills, and teamwork abilities to the tech industry. Proficient in front-end technologies such as HTML, CSS, JavaScript, and React, I have created several projects that showcase my abilities.\n With a deep understanding of product development processes from my mechanical engineering background, I am well-equipped to manage projects, collaborate with cross-functional teams, and achieve results. My artistic mindset and attention to detail make me well-suited for front-end development, where I strive to create visually appealing and user-friendly websites.",
  moreAboutMe:
    "\tAs someone who is passionate about contributing, learning, and growing, I am excited about the opportunity to join a team where I can make a meaningful impact. I believe that my skills in mechanical engineering, leadership, teamwork, and artistic creativity make me a valuable asset as a junior front-end developer. I am open to connecting on LinkedIn for further review of my skills and experience.\n I am eager to discuss how I can add value to your organization and contribute to your team's success. Please do not hesitate to contact me to further discuss my qualifications.",
  skills: [
    "React",
    "JavaScript",
    "Next.js",
    "HTML",
    "CSS",
    "Responsive Design",
    "react-toastify",
    "Fire-Base",
    "TailWind",
    "Redux",
    "Email JS",
    "Dynamic Routing",
    "Git",
    "GitHub",
  ],
};
