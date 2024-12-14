# Statistics-Web-App

Website for rochelle park recreation center
https://rpbasketball.herokuapp.com/

A dynamic web application built with React that provides sports-related content including statistics, league schedules, and video content.

## Features

- Responsive navigation system
- Multiple page routing with React Router
- Dedicated sections for:
  - Statistics visualization
  - League schedules and fixtures
  - Video content
  - User registration

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
cd <project-directory>
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   └── pages/
│       ├── Home.js
│       ├── SignUp.js
│       ├── Statistics.js
│       ├── LeagueSchedules.js
│       └── Videos.js
├── App.js
├── App.css
└── index.js
```

## Technologies Used

- React.js
- React Router for navigation
- CSS for styling

## Routes

- `/` - Home page
- `/statistics` - Sports statistics and analytics
- `/league-schedules` - Game schedules and fixtures
- `/videos` - Sports videos and highlights
- `/sign-up` - User registration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Create React App documentation
- React Router documentation
