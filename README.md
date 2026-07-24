# Allan Cabusora — Full-Stack Developer Portfolio

A modern personal portfolio website for **Allan Cabusora**, a full-stack
developer based in Davao City, Philippines. The website presents selected
projects, development services, professional experience, and contact
information through a responsive, dark-themed interface.

## About the Portfolio

This portfolio is designed to introduce Allan's background and demonstrate his
ability to build complete, production-ready web applications. His work focuses
on ReactJS and TypeScript on the frontend, with PHP, Laravel, Node.js, REST APIs,
and SQL or NoSQL databases on the backend.

The site highlights more than 10 years of development experience and projects
across business operations, finance, lending, payroll, member management, and
product pricing.

## Website Sections

### Hero

The opening section introduces Allan as a web and full-stack developer. It
includes a short professional summary, a custom avatar, and links that guide
visitors to the project and contact sections.

### Selected Work

The project showcase currently includes:

- **Presyo** — A costing and pricing application for tracking ingredient
  expenses, calculating production costs, and setting profitable retail and
  wholesale prices.
- **BIDA Security Agency** — A full-stack CRM and payroll system for employee
  records, client contracts, guard assignments, attendance, payroll, loans,
  payslips, and operational reporting.
- **PSS Precious International** — A member and sales management platform with
  sponsorship networks, genealogy trees, commissions, inventory, orders,
  wallets, bonuses, and payouts.
- **CreDebt Loan App** — A loan portfolio management application with lender
  and borrower dashboards, reducing-balance calculations, payment histories,
  transaction protection, and PDF reports.

Each project card contains:

- A project summary
- Key features and implementation highlights
- Technologies used
- A screenshot gallery
- A keyboard-accessible image lightbox with previous and next navigation

### Web Development Services

The services section covers:

- Custom Web Applications
- React and PHP Development
- Design-to-Code Development
- Forms and Workflow Systems
- Dashboards and Admin Portals
- Responsive and Accessible UI
- Speed and Performance Optimization
- Third-Party Integrations
- Backend and API Development
- End-to-End Product Development
- Database Architecture

### About

The about section explains Allan's approach to turning complex requirements
into simple, reliable user experiences. It also summarizes his experience
building investment platforms, Web3 governance applications, medical
information systems, and other full-stack products.

Current professional highlights:

- 10+ years of experience
- 10+ projects delivered
- A strong commitment to usability, performance, scalability, and code quality

### Contact

Visitors can contact Allan by email or connect through GitHub and LinkedIn. The
section also includes his location and a placeholder for a downloadable résumé.

## Features

- Responsive, mobile-first layout
- Fixed navigation with desktop and mobile menus
- Smooth scrolling between page sections
- Scroll-reveal animations using `IntersectionObserver`
- Interactive mouse-following background glow
- Reusable project cards and color themes
- Project screenshot galleries with modal navigation
- Semantic HTML and accessible controls
- Visible keyboard focus states
- Custom SVG service icons
- Dark interface with teal, cyan, purple, and project-specific accents
- Production build with minified CSS and bundled assets

## Technology Stack

- **React 19** — Component-based user interface
- **TypeScript** — Strict typing and safer component development
- **Vite** — Development server and production bundler
- **Tailwind CSS 3** — Responsive styling, theme tokens, and animations
- **clsx** — Conditional class-name composition
- **HTML5 and SVG** — Semantic content and lightweight icons
- **Google Fonts** — Inter and JetBrains Mono

## Project Structure

```text
my-website-main/
├── images/
│   ├── avatar.png
│   ├── icon.png
│   ├── square.svg
│   └── projects/             # Project screenshots grouped by project
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Hero/
│   │   ├── Modal/
│   │   ├── MouseGlow/
│   │   ├── Services/
│   │   └── Works/
│   ├── layouts/
│   │   └── page.tsx          # Main page composition and reveal behavior
│   ├── partials/
│   │   └── Header/
│   ├── input.css             # Tailwind source and custom styles
│   ├── main.tsx              # React application entry point
│   └── output.css            # Generated Tailwind stylesheet
├── index.html
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Requirements

- Node.js 20.19 or later
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone <repository-url>
cd my-website-main
npm install
```

### Local Development

Start the Vite development server:

```bash
npm run dev
```

The website will be available at `http://localhost:8888`.

### Type Checking

Validate the TypeScript source without generating files:

```bash
npm run typecheck
```

### Production Build

Generate the Tailwind stylesheet and create an optimized Vite build:

```bash
npm run build
```

The production files are generated in the `dist/` directory.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 8888 |
| `npm run dev:css` | Watch and rebuild the Tailwind stylesheet |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run build` | Type-check, compile Tailwind CSS, and build for production |
| `npm run predeploy` | Run the production build before deployment |
| `npm run serve` | Serve the project locally on port 8888 |

## Updating Portfolio Content

- Edit the introduction and avatar in
  `src/components/Hero/Hero.tsx`.
- Add or update projects in the `works` array inside
  `src/components/Works/Works.tsx`.
- Place project screenshots in `images/projects/<project-name>/` and reference
  them from the corresponding project entry.
- Edit service names, descriptions, and icons in
  `src/components/Services/Services.tsx`.
- Update the biography and experience statistics in
  `src/components/About/About.tsx`.
- Update the email address, location, social links, and résumé URL in
  `src/components/Contact/Contact.tsx`.
- Adjust colors, fonts, and animation tokens in `tailwind.config.js`.
- Edit shared styles and accessibility states in `src/input.css`.

When adding a new project, follow the existing `WorkType` structure:

```ts
{
  accent: 'purple',
  title: 'Project Name',
  description: 'A concise overview of the project and its purpose.',
  highlights: ['Feature one', 'Feature two'],
  techStacks: ['ReactJS', 'TypeScript'],
  images: [
    {
      title: 'Screenshot title',
      url: './images/projects/project-name/screenshot.png',
    },
  ],
}
```

## Deployment

The generated `dist/` directory can be deployed to any static hosting platform,
including:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Use `npm run build` as the build command and `dist` as the output directory.

## Contact

- **Email:** [yiu.ascex@gmail.com](mailto:yiu.ascex@gmail.com)
- **GitHub:** [github.com/AsCEX](https://github.com/AsCEX)
- **LinkedIn:** [linkedin.com/in/ascex](https://linkedin.com/in/ascex)
- **Location:** Davao City, Philippines

## License

This project is licensed under the MIT License.
