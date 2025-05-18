import { media } from "@/consts";
import * as simpleIcons from 'simple-icons';

export default ({ name }) => {
    // Helper to format the name for simple-icons (e.g., 'linkedin' -> 'siLinkedin')
    const formattedName = `si${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`;
    // Special case for email, as simple-icons might use 'Gmail' or a generic 'Mail' icon
    // We'll try 'siGmail' first, then a generic mail if needed, or handle as per library's naming
    const iconKey = name === 'email' ? 'siGmail' : formattedName;
    
    const iconData = simpleIcons[iconKey];

    if (!iconData) {
        console.warn(`Icon '${iconKey}' not found in simple-icons. Using fallback for '${name}'.`);
        // Fallback for missing icons
        return `<a href="${media[name]}" class="media" aria-label="${name}" title="${name}">[${name}]</a>`; 
    }

    // The SVG string is in iconData.svg
    // We'll wrap it in a div that can be styled, or directly style the SVG if needed.
    return /*html*/ `
        <a href="${media[name]}" class="media" aria-label="${name}" title="${name}">
            <div class="media__icon-wrapper" style="display: inline-block; width: 24px; height: 24px;">
                ${iconData.svg.replace('<svg', '<svg style="fill: currentColor; width: 100%; height: 100%;"')}
            </div>
        </a>`;
};
