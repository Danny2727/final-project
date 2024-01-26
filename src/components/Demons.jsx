import demons from "../demon.json"

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
                </div>
            ))}

        </div>
    )
    }
    
    export default Demons;