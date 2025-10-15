// Recipe data
        const recipes = [
            {
                name: 'Individual vegetarian lasagnes',
                cuisineType: ['italian'],
                ingredients: [
                    '1.2 kg cherry tomatoes',
                    '5 sprigs of fresh thyme',
                    'extra virgin olive oil',
                    '2 shallots',
                    '2 cloves of garlic',
                    '500 g baby spinach',
                    '8-12 fresh or dried lasagne sheets',
                    '350 g ricotta cheese',
                    'WHITE SAUCE',
                    '600 ml milk',
                    '25 g unsalted butter',
                    '2 heaped tablespoons flour',
                    '150 g vegetarian sharp, mature cheese',
                    '100 g mozzarella'
                ],
                source: 'Jamie Oliver',
                totalTime: 130,
                url: 'http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/',
                image: './recipe-images/individual-vegetarian-lasagnes.jpg'
            },
            {
                name: 'Vegetarian Stir-Fried Garlic Scape',
                cuisineType: ['Balanced'],
                ingredients: [
                    '8 oz. garlic scapes',
                    '3 oz. baby corn',
                    '3 oz. carrots',
                    '1 oz. dried shiitake mushrooms',
                    '1 clove of garlic sliced thinly',
                    '3 slices of fresh ginger root',
                    '2 tablespoons vegetable oil',
                    '1/4 cup shaoxing cooking wine',
                    '1/4 vegetarian stock or water',
                    '1 tablespoon light soy sauce',
                    '1 teaspoon sugar',
                    '1 teaspoon cornstarch',
                    '1/4 teaspoon ground white pepper'
                ],
                source: 'Red Cook',
                totalTime: null,
                url: 'http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/',
                image: './recipe-images/vegetarian-stir-fried-garlic-s.jpg'
            },
            {
                name: 'Cheat’s cheesy focaccia',
                cuisineType: ['Italian'],
                ingredients: [
                    '500g pack bread mix',
                    '2 tbsp olive oil , plus a little extra for drizzling',
                    '25g parmesan (or vegetarian alternative), grated',
                    '75g dolcelatte cheese (or vegetarian alternative)'
                ],
                source: 'BBC Good Food',
                totalTime: 40,
                url: 'https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia',
                image: './recipe-images/cheat’s-cheesy-focaccia.jpg'
            },
            {
                name: "Vegetarian Shepherd's Pie",
                cuisineType: ['Balanced', 'High-Fiber'],
                ingredients: [
                    '2 tablespoons extra-virgin olive oil',
                    '1 large onion, finely diced',
                    '2 carrots, peeled and thinly sliced',
                    '2 celery stalks, thinly sliced',
                    '10 ounces cremini mushrooms, trimmed and sliced',
                    '1 tablespoon tomato paste',
                    "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
                    '1 dried bay leaf',
                    '1 cup French green lentils, picked over',
                    'Kosher salt and freshly ground pepper',
                    '1 cup frozen peas',
                    '2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces',
                    '4 cloves garlic',
                    '4 tablespoons unsalted butter',
                    '1/2 cup whole milk, warmed'
                ],
                source: 'Martha Stewart',
                totalTime: 120,
                url: 'https://www.marthastewart.com/1535235/vegetarian-shepherds-pie',
                image: "./recipe-images/vegetarian-shepherd's-pie.jpg"
            },
            {
                name: 'Chicken Paprikash',
                cuisineType: ['Low-Carb'],
                ingredients: [
                    '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
                    '1/2 teaspoon salt',
                    '1/4 teaspoon black pepper',
                    '1 tablespoon butter – cultured unsalted (or olive oil)',
                    '240 grams onion sliced thin (1 large onion)',
                    '70 grams Anaheim pepper chopped (1 large pepper)',
                    '25 grams paprika (about 1/4 cup)',
                    '1 cup chicken stock',
                    '1/2 teaspoon salt',
                    '1/2 cup sour cream',
                    '1 tablespoon flour – all-purpose'
                ],
                source: 'No Recipes',
                totalTime: 80,
                url: 'http://norecipes.com/recipe/chicken-paprikash/',
                image: './recipe-images/chicken-paprikash.jpg'
            },
            {
                name: 'Baked Chicken',
                cuisineType: ['american'],
                ingredients: [
                    '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
                    '1/2 teaspoon coarse salt',
                    '1/2 teaspoon Mrs. Dash seasoning',
                    '1/4 teaspoon freshly ground black pepper'
                ],
                source: 'Martha Stewart',
                totalTime: 90,
                url: 'http://www.marthastewart.com/318981/baked-chicken',
                image: './recipe-images/baked-chicken.jpg'
            },
            {
                name: 'Deep Fried Fish Bones',
                cuisineType: ['south east asian'],
                ingredients: ['8 small whiting fish or smelt', '4 cups vegetable oil'],
                source: 'Serious Eats',
                totalTime: 31,
                url: 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html',
                image: './recipe-images/deep-fried-fish-bones.jpg'
            },
            {
                name: 'Burnt-Scallion Fish',
                cuisineType: ['chinese'],
                ingredients: [
                    '2 bunches scallions',
                    '8 tbsp. butter',
                    '2 8-oz. fish filets'
                ],
                source: 'Saveur',
                totalTime: 70,
                url: 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish',
                image: './recipe-images/fish-dish.jpg'
            },
            {
                name: 'Curry-Crusted Fish',
                cuisineType: ['south east asian'],
                ingredients: [
                    '3 slices bread , about 85g/3oz in total',
                    '1 lime',
                    '1.0 tbsp Korma curry paste',
                    '4 thick white fish fillets'
                ],
                source: 'BBC Good Food',
                totalTime: 80,
                url: 'http://www.bbcgoodfood.com/recipes/4717/',
                image: './recipe-images/fish-dish.jpg'
            },
            {
                name: 'Meat Stock',
                cuisineType: 'american',
                ingredients: [
                    '2.5 pounds beef marrow bones',
                    '1 large onion, quartered',
                    '2 carrots, sliced',
                    '1 leek, cleaned and sliced',
                    '2 celery stalks, sliced',
                    '2.5 pounds organic beef stew meat, cubed',
                    '2 tablespoons tomato paste',
                    '5 cloves garlic',
                    '2 bay leaves',
                    '3 sprigs thyme',
                    '3 sprigs Italian parsley',
                    '1/2 teaspoon black peppercorns'
                ],
                source: 'Food52',
                totalTime: 60,
                url: 'https://food52.com/recipes/3712-meat-stock',
                image: './recipe-images/meat.jpg'
            },
            {
                name: 'Homemade Meat Broth',
                cuisineType: 'american',
                ingredients: [
                    '1 teaspoon salt',
                    '1 carrot, peeled',
                    '1 medium onion, peeled',
                    '2 or 3 celery stalks',
                    '¼ red or yellow bell pepper, stripped of all its seeds',
                    '1 small boiling potato, peeled',
                    '1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice',
                    '5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat'
                ],
                source: 'Cookstr',
                totalTime: 60,
                url: 'http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth',
                image: './recipe-images/meat.jpg'
            },
            {
                name: 'Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe',
                cuisineType: 'south-american',
                ingredients: [
                    '1 tablespoon whole black peppercorns, toasted',
                    '1 teaspoon coriander seed, toasted',
                    '1 teaspoon fennel seed, toasted',
                    '1 teaspoon cumin pods, toasted',
                    '1 teaspoon red pepper flakes',
                    '1/2 teaspoon dried oregano',
                    '2 medium cloves garlic, minced (about 2 teaspoons)',
                    '2 tablespoons vegetable or canola oil',
                    '1 whole flap meat steak, 2 to 2 1/2 pounds',
                    'Kosher salt'
                ],
                source: 'Serious Eats',
                totalTime: 240,
                url: 'http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html',
                image: './recipe-images/grilled.jpg'
            }
        ];

        document.addEventListener('DOMContentLoaded', function() {
            // Adjust image paths in the recipes array
            const adjustedRecipes = recipes.map(recipe => {
                return {
                    ...recipe,
                    image: recipe.image.replace('./recipe-images/', './assets/')
                };
            });

            let filteredRecipes = [...adjustedRecipes];
            const recipeList = document.getElementById('recipe-list');
            const cuisineFilter = document.getElementById('cuisine-filter');
            const ingredientFilter = document.getElementById('ingredient-filter');
            const sortBy = document.getElementById('sort-by');
            const searchInput = document.getElementById('search');
            const randomRecipeBtn = document.getElementById('random-recipe');
            const featuredRecipeSection = document.getElementById('featured-recipe');
            const featuredContent = document.querySelector('.featured-content');

            // Initialize the page
            populateCuisineFilter();
            displayRecipes(filteredRecipes);

            // Event listeners
            cuisineFilter.addEventListener('change', filterRecipes);
            ingredientFilter.addEventListener('change', filterRecipes);
            sortBy.addEventListener('change', sortRecipes);
            searchInput.addEventListener('input', filterRecipes);
            randomRecipeBtn.addEventListener('click', selectRandomRecipe);

            // Populate cuisine filter dropdown
            function populateCuisineFilter() {
                const cuisines = new Set();
                adjustedRecipes.forEach(recipe => {
                    if (Array.isArray(recipe.cuisineType)) {
                        recipe.cuisineType.forEach(cuisine => cuisines.add(cuisine.toLowerCase()));
                    } else {
                        cuisines.add(recipe.cuisineType.toLowerCase());
                    }
                });
                
                cuisines.forEach(cuisine => {
                    const option = document.createElement('option');
                    option.value = cuisine;
                    option.textContent = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
                    cuisineFilter.appendChild(option);
                });
            }

            // Filter recipes based on selected criteria
            function filterRecipes() {
                const cuisineValue = cuisineFilter.value;
                const ingredientValue = ingredientFilter.value;
                const searchValue = searchInput.value.toLowerCase();
                
                filteredRecipes = adjustedRecipes.filter(recipe => {
                    // Filter by cuisine
                    if (cuisineValue !== 'all') {
                        let hasCuisine = false;
                        if (Array.isArray(recipe.cuisineType)) {
                            hasCuisine = recipe.cuisineType.some(cuisine => 
                                cuisine.toLowerCase() === cuisineValue
                            );
                        } else {
                            hasCuisine = recipe.cuisineType.toLowerCase() === cuisineValue;
                        }
                        if (!hasCuisine) return false;
                    }
                    
                    // Filter by ingredient count
                    if (ingredientValue !== 'all') {
                        const maxIngredients = parseInt(ingredientValue);
                        if (recipe.ingredients.length > maxIngredients) return false;
                    }
                    
                    // Filter by search
                    if (searchValue) {
                        const nameMatch = recipe.name.toLowerCase().includes(searchValue);
                        const ingredientMatch = recipe.ingredients.some(ingredient => 
                            ingredient.toLowerCase().includes(searchValue)
                        );
                        const sourceMatch = recipe.source.toLowerCase().includes(searchValue);
                        
                        if (!nameMatch && !ingredientMatch && !sourceMatch) return false;
                    }
                    
                    return true;
                });
                
                sortRecipes();
            }

            // Sort recipes based on selected criteria
            function sortRecipes() {
                const sortValue = sortBy.value;
                
                if (sortValue === 'none') {
                    // No sorting, keep original order
                    displayRecipes(filteredRecipes);
                    return;
                }
                
                const sortedRecipes = [...filteredRecipes];
                
                switch(sortValue) {
                    case 'name':
                        sortedRecipes.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case 'name-desc':
                        sortedRecipes.sort((a, b) => b.name.localeCompare(a.name));
                        break;
                    case 'time':
                        sortedRecipes.sort((a, b) => (a.totalTime || 0) - (b.totalTime || 0));
                        break;
                    case 'time-desc':
                        sortedRecipes.sort((a, b) => (b.totalTime || 0) - (a.totalTime || 0));
                        break;
                    case 'ingredients':
                        sortedRecipes.sort((a, b) => a.ingredients.length - b.ingredients.length);
                        break;
                    case 'ingredients-desc':
                        sortedRecipes.sort((a, b) => b.ingredients.length - a.ingredients.length);
                        break;
                }
                
                displayRecipes(sortedRecipes);
            }

            // Display recipes in the grid
            function displayRecipes(recipesToDisplay) {
                recipeList.innerHTML = '';
                
                if (recipesToDisplay.length === 0) {
                    recipeList.innerHTML = '<p class="no-results">No recipes match your filters. Try adjusting your criteria.</p>';
                    return;
                }
                
                recipesToDisplay.forEach(recipe => {
                    const recipeCard = createRecipeCard(recipe);
                    recipeList.appendChild(recipeCard);
                });
            }

            // Create a recipe card element
            function createRecipeCard(recipe) {
                const card = document.createElement('div');
                card.className = 'recipe-card';
                
                const imageSrc = recipe.image || './assets/placeholder.jpg';
                
                card.innerHTML = `
                    <div class="recipe-image">
                        ${recipe.image ? `<img src="${imageSrc}" alt="${recipe.name}">` : 'No Image Available'}
                    </div>
                    <div class="recipe-info">
                        <h3>${recipe.name}</h3>
                        <div class="recipe-meta">
                            <span>${recipe.totalTime ? `${recipe.totalTime} mins` : 'Time not specified'}</span>
                            <span>${recipe.ingredients.length} ingredients</span>
                        </div>
                        <div class="cuisine-tags">
                            ${getCuisineTags(recipe.cuisineType)}
                        </div>
                        <a href="${recipe.url}" target="_blank" class="recipe-source">Source: ${recipe.source}</a>
                    </div>
                `;
                
                return card;
            }

            // Generate cuisine tags HTML
            function getCuisineTags(cuisineType) {
                if (!cuisineType) return '';
                
                let cuisines = [];
                if (Array.isArray(cuisineType)) {
                    cuisines = cuisineType;
                } else {
                    cuisines = [cuisineType];
                }
                
                return cuisines.map(cuisine => 
                    `<span class="cuisine-tag">${cuisine}</span>`
                ).join('');
            }

            // Select and display a random recipe
            function selectRandomRecipe() {
                if (filteredRecipes.length === 0) {
                    alert('No recipes available with current filters. Please adjust your filters and try again.');
                    return;
                }
                
                const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
                const randomRecipe = filteredRecipes[randomIndex];
                
                displayFeaturedRecipe(randomRecipe);
            }

            // Display the featured recipe
            function displayFeaturedRecipe(recipe) {
                const imageSrc = recipe.image || './assets/placeholder.jpg';
                
                featuredContent.innerHTML = `
                    <div class="featured-image">
                        ${recipe.image ? `<img src="${imageSrc}" alt="${recipe.name}">` : 'No Image Available'}
                    </div>
                    <div class="featured-details">
                        <h3>${recipe.name}</h3>
                        <div class="recipe-meta">
                            <span>${recipe.totalTime ? `${recipe.totalTime} mins` : 'Time not specified'}</span>
                            <span>${recipe.ingredients.length} ingredients</span>
                        </div>
                        <div class="cuisine-tags">
                            ${getCuisineTags(recipe.cuisineType)}
                        </div>
                        <p><strong>Source:</strong> <a href="${recipe.url}" target="_blank">${recipe.source}</a></p>
                        <div class="ingredients-list">
                            <h4>Ingredients:</h4>
                            <ul>
                                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                
                featuredRecipeSection.classList.remove('hidden');
                
                // Scroll to the featured recipe
                featuredRecipeSection.scrollIntoView({ behavior: 'smooth' });
            }
        });