# GTA VI Landing Page

A fan-made landing page inspired by the official [Rockstar Games GTA VI website](https://www.rockstargames.com/VI). Built as a creative front-end project to explore scroll-driven animations and cinematic web design.

> **Disclaimer**: This is a personal project for learning and portfolio purposes. All GTA VI assets, characters, and branding belong to Rockstar Games / Take-Two Interactive.

https://github.com/user-attachments/assets/23946aec-9980-4084-8c7f-b4a3c6e94b6a

## What It Does

- Cinematic hero section with a mask reveal animation on scroll
- Scroll-driven video playback that syncs with your scrolling
- Character profile sections for Jason and Lucia with parallax effects
- Story introduction with line-by-line text reveals
- Supporting cast gallery featuring 6 characters from the game
- Horizontal-scrolling location explorer across 6 areas of Leonida
- Postcard video section with hover effects
- Trailer modal that plays the official YouTube trailer
- Newsletter signup section and footer

![Characters](docs/screenshots/cast-section.png)

## Built With

- **React 19** + **TypeScript**
- **Vite** for fast development and builds
- **GSAP** (ScrollTrigger + ScrollSmoother) for all scroll animations
- **Tailwind CSS v4** for styling

![Locations](docs/screenshots/location-section.png)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── sections/         # Each page section (Hero, Jason, Lucia, etc.)
├── hooks/            # Custom hooks for scroll and video animations
├── constants/        # Character and location data
├── components/ui/    # Shared components (trailer modal)
└── types/            # TypeScript interfaces
```

## Screenshots

| Section               | Preview                                             |
| --------------------- | --------------------------------------------------- |
| Hero + Mask Animation | ![Hero](docs/screenshots/hero-section.png)          |
| Jason Profile         | ![Jason](docs/screenshots/jason-section.png)        |
| Lucia Profile         | ![Lucia](docs/screenshots/lucia-section.png)        |
| Supporting Cast       | ![Cast](docs/screenshots/cast-section.png)          |
| Explore Leonida       | ![Locations](docs/screenshots/location-section.png) |
| Postcard              | ![Postcard](docs/screenshots/postcard-section.png)  |

## Credits

- Character and location artwork from the official [Rockstar Games GTA VI page](https://www.rockstargames.com/VI)
- Fonts and video assets from the official Rockstar Games website
- Trailer: [GTA VI Trailer 1](https://www.youtube.com/watch?v=QdBZY2fkU-0)
- Trailer: [GTA VI Trailer 2](https://www.youtube.com/watch?v=VQRLujxTm3c)
