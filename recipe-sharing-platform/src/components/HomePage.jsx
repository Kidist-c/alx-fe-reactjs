import React from 'react'
import { useState,useEffect } from 'react'


function HomePage() {
    const [recipes, setRecipes]= useState ([]);
    useEffect(()=> {
        const loadRecipes = async () => {
          try {
            const response=await fetch('/data.json')
                 if (!response.ok){
                  throw new Error (`HTTP error! status :${response.status}`);
                  
                 }
                 const data=await response.json();
                 setRecipes(data);
          }
          catch (error) {
            console.error("Could not load recipes:",error);
          }
        };
        loadRecipes()
    },[]);

  return (
       <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Our Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-700">{recipe.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
   
  
  
  

        
      
    
    
  
}

export default HomePage