import { media } from "@/consts";
import * as simpleIcons from 'simple-icons';

export default ({ name }) => {
    let iconHTML = null;
    const iconTitle = name.charAt(0).toUpperCase() + name.slice(1);
    let iconData = null; // Initialize iconData to null

    // For email, we will skip simple-icons and use local SVG directly
    if (name.toLowerCase() !== 'email') {
        // Define specific keys for simple-icons for other icons
        let iconKey;
        switch (name.toLowerCase()) {
            case 'linkedin':
                iconKey = 'siLinkedin';
                break;
            case 'twitter':
                // simple-icons uses 'siX' for Twitter/X
                iconKey = 'siX'; 
                break;
            case 'instagram':
                iconKey = 'siInstagram';
                break;
            case 'discord':
                iconKey = 'siDiscord';
                break;
            default:
                // For any other icons, construct a generic key
                iconKey = `si${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`;
        }
        iconData = simpleIcons[iconKey];
    }

    if (iconData && iconData.svg) {
        // Use simple-icons SVG
        const svgContent = iconData.svg.replace('<svg', '<svg style="fill: currentColor; width: 100%; height: 100%;"');
        iconHTML = `
            <div class="media__icon-wrapper" style="display: inline-block; width: 24px; height: 24px;">
                ${svgContent}
            </div>`;
    } else {
        // Fallback to local SVG file if not found in simple-icons, SVG data is missing, or if it's the 'email' icon
        if (name.toLowerCase() !== 'email') {
             console.warn(`Icon for '${name}' not found in simple-icons or SVG missing. Falling back to local path /images/icons/${name}.svg.`);
        }
        iconHTML = `<img src="/images/icons/${name}.svg" alt="${iconTitle}" class="media__icon"/>`;
    }

    return /*html*/ `
        <a href="${media[name]}" class="media" aria-label="${iconTitle}" title="${iconTitle}">
            ${iconHTML}
        </a>`;
};
