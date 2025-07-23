# Deployment Guide

This guide covers deploying the portfolio website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`npm install`)
- Environment variables configured

## Pre-deployment Checklist

1. **Update Content**
   - Review all content in `lib/data.ts`
   - Add your profile image to `public/images/profile.jpg`
   - Update meta tags in `app/layout.tsx`

2. **Test Locally**
   ```bash
   npm run build
   npm run start
   ```

3. **Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your EmailJS credentials
   - Update site URL

## Deployment Options

### 1. Vercel (Recommended)

#### Via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

#### Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 2. Netlify

#### Via Netlify Dashboard
1. Push your code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Connect to GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables
7. Click "Deploy site"

#### Via Netlify CLI
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### 3. Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables
6. Railway will auto-deploy

### 4. Render

1. Go to [render.com](https://render.com)
2. Create a new "Web Service"
3. Connect GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Start Command: `npm run start`
5. Add environment variables
6. Click "Create Web Service"

### 5. Self-hosting (VPS)

#### Using PM2
```bash
# On your server
git clone <your-repo>
cd portfolio
npm install
npm run build

# Install PM2
npm i -g pm2

# Start application
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Using Docker
```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Post-deployment

### 1. Custom Domain Setup

#### Vercel
1. Go to project settings
2. Navigate to "Domains"
3. Add your domain
4. Update DNS records as instructed

#### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Follow DNS configuration

### 2. SSL Certificate
- Vercel and Netlify provide automatic SSL
- For self-hosting, use Let's Encrypt:
  ```bash
  sudo certbot --nginx -d yourdomain.com
  ```

### 3. Performance Optimization

1. **Enable Image Optimization**
   - Use Next.js Image component
   - Configure image domains in `next.config.js`

2. **Enable Caching Headers**
   ```javascript
   // next.config.js
   async headers() {
     return [
       {
         source: '/:all*(svg|jpg|png)',
         locale: false,
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, must-revalidate',
           }
         ],
       },
     ]
   }
   ```

3. **Monitor Performance**
   - Use Vercel Analytics
   - Set up Google Analytics
   - Monitor Core Web Vitals

### 4. SEO Setup

1. **Submit Sitemap**
   - Generate sitemap
   - Submit to Google Search Console
   - Submit to Bing Webmaster Tools

2. **Social Media**
   - Update Open Graph images
   - Test with Facebook Debugger
   - Test with Twitter Card Validator

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart development server after changes
- Check deployment platform's environment variable settings

### 404 Errors on Refresh
For static hosting, create a `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Monitoring

1. **Uptime Monitoring**
   - Use UptimeRobot or Pingdom
   - Set up alerts

2. **Error Tracking**
   - Integrate Sentry
   - Monitor console errors

3. **Analytics**
   - Google Analytics
   - Vercel Analytics
   - Custom tracking

## Updates and Maintenance

1. **Regular Updates**
   ```bash
   # Update dependencies
   npm update
   
   # Check for vulnerabilities
   npm audit
   npm audit fix
   ```

2. **Backup Strategy**
   - Regular GitHub commits
   - Database backups (if applicable)
   - Environment variable backups

3. **Content Updates**
   - Update `lib/data.ts`
   - Rebuild and redeploy

## Support

For deployment issues:
- Check platform-specific documentation
- Review build logs
- Check environment variables
- Ensure all dependencies are installed

Happy deploying! 🚀