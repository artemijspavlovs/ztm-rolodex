import './CardList.css'
import Card from "../Card/Card";

const CardList = ({monsters}) => {
    console.log(monsters)
    return <div className='card-list'>
        {monsters.map((member) => (
            <Card key={member.id} monster={member}/>
        ))}
    </div>
}

export default CardList
