const GameAsset = (game ) => {

    const gameasset = document.createElement("div");
    gameasset.className = 'gameasset'
  
 
    
   gameasset.appendChild(SelectedGame(game));
   gameasset.appendChild(LoadAsset(game));

   return gameasset
}