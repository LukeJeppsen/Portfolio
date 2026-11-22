/* =========================================================
   SHARED CONTENT — every design reads from this one file.
   Edit text, links, and projects here; all 8 designs update.
   Paths (like resume) are relative to the site root.
   ========================================================= */
const SITE = {
  name: "Luke Jeppsen",
  first: "Luke",
  last: "Jeppsen",
  location: "Farmington, UT",
  email: "lukepj12@gmail.com",
  github: "https://github.com/LukeJeppsen",
  handshake: "https://weber.joinhandshake.com/profiles/5x4beu",
  resume: "assets/resume.pdf",

  headline: "Software developer who automates manual workflows.",
  status: "Graduating December 2026 · Open to full-time software roles",

  about: [
    "I'm a Computer Science student at Weber State University (3.65 GPA), finishing my B.S. in December 2026. I like building software that takes a tedious, manual process and makes it run on its own.",
    "As a Software Developer Intern at SKM Engineering, I've built three internal tools: a NetBox-to-Wrike integration that's now in production with the networking team, a NetBox plugin that draws the company's network diagram automatically, and a Kotlin app that spins up Ignition projects locally in Docker with simulated tag data. Before that, I worked IT helpdesk at BooksTime, where I rolled out Microsoft Intune across about 100 company devices.",
    "Outside of work and school I make games. My latest is <a href=\"https://ashenrogue.itch.io/deadweight\" target=\"_blank\" rel=\"noopener\">DEADWEIGHT</a>, a pixel-art platformer in Unity where your oversized sword is how you move."
  ],

  facts: [
    ["Location", "Farmington, UT"],
    ["School", "Weber State University"],
    ["Graduating", "December 2026"],
    ["GPA", "3.65"]
  ],

  experience: [
    {
      role: "Software Developer Intern",
      org: "SKM Engineering",
      dates: "Aug 2026 – Dec 2026",
      short: "Aug–Dec 2026",
      bullets: [
        "Designed and built, from scratch, an integration between NetBox and Wrike that automatically creates tickets from maintenance requests, giving the company a scheduled maintenance process where none existed before.",
        "Deployed the tool to production, where it is used by the networking team.",
        "Built a NetBox plugin that automatically generates network diagrams from devices, cables, locations, and racks, minimizing line crossings and white space.",
        "Building a Kotlin app that runs an Ignition 8.3 project from its GitHub repository locally in Docker, imports its database, detects the tag types in use, and simulates their values in a separate container.",
        "Develop software to automate other manual, company-specific tasks at a wastewater engineering firm."
      ],
      tech: ["NetBox", "Wrike", "REST APIs", "Automation"]
    },
    {
      role: "IT Helpdesk",
      org: "BooksTime, Inc.",
      dates: "May 2023 – Dec 2023",
      short: "May–Dec 2023",
      bullets: [
        "Deployed and configured Microsoft Intune across the organization, enrolling about 100 company laptops and mobile devices under centralized management.",
        "Resolved 10–20 helpdesk tickets per week, covering troubleshooting, software access provisioning, and user support."
      ],
      tech: ["Microsoft Intune", "Device Management", "Support"]
    }
  ],

  education: {
    school: "Weber State University",
    degree: "B.S. in Computer Science (expected December 2026)",
    dates: "Aug 2023 – Dec 2026",
    gpa: "3.65",
    credentials: [
      "Earned: Certificate of Proficiency in Computer Science",
      "Earned: Associate of Applied Science in Computer Science"
    ],
    coursework: [
      "Data Structures and Algorithms",
      "Database Programming (MySQL)",
      "Scripting Languages (Bash and Python)",
      "Calculus 1 and 2"
    ]
  },

  projects: [
    {
      name: "DEADWEIGHT",
      type: "Game · Coursework",
      year: "2026",
      summary: "A 2D pixel-art platformer in Unity. You carry a massive sword and swing it to propel yourself through the level. \"Swing to rise.\" Six areas, each with a new skill and its own palette.",
      role: "Solo developer: game design, movement and physics, pixel art, and level select.",
      tech: ["Unity", "C#", "Pixel Art"],
      links: [
        { label: "Play on itch.io", url: "https://ashenrogue.itch.io/deadweight" },
        { label: "Code", url: "https://github.com/LukeJeppsen/Deadweight" }
      ],
      note: "itch.io password: temp"
    },
    {
      name: "RV Park Reservation System",
      type: "Class · Team",
      year: "Weber State",
      summary: "A web application where clients register their vehicle and book lots for their RV, with admin pages for running the park.",
      role: "Designed the MySQL database, wrote all of the search, add, edit, and delete statements the app uses, and built the admin tool pages.",
      tech: ["C#", "MySQL", "Database Design"],
      links: [{ label: "Code", url: "https://github.com/porterballou-max/RVPark" }]
    },
    {
      name: "grep, sed & awk Video Guide",
      type: "Class · Teaching",
      year: "2026",
      summary: "A public, 15+ minute instructional video teaching Linux text processing with grep, sed, and awk, from pattern matching to practical scripts.",
      role: "Wrote, recorded, and published it.",
      tech: ["Bash", "grep", "sed", "awk"],
      links: [{ label: "Watch", url: "https://youtube.com/playlist?list=PLKozYiOU2liE&si=GvZU1M9pTVqfmMTW" }]
    },
    {
      name: "Only Aces",
      type: "Capstone · Team",
      year: "2026",
      summary: "An academic-integrity platform: a desktop app, an API, and a professor dashboard that show how student code evolves over time and issue suspicion scores to help detect cheating.",
      role: "My team took over the platform from a previous capstone group. I implemented the API's authentication end to end, including GitHub OAuth and JWT-protected endpoints.",
      tech: ["C#", "ASP.NET Core", "PostgreSQL", "React", "OAuth / JWT"],
      links: [],
      note: "Private repository · in production"
    },
    {
      name: "NetBox → Wrike Maintenance Automation",
      type: "Work · In Production",
      year: "2026",
      summary: "An integration between NetBox and Wrike that automatically creates Wrike tickets from maintenance requests. It gave SKM Engineering a scheduled-maintenance process where there wasn't one before.",
      role: "Designed and built it from scratch and deployed it to production, where the networking team uses it.",
      tech: ["REST APIs", "NetBox", "Wrike", "Automation"],
      links: [],
      note: "Internal tool · not public"
    },
    {
      name: "NetBox Network Diagram Plugin",
      type: "Work · Internal Tool",
      year: "2026",
      summary: "A NetBox plugin that reads every device, cable, location, and rack and builds the network diagram automatically, so the diagram always matches what's documented in NetBox instead of being redrawn by hand.",
      role: "Built the plugin and its layout engine: it draws every connection, minimizes line crossings to keep the diagram readable, and arranges locations and racks to cut down on white space.",
      tech: ["NetBox Plugin", "Python", "Graph Layout", "Automation"],
      links: [],
      note: "Internal tool · not public"
    },
    {
      name: "Ignition Local Environment & Tag Simulator",
      type: "Work · In Progress",
      year: "2026",
      summary: "A Kotlin app that takes an Ignition 8.3 project from its GitHub repository and stands it up locally in Docker. You can import a database, and it automatically detects which types of tags the project uses, then spins up a second container that simulates live values for those tags.",
      role: "Designing and building it solo, so engineers can run and test an Ignition project on their own machine without connecting to real equipment.",
      tech: ["Kotlin", "Docker", "Ignition 8.3", "Git", "Databases"],
      links: [],
      note: "Internal tool · in development"
    }
  ],

  skills: [
    { group: "Languages", items: ["Python", "C#", "Kotlin", "Bash", "SQL (MySQL)"] },
    { group: "Frameworks & Engines", items: ["ASP.NET Core", "React", "Unity"] },
    { group: "Tools & Platforms", items: ["Docker", "Git", "PostgreSQL", "Node.js", "Microsoft Intune"] },
    { group: "Industrial & IT", items: ["NetBox (plugin development)", "Wrike", "Ignition 8.3"] },
    { group: "Concepts", items: ["REST APIs", "Relational database design", "Data structures & algorithms", "Scripting & automation"] }
  ],

  awards: []
};

/* Small helpers used by the designs */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = (sel) => document.querySelector(sel);
const fill = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
