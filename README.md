# Recipe Collection Website

A modern, responsive recipe website that allows users to browse, filter, sort, and discover recipes from around the world.

## 📋 Project Description

This Recipe Collection website provides an intuitive interface for exploring various recipes with advanced filtering and sorting capabilities. Users can filter by cuisine type, ingredient count, search for specific recipes, sort by various criteria, and get random recipe suggestions.

## ✨ Features

- **Recipe Display**: Browse all recipes in an attractive grid layout
- **Advanced Filtering**: 
  - Filter by cuisine type (Italian, Asian, American, etc.)
  - Filter by maximum number of ingredients (5 or less, 10 or less)
  - Search functionality to find recipes by name, ingredients, or source
- **Multiple Sorting Options**:
  - Sort by name (A-Z, Z-A)
  - Sort by cooking time (low to high, high to low)
  - Sort by number of ingredients (few to many, many to few)
- **Random Recipe Selector**: Discover new recipes with the random selection feature
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Featured Recipe Display**: Detailed view of selected recipes with full ingredient lists

## 🛠 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: Dynamic functionality and interactivity
- **Responsive Design**: Mobile-first approach

## 🚀 Live Demo

Check out the live version of the project:  
**[Recipe Collection Website](https://loozcoockingschool.netlify.app/)**

## 📁 Project Structure

```
recipe-collection/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── assets/             # Image assets
    ├── baked-chicken.jpg
    ├── cheat's-cheesy-focaccia.jpg
    ├── chicken-paprikash.jpg
    ├── deep-fried-fish-bones.jpg
    ├── fish-dish.jpg
    ├── grilled.jpg
    ├── individual-vegetarian-lasagnes.jpg
    ├── meat.jpg
    ├── vegetarian-shepherd's-pie.jpg
    └── vegetarian-stir-fried-garlic-s.jpg
```

## 🎯 How to Use

1. **Browse Recipes**: All recipes are displayed on page load
2. **Filter Recipes**:
   - Use the cuisine dropdown to filter by specific cuisine types
   - Set maximum ingredient count to find simpler recipes
   - Use the search bar to find recipes by keywords
3. **Sort Recipes**: Use the sort dropdown to organize recipes by name, cooking time, or ingredient count
4. **Discover Random Recipes**: Click the "Pick a Random Recipe" button to get a featured recipe suggestion
5. **View Recipe Details**: Click on recipe source links to view full recipes on original websites

## 🔧 Setup Instructions

To run this project locally:

1. Clone the repository or download the project files
2. Ensure all files are in the same directory structure
3. Open `index.html` in your web browser
4. No additional dependencies or build process required

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (320px - 767px)

## 🌟 Key JavaScript Features

- Dynamic recipe filtering based on multiple criteria
- Real-time search functionality
- Multiple sorting algorithms
- Random recipe selection
- DOM manipulation for dynamic content updates
- Event handling for user interactions

## 📝 Recipe Data Structure

Each recipe object contains:
- `name`: Recipe title
- `cuisineType`: Array of cuisine categories
- `ingredients`: Array of ingredient strings
- `source`: Recipe author/source
- `totalTime`: Cooking time in minutes
- `url`: Link to original recipe
- `image`: Path to recipe image

## 🤝 Contributing

This is a learning project. Feel free to fork and modify for your own educational purposes.

## 📄 License

This project is created for educational purposes as part of a coding exercise.

## 👨‍💻 Developer

- **GitHub**: [Looziolooz](https://github.com/Looziolooz)
- **Project Repository**: [cookingschool](https://github.com/Looziolooz/cookingschool)

---

f