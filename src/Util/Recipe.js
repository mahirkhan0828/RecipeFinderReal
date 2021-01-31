


const Recipe = {
    search(foodItems){
        let arr = [];
        var request = new XMLHttpRequest();
    
    
        request.open('GET', 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=1e7bca06d34a4d629587bc834859e547', true);
        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);
        
            if (request.status >= 200 && request.status < 400) {
                // data.forEach((recipe) => {
                //     console.log(recipe.title);
                // });
                // console.log(data);
                for (let i = 0; i < data.length; i++){
                    arr.push(data[i]);
                }
            }
            else {
               console.log('error');
            }
        }
        
        request.send();
        return arr;
    }
}

export default Recipe;



