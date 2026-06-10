# CSS Part-3 Notes 
This part mainly covers **CSS Units, REM, EM, Viewport Units, Floats, and Positions**. These concepts are very important for creating responsive and professional website 
# 1. CSS Units
## What are CSS Units?
CSS units are used to define the size of elements, text, spacing, width, height, and margins.
Whenever we specify a size in CSS, we use units.
Example:
* Width of a box
* Font size
* Margin
* Padding
Without units, the browser cannot understand how large or small something should be.

---
## Types of CSS Units
CSS units are mainly divided into two categories:
### 1. Absolute Units
These units have fixed values.
Examples:
* px (pixels)
* cm (centimeters)
* mm (millimeters)
* in (inches)

### 2. Relative Units
These units depend on another value.
Examples:
* %
* em
* rem
* vw
* vh

---
## Why Use Relative Units?
Relative units help make websites responsive and adaptable to different screen sizes.

---
# 2. CSS Units (Relative Units)
## Percentage (%)
Percentage is relative to the parent element.
Example:
If a parent element has a width of 1000px and a child has width 50%, then the child width becomes 500px.

### Advantages
* Responsive design
* Adapts to screen size

### Common Uses
* Width
* Height
* Layouts

---
## Why Percentage is Useful?
When screen size changes, percentage-based elements automatically adjust their size.
This helps create flexible layouts.

---
# 3. CSS Units (EM)
## What is EM?
EM is a relative unit based on the font size of the parent element.

### How It Works
If parent font size is:
```text
16px
```
Then:
```text
1em = 16px
2em = 32px
0.5em = 8px
---
## Advantages of EM
* Flexible sizing
* Scales according to parent element

---
## Disadvantages
When multiple nested elements use EM, calculations can become confusing.
This is called **EM compounding**.
---
## Common Uses
* Padding
* Margin
* Font sizing

---
# 4. EM vs REM
This is one of the most important CSS interview topics.

---
## What is REM?
REM stands for:
```text
Root EM
```
It is based on the root element (HTML tag).
By default:
```text
1rem = 16px
```
---
## Difference Between EM and REM
### EM
Depends on parent element.

### REM
Depends on root (HTML) element.

---
## Example
Suppose root font size:
```text
16px
```
Then:
```text
1rem = 16px
2rem = 32px
```
No matter where it is used.

---
## Why Developers Prefer REM?
Because it provides consistent sizing throughout the website.
No inheritance calculation problems.

---
## Quick Comparison
| EM                | REM              |
| ----------------- | ---------------- |
| Depends on parent | Depends on root  |
| Can compound      | No compounding   |
| Harder to manage  | Easier to manage |

---
# 5. Viewport Units
## What is Viewport?
Viewport is the visible area of a webpage on the screen.
The visible browser window is called the viewport.

---
## Viewport Units
### vw (Viewport Width)
Represents a percentage of screen width.
```text
100vw = Full screen width
50vw = Half screen width
```
---
### vh (Viewport Height)
Represents a percentage of screen height.

```text
100vh = Full screen height
50vh = Half screen height
```
---
## Why Use Viewport Units?
They automatically adjust according to screen size.
Useful for:
* Full-screen sections
* Hero sections
* Landing pages

---
## Advantages
* Responsive design
* Dynamic sizing
* Better user experience

---
# 6. CSS Floats
## What is Float?
Float is used to move elements to the left or right side of a container.
Before Flexbox and Grid, float was commonly used for layouts.

---
## Types of Float
### Float Left
Moves element to the left.

### Float Right
Moves element to the right.

### Float None
Default value.
Element remains in normal position.

---
## Common Uses
### Image Wrapping
Text flows around an image.

### Old Website Layouts
Creating sidebars and columns.

---
## Problems with Float
Floated elements are removed from the normal document flow.
This can cause layout issues.

---
## Clear Property
Used to stop floating effects.

### Why Needed?
To prevent content from overlapping with floated elements.

---
## Modern Alternative
Today developers usually use:
* Flexbox
* CSS Grid
instead of floats.

---
# 7. CSS Positions
## What is Positioning?
Positioning controls where an element appears on a webpage.
It allows precise placement of elements.

---
# Types of Positioning
## 1. Static Position
Default position of every HTML element.

### Characteristics
* Normal document flow.
* No special positioning.
Most elements are static by default.

---
## 2. Relative Position
Moves an element relative to its original position.

### Characteristics
* Original space remains reserved.
* Element can be shifted.

### Use Cases
* Small adjustments
* Base for absolute positioning

---
## 3. Absolute Position
Places an element relative to its nearest positioned parent.

### Characteristics
* Removed from normal flow.
* Can be placed anywhere.

### Common Uses
* Badges
* Icons
* Tooltips
* Popups

---
## 4. Fixed Position
Element stays fixed on the screen.
Even when the page is scrolled.

### Common Uses
* Navigation bars
* Chat buttons
* Back-to-top buttons

---
## 5. Sticky Position
Behaves like relative until a certain scroll point.
Then behaves like fixed.

### Common Uses
* Sticky headers
* Sticky navigation menus

---
# Difference Between Position Types
| Position | Moves With Scroll? | Removed From Flow? |
| -------- | ------------------ | ------------------ |
| Static   | Yes                | No                 |
| Relative | Yes                | No                 |
| Absolute | Yes                | Yes                |
| Fixed    | No                 | Yes                |
| Sticky   | Partially          | No                 |

---