# Design System Specification: High-End Caregiving Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Sanctuary"**

This design system moves away from the clinical, cold aesthetic often found in caregiving services. Instead, it embraces a high-end editorial approach that feels like an architectural sanctuary—warm, grounded, and impeccably organized. We reject the "standard grid" in favor of intentional asymmetry and rhythmic spacing. 

By utilizing deep, sophisticated purples and organic sage greens against a bone-white background, we establish an atmosphere of "Authoritative Empathy." The layout echoes the structure of the reference navbar—wide, breathable, and floating—but elevates it through layered depths and the complete removal of harsh structural lines.

---

## 2. Colors: Tonal Depth & Soul
Our palette is curated to feel premium and calming. We avoid "pure" colors, opting for complex tones that provide a "signature" feel.

### Primary & Secondary (The Foundation)
*   **Primary (`#34285a`)**: Use for high-authority moments. 
*   **Primary Container (`#4B3F72`)**: The deep heart of the brand. Use for large headers or prominent footer sections.
*   **Secondary (`#6050af`)**: Used for supportive elements and brand accents.
*   **Secondary Container (`#a898fd`)**: Soft lavender for low-priority backgrounds.

### Action & Accents (The Human Touch)
*   **Tertiary / Action (`#153721`)**: A deep, forest sage. This provides the "trust" factor.
*   **Tertiary Container (`#2c4e37`)**: Used for main Call-to-Action (CTA) backgrounds.
*   **On-Tertiary-Container (`#99bea0`)**: A light sage for text sitting on dark action backgrounds.

### Neutrals (The Canvas)
*   **Surface (`#fbf9f4`)**: Our primary background. It is a warm, bone-white that feels more organic than pure white.
*   **On-Surface (`#1b1c19`)**: Our primary text color, a soft charcoal-black to prevent eye strain.

### The "No-Line" Rule
**Designers are prohibited from using 1px solid borders to section content.** Sections must be defined exclusively by shifts in the Surface Hierarchy. For example, a `surface-container-low` section should sit directly against a `surface` background. The shift in tone creates the boundary, not a line.

### Signature Textures & Glassmorphism
To avoid a flat, "templated" look, use **Glassmorphism** for floating UI elements like the navigation bar or sticky CTA buttons. 
*   **Effect:** Apply `surface-container-lowest` with 80% opacity and a 20px `backdrop-blur`. 
*   **Gradients:** For main hero sections, use a subtle linear gradient from `primary` to `primary-container` (top-left to bottom-right) to add a "velvet" texture to the digital surface.

---

## 3. Typography: Editorial Authority
We use **Manrope** across the entire system. Its geometric yet warm letterforms bridge the gap between "modern" and "human."

*   **Display (lg/md/sm):** Use for hero statements. These should be set with tight letter-spacing (-0.02em) to create an editorial, high-fashion impact.
*   **Headline (lg/md/sm):** Bold and authoritative. These guide the user through the narrative of the page.
*   **Body (lg/md):** Our "Workhorse." Set with generous line-height (1.6) to ensure maximum readability for a diverse age demographic.
*   **Labels (md/sm):** Always uppercase with +0.05em letter spacing. Use these for small descriptors above headlines to create a structured, "catalog" feel.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a matter of tone, not just shadows.

*   **The Layering Principle:** Stack surfaces to create focus. 
    *   Level 0: `surface` (The floor)
    *   Level 1: `surface-container-low` (Content groupings)
    *   Level 2: `surface-container-lowest` (Interactive cards/modals)
*   **Ambient Shadows:** For elements that truly "float" (like the reference navbar), use a "Whisper Shadow": `Y: 10px, Blur: 40px, Color: on-surface @ 4% opacity`. This mimics natural light falling on fine paper.
*   **The Ghost Border:** If a form input requires a boundary, use `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components: Refined Interaction

### Buttons (The Anchor)
*   **Primary Action**: Background `tertiary-container` with `on-tertiary-fixed` text. Radius: `full`. No shadow.
*   **Secondary (Outline)**: `Ghost Border` (15% opacity) with `primary` text.
*   **Interactive State**: On hover, the button should shift color slightly toward its `fixed-dim` variant, accompanied by a subtle `sm` (0.5rem) scale increase.

### Cards & Lists
*   **Cards**: Never use borders. Use `surface-container-highest` for the background. Corners must use the `lg` (2rem) roundedness to feel soft and approachable.
*   **List Items**: Forbid the use of divider lines. Separate items using `md` (1.5rem) vertical spacing. Use a `surface-container-low` background on hover to indicate interactivity.

### Navigation Bar
Reflect the reference image: A floating capsule design.
*   **Container**: `surface-container-lowest` at 85% opacity + `backdrop-blur`.
*   **Radius**: `full`.
*   **Shadow**: Whisper Shadow (4% opacity).

### Inputs & Fields
*   **Background**: `surface-container-low`.
*   **Radius**: `sm` (0.5rem).
*   **Focus State**: Shift background to `surface-container-lowest` and add a 2px `primary` "Ghost Border."

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. Place a headline on the left and a body paragraph shifted to the right to create a "custom build" feel.
*   **Do** use the Spacing Scale aggressively. Whitespace is a luxury—use it to signify the premium nature of the service.
*   **Do** use the `lg` (2rem) and `xl` (3rem) corner radii for large containers to maintain the "Soft Minimalism" vibe.

### Don't:
*   **Don't** use 100% black. Always use `on-surface` (`#1b1c19`) for text to keep the aesthetic high-end and soft.
*   **Don't** use "Drop Shadows" from standard UI kits. Only use the "Whisper Shadow" defined in section 4.
*   **Don't** use dividers or lines. If you feel you need a line, try adding 24px of whitespace instead.
*   **Don't** use standard "Success Green." Use our `tertiary` sage tones to maintain the brand’s color story.