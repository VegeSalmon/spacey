# SpaceY Website

A modern React website for SpaceY - a student space technology organization from Gdańsk University of Technology.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, space-themed design with smooth animations
- **Interactive Components**: Hover effects, smooth scrolling navigation
- **Team Section**: Meet the SpaceY team members
- **Partners Section**: Animated sponsor/partner logos
- **Contact Section**: Social media links and donation information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── HeroSection.jsx  # Main hero section with logo
│   ├── AboutSection.jsx # About SpaceY section
│   ├── ActivitiesSection.jsx # Our activities
│   ├── PartnersSection.jsx   # Partners/sponsors
│   ├── TeamSection.jsx      # Team members
│   ├── ContactSection.jsx   # Contact and social links
│   └── Footer.jsx           # Footer
├── App.jsx              # Main app component
├── App.css              # Global app styles
├── index.js             # React entry point
└── index.css            # Global CSS styles
```

## Technologies Used

- **React 18** - Frontend framework
- **CSS3** - Styling with modern features
- **Google Fonts** - Exo font family
- **SVG Graphics** - Vector graphics for icons and logos

## Design System

- **Primary Color**: `rgba(0, 0, 0, 0.94)` (Dark background)
- **Secondary Color**: `#838383` (Gray accents)
- **Text Color**: `#FFFFFF` (White text)
- **Font Family**: 'Exo' with fallbacks
- **Border Radius**: Consistent rounded corners
- **Animations**: Smooth transitions and hover effects

## Sections

1. **Header** - Fixed navigation with smooth scrolling
2. **Hero** - SpaceY logo and introduction
3. **About** - "Co jest SpaceY?" with team photo
4. **Activities** - "Nasze Działania" with project icons
5. **Partners** - Scrolling sponsor logos
6. **Team** - "Poznaj nas!" team member profiles
7. **Contact** - "Kontakt" with social links and donation
8. **Footer** - Company information and links

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Contributing

To contribute to the SpaceY website:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on different screen sizes
5. Submit a pull request

## License

This project is proprietary to SpaceY organization.
