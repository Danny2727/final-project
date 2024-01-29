

const Rank = (props) => {
    console.log(props)
    let colorVariable
    let textColor

    switch (props.rank) {
        case 'Upper Rank 2':
            colorVariable = 'purple'
            textColor = 'black'
            break
        case 'Demon King':
            colorVariable = 'gold'
            textColor = 'black'
            break;
        case 'Upper Rank 6':
            colorVariable = 'blue'
            textColor = 'black'
            break;

        case 'Upper Rank 3':
            colorVariable = 'purple'
            textColor = 'black'
            break;

        case 'Upper Rank 1':
            colorVariable = 'gold'
            textColor = 'black'
            break;




        default:
            colorVariable = 'black'
            textColor = 'red'
    }

            return (
                <div className="demonrank">
        
                    <p style={{ backgroundColor: colorVariable, color: textColor }}>
                        {props.rank}
                    </p>
                </div>
            )
    

}

export default Rank;