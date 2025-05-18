import mediaProxy from "../proxies/media";

/**
 * Combined constants file for easier maintenance
 */

// Skills categorization with explicit display values
const skills = {
  main: ["AI Implementation", "B2B Framework", "CRM Management"],
  tools: ["Apollo.io", "HubSpot", "LinkedIn Sales Navigator", "Outreach 360", "Salesforce", "Zapier"],
  other: ["Big Fan Of Talking F2F"]
};

// Website URL patterns
const websites = {
  discord: "discord.com/users/",
  github: "github.com/",
  figma: "figma.com/@",
  replit: "replit.com/@",
  stackOverflow: "stackoverflow.com/users/",
  codewars: "codewars.com/users/",
  devTo: "dev.to/",
  cssBattle: "cssbattle.dev/player/",
  codepen: "codepen.io/",
  dribble: "dribbble.com/",
  email: "mailto:",
  twitter: "x.com/",
  instagram: "instagram.com/"
};

// Social media and contact information
const media = {
  discord: {
    id: "slipperysticker",
    tag: "slipperysticker#7608",
  },
  linkedin: "www.linkedin.com/in/kyletran01",
  email: "kyle7tran@gmail.com",
  twitter: "kyle_trxn",
  instagram: "kyle__tran",
  website: "trandev.net"
};

// Projects portfolio with explicit tech names
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
  {
    id: "trandev",
    links: {
      Stalk: "trandev.net"
    },
    techs: ["Business Development | Project Management"],
    hasImage: true
  },
  {
    id: "eventsbykylo",
    links: {
      Stalk: "eventsbykylo.com"
    },
    techs: ["Business Development | Project Management"],
    hasImage: true
  }
];

/**
 * @type {import("../../types/Routes").Routes}
 */
const routes = {
  "/": {
    name: "home",
    element: "Home",
  },
  "/projects": {
    name: "projects",
    element: "Projects",
  },
  "/about-me": {
    name: "about",
    element: "About",
  },
  "/404": {
    name: "404",
    element: "PageNotFound",
  },
  // "/contacts": {
  //     name: "contacts",
  //     element: "Contacts",
  // },
};

// Apply proxy to media object
const proxiedMedia = new Proxy(media, mediaProxy);

// Export everything in a structured way
export {
  skills,
  websites,
  proxiedMedia as media,
  projects,
  routes
};

// Also provide default exports for backward compatibility
export default {
  skills,
  websites,
  media: proxiedMedia,
  projects,
  routes
}; 