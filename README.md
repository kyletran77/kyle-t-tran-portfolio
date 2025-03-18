# Kyle T. Tran Portfolio - Setup and Editing Guide

Welcome to your portfolio website! This guide will help you understand how the site is structured and how to make basic edits to keep your content up-to-date.

## Getting Started

Your portfolio is built with modern web technologies that make it fast, responsive, and easy to maintain. Here's how to get it up and running on your local machine:

### Prerequisites

Before you begin, make sure you have installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Open your terminal or command prompt
2. Navigate to the project folder
3. Install dependencies:
   ```
   npm install
   ```

### Running the Website Locally

To view the website on your local machine:

```
npm run serve -- --port 9001
```

This will start a development server and open the website at http://localhost:9001 in your browser. You'll see any changes you make to the files in real-time.

### Building for Production

When you're ready to publish your website:

```
npm run build
```

This creates optimized files in the `dist` folder that you can upload to your web hosting provider.

## Making Common Edits

### Updating Your Information

Most of the text content on your website is stored in JSON files. These are located in:

```
src/assets/locales/en.json
```

This file contains all the English text used throughout the site, organized by sections.

#### Example: Updating Your About Section

Find the "about" section in the en.json file:

```json
"about": {
    "title": "about",
    "description": [
        "Got my start in software sales at a medium sized company. I learned how to build from the ground up with little to no resources.",
        "I have used my skills to help grow SMBs and Mid-cap companies from good companies, into great companies. Keeping up with AI has helped me become more organized, resulting in quality work for my clients.",
        "Continuing this journey to help companies grow alongside me and flourish in excellence."
    ],
    "button": "View all"
}
```

Simply edit the text inside the quotation marks to update your content.

### Updating Your Profile Picture

1. Prepare a professional photo
2. Name it `headshot.JPG`
3. Replace the existing file in `src/assets/images/` with your new photo

### Updating Your Logo

1. Prepare your logo image (recommended: PNG format with transparent background)
2. Name it `kyle-logo.png`
3. Replace the existing file in `src/assets/images/` with your new logo

### Updating Projects

Projects are defined in both the locale files and in a project configuration file. To add or modify projects:

1. Open `src/app/consts/projects.js` to modify project details
2. Add project descriptions in `src/assets/locales/en.json` under the "projects" section
3. Add a project image to `src/assets/images/projects/` (name it after the project ID)

## Website Structure

Understanding the structure will help you make more advanced edits:

- `src/app/views/` - Contains the main pages of your site
- `src/app/components/` - Contains reusable components like headers, footers, etc.
- `src/app/blocks/` - Contains content blocks used on different pages
- `src/assets/styles/` - Contains all styling files (SASS)
- `src/assets/images/` - Contains all images used on the site
- `src/assets/locales/` - Contains text content in different languages

## Customizing the Styling

The website uses SASS for styling. The main style files are:

- `src/assets/styles/styles.sass` - Main styling file
- `src/assets/styles/components/` - Component-specific styles
- `src/assets/styles/blocks/` - Styles for content blocks
- `src/assets/styles/pages/` - Page-specific styles

### Changing Colors

Colors are defined in the variables file:

```
src/assets/styles/default/variables.scss
```

You can edit the color values here to change the entire color scheme of your site.

## Getting Help

If you need more advanced changes or have questions about how to edit specific parts of your portfolio, please reach out to your developer directly.

---

## Quick Reference

- Start local development: `npm run serve -- --port 9001`
- Build for production: `npm run build`
- Main content file: `src/assets/locales/en.json`
- Add/replace images: `src/assets/images/`
- Change colors: `src/assets/styles/default/variables.scss`

Happy editing!
