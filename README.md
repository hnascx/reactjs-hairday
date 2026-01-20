# Hair Day 💇

Haircut scheduling system developed with React, TypeScript and Tailwind CSS. A modern and responsive application for managing service schedules.

## 📋 About the Project

Hair Day is a web application that allows you to schedule and manage haircuts in a simple and intuitive way. The application offers a clean and modern interface, with full support for mobile and desktop devices.

## ✨ Features

- 📅 **Date Selection**: Choose the desired date through an interactive calendar
- ⏰ **Time Selection**: Choose from available times organized by periods (Morning, Afternoon, Evening)
- 👤 **Client Registration**: Enter the client's name for the appointment
- 📊 **Schedule View**: View all appointments organized by date and period
- 🗑️ **Appointment Deletion**: Easily remove appointments
- 💾 **Local Persistence**: Data is automatically saved in the browser's localStorage
- 📱 **Responsive Design**: Interface adaptable to different screen sizes

## 🛠️ Technologies

- **React 19** - JavaScript library for building interfaces
- **TypeScript** - JavaScript superset with static typing
- **Vite** - Extremely fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible and unstyled components
- **React Day Picker** - Calendar component
- **date-fns** - Library for date manipulation
- **Lucide React** - Modern and lightweight icons
- **Class Variance Authority** - Class variant management

## 🚀 How to Run

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hnascx/reactjs-hairday.git
cd hairday
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Access the application at `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Creates the production build
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Runs the linter to check for code issues

## 📁 Project Structure

```
hairday/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── schedules/          # Scheduling section components
│   │   │   │   ├── date-picker-schedule/
│   │   │   │   └── schedule-tables/
│   │   │   └── sidebar/            # Scheduling sidebar components
│   │   │       ├── client-section/
│   │   │       ├── date-picker/
│   │   │       └── hour-range/
│   │   └── ui/                     # Reusable UI components
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── popover.tsx
│   ├── contexts/
│   │   └── ScheduleContext.tsx     # Context API for state management
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── styles/
│   │   ├── assets/                 # Assets (logo, favicon)
│   │   └── index.css               # Global styles and Tailwind theme
│   ├── types/
│   │   └── schedule.ts             # TypeScript type definitions
│   ├── App.tsx                     # Main component
│   └── main.tsx                    # Application entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Design

The application uses a dark theme with custom colors:
- **Background**: Dark gray tones (#050505 to #232225)
- **Accent**: Golden yellow (#b8952e) for interactive elements
- **Typography**: Catamaran (Google Fonts)

## 📝 Technical Features

- **Form Validation**: Real-time validation of required fields
- **Conflict Prevention**: System prevents duplicate appointments at the same time
- **Period Organization**: Appointments automatically grouped by Morning (09h-12h), Afternoon (13h-18h) and Evening (19h-21h)
- **Date Filter**: View appointments for a specific date
- **Data Persistence**: All appointments are automatically saved to localStorage
