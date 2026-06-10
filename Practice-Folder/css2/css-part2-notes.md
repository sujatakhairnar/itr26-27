# CSS Part-2 Notes
# 1. CSS Font Weight
## What is Font Weight?
Font weight is used to control how thick or thin text appears.
It changes the boldness of text.

### Common Values
**Normal**
* Default text thickness.

**Bold**
* Makes text thicker and darker.
**Numeric Values**
* 100 → Very Thin
* 400 → Normal
* 700 → Bold
* 900 → Extra Bold

### Why Use Font Weight?
* To highlight important text.
* To create visual hierarchy.
* To improve readability.

### Example Uses
* Website headings
* Buttons
* Important notices

---
# 2. CSS Pseudo Classes
## What are Pseudo Classes?
Pseudo classes are special keywords used to define the **special state** of an element.
They allow styling based on user actions or element conditions.

### Common Pseudo Classes
### :hover
Applied when mouse pointer is placed over an element.
Commonly used for:
* Buttons
* Links
* Menus
Example:
When user moves mouse over a button, its color changes.

---
### :active
Applied when an element is being clicked.
Used to give click feedback.

---
### :visited
Applied to links that the user has already visited.
Helps users identify previously opened pages.

---
### :link
Applied to links that have not been visited.

---
### :focus
Applied when an input field is selected.
Commonly used in forms.
Example:
When user clicks inside a textbox, its border color changes.

---
## Advantages of Pseudo Classes
* Improves user experience.
* Makes websites interactive.
* Provides visual feedback.

---
# 3. CSS First Child and First-of-Type Pseudo Classes
These pseudo classes help select specific elements based on their position.

---
## :first-child
Selects the first child element inside a parent.
Example:
If a parent contains five paragraphs, only the first paragraph gets selected.

### Use Cases
* First menu item styling
* First row formatting
* First paragraph highlighting

---
## :first-of-type
Selects the first element of a particular type.
Example:
If a container contains:
* Heading
* Paragraph
* Paragraph
The first paragraph will be selected.

### Difference from first-child
**first-child**
* Must be the very first child.

**first-of-type**
* Must be the first occurrence of that element type.

---
# 4. CSS nth-Child
## What is nth-child?
Used to select elements based on their position number.

### Examples
**1st child**
Selects first element.

**2nd child**
Selects second element.

**3rd child**
Selects third element.

---
## Even Elements
Can select all even numbered elements.
Example:
2nd, 4th, 6th, 8th...

---
## Odd Elements
Can select all odd numbered elements.

Example:
1st, 3rd, 5th, 7th...

---
## Why Use nth-child?
Useful for:
* Alternate row coloring in tables.
* Styling lists.
* Creating patterns in layouts.

---
# 5. More Pseudo Classes
This section introduces additional useful pseudo classes.

---
## :last-child
Selects the last child element.

### Use
Useful when special styling is needed for the final item.

Example:
Last menu item.

---
## :last-of-type
Selects the last element of a specific type.

---
## :only-child
Selects an element if it is the only child inside a parent.

---
## :empty
Selects elements that contain no content.
Useful for:

* Validation
* Dynamic content areas

---
## :not()
Selects elements that do NOT match a specific condition.

### Benefit
Helps exclude particular elements from styling.

---
# 6. CSS Pseudo Elements
## What are Pseudo Elements?
Pseudo elements allow styling specific parts of an element rather than the entire element.
They are written using double colons (::).

---
## ::before
Adds content before an element.

### Common Uses
* Icons
* Symbols
* Decorative content

---
## ::after
Adds content after an element.

### Common Uses
* Decorative effects
* Extra text
* Design elements

---
## ::first-letter
Selects only the first letter of text.

### Common Use
Magazine-style articles where the first letter is larger.

---
## ::first-line
Selects only the first line of text.

### Common Use
Highlighting introductory lines.

---
## ::selection
Styles the text selected by the user.

Example:
When users drag the mouse and select text, a custom highlight color appears.

---
# Difference Between Pseudo Class and Pseudo Element
| Pseudo Class                  | Pseudo Element               |
| ----------------------------- | ---------------------------- |
| Selects a state of an element | Selects a part of an element |
| :hover                        | ::before                     |
| :focus                        | ::after                      |
| :active                       | ::first-letter               |
| User interaction based        | Content based                |

