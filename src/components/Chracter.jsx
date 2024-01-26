import Slayers from "./Slayers"
import Demons from "./Demons"
import Rank from "./Rank"

const Character = (props) => {
    return(
        <div className="chracter-list">
        <div className="posters">
            <Slayers/>
            <Demons />
            <h2></h2>
            <h4></h4>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>



        </div>
    )
}

export default Character;