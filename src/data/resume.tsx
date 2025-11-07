import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  fullname: "Randal Chukwuweike Wilson",
  name: "Randal Chukwuweike Wilson",
  initials: "Rd",
  url: "https://rd.dev",
  location: "Surulere - Lagos, Nigeria",
  locationLink: "",
  description:
    "Senior Fullstack JavaScript Developer. I build, scale, and support meaningful digital products.",
  summary:
    "As a passionate and detail-oriented Fullstack Web Developer, I specialize in Next.js, React, Tailwind CSS, MongoDB, and UI/UX design — building modern, responsive, and high-performing web applications that not only work flawlessly but truly delight users.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "React-Native",
    "Python",
    "Go",
    "PHP",
    "Laravel",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "randalchukzwilson@gmail.com",
    tel: "+2349032374880",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rdghostmann",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/rdwilson-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/rdwilson-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/rdwilson-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "https://gmail.com/rw3225304@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  rdworks: [
    {
      company: "DAAF NGO",
      href: "https://www.agapefoundationasaba.org",
      badges: ["Web Design", "Charity", "Responsive UI"],
      location: "Remote",
      title: "NGO/Charity Website",
      logoUrl: "/DAAF_Logo-1.webp",
      start: "2024",
      end: "2024",
      description:
        "A responsive, modern, and accessible website for an NGO/charity organization, showcasing its mission, donation options, team, testimonials, and contact information. Built with performance and SEO in mind.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
    {
      company: "Expense Tracker PRO",
      href: "https://expense-tracker-pro-flame.vercel.app",
      badges: ["Finance", "Charts", "UI/UX"],
      location: "Remote",
      title: "Expense Tracking App",
      logoUrl: "/expense.png",
      start: "2024",
      end: "2024",
      description:
        "An Expense Tracker PRO project featuring pie and line charts with the ability to lock and review overall monthly expenses in a visually engaging dashboard.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "React", "Recharts", "Tailwind CSS", "Framer Motion"],
    },
    {
      company: "Agrifarm",
      href: "https://agrifarm-farm-management-system.vercel.app",
      badges: ["Dashboard", "Management", "Responsive"],
      location: "Remote",
      title: "Farm Management System",
      logoUrl: "/project-placeholder.png",
      start: "2024",
      end: "2024",
      description:
        "A clean, modern, and responsive farm management system UI designed to manage agricultural operations including activities, expenses, incomes, crops, lands, species, equipment, warehouses, housings, employees, and more.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "Tailwind CSS", "Shadcn/UI", "Zustand"],
    },
    {
      company: "Speak 10x Better",
      href: "https://www.speak10xbetter.com",
      badges: ["Language", "Education", "Culture"],
      location: "Remote",
      title: "Language Learning Platform",
      logoUrl: "/speaker10xbetter.png",
      start: "2024",
      end: "2024",
      description:
        "A language learning and cultural improvement website aimed at enhancing communication skills through practical lessons and global interaction.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      company: "EU Cultural Centre",
      href: "https://euculturalcenta.vercel.app/",
      badges: ["Culture", "Education", "International"],
      location: "Remote",
      title: "Cultural Exchange Platform",
      logoUrl: "/eucc.webp",
      start: "2024",
      end: "2024",
      description:
        "Bridging cultures, fostering understanding, and promoting cooperation between Europe and Nigeria through education, arts, and cultural exchange.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      company: "Modern Digital Hub",
      href: "https://modern-digital-hub.vercel.app",
      badges: ["E-commerce", "Media", "Blog"],
      location: "Remote",
      title: "Digital Media & Shop Platform",
      logoUrl: "/project-placeholder.png",
      start: "2024",
      end: "2024",
      description:
        "Discover our blog, shop our products, and watch featured videos in one unified, responsive platform designed for content and commerce.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React Player"],
    },

    {
      company: "EmilyAgro",
      href: "https://www.emilyagros.com/",
      badges: ["Agriculture", "Mobile App", "Innovation"],
      location: "Remote",
      title: "Farm Management Mobile App",
      logoUrl: "/emilyagros.png",
      start: "2024",
      end: "2024",
      description:
        "A modern farm management mobile app enabling farmers to track activities, manage expenses, monitor crops, and analyze yields in real time — built for efficiency and scalability.",
      roles: ["Frontend Development", "UI/UX Design", "Mobile Integration"],
      technologies: ["React Native", "Supabase", "Tailwind CSS", "Expo"],
    },

    {
      company: "ClaretianUPay",
      href: "https://claretian-u-pay.vercel.app",
      badges: ["Fintech", "Payments", "Education"],
      location: "Remote",
      title: "School Payment Platform",
      logoUrl: "/project-placeholder.png",
      start: "2024",
      end: "2024",
      description:
        "A user-friendly platform designed to simplify school fee payments for Claretian institutions. Integrated with Paystack for secure transactions and real-time confirmations.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "Tailwind CSS", "Paystack API", "Framer Motion"],
    },
    {
      company: "Paragon Micro Data - School Pilot",
      href: "https://schoolpilot.online/",
      badges: ["Education", "Admin", "Productivity"],
      location: "Remote",
      title: "School Management Platform",
      logoUrl: "/schoolpilot.png",
      start: "2024",
      end: "2024",
      description:
        "A comprehensive school management platform built to simplify academic and administrative operations — enhancing productivity and digital efficiency for schools.",
      roles: ["Web Design"],
      technologies: ["Laravel", "Tailwind CSS", "Blade", "MySQL"],
    },

    {
      company: "Stella Maris Academy",
      href: "https://stellamarisschools.com",
      badges: ["School Website", "Education", "Responsive UI"],
      location: "Remote",
      title: "Official School Website",
      logoUrl: "/stellamaris.png",
      start: "2024",
      end: "2024",
      description:
        "Official website for Stella Maris International Academy — a modern, responsive platform showcasing academic excellence, values, and programs.",
      roles: ["Frontend Development", "UI/UX Design"],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SMTP"],
    },
  ],

work: [
  {
    company: "DAAF NGO",
    href: "https://www.agapefoundationasaba.org",
    badges: ["Web Design", "Charity", "Responsive UI"],
    location: "Remote",
    title: "NGO/Charity Website",
    logoUrl: "/DAAF_Logo-1.webp",
    start: "2024",
    end: "2024",
    description:
      "A responsive, modern, and accessible website for an NGO/charity organization, showcasing its mission, donation options, team, testimonials, and contact information. Built with performance and SEO in mind.",
  },
  {
    company: "Expense Tracker PRO",
    href: "https://expense-tracker-pro-flame.vercel.app",
    badges: ["Finance", "Charts", "UI/UX"],
    location: "Remote",
    title: "Expense Tracking App",
    logoUrl: "/expense.png",
    start: "2024",
    end: "2024",
    description:
      "An Expense Tracker PRO project featuring pie and line charts with the ability to lock and review overall monthly expenses in a visually engaging dashboard.",
  },
  {
    company: "Agrifarm",
    href: "https://agrifarm-farm-management-system.vercel.app",
    badges: ["Dashboard", "Management", "Responsive"],
    location: "Remote",
    title: "Farm Management System",
    logoUrl: "/project-placeholder.png",
    start: "2024",
    end: "2024",
    description:
      "A clean, modern, and responsive farm management system UI designed to manage agricultural operations including activities, expenses, incomes, crops, lands, species, equipment, warehouses, housings, employees, and more.",
  },
  {
    company: "Speak 10x Better",
    href: "https://www.speak10xbetter.com",
    badges: ["Language", "Education", "Culture"],
    location: "Remote",
    title: "Language Learning Platform",
    logoUrl: "/speaker10xbetter.png",
    start: "2024",
    end: "2024",
    description:
      "A language learning and cultural improvement website aimed at enhancing communication skills through practical lessons and global interaction.",
  },
  {
    company: "EU Cultural Centre",
    href: "https://euculturalcenta.vercel.app/",
    badges: ["Culture", "Education", "International"],
    location: "Remote",
    title: "Cultural Exchange Platform",
    logoUrl: "/eucc.webp",
    start: "2024",
    end: "2024",
    description:
      "Bridging cultures, fostering understanding, and promoting cooperation between Europe and Nigeria through education, arts, and cultural exchange.",
  },
  {
    company: "Modern Digital Hub",
    href: "https://modern-digital-hub.vercel.app",
    badges: ["E-commerce", "Media", "Blog"],
    location: "Remote",
    title: "Digital Media & Shop Platform",
    logoUrl: "/project-placeholder.png",
    start: "2024",
    end: "2024",
    description:
      "Discover our blog, shop our products, and watch featured videos in one unified, responsive platform designed for content and commerce.",
  },
  {
    company: "EmilyAgro",
    href: "https://www.emilyagros.com/",
    badges: ["Agriculture", "Mobile App", "Innovation"],
    location: "Remote",
    title: "Farm Management Mobile App",
    logoUrl: "/emilyagros.png",
    start: "2024",
    end: "2024",
    description:
      "A modern farm management mobile app enabling farmers to track activities, manage expenses, monitor crops, and analyze yields in real time — built for efficiency and scalability.",
  },
  {
    company: "ClaretianUPay",
    href: "https://claretian-u-pay.vercel.app",
    badges: ["Fintech", "Payments", "Education"],
    location: "Remote",
    title: "School Payment Platform",
    logoUrl: "/project-placeholder.png",
    start: "2024",
    end: "2024",
    description:
      "A user-friendly platform designed to simplify school fee payments for Claretian institutions. Integrated with Paystack for secure transactions and real-time confirmations.",
  },
  {
    company: "Paragon Micro Data - School Pilot",
    href: "https://schoolpilot.online/",
    badges: ["Education", "Admin", "Productivity"],
    location: "Remote",
    title: "School Management Platform",
    logoUrl: "/schoolpilot.png",
    start: "2024",
    end: "2024",
    description:
      "A comprehensive school management platform built to simplify academic and administrative operations — enhancing productivity and digital efficiency for schools.",
  },
  {
    company: "Stella Maris Academy",
    href: "https://stellamarisschools.com",
    badges: ["School Website", "Education", "Responsive UI"],
    location: "Remote",
    title: "Official School Website",
    logoUrl: "/stellamaris.png",
    start: "2024",
    end: "2024",
    description:
      "Official website for Stella Maris International Academy — a modern, responsive platform showcasing academic excellence, values, and programs.",
  },
],

  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
