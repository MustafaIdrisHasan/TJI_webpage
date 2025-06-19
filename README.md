# TJI Website - Modern Social Media Platform

A sophisticated React-based social media platform featuring Instagram-style post overlays, expandable feeds, and a beautiful neumorphic dark theme design. Built with modern web technologies and responsive design principles.

## 🚀 Features

### Core Functionality
- **Instagram-Style Post Overlay**: Click any post to view it in a full-screen overlay with image and metadata sidebar
- **Expandable Feed**: Toggle between compact masonry layout and full-width single-column feed
- **Neumorphic Design**: Beautiful dark theme with soft shadows and modern aesthetics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Stories, comments, likes, and social interactions

### User Interface
- **Modern Navigation**: Clean navbar with search functionality and user controls
- **Dynamic Layouts**: Adaptive layouts that respond to user preferences
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Accessibility**: Keyboard navigation support (ESC key for overlay dismissal)

## 📁 Project Structure

```
TJI_website-main/
├── public/                     # Static assets and HTML template
│   ├── index.html             # Main HTML template
│   └── manifest.json          # PWA manifest file
├── src/                       # Source code directory
│   ├── components/            # Reusable React components
│   │   ├── Authorization/     # Authentication components
│   │   ├── Comments/          # Comment system components
│   │   ├── Feed/              # Feed-related components
│   │   ├── Jobs/              # Job listings components
│   │   ├── Layout/            # Layout wrapper components
│   │   ├── MessageBoard/      # Message board functionality
│   │   ├── Messages/          # Chat and messaging components
│   │   ├── Navigation/        # Navigation components (Navbar, Sidebar, TabBar)
│   │   ├── Network/           # Networking features
│   │   ├── Notifications/     # Notification system
│   │   ├── Profile/           # User profile components
│   │   ├── Search/            # Search functionality
│   │   ├── Settings/          # User settings and preferences
│   │   └── Tickets/           # Support ticket system
│   ├── context/               # React Context providers
│   ├── pages/                 # Main page components
│   ├── styles/                # Global styles and themes
│   ├── App.js                 # Main application component
│   ├── App.css                # Application-wide styles
│   ├── index.js               # Application entry point
│   └── index.css              # Global CSS styles
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Dependency lock file
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```

## 🗂️ Detailed File Structure

### `/public` Directory
**Purpose**: Contains static assets served directly by the web server

- **`index.html`**: The main HTML template that serves as the entry point for the React application. Contains the root div where React components are mounted.
- **`manifest.json`**: Progressive Web App (PWA) manifest file defining app metadata, icons, and display preferences.

### `/src` Directory
**Purpose**: Contains all the source code for the React application

#### `/src/components` - Reusable Components

##### `/Authorization`
- **`Auth.jsx`** & **`Auth.css`**: Authentication wrapper component handling login/signup flows
- **Purpose**: Manages user authentication state and UI

##### `/Comments`
- **`CommentSection.jsx`** & **`CommentSection.css`**: Interactive comment system with nested replies
- **Features**: Add comments, like comments, delete comments, real-time updates

##### `/Feed`
- **`FeedWithTags.jsx`** & **`FeedWithTags.css`**: Main feed component with tag filtering
- **`NewPost.jsx`** & **`NewPost.css`**: Post creation interface with media upload
- **Features**: Create posts, tag filtering, media attachments

##### `/Jobs`
- **`JobsPage.jsx`** & **`JobsPage.css`**: Job listings and career opportunities
- **Features**: Job search, application tracking, company profiles

##### `/Layout`
- **`MainLayout.jsx`** & **`MainLayout.css`**: Primary layout wrapper component
- **Purpose**: Provides consistent layout structure across all pages
- **Features**: Header, sidebar, main content area, responsive breakpoints

##### `/MessageBoard`
- **`MessageBoard.jsx`** & **`MessageBoard.css`**: Community message board
- **Features**: Public messaging, announcements, community discussions

##### `/Messages`
- **`Messages.jsx`** & **`Messages.css`**: Private messaging interface
- **`Chat.jsx`** & **`Chat.css`**: Individual chat conversation component
- **Features**: Real-time messaging, chat history, message status

##### `/Navigation`
- **`Navbar.jsx`** & **`Navbar.css`**: Top navigation bar with search and user controls
- **`Sidebar.jsx`** & **`Sidebar.css`**: Left sidebar navigation menu
- **`TabBar.jsx`** & **`TabBar.css`**: Mobile bottom tab navigation
- **Features**: Responsive navigation, search integration, user menu

##### `/Network`
- **`NetworkPage.jsx`** & **`NetworkPage.css`**: Professional networking features
- **Features**: Connection requests, network growth, professional contacts

##### `/Notifications`
- **`NotificationsPage.jsx`** & **`NotificationsPage.css`**: Notification center
- **Features**: Real-time notifications, notification history, settings

##### `/Profile`
- **`Profile.jsx`** & **`Profile.css`**: Basic user profile component
- **`EnhancedProfile.jsx`** & **`EnhancedProfile.css`**: Advanced profile with LinkedIn-style layout
- **Features**: Profile editing, post gallery, professional information

##### `/Search`
- **`SearchResults.jsx`** & **`SearchResults.css`**: Search results display
- **Features**: Filtered search results, advanced search options

##### `/Settings`
- **`SettingsPage.jsx`** & **`SettingsPage.css`**: Main settings interface
- **`AccountInfo.jsx`**: Account information management
- **`NotificationsSettings.jsx`**: Notification preferences
- **`SecuritySettings.jsx`**: Security and privacy settings
- **`AdvancedSettings.jsx`** & **`AdvancedSettings.css`**: Advanced configuration options

##### `/Tickets`
- **`TicketList.jsx`** & **`TicketList.css`**: Support ticket management
- **Features**: Create tickets, track status, support communication

#### Root Components
- **`NotificationsPanel.jsx`** & **`NotificationsPanel.css`**: Global notification panel
- **`SearchDrawer.jsx`** & **`SearchDrawer.css`**: Slide-out search interface
- **`SearchModal.jsx`** & **`SearchModal.css`**: Modal search overlay

### `/src/context` - State Management
- **`NotificationContext.jsx`**: React Context for global notification state management
- **Purpose**: Provides notification state and actions throughout the app

### `/src/pages` - Main Pages
**Purpose**: Top-level page components that represent different routes/views

- **`Home.jsx`** & **`Home.css`**: Main dashboard with feed, stories, and Instagram-style overlay
- **`Profile.jsx`** & **`Profile.css`**: User profile page
- **`Messages.jsx`** & **`Messages.css`**: Messaging interface
- **`Notifications.jsx`** & **`Notifications.css`**: Notifications page
- **`Search.jsx`** & **`Search.css`**: Search results page
- **`Settings.jsx`** & **`Settings.css`**: User settings page
- **`Create.jsx`** & **`Create.css`**: Content creation page
- **`Explore.jsx`** & **`Explore.css`**: Content discovery page
- **`Auth/Login.jsx`** & **`Auth/SignUp.jsx`**: Authentication pages
- **`GroupChats.jsx`**: Group messaging functionality
- **`Requests.jsx`**: Connection and friend requests
- **`TicketChats.jsx`**: Support ticket conversations

### `/src/styles` - Global Styling
- **`theme.css`**: CSS custom properties (variables) for consistent theming
- **`neumorphic.css`**: Neumorphic design system styles and utilities
- **Purpose**: Provides consistent design tokens and reusable style patterns

### Root Files
- **`App.js`**: Main application component with routing and global state
- **`App.css`**: Application-wide styles and layout
- **`index.js`**: React application entry point and DOM rendering
- **`index.css`**: Global CSS reset and base styles
- **`reportWebVitals.js`**: Performance monitoring utilities

## 🎨 Key Features Explained

### Instagram-Style Post Overlay
**Location**: `src/pages/Home.jsx` & `src/pages/Home.css`

**How it works**:
1. **Trigger**: Click any post in the gallery
2. **Display**: Full-screen overlay with dark backdrop
3. **Layout**: Large image on left, metadata sidebar on right
4. **Interaction**: ESC key or click outside to close
5. **Responsive**: Stacks vertically on mobile devices

**CSS Classes**:
- `.post-overlay`: Main overlay container
- `.overlay-inner`: Content wrapper
- `.overlay-image`: Image display area
- `.overlay-meta`: Metadata sidebar
- `.overlay-close`: Close button

### Expandable Feed System
**Location**: `src/pages/Home.jsx` & `src/pages/Home.css`

**Modes**:
1. **Collapsed Mode**: 2-column masonry layout with clickable posts
2. **Expanded Mode**: Single-column layout with disabled post clicks

**Toggle Button**: Uses Heroicons for expand/collapse icons
**CSS Classes**:
- `.feed-expanded`: Applied to enable expanded mode
- `.post-gallery.wide`: Single column layout
- `.post-gallery`: Default masonry layout

### Neumorphic Design System
**Location**: `src/styles/neumorphic.css` & `src/styles/theme.css`

**Features**:
- Soft inset and outset shadows
- Consistent color palette
- Smooth transitions and hover effects
- Dark theme optimized for modern displays

**CSS Variables**:
- `--background`: Primary background color
- `--secondary-bg`: Secondary background color
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--accent-color`: Brand accent color
- `--shadow-neumorphic`: Standard neumorphic shadow

## 🛠️ Technology Stack

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for single-page application
- **React Context**: State management for global application state

### Styling & Design
- **CSS3**: Modern CSS with custom properties and grid/flexbox
- **Neumorphic Design**: Soft UI design language with depth and shadows
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **CSS Animations**: Smooth transitions and hover effects

### Icons & Assets
- **Heroicons**: Modern SVG icon library for React
- **Lucide React**: Additional icon set for enhanced UI
- **Custom Assets**: Branded images and graphics

### Development Tools
- **Create React App**: Build toolchain and development server
- **ESLint**: Code linting and quality assurance
- **Git**: Version control with comprehensive .gitignore

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MustafaIdrisHasan/TJI_webpage.git
   cd TJI_webpage
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

### Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm test`**: Launches the test runner
- **`npm run build`**: Builds the app for production
- **`npm run eject`**: Ejects from Create React App (irreversible)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Stack layout, bottom navigation)
- **Tablet**: 768px - 1024px (Collapsible sidebar)
- **Desktop**: > 1024px (Full layout with sidebar)

### Adaptive Features
- **Navigation**: Transforms from sidebar to bottom tabs on mobile
- **Post Overlay**: Stacks image and metadata vertically on small screens
- **Feed Layout**: Adjusts from masonry to single column based on screen size
- **Typography**: Scales appropriately across device sizes

## 🎯 Component Architecture

### Layout Hierarchy
```
App
├── MainLayout
│   ├── Navbar (Top navigation)
│   ├── Sidebar (Left navigation)
│   └── Main Content Area
│       ├── Home (Feed + Stories + Overlay)
│       ├── Profile (User information + Posts)
│       ├── Messages (Chat interface)
│       ├── Notifications (Activity feed)
│       └── Settings (User preferences)
└── TabBar (Mobile navigation)
```

### State Management
- **Local State**: Component-specific state using `useState`
- **Context API**: Global state for notifications and user data
- **Props**: Data flow between parent and child components

### Event Handling
- **Click Events**: Post interactions, navigation, overlay triggers
- **Keyboard Events**: ESC key for overlay dismissal, accessibility
- **Scroll Events**: Infinite scroll, sticky positioning
- **Resize Events**: Responsive layout adjustments

## 🔧 Development Guidelines

### Code Organization
- **Components**: One component per file with co-located CSS
- **Naming**: PascalCase for components, camelCase for functions
- **File Structure**: Logical grouping by feature/functionality
- **Imports**: Absolute imports from `src/` directory

### CSS Best Practices
- **CSS Variables**: Use custom properties for consistent theming
- **BEM Methodology**: Block-Element-Modifier naming convention
- **Mobile First**: Start with mobile styles, enhance for larger screens
- **Performance**: Minimize CSS bundle size, use efficient selectors

### React Patterns
- **Functional Components**: Use hooks instead of class components
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Context**: Use for global state, avoid prop drilling
- **Error Boundaries**: Implement error handling for robust UX

## 🎨 Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --background: #0a0a0a;           /* Main background */
  --secondary-bg: #1a1a1a;        /* Card backgrounds */
  --accent-color: #33bd94;         /* Brand accent */

  /* Text Colors */
  --text-primary: #ffffff;         /* Primary text */
  --text-secondary: #b0b0b0;       /* Secondary text */
  --text-muted: #808080;           /* Muted text */

  /* Interactive Colors */
  --hover-bg: #2a2a2a;            /* Hover states */
  --border-color: rgba(255, 255, 255, 0.08);
}
```

### Typography Scale
- **Headings**: 32px, 24px, 20px, 18px, 16px
- **Body Text**: 16px (desktop), 14px (mobile)
- **Small Text**: 14px, 12px
- **Font Family**: System font stack for optimal performance

### Spacing System
- **Base Unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- **Usage**: Consistent spacing throughout the application

### Shadow System
```css
/* Neumorphic Shadows */
--shadow-neumorphic:
  8px 8px 16px rgba(0, 0, 0, 0.3),
  -8px -8px 16px rgba(255, 255, 255, 0.02);

--shadow-neumorphic-inset:
  inset 4px 4px 8px rgba(0, 0, 0, 0.3),
  inset -4px -4px 8px rgba(255, 255, 255, 0.02);
```

## 🚀 Performance Optimizations

### Bundle Optimization
- **Code Splitting**: Lazy loading for route-based components
- **Tree Shaking**: Remove unused code from final bundle
- **Asset Optimization**: Compressed images and optimized fonts

### Runtime Performance
- **React.memo**: Prevent unnecessary re-renders
- **useCallback/useMemo**: Optimize expensive computations
- **Virtual Scrolling**: Handle large lists efficiently
- **Image Lazy Loading**: Load images as they enter viewport

### Loading States
- **Skeleton Screens**: Provide visual feedback during loading
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Error Boundaries**: Graceful error handling and recovery

## 🧪 Testing Strategy

### Testing Approach
- **Unit Tests**: Test individual components and functions
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows
- **Visual Regression**: Ensure UI consistency

### Testing Tools
- **Jest**: JavaScript testing framework
- **React Testing Library**: Component testing utilities
- **Cypress**: End-to-end testing framework
- **Storybook**: Component development and testing

## 🔒 Security Considerations

### Data Protection
- **Input Validation**: Sanitize all user inputs
- **XSS Prevention**: Escape user-generated content
- **CSRF Protection**: Implement proper token validation
- **Secure Headers**: Set appropriate security headers

### Authentication
- **JWT Tokens**: Secure token-based authentication
- **Session Management**: Proper session handling
- **Password Security**: Strong password requirements
- **Two-Factor Auth**: Optional 2FA for enhanced security

## 🌐 Browser Support

### Supported Browsers
- **Chrome**: 90+ (Recommended)
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Progressive Enhancement
- **Core Functionality**: Works in all modern browsers
- **Enhanced Features**: Advanced features for capable browsers
- **Graceful Degradation**: Fallbacks for older browsers

## 📈 Future Enhancements

### Planned Features
- **Real-time Messaging**: WebSocket-based chat system
- **Push Notifications**: Browser notification support
- **Offline Support**: Service worker for offline functionality
- **Dark/Light Theme**: User-selectable theme options

### Technical Improvements
- **TypeScript Migration**: Gradual migration to TypeScript
- **State Management**: Consider Redux or Zustand for complex state
- **Testing Coverage**: Increase test coverage to 90%+
- **Performance Monitoring**: Implement analytics and monitoring

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Follow existing code style and conventions
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

### Pull Request Guidelines
- Provide clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass
- Request review from maintainers

## 📞 Support & Contact

### Getting Help
- **Issues**: Report bugs and feature requests on GitHub
- **Discussions**: Join community discussions
- **Documentation**: Refer to this README and inline comments
- **Code Review**: Request code review for complex changes

### Maintainers
- **Primary**: Mustafa Idris Hasan ([@MustafaIdrisHasan](https://github.com/MustafaIdrisHasan))
- **Repository**: [TJI_webpage](https://github.com/MustafaIdrisHasan/TJI_webpage)

## 📄 License

This project is part of the TJI platform development. All rights reserved.

---

**Built with ❤️ using React and modern web technologies**

*Last updated: June 2025*