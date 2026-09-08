# US Motion Studio --- Website Design & Development Specification

## 1. Project Overview

**Project Name:** US Motion Studio\
**Website Type:** Premium Video Production / Creative Studio Website\
**Frontend:** React + Vite\
**Styling:** Tailwind CSS\
**Primary Experience:** Cinematic, video-first, OTT-inspired portfolio
browsing\
**Brand Direction:** Premium, bold, cinematic, modern, international

The website must present US Motion Studio as a professional video
production and creative studio rather than a generic agency or portfolio
website.

The supplied client brief specifically calls for an OTT-inspired
content-discovery experience with video browsing, categories, search,
filtering, video detail pages, services, industries, clients, about
content, and project enquiries.

> **Important:** OTT inspiration should be used for content discovery
> and presentation only. The website must have its own US Motion Studio
> identity and must not look like a Netflix clone.

------------------------------------------------------------------------

# 2. Brand Review

## 2.1 Logo Analysis

The supplied logo communicates three major ideas:

-   **Motion / Film:** Film reel and circular motion elements
-   **Energy / Creativity:** Strong red star and dynamic swoosh
-   **Professional / Corporate:** Dark navy typography and structured
    wordmark

The logo has a strong **navy + red + white** identity.

### Brand personality

The UI should feel:

-   Cinematic
-   Premium
-   Bold
-   Energetic
-   Creative
-   Trustworthy
-   Modern
-   Professional
-   International

The design should avoid looking:

-   Generic corporate
-   Overly colorful
-   Cartoonish
-   Cheap template-based
-   Too minimal to the point of losing the cinematic character
-   Like a direct copy of an OTT platform

------------------------------------------------------------------------

# 3. Brand Color System

The UI should be built around the logo colors.

## Primary Colors

  -----------------------------------------------------------------------
  Token                   Color                   Usage
  ----------------------- ----------------------- -----------------------
  `brand-navy`            `#042455`               Primary brand color,
                                                  headings, navigation,
                                                  dark sections

  `brand-red`             `#E2101B`               Primary CTA, active
                                                  states, highlights,
                                                  important accents

  `brand-blue`            `#0264A7`               Secondary accent,
                                                  gradients, hover states

  `white`                 `#FFFFFF`               Text on dark
                                                  backgrounds, cards,
                                                  clean sections

  `off-white`             `#F5F7FA`               Light backgrounds

  `charcoal`              `#171A1F`               Body text on light
                                                  backgrounds

  `muted`                 `#6B7280`               Secondary text
  -----------------------------------------------------------------------

These values are the starting design tokens. Final values can be tuned
slightly after the complete logo is placed in the UI.

## Recommended Dark Theme

The main video experience should use a dark cinematic environment:

``` text
Background       #05070B
Surface          #0B1018
Surface Elevated #111827
Navy             #042455
Red              #E2101B
Blue             #0264A7
White            #FFFFFF
Muted            #9CA3AF
Border           rgba(255,255,255,0.10)
```

## Recommended Light Theme

Light sections can be used for:

-   About
-   Services
-   Contact
-   Client showcase
-   Supporting content

``` text
Background       #FFFFFF
Soft Background  #F5F7FA
Text             #171A1F
Navy             #042455
Red              #E2101B
Blue             #0264A7
Muted            #6B7280
Border           #E5E7EB
```

------------------------------------------------------------------------

# 4. Color Usage Rules

The logo should remain the main visual reference.

### Use Navy for

-   Logo supporting areas
-   Navigation
-   Main headings
-   Dark backgrounds
-   Footer
-   Corporate information
-   Secondary buttons
-   Section accents

### Use Red for

-   Primary CTA
-   `Watch Video`
-   `Start a Project`
-   Active navigation/filter states
-   Important labels
-   Hover indicators
-   Small visual highlights

### Use Blue for

-   Secondary accents
-   Cinematic gradients
-   Hover effects
-   Supporting highlights
-   Interactive states where red would be too aggressive

### Avoid

-   Large areas of pure red
-   Rainbow gradients
-   Random accent colors
-   Purple/pink startup-style gradients
-   Excessive glassmorphism
-   Too many shadows

Red should be an accent, not the entire website background.

------------------------------------------------------------------------

# 5. Design Direction

## Overall Visual Style

The website should use:

-   Dark cinematic hero sections
-   Large video imagery
-   Strong typography
-   Full-width media
-   Horizontal video rows
-   Subtle gradients
-   High-quality thumbnails
-   Clean spacing
-   Minimal UI chrome
-   Smooth transitions
-   Premium hover interactions

The experience should feel like a **creative production studio + premium
streaming catalogue**.

------------------------------------------------------------------------

# 6. Homepage Concept

## 6.1 Header

Desktop navigation:

``` text
[US MOTION LOGO]

Home
Videos
Categories
Services
Industries
About
Contact

[Search Icon]
[Start a Project]
```

### Header behavior

At the top:

-   Transparent or dark overlay
-   Logo clearly visible
-   White navigation text

On scroll:

-   Dark/navy background
-   Slight blur
-   Smaller header height
-   Sticky positioning

Mobile:

``` text
[Logo]                         [Menu]
```

Use a slide-out/mobile menu.

Header delivery status:

-   [x] Desktop links: Home, Videos, Categories, Services, Industries, About, Contact
-   [x] Search icon
-   [x] Start a Project CTA
-   [x] Transparent header at the top
-   [x] Navy + blur + smaller height on scroll
-   [x] Sticky/fixed positioning
-   [x] White navigation text, red active state
-   [x] Mobile logo + menu button
-   [x] Slide-out mobile menu
-   [x] Final client logo (`public/logo.png`)

------------------------------------------------------------------------

# 7. Hero Section

The hero is the most important section of the website.

## Hero content

It should include:

-   Featured video/project
-   Large cinematic background image/video
-   Dark gradient overlay
-   Project category
-   Project title
-   Short description
-   `Watch Video`
-   `View Details`

Example:

``` text
FEATURED WORK

THE NEXT GENERATION OF MOTION

Commercial Film
Automotive

A cinematic brand film created through
concept, production and post-production.

[ Watch Video ]  [ View Details ]
```

## Hero visual

Preferred:

1.  High-quality video background
2.  Optimized poster image fallback
3.  Dark gradient overlay
4.  Content positioned toward the lower-left

Do not allow the video to make text unreadable.

------------------------------------------------------------------------

# 8. Homepage Content Flow

Recommended order:

``` text
1. Header
2. Cinematic Hero
3. Featured Videos
4. Selected Work
5. Commercial Videos
6. Brand Videos
7. Corporate Videos
8. Product Videos
9. Services
10. Industries
11. Clients
12. About
13. Start a Project CTA
14. Footer
```

The exact order can be adjusted after UI/UX review.

------------------------------------------------------------------------

# 9. Video Catalogue

The Videos page is the primary portfolio library.

## Layout

Desktop:

``` text
Videos

[Search............................]

[All] [Commercial] [Brand] [Corporate]
[Product] [Fashion] [Sports] [More]

------------------------------------------------

[ Video ] [ Video ] [ Video ]
[ Video ] [ Video ] [ Video ]
[ Video ] [ Video ] [ Video ]
```

## Video Card

Each card should support:

-   Thumbnail
-   Video title
-   Client
-   Category
-   Year
-   Hover interaction
-   Play icon
-   View details

Example:

``` text
┌──────────────────────────┐
│                          │
│       VIDEO THUMB        │
│                          │
│             ▶           │
├──────────────────────────┤
│ AUTOMOTIVE FILM          │
│ Client Name              │
│ Commercial • 2026        │
└──────────────────────────┘
```

------------------------------------------------------------------------

# 10. Video Card Interaction

Desktop hover:

-   Slight scale: `1.02`
-   Thumbnail zoom
-   Dark overlay
-   Play button appears
-   Metadata becomes more visible
-   Red accent appears

Animation should be subtle.

Do not use excessive animation.

Recommended transition:

``` css
transition: all 300ms ease;
```

------------------------------------------------------------------------

# 11. Video Categories

Initial categories from the client brief:

-   Commercial Videos
-   Brand Videos
-   Corporate Videos
-   Product Videos
-   Promotional Videos
-   Documentary Videos
-   Music Videos
-   Fashion Videos
-   Event Videos
-   Social Media Videos
-   Animation
-   VFX & Motion Graphics

Categories should be CMS-managed.

------------------------------------------------------------------------

# 12. Search

The website-wide search should support:

-   Video title
-   Client
-   Category
-   Industry
-   Services
-   Keywords

## Search UX

Desktop:

``` text
[ 🔍 Search videos, clients, categories... ]
```

Search results should show:

-   Matching videos
-   Category
-   Client
-   Industry
-   Relevant metadata

Empty state:

``` text
No projects found.

Try another keyword or browse all videos.
```

------------------------------------------------------------------------

# 13. Video Filtering

Filters:

-   Category
-   Industry
-   Year
-   Service

Recommended desktop UI:

``` text
Category ▼
Industry ▼
Year ▼
Service ▼
```

Mobile:

``` text
[ Filters ]
```

Open filters in a bottom sheet/drawer.

------------------------------------------------------------------------

# 14. Video Detail Page

Each project should have its own dedicated page.

## Structure

``` text
Hero
↓
Video Player
↓
Project Information
↓
Description
↓
Services
↓
Production Credits
↓
Gallery
↓
Related Videos
↓
Previous / Next Project
↓
Start a Project CTA
```

## Project Information

Example:

``` text
PROJECT NAME

Commercial Video

Client:
ABC

Category:
Commercial

Industry:
Automotive

Year:
2026

Services:
Direction
Production
Cinematography
Editing
```

------------------------------------------------------------------------

# 15. Video Player

Support:

-   YouTube
-   Vimeo
-   Compatible external video hosting

Requirements:

-   Responsive player
-   Lazy loading where appropriate
-   Poster image
-   Mobile playback
-   Fullscreen support
-   Optimized embed loading

Do not load multiple heavy iframe players immediately on the homepage.

Use thumbnail/poster-first loading and initialize the player only when
needed.

------------------------------------------------------------------------

# 16. Services Page

The Services section should communicate complete production
capabilities.

## Pre-Production

-   Concept Development
-   Creative Direction
-   Scriptwriting
-   Storyboarding
-   Production Planning

## Production

-   Video Production
-   Direction
-   Cinematography
-   Studio Production
-   Location Production

## Post-Production

-   Video Editing
-   Color Grading
-   Motion Graphics
-   Animation
-   VFX
-   Sound Design

Each service can optionally link to relevant projects.

------------------------------------------------------------------------

# 17. Industries Page

Initial industries:

-   Automotive
-   Technology
-   Fashion
-   Healthcare
-   Finance
-   Consumer Brands
-   Entertainment
-   Hospitality
-   Sports
-   Corporate

Each industry should have:

-   Visual
-   Short introduction
-   Relevant projects
-   Related services
-   CTA

------------------------------------------------------------------------

# 18. About Page

The About page should communicate:

-   Company introduction
-   Story
-   Vision
-   Mission
-   Creative approach
-   Production capabilities
-   Team
-   Clients
-   Experience
-   Locations

Recommended layout:

``` text
Hero
↓
Who We Are
↓
Our Story
↓
Creative Approach
↓
Capabilities
↓
Team
↓
Clients
↓
CTA
```

------------------------------------------------------------------------

# 19. Client Showcase

The client section should include:

-   Client logos
-   Selected clients
-   Collaborations

Recommended presentation:

``` text
TRUSTED BY

[LOGO] [LOGO] [LOGO] [LOGO]
[LOGO] [LOGO] [LOGO] [LOGO]
```

Use monochrome/white logo treatment where possible to maintain
consistency.

Client logos can link to related projects.

------------------------------------------------------------------------

# 20. Contact / Start a Project

The final conversion section should be visually strong.

## Form fields

-   Name
-   Company
-   Email
-   Phone
-   Country
-   Project Type
-   Industry
-   Budget
-   Timeline
-   Project Description

Primary CTA:

``` text
START A PROJECT
```

## Form UX

Include:

-   Client-side validation
-   Loading state
-   Success state
-   Error state
-   Required field indicators
-   Accessible labels
-   API integration

Success message:

``` text
Thanks for reaching out.

Our team will review your project details
and get back to you shortly.
```

------------------------------------------------------------------------

# 21. Footer

Footer should contain:

``` text
US MOTION STUDIO

Video Production
Digital Marketing
Creative Storytelling

Navigation
Videos
Services
Industries
About
Contact

Social
Instagram
YouTube
LinkedIn

Contact
Email
Phone
Location

© US Motion Studio
Privacy Policy
Terms
```

The footer should use the dark navy/near-black brand treatment.

------------------------------------------------------------------------

# 22. Typography

Typography should be bold and cinematic but still highly readable.

## Recommended pairing

### Headings

Use one modern bold sans-serif:

-   Inter
-   Manrope
-   Sora
-   Plus Jakarta Sans

### Body

Use:

-   Inter
-   Manrope

Recommended default:

``` text
Heading: Manrope / 700-800
Body: Inter / 400-500
```

Avoid decorative display fonts that compete with the logo.

------------------------------------------------------------------------

# 23. Typography Scale

Suggested desktop scale:

``` text
Hero Title      64–88px
H1              48–64px
H2              36–48px
H3              24–32px
Body            16–18px
Small           13–14px
Button          14–16px
```

Mobile:

``` text
Hero Title      38–48px
H1              34–40px
H2              28–34px
H3              22–26px
Body            15–17px
```

------------------------------------------------------------------------

# 24. Buttons

## Primary Button

``` text
Background: #E2101B
Text: #FFFFFF
```

Example:

``` text
[ WATCH VIDEO ]
```

Hover:

-   Slight brightness change
-   Small upward movement
-   Optional subtle shadow

## Secondary Button

``` text
Background: transparent
Border: rgba(255,255,255,0.35)
Text: #FFFFFF
```

For light backgrounds:

``` text
Border: #042455
Text: #042455
```

------------------------------------------------------------------------

# 25. Layout System

Use a consistent max-width:

``` text
max-width: 1280px
```

Large desktop sections can use full-width media.

Recommended spacing:

``` text
Section padding:
Desktop: 96px–128px
Tablet: 72px–96px
Mobile: 56px–72px
```

Use consistent horizontal padding:

``` text
Desktop: 48px
Tablet: 32px
Mobile: 20px
```

------------------------------------------------------------------------

# 26. Cinematic Visual System

The visual language should use:

-   Large media
-   Deep dark backgrounds
-   Navy overlays
-   Red accents
-   Blue atmospheric highlights
-   Soft gradients
-   Subtle grain/noise if appropriate
-   Large whitespace
-   Strong typography

Recommended hero gradient:

``` text
transparent
↓
rgba(5, 7, 11, 0.25)
↓
rgba(5, 7, 11, 0.90)
```

Avoid making the page look completely black. Navy should remain visible
as part of the brand.

------------------------------------------------------------------------

# 27. Animation Guidelines

Use animation to improve perceived quality, not to distract.

Recommended:

-   Fade-up on section reveal
-   Thumbnail zoom on hover
-   Smooth card transitions
-   Header background transition
-   Button hover
-   Image reveal
-   Horizontal row scrolling

Avoid:

-   Constant bouncing
-   Excessive parallax
-   Long page transition animations
-   Heavy WebGL effects unless specifically approved

Recommended duration:

``` text
150ms – 400ms
```

------------------------------------------------------------------------

# 28. Responsive Design

The website must work on:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

## Desktop

Prioritize:

-   Large cinematic media
-   Horizontal content rows
-   Multi-column catalogue
-   Large typography

## Tablet

Adjust:

-   Grid columns
-   Hero height
-   Typography
-   Navigation spacing

## Mobile

Prioritize:

-   Touch-friendly cards
-   Large readable text
-   Simplified navigation
-   Horizontal swipeable video rows
-   Full-width media
-   Bottom-sheet filters

Never simply shrink the desktop design.

The mobile experience should be intentionally designed for touch and
video discovery.

------------------------------------------------------------------------

# 29. Accessibility

Required:

-   Semantic HTML
-   Keyboard navigation
-   Visible focus states
-   Accessible form labels
-   Alt text for meaningful images
-   Captions where available
-   Sufficient text contrast
-   Accessible buttons
-   Accessible mobile navigation

Do not communicate important information only through color.

------------------------------------------------------------------------

# 30. Performance

Because this is a video-heavy website, performance is critical.

## Images

Use:

-   WebP/AVIF where possible
-   Responsive image sizes
-   Lazy loading below the fold
-   Optimized thumbnails
-   Proper width/height attributes

## Videos

Do not autoplay large videos everywhere.

Recommended:

``` text
Poster image first
↓
User interaction / viewport detection
↓
Load video
```

Use lightweight preview media for catalogue cards.

## React

Use:

-   Lazy-loaded routes
-   Component reuse
-   Avoid unnecessary re-renders
-   Optimized lists
-   Pagination/infinite loading if catalogue becomes large

------------------------------------------------------------------------

# 31. SEO

Basic SEO requirements:

-   SEO-friendly URLs
-   Meta titles
-   Meta descriptions
-   Open Graph tags
-   XML sitemap
-   robots.txt
-   Image alt text
-   Structured data/schema where appropriate
-   Search-engine-friendly HTML

Recommended project URL:

``` text
/videos
/videos/commercial
/videos/project-name
/services
/industries
/about
/contact
```

Avoid:

``` text
/video?id=123
```

when a clean route can be used.

------------------------------------------------------------------------

# 32. Analytics

Integrate:

-   Google Analytics 4
-   Google Search Console

Track:

``` text
Video card clicks
Video plays
Video completion where practical
Search usage
Filter usage
CTA clicks
Contact form submissions
Start a Project clicks
```

------------------------------------------------------------------------

# 33. CMS / Admin Requirements

The website should have a CMS/admin system so the client can manage the
portfolio without developer involvement.

Admin should be able to manage:

-   Videos
-   Categories
-   Industries
-   Services
-   Clients
-   Featured videos

## Video Entry

Fields:

``` text
Title
Description
Thumbnail
Video URL
Category
Industry
Client
Year
Services
Tags
Featured Status
Gallery Images
```

The data model should allow the video library to grow without changing
frontend code.

------------------------------------------------------------------------

# 34. Suggested Data Model

## Video

``` ts
interface Video {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  clientId?: string;
  categoryId: string;
  industryId?: string;
  year: number;
  services: string[];
  tags: string[];
  featured: boolean;
  gallery: string[];
  createdAt: string;
  updatedAt: string;
}
```

## Category

``` ts
interface Category {
  id: string;
  name: string;
  slug: string;
}
```

## Industry

``` ts
interface Industry {
  id: string;
  name: string;
  slug: string;
}
```

## Client

``` ts
interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}
```

------------------------------------------------------------------------

# 35. React Project Architecture

Recommended structure:

``` text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Loader.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   └── Footer.jsx
│   │
│   ├── video/
│   │   ├── VideoCard.jsx
│   │   ├── VideoRow.jsx
│   │   ├── VideoPlayer.jsx
│   │   ├── VideoGrid.jsx
│   │   └── VideoFilters.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── FeaturedVideos.jsx
│   │   ├── SelectedWork.jsx
│   │   ├── ServicesPreview.jsx
│   │   ├── IndustriesPreview.jsx
│   │   ├── Clients.jsx
│   │   └── StartProject.jsx
│   │
│   └── forms/
│       └── ProjectEnquiryForm.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Videos.jsx
│   ├── VideoDetails.jsx
│   ├── Services.jsx
│   ├── Industries.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── services/
│   └── api.js
│
├── hooks/
│   ├── useVideos.js
│   └── useDebounce.js
│
├── utils/
│   ├── constants.js
│   └── helpers.js
│
├── App.jsx
├── main.jsx
└── index.css
```

------------------------------------------------------------------------

# 36. Recommended Frontend Stack

``` text
React
Vite
Tailwind CSS
React Router
Axios / Fetch
Lucide React
```

Optional depending on project needs:

``` text
TanStack Query
React Hook Form
Zod
Framer Motion
```

### Recommendation

Keep the first version simple.

Use:

``` text
React + Vite
Tailwind CSS
React Router
Fetch/Axios
```

Add TanStack Query, React Hook Form, Zod or Framer Motion only where
they provide clear value.

------------------------------------------------------------------------

# 37. Tailwind Design Tokens

Create reusable brand tokens instead of scattering hex values across
components.

Example:

``` css
@import "tailwindcss";

@theme {
  --color-brand-navy: #042455;
  --color-brand-red: #e2101b;
  --color-brand-blue: #0264a7;

  --color-brand-dark: #05070b;
  --color-brand-surface: #0b1018;

  --color-brand-light: #f5f7fa;
  --color-brand-text: #171a1f;
  --color-brand-muted: #6b7280;
}
```

Use:

``` text
bg-brand-dark
bg-brand-navy
bg-brand-red
text-brand-red
text-brand-navy
```

instead of repeatedly writing arbitrary color values.

------------------------------------------------------------------------

# 38. Component Reusability

Build reusable components for:

``` text
Navbar
Footer
Button
VideoCard
VideoRow
VideoGrid
SectionHeading
VideoPlayer
SearchBar
FilterBar
ClientLogo
ServiceCard
IndustryCard
CTASection
```

Do not duplicate video card markup for every category.

------------------------------------------------------------------------

# 39. API Integration

Frontend should consume CMS/API data rather than hardcoding portfolio
content.

Example:

``` text
GET /api/videos
GET /api/videos/:slug
GET /api/categories
GET /api/industries
GET /api/services
GET /api/clients
POST /api/project-enquiries
```

Filtering can be implemented through query parameters:

``` text
/api/videos?category=commercial
/api/videos?industry=automotive
/api/videos?year=2026
/api/videos?service=cinematography
/api/videos?search=brand
```

The final endpoint names depend on the backend implementation.

------------------------------------------------------------------------

# 40. Loading / Error States

Every API-driven section should have proper states.

## Loading

``` text
Skeleton cards
```

## Empty

``` text
No videos available.
```

## Error

``` text
Something went wrong while loading projects.

[ Try Again ]
```

Never leave an empty blank section when an API fails.

------------------------------------------------------------------------

# 41. Security Considerations

Frontend must not contain:

-   CMS admin credentials
-   Database credentials
-   Private API secrets
-   SMTP passwords
-   Server-side environment secrets

Only public client-safe configuration should be exposed to the browser.

Use environment variables for public API base URLs:

``` env
VITE_API_BASE_URL=https://api.example.com
```

Sensitive operations must happen on the backend.

------------------------------------------------------------------------

# 42. Content Strategy

The design depends heavily on high-quality media.

Client should provide:

-   Logo
-   Brand guidelines if available
-   Videos
-   Video thumbnails/artwork
-   Project descriptions
-   Client information
-   Categories
-   Services
-   Industry information
-   Company information
-   Team information
-   Contact details
-   Legal content

Large-scale existing video library migration should be treated
separately if required.

------------------------------------------------------------------------

# 43. What the Website Should Feel Like

When a visitor opens the website, the first impression should be:

> **"This is a serious, premium video production studio."**

Not:

> "This is a normal agency template."

The visual hierarchy should be:

``` text
VIDEO
↓
PROJECT
↓
STORY
↓
CAPABILITY
↓
TRUST
↓
CONVERSION
```

------------------------------------------------------------------------

# 44. Important Design Rules

## Rule 1 --- Logo-led branding

The UI must visually connect with the supplied logo.

Primary visual language:

``` text
Navy + Red + White + Cinematic Blue
```

## Rule 2 --- Video comes first

Do not bury the portfolio below large amounts of text.

## Rule 3 --- Red is an accent

Use red strategically for actions and highlights.

## Rule 4 --- Keep the interface premium

Avoid excessive borders, cards, gradients and shadows.

## Rule 5 --- Original design

OTT interaction patterns are acceptable.

Copying Netflix's visual identity is not.

## Rule 6 --- Mobile matters

Mobile video discovery should feel intentional, not like a compressed
desktop site.

## Rule 7 --- Performance matters

Video-heavy does not mean performance-heavy.

------------------------------------------------------------------------

# 45. Recommended Homepage Visual Hierarchy

``` text
┌─────────────────────────────────────────────┐
│ NAVBAR                                      │
├─────────────────────────────────────────────┤
│                                             │
│          CINEMATIC HERO VIDEO               │
│                                             │
│       FEATURED PROJECT                      │
│       PROJECT TITLE                         │
│       DESCRIPTION                           │
│                                             │
│       [ WATCH ] [ DETAILS ]                 │
│                                             │
├─────────────────────────────────────────────┤
│ FEATURED WORK                               │
│ [ VIDEO ] [ VIDEO ] [ VIDEO ]               │
├─────────────────────────────────────────────┤
│ SELECTED WORK                               │
│ [ LARGE VIDEO ] [ LARGE VIDEO ]             │
├─────────────────────────────────────────────┤
│ COMMERCIAL                                  │
│ [ VIDEO ][ VIDEO ][ VIDEO ][ VIDEO ]        │
├─────────────────────────────────────────────┤
│ BRAND                                       │
│ [ VIDEO ][ VIDEO ][ VIDEO ][ VIDEO ]        │
├─────────────────────────────────────────────┤
│ SERVICES                                    │
│ Production | Post | Creative                │
├─────────────────────────────────────────────┤
│ INDUSTRIES                                  │
│ Automotive | Tech | Fashion | Sports        │
├─────────────────────────────────────────────┤
│ CLIENTS                                     │
│ LOGO LOGO LOGO LOGO                         │
├─────────────────────────────────────────────┤
│ ABOUT US                                    │
├─────────────────────────────────────────────┤
│          START A PROJECT                    │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 46. Development Phases

## Phase 1 --- Foundation

-   [x] React + Vite setup
-   [x] Tailwind setup
-   [x] Routing
-   [x] Brand tokens
-   [x] Typography
-   [x] Responsive container
-   [x] Navbar
-   [ ] Footer

## Phase 2 --- Homepage

-   [x] Hero
-   [x] Featured videos
-   [x] Video rows
-   [x] Selected work
-   [x] Services preview
-   [x] Industries preview
-   [x] Clients
-   [x] About
-   [x] CTA

## Phase 3 --- Portfolio

-   Videos page
-   Search
-   Filters
-   Categories
-   Video detail page
-   Related videos

## Phase 4 --- Company Pages

-   Services
-   Industries
-   About
-   Contact

## Phase 5 --- API/CMS

-   API integration
-   Dynamic videos
-   Dynamic categories
-   Dynamic industries
-   Dynamic clients
-   Enquiry form

## Phase 6 --- Optimization

-   SEO
-   Analytics
-   Image optimization
-   Lazy loading
-   Accessibility
-   Mobile testing
-   Performance testing

## Phase 7 --- QA & Deployment

-   Cross-browser testing
-   Responsive testing
-   Form testing
-   API error testing
-   Video playback testing
-   SEO validation
-   Production build
-   Deployment

------------------------------------------------------------------------

# 47. Acceptance Criteria

The project should be considered ready when:

-   [x] Logo is correctly integrated
-   [ ] Brand colors are consistently used
-   [x] Homepage has a cinematic hero
-   [ ] Featured videos are visible
-   [ ] Video catalogue works
-   [x] Categories work
-   [ ] Search works
-   [ ] Filters work
-   [ ] Video detail pages work
-   [ ] Related videos work
-   [x] Services page works
-   [x] Industries page works
-   [ ] About page works
-   [ ] Client showcase works
-   [ ] Contact/enquiry form works
-   [ ] CMS/API integration works
-   [ ] YouTube/Vimeo integration works
-   [x] Mobile navigation works
-   [ ] Responsive layout works
-   [ ] Loading states work
-   [ ] Error states work
-   [ ] SEO basics are implemented
-   [ ] Analytics events are implemented
-   [ ] Images are optimized
-   [ ] Lazy loading is implemented where appropriate
-   [ ] Production build succeeds
-   [ ] Cross-browser QA is completed

------------------------------------------------------------------------

# 48. Final Design Recommendation

The strongest direction for US Motion Studio is:

### **Dark Cinematic + Navy Brand + Red Energy**

Use a near-black cinematic base for the video experience, with the
logo's navy as the core brand color and the logo's red as the
action/highlight color.

The website should combine:

``` text
Premium Film Production
        +
OTT-style Content Discovery
        +
US Motion Studio Branding
        +
Strong Conversion UX
```

The result should feel like a **premium international production studio
website**, while still being clearly recognizable as **US Motion
Studio**.

------------------------------------------------------------------------

# 49. Final Scope Reference

The client brief defines the website as an OTT-inspired video portfolio
and discovery platform. The requested scope includes:

-   Homepage
-   Video catalogue
-   Video categories
-   Video detail pages
-   Search
-   Basic filtering
-   Related videos
-   Services
-   Industries
-   About
-   Client showcase
-   Contact / enquiry
-   CMS
-   Video integration
-   Basic SEO
-   Google Analytics
-   Performance optimization
-   Responsive design
-   Testing
-   Deployment
-   Basic CMS training

The original brief also explicitly states that the website should take
inspiration from OTT platforms for categorization, video cards,
horizontal rows, search, filtering, detail pages, related content and
cinematic presentation, while not replicating Netflix or another OTT
platform's branding or proprietary UI.

------------------------------------------------------------------------

# 50. Source Brief

This specification is based on the supplied **US Motion Studio ---
Website Design & Development Quotation** and the supplied US Motion
Studio logo.

The client brief describes the project as a premium video production
website with an OTT-inspired video-first browsing experience. It also
specifies the core navigation, homepage sections, video catalogue,
categories, video detail page, search/filtering, services, industries,
about, clients, contact form, CMS, video integrations, responsive
design, SEO, analytics and performance requirements.
