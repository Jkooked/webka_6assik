
# Assignment 6 jQuery Portfolio

## Student information

- **Name:** Ainaz Abitay
- **Group:** IT-2502

## Project overview

A responsive personal portfolio demonstrating jQuery selectors, effects, DOM manipulation, form interaction, and animation. Open `index.html` in a modern browser. An internet connection is needed for the jQuery CDN, fonts, and gallery images.

## Assignment tasks

The portfolio is organized around the assignment parts. Each task below names the page controls and the jQuery behavior they demonstrate.

### Part 1 — Getting started with jQuery

- **Task 0 — Setup:** jQuery 3.7.1 is loaded from the official CDN in `index.html`. All page interactions are initialized inside `$(document).ready()` in `script.js`. Open the browser developer console to see the required `jQuery is ready!` message.

**Screenshot — Task 0 (page or browser console):**
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)

- **Task 1 — Selectors and CSS:** The portfolio displays my name, a personal headline, and a short introduction. jQuery uses a tag selector, an ID selector, and a class selector to find page elements. The greeting is updated dynamically, selected elements are styled with `.css()`, and the Light and Dark buttons switch the page theme.

**Screenshot — Task 1 (portfolio and theme controls):**
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-7.png)
![alt text](image-5.png)
![alt text](image-6.png)
### Part 2 — jQuery effects

- **Task 2 — Visibility:** The About section contains a brief biography, the “Currently learning jQuery!” status, and three personal facts. Hide and Show control the status and fact cards; Toggle switches between the two visibility states. The controls use jQuery `.hide()`, `.show()`, and `.toggle()` effects.

**Screenshot — Task 2 (About section and buttons):**
![alt text](image-8.png)
![alt text](image-9.png)
![alt text](image-10.png)

- **Task 3 — Fade:** The gallery displays two images with descriptive alt text. Its Fade in, Fade out, and Fade toggle buttons use `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()` to change image visibility smoothly.

**Screenshot — Task 3 (gallery and fade controls):**
![alt text](image-11.png)
![alt text](image-12.png)

- **Task 4 — Slide:** Music, Movies, and Web development each have a clickable heading and a related information panel. The panels open and close with `.slideDown()`, `.slideUp()`, and `.slideToggle()`. Opening a topic closes the previously opened topic.

**Screenshot — Task 4 (headings and expanded panel):**
![alt text](image-13.png)
![alt text](image-14.png)
![alt text](image-15.png)

### Part 3 — DOM manipulation with jQuery

- **Task 5 — Add and remove elements:** The skills list starts with HTML and CSS, JavaScript, jQuery, and Figma. Enter a skill and select Add Skill to place it at the end with `.append()`, or Prepend Skill to place it at the beginning with `.prepend()`. Remove Skill deletes the final list item with `.remove()`. Whitespace-only input is trimmed and rejected with a visible message.

**Screenshot — Task 5 (skills list and controls):**
![alt text](image-16.png)
![alt text](image-17.png)

- **Task 6 — Modifying attributes:** The social link starts at GitHub. Select the text control beneath it to switch the destination and label to LinkedIn, or back again. The destination is updated through `.attr()`.

**Screenshot — Task 6 (social link):**
![alt text](image-18.png)
![alt text](image-19.png)

- **Task 7 — Form interaction:** The contact form has Name and Email fields. As the visitor types, the script reads both values with `.val()`, combines non-empty values, and displays the live preview with `.text()`.

**Screenshot — Task 7 (form and live preview):**
![alt text](image-20.png)
![alt text](image-21.png)

### Part 4 — Animations

- **Task 8 — Basic animation:** Three skill bars start at zero width and have distinct target levels (88%, 68%, and 56%). Select Animate my skills to expand the bars with `.animate()`. Select the button again to animate them back to zero width.


**Screenshot — Task 8 (animated skill bars):**
![alt text](image-22.png)
![alt text](image-23.png)
![alt text](image-24.png)
## Work summary


I built the portfolio page with HTML, styled it with CSS, and added the required interactions with jQuery. I first set up the jQuery CDN and document-ready function, then implemented selectors and theme controls. I added the visibility, fade, and slide effects, followed by the interactive skills list, social link, and live form preview. Finally, I created animated skill bars and prepared this report with a screenshot placeholder for every task.

## link of the webpage: https://jkooked.github.io/webka_6assik/
