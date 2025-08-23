# AI Technology Solutions

A modern and professional React template designed for AI technology companies, digital agencies, and tech startups. This template provides a comprehensive solution for showcasing AI services, features, and business information.

## Project Type

**Landing Page / Business Showcase** - A comprehensive website template for AI technology companies featuring service presentations, team showcases, blog sections, and contact capabilities.

## Key Features

- Modern and responsive design optimized for AI/Tech businesses
- Comprehensive service showcase sections
- Interactive pricing plans
- Team member profiles and testimonials
- Blog system with single post pages
- FAQ section for common questions
- Use cases and detailed case studies
- Contact forms and business information
- User authentication UI (Login/Register)
- Multi-page navigation with React Router
- Smooth animations and transitions
- Mobile-first responsive design

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling Solution**: CSS + Bootstrap 5.3.2
- **Routing**: React Router Dom v6
- **Animation Libraries**: 
  - AOS (Animate On Scroll) v2.3.4
  - WowJS v1.1.3
  - React Type Animation v3.2.0
- **UI Components**: React Multi Carousel v2.8.4
- **Icons**: React Icons v4.12.0
- **Build Enhancement**: vite-tagger (custom build optimization)
- **Backend Ready**: Supabase integration configured

## Project Structure

```
src/
├── Components/
│   ├── Banner/              # Homepage hero section
│   ├── Blogs/              # Blog listing component
│   ├── ChooseUs/           # Why choose us section
│   ├── Faq/                # FAQ component
│   ├── Feature/            # Features showcase
│   ├── LightBox/           # Image lightbox
│   ├── Partner/            # Partner/client logos
│   ├── Pracing/            # Pricing plans
│   ├── Services/           # Services overview
│   ├── Shared/             # Reusable components
│   │   ├── BlogCard/       # Blog post card
│   │   ├── Footer/         # Site footer
│   │   ├── Header/         # Navigation header
│   │   ├── InputFiled/     # Form input component
│   │   ├── PageHeader/     # Page title headers
│   │   ├── ProfileCard/    # Team member cards
│   │   ├── ServiceCard/    # Service item cards
│   │   └── Title/          # Section titles
│   ├── Sidebar/            # Blog sidebar
│   ├── Testimonials/       # Customer testimonials
│   └── WorkProcess/        # Process explanation
├── Pages/
│   ├── About/              # About company page
│   ├── AllBlog/            # Blog listing page
│   ├── AllFaq/             # FAQ page
│   ├── Contact/            # Contact page
│   ├── Login/              # Login page (UI only)
│   ├── Register/           # Registration page (UI only)
│   ├── SingleBlog/         # Individual blog post
│   ├── Teams/              # Team members page
│   ├── Usecase/            # Use cases listing
│   ├── UsecaseDetails/     # Individual use case
│   ├── NotFound404/        # 404 error page
│   └── Home.jsx            # Homepage
├── Layout/
│   └── Root.jsx            # Main layout wrapper
├── Route/
│   └── Route.jsx           # Application routing
├── Utlits/
│   ├── blogList.jsx        # Blog data
│   └── serviceList.jsx     # Services data
├── assets/                 # Images and static files
├── integrations/
│   └── supabase/          # Backend integration (configured but optional)
└── main.jsx               # Application entry point
```

## Page Functionality

- **Homepage (/)**: Complete landing page with hero banner, features, services, testimonials, pricing, and blog preview
- **About (/about)**: Company information, mission, and team introduction
- **Services**: Detailed service offerings and capabilities
- **Use Cases (/usecase)**: Real-world applications and case studies
- **Use Case Details (/usecase_details)**: Detailed case study pages
- **Team (/team)**: Team member profiles and information
- **Pricing (/pricing)**: Service pricing plans and packages
- **Blog (/all_blog)**: Blog post listings
- **Single Blog (/single_blog)**: Individual blog post pages
- **FAQ (/faq)**: Frequently asked questions
- **Contact (/contact)**: Contact information and forms
- **Login (/login)**: User login interface (UI only)
- **Register (/register)**: User registration interface (UI only)

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```
   The application will be available at `http://localhost:8080`

3. **Build for Production**
   ```bash
   npm run build
   # or
   pnpm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   # or
   pnpm run preview
   ```

## Customization Guide

### Content Customization
- **Blog Posts**: Edit `src/Utlits/blogList.jsx` to modify blog content
- **Services**: Update `src/Utlits/serviceList.jsx` for service information
- **Images**: Replace files in `src/assets/img/` with your own images
- **Company Information**: Update text content in component files

### Styling Customization
- **Global Styles**: Modify `src/index.css`
- **Component Styles**: Each component has its own CSS file
- **Bootstrap**: Customize Bootstrap variables if needed
- **Animations**: Configure AOS and WowJS settings in components

### Backend Integration
- **Supabase**: Pre-configured in `src/integrations/supabase/`
- **Environment Variables**: Add your Supabase credentials to environment variables
- **API Integration**: Extend the Supabase client for your specific needs

## Development Notes

- **Build Output**: Production files are generated in the `dist/` directory
- **ESLint**: Code linting configured with React-specific rules
- **Hot Reload**: Development server supports hot module replacement
- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## License

This is a commercial template. Please ensure you have proper licensing for production use.