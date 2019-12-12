import React from 'react'

const AdoptableDogs = ({ adoptableDogs }) => {

    const adoptableDogsArray = adoptableDogs.map(dog => {
        return <div key={dog.id} className='dog'>
            <h1>{dog.name}</h1>
            <p>{dog.breed}</p>
            <p>{dog.age}</p>
            <img src={dog.image} alt={dog.name} />
        </div>
    })
    return (
        <div className='adoptable-dogs'>
            <h1>Adoptable Dogs</h1>
            {adoptableDogsArray}
        </div>
    )
}

export default AdoptableDogs