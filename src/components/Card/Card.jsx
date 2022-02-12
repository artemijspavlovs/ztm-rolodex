import './Card.css'

const Card = ({monster}) => (
    <div className='card-container'>
        <div className="img-container">
            <img src={`https://robohash.org/${monster.id}?set=set3&size=150x150`} alt="monster"/>
        </div>
        <h3>{monster.name}</h3>
        <p>{monster.email}</p>
    </div>
)

export default Card
