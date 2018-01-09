$(document).ready(function(){

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);
  $('.js-back').hide();
  $('.js-menu').show();
  /*
  *Llamando a función
  */
});

function printNews(){
  $('.callout-news p').text('NUEVAS RECETAS');
}
printNews();
/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  for(var i = 0; i < recipesArray.length; i++){
    if(recipesArray[i].highlighted == true){
      renderRecipe(recipesArray[i]);
    }
  }
}

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  console.log('Voy a pintar la receta: ', recipe);
  var image = recipe.name;
  image = "img/recipes/640x800/" + image + ".jpg";
  var recipeTitle = recipe.title;
  var name = recipe["source"].name;

  $('.list-recipes').append("<a class='item-recipe' href='#'></a>" +
  "<span class='attribution'>" + "</span>" +
  "<span class='title-recipe'>" + recipeTitle + "</span>" +
  "<span class='metadata-recipe'>" + "</span>" +
  "<span class='author-recipe'>" + name + "</span>" +
  "<span class='bookmarks-recipe'>" + "</span" +
  "<span class='icon-bookmark'>" + "</span>" +
  "<img src='" + image + "'/>");
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
  console.log('Activities: ', activitiesArray);
  
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
  
}


