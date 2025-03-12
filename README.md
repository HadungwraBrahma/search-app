# Search App

A React-based search component that allows users to search for stocks by ticker symbol or company name. The component features real-time search results, recent search history, and a dark mode toggle.

<img src="/screenshots/light-mode.png" alt="Alt text">

## Features

- Real-time search results as you type
- Recent search history
- Dark mode toggle with day/night emoji indicators
- Keyboard shortcuts (Ctrl+K / Cmd+K to open search)
- Responsive design for all screen sizes

## Project Setup Instructions

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HadungwraBrahma/search-app.git
cd search-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Folder Structure

```
search-app/
├── public/
│   └── search.svg
├── screenshots/
│   ├── light-mode.png
│   ├── dark-mode.png
│   └── mobile-view.png
├── src/
│   ├── assets/
│   │   └── logos/
│   │       ├── AAPL.png
│   │       ├── AMZN.png
│   │       ├── GOOGL.png
│   │       ├── SHOP.png
│   │       ├── SPOT.png
│   │       └── TSLA.png
│   ├── components/
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.js
│   │   │   └── SearchBar.css
│   │   ├── SearchResults/
│   │   │   ├── SearchResults.js
│   │   │   └── SearchResults.css
│   │   ├── StockItem/
│   │   │   ├── StockItem.js
│   │   │   └── StockItem.css
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### Key Components

- **SearchBar.js**: Main component that handles the search dialog and keyboard shortcuts
- **SearchResults.js**: Displays search results and recent searches
- **StockItem.js**: Individual stock item component with logo, company info, and price

## Screenshots

### Light Mode

<img src="/screenshots/light-mode.png" alt="Alt text">

### Dark Mode

<img src="/screenshots/dark-mode.png" alt="Alt text">

### Mobile View

<img src="/screenshots/mobile-view.png" alt="Alt text">

## Usage

### Keyboard Shortcuts

- Press `Ctrl+K` or `Cmd+K` to open the search dialog
- Press `Esc` to close the search dialog

### Search Functionality

The search component matches both ticker symbols and company names. As you type, results will appear in real-time.

### Dark Mode

Click the dark mode toggle button to switch between light and dark themes. The button shows a moon emoji (🌙) in light mode and a sun emoji (☀️) in dark mode.

## Project Structure Explanation

- **components/**: Contains all React components broken down into smaller, reusable pieces
- **src/assets/logos/**: Stock logo images used in the mock stock data
- **screenshots/**: Images used in this README file
- **App.js**: Main application component that renders the SearchBar
- **main.js**: Entry point of the React application


By [Hadungwra Brahma](https://github.com/HadungwraBrahma)
