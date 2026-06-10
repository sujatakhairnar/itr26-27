# CSS Part 1 - Simplified Notes
# 1. CSS Styling Ways
CSS is used to make HTML pages attractive and visually appealing.

### Three Ways to Apply CSS
### Inline CSS
CSS is written directly inside an HTML tag.

### Internal CSS
CSS is written inside the `<style>` tag of the HTML page.

### External CSS
CSS is written in a separate `.css` file and linked to HTML.

### Most Preferred Method
External CSS because it is reusable, organized, and easy to maintain.

---
# 2. CSS Fonts
Fonts control the appearance of text on a webpage.

### Important Font Properties
**font-family**
* Changes the font type.

**font-size**
* Changes the size of text.

**font-weight**
* Makes text normal or bold.

**font-style**
* Makes text italic.

**line-height**
* Controls spacing between lines.

**text-transform**
* Converts text to uppercase, lowercase, or capitalized form.

### Why Fonts Are Important?
Fonts improve readability and make the website look professional.

---
# 3. CSS Colors
Colors make websites attractive and improve user experience.

### Ways to Specify Colors
* Color Names (Red, Blue, Green)
* HEX Codes (#ffffff)
* RGB Values
* RGBA Values (with transparency)

### Common Color Properties
**color**
* Changes text color.

**background-color**
* Changes background color.

**opacity**
* Controls transparency.

---
# 4. CSS Selectors
Selectors are used to choose which HTML elements should receive styling.

### Types of Selectors
**Element Selector**
* Selects all elements of a specific type.

**Class Selector**
* Selects elements having a particular class.

**ID Selector**
* Selects a unique element.

**Universal Selector**
* Selects all elements.

**Group Selector**
* Selects multiple elements together.

### Importance
Selectors help apply styles efficiently and avoid unnecessary code.

---
# 5. Utility Class, Class and ID
### Utility Class
A reusable class created for a single purposes
Example:
* Centering text
* Changing color
* Adding margin

### Class
* Can be used on multiple elements.
* Reusable.

### ID
* Used for one unique element.
* Should not be repeated.

### Difference
Class is reusable, while ID is unique.

---
# 6. More CSS Selectors
Advanced selectors provide better control over element selection.

### Descendant Selector
Selects elements inside another element.

### Child Selector
Selects only direct child elements.

### Adjacent Sibling Selector
Selects the immediate next element.

### General Sibling Selector
Selects all following sibling elements.

### Benefit
Helps target elements more precisely.

---
# 7. CSS Attribute Selector
Selects elements based on their attributes.
Example:
* Input fields
* Links
* Buttons

### Uses
* Styling specific form elements.
* Selecting elements with particular attribute values.

### Advantage
Provides more precise control than normal selectors.

---
# 8. Chrome Developer Tool
Chrome Developer Tools help developers inspect and debug websites.

### Main Uses
**Inspect Elements**
* View HTML and CSS.

**Edit CSS**
* Test changes instantly.

**Responsive Testing**
* Check mobile and tablet views.

**Debugging**
* Find and fix errors.

**Performance Analysis**
* Check website speed.

### Shortcut
F12

---
# 9. CSS Specificity
Specificity decides which CSS rule will be applied when multiple rules target the same element.

### Priority Order
Inline Style → ID → Class → Element

### Importance
Understanding specificity helps avoid styling conflicts.

---
# 10. CSS Border
A border is a line around an element.

### Border Properties
**Width**
* Thickness of border.

**Style**
* Appearance of border.

**Color**
* Border color.

### Common Border Styles
* Solid
* Dotted
* Dashed
* Double

### Border Radius
Used to create rounded corners.

---
# 11. CSS Box Model
Every HTML element is treated as a box.

### Four Parts of Box Model
**Content**
* Actual text or image.

**Padding**
* Space between content and border.

**Border**
* Surrounds content and padding.

**Margin**
* Space outside the border.

### Importance
Box Model is the foundation of webpage layout design.

---
# 12. CSS Exercise 2
This exercise mainly focuses on:
* Width
* Height
* Margin
* Padding
* Border

Purpose:
To understand spacing and layout creation.

---
# 13. Margin Collapsing
When two vertical margins meet, they combine into one margin.

### Important Point
Only the larger margin is used.

### Note
Margin collapsing occurs only vertically.

---
# 14. Inline vs Block Elements
### Block Elements
* Start on a new line.
* Occupy full available width.

Examples:

* div
* p
* h1

### Inline Elements
* Stay on the same line.
* Occupy only required space.

Examples:

* span
* a
* strong

### Difference
Block elements take full width, while inline elements take only content width.

---
# 15. Image Element
Used to display images on webpages.

### Important Attributes
**src**
* Image location.

**alt**
* Alternative text if image fails to load.

**width**
* Image width.

**height**
* Image height.

### Importance
Images improve visual appeal and user engagement.

---
# 16. Inline-Block Display
Inline-block combines features of both inline and block elements.

### Advantages
* Elements remain on the same line.
* Width and height can be applied.

### Common Use
Navigation menus and product cards.

---
# 17. CSS Exercise :
This exercise combines:
* Images
* Borders
* Padding
* Margin
* Display properties

Purpose:
To build simple webpage layouts.

---
# 18. CSS Box Sizing Border Box
Controls how element size is calculated.

### Default
Content size is calculated separately from padding and border.

### Border Box
Padding and border are included inside the specified width.

### Advantage
Makes layout calculations easier.

---
# 19. CSS Browser Styles Reset
Different browsers apply different default styles.

### Reset CSS
Removes browser default margin and padding.

### Benefits
* Consistent appearance.
* Better layout control.
* Same design across browsers.

---
# 20. CSS Inheritance
Some CSS properties automatically pass from parent elements to child elements.

### Common Inherited Properties
* Color
* Font Family
* Font Size
* Text Align

### Non-Inherited Properties
* Margin
* Padding
* Border

### Benefit
Reduces repetitive styling.

---
# 21. CSS Text Align
Controls horizontal alignment of text.

### Types
**Left**
* Default alignment.

**Right**
* Aligns text to the right.

**Center**
* Aligns text to the center.

**Justify**
* Aligns text evenly on both sides.

### Common Uses
* Centering headings.
* Aligning paragraphs.
* Creating professional layouts.