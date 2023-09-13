import React from 'react'

function Itineraries({data}) {
    
    let bills = []
    let tags = []

    for (let i = 0; i < data.price; i++ ){
        bills.push(i)
    }
    console.log(bills)
    for(let i = 0; i < data.tags.length; i++){
        tags.push(data.tags[i].toString())
    }
    console.log(tags)
  return (
    <div className='border-2 mb-4 mt-4 rounded-lg px-4 py-2 shadow shadow-white'>
        <div className='flex mx-6 justify-between'>
            <div className='flex-row'>
                <img src={data.photo} alt="" className='rounded-lg w-28 h-28'/>
                <h1 className='text-xl'>{data.name}</h1>
            </div>
            <div className='flex-row self-center text-center'>
                <h1 className='text-3xl'>Place:</h1>
                <h1 className='text-3xl'>{data.title}</h1>
            </div>
            <div className='flex-row self-center text-center'>
                <h1 className='text-3xl'>Price:</h1>
                <div className='flex'>
                    {bills?.map((city) => (<img src="../../../public/cash2.svg" className='w-16 h-16'></img>))}
                </div>
            </div>
            <div className='flex-row self-center text-center'>
                <h1 className='text-3xl'>Duration:</h1>
                <h1 className='text-3xl'>{data.duration} Hours</h1>
            </div>
        </div>
        <div className='flex justify-end'>
         {tags.map((city) => (<h1 className='px-2 border-2 mx-1 rounded-lg'>{city}</h1>))}
        </div>
    </div>
  )
}

export default Itineraries