import slayers from "../slayer.json"

const Slayers = () => {
    return (
        <div className="slayers">
            {slayers.map(slayer => (
                <div>
                    <img src={slayer.image} />
                    <h2>{slayer.name}</h2>
                    <div className="slayer-attributes">
                    <ul className="abilities">
                        <li>{slayer.breathingstyle}</li>
                        <li>{slayer.abilities}</li>
                        <li>{slayer.fightstyle}</li>
                        <li>{slayer.techniques}</li>
                    </ul>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Slayers;