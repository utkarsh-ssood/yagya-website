# Yagya Website

This repository contains the source code for the **Yagya Website**, a React-based web application built with TypeScript and Vite. The website is designed to provide information about the **Shri Sidheshwar Shiv Mandir** and its activities, including the **1101 Kundiya Rudra Maha Yagya**.

## Features

- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices.
- **Dynamic Navbar**: Hamburger menu with scroll lock and overlay functionality.
- **Pages**:
  - **Home**: Highlights the Maha Yagya and its significance.
  - **About**: Provides detailed information about the temple and its mission.
  - **Donate**: Allows users to donate via UPI with a copy-to-clipboard feature.
  - **Trustees**: Displays a list of trustees with their roles and contact information.
  - **Contact**: Contact form for inquiries and feedback.
- **Image Gallery**: Dynamic image carousel with swipe functionality.
- **Dark/Light Theme Support**: Adjusts based on the user's system preferences.

## Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules, custom global styles
- **Routing**: React Router
- **State Management**: React Hooks

## Folder Structure

```plaintext
yagya-website/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Images and other media
│   ├── components/         # Reusable components (e.g., Navbar, Footer)
│   ├── data/               # Static data (e.g., trustees.ts)
│   ├── pages/              # Page components (e.g., Home, About, Donate)
│   ├── styles/             # Global and page-specific styles
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── [index.html](http://_vscodecontentref_/0)          # HTML template
├── [tsconfig.json](http://_vscodecontentref_/1)           # TypeScript configuration
├── [vite.config.ts](http://_vscodecontentref_/2)          # Vite configuration
└── [package.json](http://_vscodecontentref_/3)            # Project metadata and dependencies