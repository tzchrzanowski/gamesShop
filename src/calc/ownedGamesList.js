
import userJson from '../assets/userAccount.json';

let ownedGamesList = [];
let findOwnedGames = userJson.map(function(item){
    for(let i = 0; i<item.ownedGames.length; i++){
        ownedGamesList.push(item.ownedGames[i]);
    }
    return null;
});

export default ownedGamesList;