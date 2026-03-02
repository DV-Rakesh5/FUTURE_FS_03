# FitZone Gym - Professional Business Website

A modern, responsive full-stack website for a local fitness business with booking and contact management features.

## 🚀 Features

- **Professional Design** - Modern, mobile-responsive website with smooth animations
- **Multiple Pages** - Home, About, Services, Contact, and Booking pages
- **Booking System** - Easy online booking for trials and training sessions
- **Contact Form** - Customer inquiry submission with email capture
- **Service Showcase** - Membership plans, group classes, and personal training packages
- **Responsive Layout** - Works great on desktop, tablet, and mobile devices
- **Database Integration** - SQLite database for storing bookings and contacts

## 📁 Project Structure

```
business-website/
├── server.js              # Express server setup
├── package.json           # Dependencies and scripts
├── database.db            # SQLite database (auto-created)
├── public/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── js/
│       └── main.js        # Client-side JavaScript
├── views/
│   ├── index.html         # Home page
│   ├── about.html         # About page
│   ├── services.html      # Services & pricing
│   ├── contact.html       # Contact page with FAQ
│   └── booking.html       # Booking form
└── routes/                # API routes (expandable)
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd business-website
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will run at `http://localhost:3000`

### 3. Access the Website

Open your browser and navigate to:
- **Home**: http://localhost:3000/
- **About**: http://localhost:3000/about
- **Services**: http://localhost:3000/services
- **Contact**: http://localhost:3000/contact
- **Booking**: http://localhost:3000/booking

## 📝 Customization Guide

### Change Business Name
Edit these files:
- `views/index.html` - Change "FitZone Gym" throughout
- `views/about.html` - Update business story
- `views/services.html` - Modify services and pricing
- `views/contact.html` - Update contact information

### Update Contact Information
Edit contact details in all HTML files:
- Phone number
- Email addresses
- Physical address
- Business hours

### Customize Colors
Edit `public/css/style.css`:
```css
:root {
  --primary-color: #ff6b35;    /* Orange - change for your brand */
  --secondary-color: #004e89;  /* Blue - change for your brand */
  --dark-color: #1a1a1a;
  --light-color: #f5f5f5;
}
```

### Add Your Own Content
- Replace emoji icons with real images
- Update service descriptions and pricing
- Add team member photos
- Insert your business testimonials

## 🔧 Available Endpoints

### API Routes
- `POST /api/contact` - Submit contact form
- `POST /api/booking` - Submit booking request
- `GET /api/bookings` - View all bookings (for admin)

### Page Routes
- `GET /` - Home page
- `GET /about` - About page
- `GET /services` - Services page
- `GET /contact` - Contact page
- `GET /booking` - Booking page

## 💾 Database

The application uses SQLite with two main tables:

### contacts table
- id (Primary Key)
- name (Text)
- email (Text)
- phone (Text)
- message (Text)
- created_at (Timestamp)

### bookings table
- id (Primary Key)
- name (Text)
- email (Text)
- phone (Text)
- date (Text)
- time (Text)
- service (Text)
- notes (Text)
- created_at (Timestamp)

## 🎨 Design Features

- **Clean & Professional**: Modern design that builds trust
- **Fast Loading**: Optimized assets and minimal dependencies
- **Mobile-First**: Responsive design works on all devices
- **User-Friendly**: Easy navigation and clear CTAs
- **Accessible**: Semantic HTML and proper contrast ratios
- **SEO-Ready**: Proper meta tags and structure

## 🚀 Deployment Options

### Local Development
```bash
npm start
```

### Production (Node.js)
```bash
npm start
# Server runs on port 3000
```

### Using Heroku
```bash
heroku create your-app-name
git push heroku main
```

### Using Vercel (requires modifications for serverless)
Modify `server.js` to work with Vercel's serverless functions.

## 📊 Next Steps to Customize

1. **Add your logo** - Replace the emoji with an actual logo image
2. **Update team photos** - Add real images of your team
3. **Customize testimonials** - Use real customer quotes
4. **Adjust pricing** - Set your actual membership prices
5. **Add social media** - Link to your social profiles
6. **Set up email notifications** - Integrate with email service
7. **Add payment system** - Connect Stripe or PayPal for online payments
8. **Create admin dashboard** - View and manage bookings

## 🎯 For Your Pitch

This website demonstrates:
- ✅ Professional online presence
- ✅ Attractive customer interface
- ✅ Automated booking system (saves time)
- ✅ Lead capture via contact forms
- ✅ 24/7 availability (customer can book anytime)
- ✅ Mobile-responsive design
- ✅ Easy to maintain and update

## 💡 Monetization Tips

1. **Membership Sign-ups** - Integrate online payment to accept memberships
2. **Class Bookings** - Premium pricing for popular classes
3. **Personal Training** - Offer premium packages
4. **Affiliate Links** - Recommend fitness products
5. **Sponsorships** - Partner with supplement/equipment brands
6. **Premium Content** - Workout videos, nutrition guides

## 🆘 Troubleshooting

### Port Already in Use
Change port in `server.js`:
```javascript
const PORT = process.env.PORT || 3001; // Change to different port
```

### Database Errors
Delete `database.db` and restart the server to recreate the database.

### Module Not Found
```bash
npm install
```

## 📧 Support

For issues or questions about customization, review the code comments in `server.js` and the HTML files.

---

**Ready to pitch this to your local business! Good luck! 🎯**
