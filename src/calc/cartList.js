
import userJson from '../assets/userAccount.json';

        let gamesInCartList = [];
        let findGamesInCart = userJson.map(function(item){
            for(let i = 0; i<item.gamesInCart.length; i++){
              gamesInCartList.push(item.gamesInCart[i]);
            }
            return null;
        });

export default gamesInCartList;