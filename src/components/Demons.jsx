
import demons from "../demon.json"
import Rank from "./Rank";

const Demons = () => {
    return (
        <div className="demons"> 
            {demons.map(demon => (
                <div>
                    <img src={demon.image} />
                    <h2>{demon.name}</h2>
                    <ul>
                        <li>{demon.abilities}</li>
                        <li>{demon.fightingstyle}</li>
                        <li>{demon.bloodart}</li>
                    </ul>
                    <Rank rank={demon.rank} />
                </div>
            ))}

        </div>
    )
    }
    
    export default Demons;