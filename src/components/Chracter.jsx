import Slayers from "./Slayers"
import Demons from "./Demons"

const Character = (props) => {
    return(
        <div className="character-list">
        <div className="posters">
            <Slayers/>
            <Demons />
        </div>



        </div>
    )
}

export default Character;