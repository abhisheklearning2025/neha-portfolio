# Neha Upadhyaya - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Email Service**: EmailJS (for contact form)
- **Deployment**: Vercel/Netlify

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Modal.tsx
├── lib/
│   ├── utils.ts
│   └── data.ts
├── public/
│   └── images/
│       └── profile.jpg
├── package.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your GitHub repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Import your GitHub repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables
5. Deploy!

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```js
colors: {
  primary: {...},
  secondary: {...},
}
```

### Content
All content is stored in `lib/data.ts`. Update the following objects:
- `personalInfo`
- `experiences`
- `projects`
- `skills`
- `education`
- `certifications`

### Styling
- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind classes directly in components
- Animations: Modify Framer Motion variants in individual components

## 📱 Features

- ✅ Fully responsive design
- ✅ Dark/Light theme toggle
- ✅ Smooth scroll navigation
- ✅ Interactive timeline
- ✅ Filterable project gallery
- ✅ Animated skill bars
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Accessibility compliant
- ✅ Performance optimized

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📧 Contact Form Setup

1. Create an account on [EmailJS](https://emailjs.com)
2. Create an email service
3. Create an email template
4. Get your service ID, template ID, and public key
5. Add them to your `.env.local` file

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **Build errors**
   - Ensure all environment variables are set
   - Check for TypeScript errors: `npm run type-check`

3. **Styling issues**
   - Clear browser cache
   - Ensure Tailwind CSS is properly configured

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Support

For support, email neha14pachori22@gmail.com or create an issue in the repository.