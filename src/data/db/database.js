import Mock from "../mock";

const database = {
  information: {
    name: 'Casey McCullough',
    aboutContent: "I am a full-stack developer with a background in environmental and energy science ",
    age:'',
    phone: '',
    nationality: 'American',
    language: 'English, Spanish',
    email: '',
    address: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/casey-mccullough-5905953/',
      dribbble: '',
      github: 'https://github.com/caseymccullough'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/on_car_Toronto.jpeg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Casey_McCullough_Resume_2021.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Othello",
      subtitle: "A two-player version of the classic board game",
      imageUrl: "/images/Othello-image.png",
      largeImageUrl: ["/images/Othello-image.png"],
      url: 'https://caseymccullough.github.io/Othello/'
    },
    {
      id: 2,
      title: "Electric Enlightenment",
      subtitle: "An analysis of home energy use",
      imageUrl: "/images/electric-enlightenment.png",
      largeImageUrl: [
        "/images/electric-enlightenment.png"
      ],
      url: 'https://electric-sage.herokuapp.com/'
    },
    {
      id: 3,
      title: "PVWatts Clone",
      subtitle: "Can Solar Power Work for You?",
      imageUrl: "/images/PVWatts-clone.png",
      url: 'https://caseymccullough.github.io/Solar-Energy-Calculator/'
    },
    {
      id: 4,
      title: "Mercury Marathon",
      subtitle: "A working marthon website",
      imageUrl: "/images/mercury-marathon.png",
      largeImageUrl: ["/images/mercury-marathon.png"],
      url: 'https://sleeptil3.github.io/mercury-marathon-react/#/'
    },
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "March 2021 - Present",
        position: "Software Engineering Fellow",
        company: "General Assembly",
        details: "Full-stack training featuring Javascript, Python with Django, React and Express with Node.js. Project work included a clone of NREL's PVWatts calculator, a two-player Othello game, the Mercury Marathon Website (group project), and Electric Enlightenment, a tool to help homeowners gain insight into their electricity use"
      },
      {
        id: 2,
        year: "August 2019 - February 2021",
        position: "Regional Manager, Ohio",
        company: "Microsoft TEALS",
        details: "Recruited, managed and trained team of over fifty software developers teaching computer science in over twenty classrooms in underserved communities."
      },
      {
        id: 3,
        year: "April 2018 - June 2019",
        position: "Assistant Professor, Software Development",
        company: "Notre Dame College",
        details: "Course load included: Programming Logic and Design, Computer Decision Making Applications, Data Structures, and Advanced Programming"
      },
      {
        id: 4,
        year: "August 2014 - May 2017",
        position: "Computer Science and Environmental Science Teacher",
        company: "Menlo School",
        details: ""
      },
      {
        id: 5,
        year: "August 2012 - June 2014",
        position: "Teacher and Director of Sustainability",
        company: "Episcopal High School",
        details: "Taught Advanced Computer Science, Chemistry, and Advanced Global Energy.  Developed and implemented a portfolio of energy-saving strategies to save the school an estimated $70,000 annually."
      }
    ],
    educationExperience: [
      
      {
        id: 1,
        year: "2021 - present",
        graduation: "General Assembly",
        university: "Software Engineering Immersive",
        details: "Full-stack training featuring Python with Django, JavaScript, React, and Express with Node.js"
      },
      {
        id: 2,
        year: "1995 - 1997",
        graduation: "University of California, Berkeley",
        university: "Master of Science, Energy and Resources Group",
        details: "An interdisciplinary graduate program focused on issues of sustainability and energy security."
      },
      {
        id: 3,
        year: "1989 - 1993",
        graduation: "University of California, Berkeley",
        university: "Bachelor of Arts, Political Economy",
        details: ""
      }

    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['650-996-9039'],
    emailAddress: ['kcmccullough@gmail.com'],
    address: ""
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});