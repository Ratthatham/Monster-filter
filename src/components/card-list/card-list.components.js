import './card-list.css'

const CardList = ({monsters}) => {
        
        return(
            <div className='card-list'>
                {
                monsters.map((monster)=> 
                <div className='card-container' key={monster.id}>
                    <img 
                        alt={`${monster.id}`} 
                        src={`https://robohash.org/${monster.id}?set=set4?size=100x100`}
                    />
                    <h1>{monster.name}</h1>
                    <p>{monster.email}</p>
                </div>)
                }
            </div>
        )
    
}
export default CardList;