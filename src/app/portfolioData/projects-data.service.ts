import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  private readonly projects: Array<Project> = [
    {
      index: 1,
      name: "Image Annotation App",
      summary: "A PWA for annotating images",
      link: "",
      githubLink: "",
      desc: `This is a PWA app built in React that can run locally on a technician's tablet. 
      It allows them to take photos and annotate any damages, and then upload them to SharePoint using the Microsoft Graph API. 
      It uses indexedDB and caching to run offline when needed, and can then batch-upload images when an internet connection is available.

      This app replaces an existing solution but improves upon it. It saves on subscription costs and is cross-platform which allows it to run on cheaper devices. 
      It can also store many images at a time, which is useful for technicians who may not have an internet connection available for a while.`,
      skills: ["React","JavaScript","IndexedDB","PWA", "Microsoft Graph API"],
      screenshots: ["/assets/project-screenshots/image-annotate-1.png"],
      skillsToFilterBy: ["React","JavaScript","PWA", "Third Party APIs"]
    }, {
      index: 2,
      name: "Training Video App",
      summary: "A web app for viewing training videos",
      desc: `Providing ongoing software support for a training video app and adding new features.
      Changes include updates to the React frontend, as well as the T-SQL database and loopback API that support the backend.
      I have Added Microsoft SSO functionality to the API's authentication using PassportJS as well as a new smart recommendation system using machine learning.
      
      There is also an admin site that allows administrators to manage the videos, including uploading directly to Wistia through an API`,
      skills: ["React", "Loopback", "SQL", "PassportJS", "Azure Active Directory", "VB.NET"],
      screenshots: ["/assets/project-screenshots/training1.png", "/assets/project-screenshots/training2.png"],
      skillsToFilterBy: ["React", "Loopback", "Node.JS", "SQL", "JavaScript", "VB.NET"]
    }, {
      index: 3,
      name: "Resource Management App",
      summary: "A web app for businesses to manage their resources and bookings",
      desc: `I have developed bespoke software for multiple local companies that helps them run their business.
      It focuses on integrating with cloud solutions such as accounting software and Office365 through the Microsoft Graph API.
      This cuts costs by automating admin work and allowing everything to run on the cloud instead of a physical server.

      Some of these integrations include uploading invoices to Xero/QuickBooks, automatically creating bookings from incoming emails, 
      automatically creating SharePoint folders for bookings, and creating events on an Outlook calendar.`,
      skills: ["SQL", "VB.NET", "JavaScript", "Microsoft Graph API"],
      screenshots: ["/assets/project-screenshots/resource1.png"],
      skillsToFilterBy: ["SQL", "VB.NET", "JavaScript"]
    },
    {
      index: 5,
      name: "Alien Worlds Timer",
      summary: "A utility extension for the dApp game Alien Worlds",
      githubLink: 'https://github.com/BrooklynP/aw-timer',
      link: '',
      desc: `This is a chrome extension that lets players know when their mining is ready to collect. It calls an API that returns data about the WAX blockchain. 
      This is used to work out when the player last mined, and when they can next. 
      It also web scrapes data from a stats page to quickly display relevant info for the user. 
      In its prime it was used by 2000+ users with an average of 4.3* rating on the Chrome Web Store, 
      and in the end the game replicated the feature directly in the game so that the extension was no longer needed.`,
      skills: ["Chrome", "Javascript", "APIs"],
      screenshots: ["/assets/project-screenshots/aw-timer8.png"],
      skillsToFilterBy: ["Chrome Extensions", "JavaScript", "Third Party APIs"]
    }, {
      index: 6,
      name: "Discord Bot",
      summary: "A discord chat bot capable of multiple functions",
      desc: `This is a Discord bot that is able to reply messages to users when given fixed commands,  write formatted messages in informational channels and display the floor price of NFTs. 
      It sees use in a server with over 15000 users`,
      skills: ["Node.JS", "Discord.JS", "HyperSpace API"],
      screenshots: ["/assets/project-screenshots/discord3.png", "/assets/project-screenshots/discord2.png",
        "/assets/project-screenshots/discord1.png", "/assets/project-screenshots/discord4.png"],
      link: "https://discord.gg/batbrigade",
      skillsToFilterBy: ["Third Party APIs", "Node.JS", "JavaScript"]
    }, {
      index: 7,
      name: "This Portfolio",
      summary: "A portfolio of some of my proudest projects",
      link: "https://brooklynpedley.co.uk",
      githubLink: "https://github.com/BrooklynP/portfolio/",
      desc: `This is the website I use to display all of my finest and latest work.
      I am constantly working on it as I learn new things to ensure it is the most effective website it can be.`,
      skills: ["Angular", "AWS S3"],
      screenshots: ["/assets/project-screenshots/portfolio-3.png"],
      skillsToFilterBy: ["Angular", "JavaScript"]
    }, {
      index: 8,
      name: "Plaid",
      summary: "A Node App using Plaid Open Banking API to pull bank transactions, and push them to a local database",
      desc: `This is a Node application that is triggered every hour. 
      Its job is to pull all transactions for the day, work out if any are new, and if they are push them to a database by using a Loopback 4 API on it's server.
      In this database they are then matched to existing invoices.
      
      This app saves admin time as the accounts person can check invoices have been paid without first interrupting the account holder, 
      or having to spend time manually finding the invoice the transaction is for.`,
      skills: ["Open Banking", "APIs", "Plaid API", "SQL", "Loopback 4", "NodeJS"],
      screenshots: ["/assets/project-screenshots/plaid-1.png"],
      skillsToFilterBy: ["Third Party APIs", "Node.JS", "JavaScript"]
    }, {
      index: 9,
      name: "Loopback API",
      summary: "A Loopback 4 server paired with a powershell script to move data from a MySQL database to an SQL database",
      desc: `This project started with upgrading a complex Loopback 3 API to a Loopback 4 API, including authentication and custom remote methods.
      Then it had to be hosted on IIS using IISNode and opened up to the web so it could be seen.
      And then I had to adapt a PowerShell script to talk to the new API, encode the received data into the correct encoding,
      and then push that data to a local database.
      `,
      skills: ["Loopback 3", "Loopback 4", "T-SQL", "PowerShell", "IIS", "IISNode"],
      screenshots: ["/assets/project-screenshots/loopback1.png"],
      skillsToFilterBy: ["Loopback", "Node.JS", "JavaScript"]
    }, {
      index: 10,
      name: "Santa's Grotto",
      summary: "A ticketing store front for Santa's Grotto",
      desc: `This is an e-commerce store for a local garden centre that hosts a Santa's Grotto. 
      It ensured Santa was never over capacity!
      and limited tickets to ensure Covid-19 guidelines could be adhered to.
      
      This was important for the business as off the shelf e-commerce solutions were not flexible enough to adhere to Covid guidlines,
      and this bespoke solution meant they could stay open and still reach customers online`,
      skills: ["Shopify", "Ticketing", "Liquid"],
      screenshots: ["/assets/project-screenshots/santa1.png",
        "/assets/project-screenshots/santa2.png",
        "/assets/project-screenshots/santa3.png",
        "/assets/project-screenshots/santa4.png",
        "/assets/project-screenshots/santa5.png"],
      skillsToFilterBy: ["Shopify"]
    }, {
      index: 11,
      name: "HyperView",
      summary: `A stream monitoring app built with Electron and Angular`,
      desc: `This is a desktop app designed to help people monitor multiple stream recorders at once.
      It provides support for watching various stream formats, 
      as well as the ability to control recorders such as the Hyperdeck Studio and Aja KI Pro through their respective APIs. 
      It also analyses audio data to draw an audiometer on a canvas.
      
      This app saves time for audiovisual technicians as they no longer need to move across sites to check if devices are working properly. 
      Instead, they can do it from a single location. Using the app, they can also issue commands to the recording devices without needing to interact with them in person.`,
      skills: ["Electron", "Angular", "REST APIS", "Video JS"],
      screenshots: ["/assets/project-screenshots/hyperview-1.png"],
      skillsToFilterBy: ["Electron", "JavaScript"]
    }, {
      index: 12,
      name: "People Counting",
      summary: `A dashboard for people counting devices, displaying summaries and graphs of data, 
      such as total entered people and which areas are busiest`,
      desc: `This app was sourced for an exhibition event so they could see which areas were busiest. It displays thousands of entries and exits on a variety of graphs. 
      And allows users to create their own groups of counters, to organise them by area to better see the data they need. 
      Due to the amount of data and the requirement to constantly update and redraw the graphs, it was a priority that the code performed efficiently.`,
      skills: ["Angular", "Typescript", "HighChartsJS", "AWS S3", "REST APIs", "Keycloak JWT Authentication"],
      screenshots: ["/assets/project-screenshots/peoplecounter-1.jpg"],
      skillsToFilterBy: ["Angular", "JavaScript"]
    }, {
      index: 13,
      name: "Portal",
      summary: "A dashboard that provides staff with all the website links that they use daily.",
      desc: `This is the homepage for computers at the attend2IT office. It is highly customisable, allowing links to be attached to
      groups of users as well as allowing each user to save their own individual links.
      
      It was able to cut admin time during onboarding for new employees as they would simply need to be added to a group to get access to all the sites they needed.
      This is critical in a networking-focused business as there are countless addresses to keep track of for various devices on the network.`,
      skills: ["Angular", "Typescript", "AWS S3 & Cloudfront", "Bootstrap", "REST APIs", "Keycloak JWT Authentication"],
      screenshots: ["/assets/project-screenshots/clientportal-1.png"],
      skillsToFilterBy: ["Angular", "JavaScript"]
    }, {
      index: 14,
      name: "Silent Auction",
      summary: "A web app for silent auction hosts, displaying current bids in a variety of fun combinations",
      desc: `I designed a frontend display for a silent auction system using a scrolling carousel design using CSS animations.`,
      skills: ["Angular", "Typescript", "CSS", "REST APIs", "Designed In Adobe XD"],
      screenshots: ["/assets/project-screenshots/silentauction-1.png"],
      skillsToFilterBy: ["Angular", "JavaScript"]
    }, {
      index: 15,
      name: "Sprite Editor",
      summary: "A desktop app for creating and editing multi-layered sprites, with a variety of art tools",
      link: "",
      desc: `This is a .NET WPF app that lets the user open pictures and edit them.
      It makes use of many tools you might expect such as layering, varying brush sizes and colours as well as shape drawing.`,
      skills: ["C#", "WPF", "XAML"],
      screenshots: ["/assets/project-screenshots/spriteeditor-1.png"],
      skillsToFilterBy: ["WPF"]
    }, {
      index: 16,
      name: "Space Invaders",
      summary: "A faithful reproduction of the classic Space Invaders",
      link: "",
      githubLink: "https://github.com/BrooklynP/space-invaders/tree/master/Frameworkproject/ct4019/SpaceInvaders",
      desc: `As part of a university module, I produced an OpenGL based reproduction of Space Invaders. Including fully destructible shields, stored high scores and more.`,
      skills: ["C++", "OpenGL"],
      screenshots: ["/assets/project-screenshots/spaceinvaders-1.PNG",
        "/assets/project-screenshots/spaceinvaders-2.PNG",
        "/assets/project-screenshots/spaceinvaders-3.PNG",],
      skillsToFilterBy: ["C++"]
    }, {
      index: 17,
      name: "Rogue RPG",
      summary: "A 3D rogue-like game built in Unity",
      link: "",
      githubLink: "https://github.com/BrooklynP/Unity-Rogue/",
      desc: `This is a 3D rogue-like game.
      You start in a randomly generated level and must move from room to room to eliminate enemies and collect gold.
      The enemies have AI to find their way and decide whether to fight or run away based on their vision, health etc.
      Once a level is cleared, you move onto the one, until you die!`,
      skills: ["Unity", "C#"],
      screenshots: ["/assets/project-screenshots/rogue-1.png"],
      skillsToFilterBy: ["Unity"]
    }, {
      index: 18,
      name: "Population: Zombies",
      summary: "A top-down 2D shooter game, where you survive for as long as you can against hordes of zombies",
      link: "",
      desc: `This is an openGL based top down shooter,
      that uses matrices and vector maths to calculate AI pathfinding and bullet physics.
      It uses randomly placed power-ups and enemies as well as collision physics.
      The main menu uses custom-made buttons that work with the mouse for ease of navigation`,
      skills: ["C++", "OpenGL"],
      screenshots: ["/assets/project-screenshots/zombies-1.png"],
      skillsToFilterBy: ["C++"]
    }, {
      index: 19,
      name: "Super Sumo",
      summary: "A 2D party game built in Unity",
      link: "",
      githubLink: "https://github.com/BrooklynP/Super-Sumo/",
      desc: `This is a 2D party game where up to 4 people use Xbox controllers to move around an arena and push their opponents out of the ring,
      to be the last sumo wrestler standing.`,
      skills: ["Unity", "C#"],
      screenshots: ["/assets/project-screenshots/supersumo-1.png"],
      skillsToFilterBy: ["Unity"]
    },
  ];

  constructor() { }

  public getProjects(): Array<Project> {
    return this.projects.sort((projectA, projectB) => projectA.index - projectB.index);
  }

  public getProject(index: number): Project {
    return this.projects.find(x => x.index === index);
  }

  public getProjectsLength(): number {
    return this.projects.length;
  }
}
