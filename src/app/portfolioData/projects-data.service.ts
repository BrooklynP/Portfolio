import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  private readonly projects: Array<Project> = [
    {
      index: 1,
      name: "Space Invaders",
      summary: "A faithful reproduction of the classic space invaders",
      link: "",
      githubLink: "https://github.com/BrooklynP/space-invaders/tree/master/Frameworkproject/ct4019/SpaceInvaders",
      desc: `As part of a University module, I produced a OpenGL based reproduction of space invaders. Including fully destructible shields, stored high scores and more`,
      skills: ["C++", "OpenGL"],
      screenshots: ["/assets/project-screenshots/spaceinvaders-1.PNG",
      "/assets/project-screenshots/spaceinvaders-2.PNG",
      "/assets/project-screenshots/spaceinvaders-3.PNG", ],
      skillToFilterBy: "C++"
    },
    {
      index: 2,
      name: "This Portfolio",
      summary: "A portfolio of some of the projects I'm most proud of",
      link: "https://brooklynpedley.co.uk",
      githubLink: "https://github.com/BrooklynP/portfolio/",
      desc: `This is the website I use to display all of my best and latest work.
      I am constantly working on it as I learn new things to ensure it is the best website it can be.`,
      skills: ["Angular", "AWS S3"],
      screenshots: ["/assets/project-screenshots/portfolio-3.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 3,
      name: "Super Sumo",
      summary: "A 2D party game built in Unity",
      link: "",
      githubLink: "https://github.com/BrooklynP/Super-Sumo/",
      desc: `This is a 2D party game where 4 people use Xbox controllers to move around an arena and push their opponents out of the ring,
      to be the last sumo wrestler standing.`,
      skills: ["Unity", "C#"],
      screenshots: ["/assets/project-screenshots/supersumo-1.png"],
      skillToFilterBy: "Unity"
    },
    {
      index: 4,
      name: "Rogue RPG",
      summary: "A 3D rogue-like RPG game built in Unity",
      link: "",
      githubLink: "https://github.com/BrooklynP/Unity-Rogue/",
      desc: `This is a 3D rogue-like game.
      You start in a randomly generated map and must move from room to room to eliminate enemies and collect gold.
      The enemies have AI to path-find and to decide whether to fight or run away based on their vision, health etc.
      Once a level is cleared you move onto a new one, until you die!`,
      skills: ["Unity", "C#"],
      screenshots: ["/assets/project-screenshots/rogue-1.png"],
      skillToFilterBy: "Unity"
    },
    {
      index: 5,
      name: "Sprite Editor",
      summary: "A Desktop app for creating and editing multi layered sprites, with a variety of art tools",
      link: "",
      desc: `This is a .NET WPF app that lets the user open pictures and edit them,
      making use of many tools you might expect such as layering, various brush sizes and colours as well as shape drawing.`,
      skills: ["C#", "WPF", "XAML"],
      screenshots: ["/assets/project-screenshots/spriteeditor-1.png"],
      skillToFilterBy: "WPF"
    },
    {
      index: 6,
      name: "Population: Zombies",
      summary: "A top-down 2D shooter game, where you survive for as long as you can against hordes of zombies",
      link: "",
      desc: `This is an openGL based top down shooter,
      that makes use of matrices and vector maths to work out AI pathfinding and bullet physics.
      It uses randomly placed power-ups and enemies as well as collision physics.
      The main menu uses custom made buttons that work with the mouse for ease of navigation`,
      skills: ["C++", "OpenGL"],
      screenshots: ["/assets/project-screenshots/zombies-1.png"],
      skillToFilterBy: "C++"
    },
    {
      index: 7,
      name: "HyperView",
      summary: `A stream monitoring app built with Electron and Angular`,
      desc: `This is a desktop app designed to help people monitor multiple streams recorders at once.
      It provides support for watching various stream formats, 
      as well as the ability to control recorders such as the Hyperdeck Studio and Aja KI Pro through their respective APIs. 
      It also analyses audio data to draw an audiometer on a canvas.`,
      skills: ["Electron", "Angular", "REST APIS", "Video JS"],
      screenshots: ["/assets/project-screenshots/hyperview-1.png"],
      skillToFilterBy: "Electron"
    },
    {
      index: 8,
      name: "People Counting",
      summary: `A dashboard for people counting devices, displaying summaries and graphs of data,
      such as total people in and busiest areas`,
      desc: `This app was sourced for an exhibition event so that they could see which areas of the event were busiest.
      It displays thousands of entries and exits on an array of different graphs. And allows users to create their own groups,
      so that they can organise them by area to better see the data they need.
      Due to the amount of data and requirement to constantly update and redraw the graphs,
      it was a priority to ensure performance efficient code was used.`,
      skills: ["Angular", "Typescript", "HighChartsJS", "AWS S3", "REST APIs", "Keycloak JWT Authentication"],
      screenshots: ["/assets/project-screenshots/peoplecounter-1.jpg"],
      skillToFilterBy: "Angular"
    },
    {
      index: 9,
      name: "Silent Auction",
      summary: "A web app for people hosting silent auctions, displaying current bids in a variety of fun combinations",
      desc: `I designed a frontend display for a silent auction system using a scrolling carousel design.
      This was developed using CSS animations`,
      skills: ["Angular", "Typescript", "CSS", "REST APIs", "Designed In Adobe XD"],
      screenshots: ["/assets/project-screenshots/silentauction-1.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 10,
      name: "Portal",
      summary: "A dashboard providing staff with all the links they use on a day-to-day basis.",
      desc: `This is the homepage for the office computer browsers at attend2IT. It is highly customisable, allowing links to be attached to
      groups of users as well as allowing each individual user to add their own links to their account, With admins having oversight
      of the entire system.`,
      skills: ["Angular", "Typescript", "AWS S3 & Cloudfront", "Bootstrap", "REST APIs", "Keycloak JWT Authentication"],
      screenshots: ["/assets/project-screenshots/clientportal-1.png"],
      skillToFilterBy: "Angular"
    },
    {
      index: 11,
      name: "Santa's Grotto",
      summary: "A Ticketing store front for Santa's Grotto",
      desc: `This is an e-commerce store for a local garden centre that was hosting a Santa's Grotto. 
      It ensured that Santa was never over capacity!
      and limited tickets to ensure Covid-19 guidelines could be adhered to.`,
      skills: ["Shopify", "Ticketing", "Liquid"],
      screenshots: ["/assets/project-screenshots/santa1.png",
      "/assets/project-screenshots/santa2.png",
      "/assets/project-screenshots/santa3.png",
      "/assets/project-screenshots/santa4.png",
      "/assets/project-screenshots/santa5.png"],
      skillToFilterBy: "Shopify"
    },
    {
      index: 12,
      name: "Loopback API",
      summary: "A Loopback 4 server paired with a powershell script to move data from a MySQL database to an SQL database",
      desc: `This project started with upgrading a complex Loopback 3 API to a Loopback 4 API, including moving over authentication and custom remote methods.
      Then it had to be hosted on IIS using IISNode and opened up to the web so that it could be seen.
      And then I had to adapt a PowerShell script so that it could talk to the new API, Encode the data received into the correct encoding,
      and then push that data to a local database.`,
      skills: ["Loopback 3", "Loopback 4", "T-SQL", "PowerShell", "IIS", "IISNode"],
      screenshots: ["/assets/project-screenshots/loopback1.png"],
      skillToFilterBy: "Backend"
    },
    {
      index: 13,
      name: "Plaid",
      summary: "A Node App using Plaid Open Banking API to pull bank transactions, and push them to a local database",
      desc: `This is a Node application that is run regularly every hour. 
      Its job is to pull all transactions for the day, work out if any of them are new, and if they are push them to a local database.
      In the local database they are then matched to invoices.
      I also built a Loopback 4 API to receive the data and update the SQL database.`,
      skills: ["Open Banking", "APIs", "Plaid API", "SQL", "Loopback 4", "NodeJS"],
      screenshots: ["/assets/project-screenshots/plaid-1.png"],
      skillToFilterBy: "Third Party APIs"
    },
    {
      index: 14,
      name: "Training Video App",
      summary: "A webapp for viewing training videos",
      desc: `Providing ongoing software support for a training video app and adding new features.
      Changes include updates to the React frontend, as well as the T-SQL database and loopback API that support the backend.
      I have Added Microsoft SSO functionality to the API's authentication using PassportJS as well as a new smart recommendation system using machine learning.`,
      skills: ["React", "Loopback", "SQL", "PassportJS", "Azure Active Directory", "ASP.VB"],
      screenshots: ["/assets/project-screenshots/training1.png", "/assets/project-screenshots/training2.png"],
      skillToFilterBy: "Full Stack"
    },
    {
      index: 15,
      name: "Alien Worlds Timer",
      summary: "A utility extension for the dApp game Alien Worlds",
      githubLink: 'https://github.com/BrooklynP/aw-timer',
      link: 'https://chrome.google.com/webstore/detail/alien-worlds-timer/cfhokaomhckmlophlpmjgkndlbajconn',
      desc: `This is a chrome extension that lets players know when their mining is ready to collect.
      It calls to an API that returns data about the WAX blockchain,
      Which it uses to work out when the player last mined, and when they can next.
      It also web scrapes data from a stats page to quickly display important info for the user.
      It is used by 2000+ users with an average of 4.3* rating on the Chrome Web Store.`,
      skills: ["Chrome", "Javascript", "APIs"],
      screenshots: ["/assets/project-screenshots/aw-timer8.png"],
      skillToFilterBy: "Chrome Extensions"
    },
    {
      index: 16,
      name: "FTP Transfer Script",
      summary: "A PowerShell script for converting SQL data to .xslx and sending it to a FTP server",
      desc: `This is a PowerShell script for pulling report data from a local SQL database, and converting it to Excel format.
            It then connects to a FTP server over the internet and sends the file using the FTPS protocol.`,
      skills: ["PowerShell", "Running an FTP Server", "SQL"],
      screenshots: ["/assets/project-screenshots/FTP1.png"],
      skillToFilterBy: "Backend"
    },
    {
      index: 17,
      name: "iCal Generator",
      summary: "An API endpoint for converting SQL data into a iCal file to be subscribed to",
      desc: `This is an API endpoint that takes data from a local SQL database and creates an iCal file. 
      It can then be downloaded by visiting the endpoint in browser. 
      Or it can be subscribed to over the web as an iCal feed. 
      It conforms to Micrsooft spec for iCal`,
      skills: ["ASP.VB", "iCal Format", "SQL"],
      screenshots: ["/assets/project-screenshots/ical1.png"],
      skillToFilterBy: "Backend"
    }
  ];

  constructor() { }

  public getProjects(): Array<Project> {
    return this.projects.sort((projectA, projectB) =>  projectA.index - projectB.index);
  }

  public getProject(index: number): Project {
    return this.projects.find(x => x.index === index);
  }

  public getProjectsLength(): number {
    return this.projects.length;
  }
}
