import React, { useState, useEffect } from 'react';
import data from "../data.json";

 // Import the JSON data directly
function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Our Recipes</h1>
            <div className=" shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 hover:shadow-md">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="bg-lime-500 rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-700">{recipe.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;

