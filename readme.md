# Alisha's Grievance Portal 💖

A romantic and playful grievance submission portal built with React and Vite. This application allows Alisha to submit her concerns, complaints, or requests in a fun and loving way, with automatic email notifications sent via EmailJS.

## ✨ Features

* **Secure Login System** : Protected access with custom credentials
* **Beautiful UI** : Pink and purple gradient theme with glassmorphism effects
* **Mood Selection** : Choose from various emoji-based mood options
* **Severity Levels** : Fun severity options like "Cuddles would fix this" and "Ghumi Ghumi would fix this"
* **Email Integration** : Automatic email notifications using EmailJS
* **Responsive Design** : Works perfectly on all device sizes
* **Form Validation** : Client-side validation with helpful error messages
* **Success/Error States** : Clear feedback for form submissions

## 🛠️ Tech Stack

* **Frontend** : React 18.2.0 + Vite
* **Styling** : Tailwind CSS with custom animations
* **Email Service** : EmailJS for automated email delivery
* **Icons** : Lucide React for beautiful icons
* **Deployment Ready** : Optimized build configuration

## 🚀 Getting Started

### Prerequisites

* Node.js (version 14 or higher)
* npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alisha-grievance-portal
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory with the following configuration:
   ```env
   # EmailJS Configuration
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

   # App Configuration
   REACT_APP_LOGIN_USERNAME=your_username
   REACT_APP_LOGIN_PASSWORD=your_password
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📧 EmailJS Setup

To enable email functionality, you'll need to:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Set up an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with the following variables:
   * `{{to_name}}` - Recipient name
   * `{{from_name}}` - Sender name
   * `{{title}}` - Grievance title
   * `{{description}}` - Detailed description
   * `{{mood}}` - Selected mood
   * `{{severity}}` - Severity level
   * `{{date}}` - Submission date
   * `{{grievance_id}}` - Auto-generated ID
4. **Update your environment variables** with your EmailJS credentials

## 🎨 Customization

### Login Credentials

Update the login credentials in your `.env` file:

```env
REACT_APP_LOGIN_USERNAME=your_desired_username
REACT_APP_LOGIN_PASSWORD=your_desired_password
```

### Mood Options

Modify the `moodOptions` array in `src/App.jsx` to customize available moods:

```javascript
const moodOptions = [
  { value: 'happy', label: '😊 Happy', emoji: '😊' },
  { value: 'excited', label: '🤩 Excited', emoji: '🤩' },
  // Add more options...
]
```

### Severity Levels

Customize the `severityLevels` array to match your preferences:

```javascript
const severityLevels = [
  { value: 'low', label: 'A hug would fix this 🤗', emoji: '🤗' },
  { value: 'high', label: 'Emergency chocolate needed 🍫', emoji: '🍫' },
  // Add more levels...
]
```

### Theme Colors

The application uses a custom Tailwind configuration. Modify `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  pink: {
    // Custom pink shades
  },
  purple: {
    // Custom purple shades
  }
}
```

## 📱 Usage

1. **Login** : Enter the configured username and password
2. **Fill the form** :

* Add a title for your grievance
* Describe what's bothering you
* Select your current mood
* Choose the severity level

1. **Submit** : Click the submit button to send the grievance
2. **Confirmation** : Receive instant feedback on submission status

## 🔧 Scripts

* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run preview` - Preview production build locally

## 📂 Project Structure

```
alisha-grievance-portal/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

* **Vercel** : Connect your GitHub repository for automatic deployments
* **Netlify** : Drag and drop the `dist` folder or connect via Git
* **GitHub Pages** : Use GitHub Actions for automated deployment
* **Firebase Hosting** : Deploy using Firebase CLI

### Environment Variables for Production

Make sure to set your environment variables in your deployment platform:

* `REACT_APP_EMAILJS_SERVICE_ID`
* `REACT_APP_EMAILJS_TEMPLATE_ID`
* `REACT_APP_EMAILJS_PUBLIC_KEY`
* `REACT_APP_LOGIN_USERNAME`
* `REACT_APP_LOGIN_PASSWORD`

## 🔒 Security Notes

* Login credentials are stored in environment variables
* No sensitive data is stored in browser storage
* Form validation prevents empty submissions
* EmailJS handles secure email delivery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is created with love for personal use. Feel free to adapt it for your own romantic projects! 💕

## 💖 Made with Love

This grievance portal was crafted with lots of love for my girlfriend, pink gradients, and romantic emojis. Perfect for couples who want to handle their disagreements in the most adorable way possible!
