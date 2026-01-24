# UX/UI Design Consultation Request for Claude

## Context
I'm working on a landing page for "Luminate with Mandy C" - a subconscious recalibration audio program for conscious leaders. The page is built with Next.js 16.1.4, React 19.2.3, and Tailwind CSS 4. I need expert advice on improving the visual design, typography, and specifically addressing an issue with image clarity in the hero section.

## Current Implementation Overview

### Hero Section Structure
The hero section currently:
- Uses a fixed height: `h-[550px] md:h-[600px]`
- Has a gray background: `bg-[#4A4A4A]`
- Displays photo on the right side (50% width on desktop, full width on mobile)
- Uses `objectPosition: '35% center'` to focus on the face
- Has a gradient overlay: `from-[#4A4A4A]/95 via-[#4A4A4A]/40 to-transparent`
- Text is positioned on the left with gradient text effect

### Current Typography
- **Headings**: Cormorant Garamond (serif) - weights 300, 400, 500, 600
- **Body text**: Poppins (sans-serif) - weights 300, 400, 500, 600
- **Hero headline**: Gradient text (rose → gold → purple) with drop shadow
- **Body text colors**: Various shades of gray (#3A3A3A, #5A5A5A, #2C2C2C)

### Brand Colors
```css
--rose-quartz: #B85D6A
--gold: #D4A574
--purple-accent: #9D8FC0
--cream: #FAF8F5
--sand: #E8DFD8
--charcoal: #2C2C2C
```

## Specific Issues & Questions

### 1. Hero Section Photo Clarity (URGENT)
**Problem**: The original photo (`/mandyc.jpg`) is very clear and sharp, but it appears blurred or less sharp when displayed in the hero section.

**Current Implementation**:
```tsx
<Image
  src="/mandyc.jpg"
  alt="Mandy Cheung"
  fill
  className="object-cover"
  style={{ objectPosition: '35% center' }}
  priority
  quality={90}
  unoptimized
/>
```

**Questions**:
- Why might the photo appear blurred despite being sharp originally?
- Should I use `unoptimized={true}` or let Next.js optimize? What's the trade-off?
- Is the gradient overlay (`from-[#4A4A4A]/95`) reducing perceived sharpness?
- Would `object-fit: cover` vs `contain` affect clarity?
- Should I use a different image format (WebP, AVIF) for better quality?
- Are there CSS properties (backdrop-filter, blur) that might be affecting the image?
- What's the optimal `quality` setting for Next.js Image component?

### 2. Typography & Font Styling
**Current Setup**:
- Hero headline uses gradient text with brand colors
- Mix of serif (headings) and sans-serif (body) fonts
- Various font weights (300-600)

**Questions**:
- Is the font pairing (Cormorant Garamond + Poppins) optimal for a premium/luxury brand?
- Should I adjust font weights for better hierarchy?
- Are the font sizes appropriate for readability and impact?
- Should the hero headline use a different font treatment?
- What are best practices for font sizing across breakpoints?
- Should I consider a third font for accents or CTAs?

### 3. Font Colors & Contrast
**Current Colors**:
- Hero text: Gradient (rose/gold/purple) with drop shadow
- Body text: Gray shades (#3A3A3A, #5A5A5A)
- Background: Gray (#4A4A4A) in hero, cream (#FAF8F5) in sections

**Questions**:
- Are the current text colors providing sufficient contrast for accessibility?
- Should I adjust the gradient colors for better readability?
- Are the gray text colors too muted or just right?
- What's the optimal contrast ratio for body text on cream backgrounds?
- Should I use different text colors for different sections?

### 4. Overall UX/UI Improvements
**Questions**:
- Is the current layout hierarchy clear and effective?
- Are the section spacings optimal?
- Should I adjust the hero section height or layout?
- Are the CTA buttons prominent enough?
- Is the mobile experience optimized?
- Should I add more visual interest or keep it minimal?
- Are there any accessibility concerns I should address?
- What micro-interactions would enhance the user experience?

## Technical Constraints
- Next.js 16.1.4 with Image component
- Tailwind CSS 4
- Client-side rendering ("use client")
- Performance is important (page should load quickly)

## Files to Review
Please review the attached `app/page.tsx` file to see the full implementation and provide specific, actionable recommendations.

## Specific Requests
1. **Priority 1**: Fix the photo blur/clarity issue in hero section
2. **Priority 2**: Optimize typography choices (fonts, sizes, weights)
3. **Priority 3**: Improve color contrast and readability
4. **Priority 4**: General UX/UI polish recommendations

Thank you for your expertise!
