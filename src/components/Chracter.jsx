import Slayers from "./Slayers"
import Demons from "./Demons"

const Character = (props) => {
    return(
        <div className="chracter-list">
        <div className="posters">
            <Slayers/>
            <Demons />
        </div>



        </div>
    )
}

export default Character;