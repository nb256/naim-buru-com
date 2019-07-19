export const projectsMock = [
  {
    name: "This site",
    image: "https://naim-public.s3.amazonaws.com/naimburu.png",
    description: "My server-side rendered personal portfolio. ",
    codelink: "https://github.com/nb256/naim-buru-com",
    date: new Date(2019, 6, 19).toISOString(),
    technologies: [
      "next.js",
      "react",
      "express",
      "styled-components",
      "material-ui",
      "jest",
      "enzyme",
      "aws ec2"
    ]
  },
  {
    name: "3d image galery with react and three.js",
    image: "https://naim-public.s3.amazonaws.com/threejs2.png",
    description:
      "Navigate through an animated 3d scene with three.js orbit controls.",
    demolink: "https://nb256-threejs-example.herokuapp.com/",
    codelink: "https://github.com/nb256/threejs-example",
    date: new Date(2019, 3, 23).toISOString(),
    technologies: ["react", "react-spring", "three", "react-three-fiber"]
  },

  {
    name: "Talentra.net",
    image: "https://naim-public.s3.amazonaws.com/talentra2.png",
    description:
      "Promotional site for a job consultancy company. ( Codes are unavailable because of NDA)",
    demolink: "https://talentra.net",
    date: new Date(2018, 9, 1).toISOString(),
    technologies: [
      "react",
      "redux",
      "styled-components",
      "redux-thunk",
      "node.js",
      "express",
      "mongodb",
      "heroku"
    ]
  },
  {
    name: "React-redux based kanban board application",
    image: "https://naim-public.s3.amazonaws.com/kanbanello.png",
    description:
      "Drag and drop cards across columns. Import and export redux application state. Persist redux store to LocalStorage on page refreshes.",
    demolink: "https://kanbanelloo-4e0ec.firebaseapp.com/",
    codelink: "https://github.com/nb256/kanbanello",
    date: new Date(2017, 5, 1).toISOString(),
    technologies: ["react", "redux", "w3.css", "webpack", "babel"]
  }
];

export const worksMock = [
  {
    title: "Full stack developer",
    company: "Talentra Recruitment Agency (Istanbul)",
    startDate: new Date(2018, 5, 1).toISOString(),
    endDate: new Date(2019, 4, 31).toISOString(),
    description:
      "I was responsible of development and deployment of multiple web application projects. I worked on react front-ends and node servers.",
    technologies: [
      "react",
      "redux",
      "styled-components",
      "node.js",
      "express",
      "graphql",
      "mongodb",
      "neo4j",
      "redis",
      "socket.io"
    ]
  },
  {
    title: "Front end developer",
    company: "Contact Circuit (Istanbul)",
    startDate: new Date(2017, 7, 1).toISOString(),
    endDate: new Date(2018, 4, 31).toISOString(),
    description:
      "I was responsible of design and development of a contact management web application solution.",
    technologies: ["javascript", "react", "redux", "styled-components", "axios"]
  }
];

export const blogPostsMock = [
  {
    title: "React Hooks ve Suspense",
    date: new Date(2019, 3, 4).toISOString(),
    link: "https://talentra.net/blog/React-Hooks-ve-Suspense-123",
    language: "Turkish"
  },
  {
    title: "React uygulamalarına meta etiketleri eklemek",
    date: new Date(2019, 2, 7).toISOString(),
    link:
      "https://talentra.net/blog/React-Uygulamalarina-Meta-Etiketleri-Eklemek-877",
    language: "Turkish"
  }
];
