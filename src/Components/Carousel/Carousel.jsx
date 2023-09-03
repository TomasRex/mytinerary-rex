import './carousel.css'
import {useState, useEffect} from 'react'
const Carousel = () => {
    const photos = [
        {
            image: "/bucarest.jpg",
            title: "Bucharest, Romania"
        },
        {
            image: "/buenosaires.jpg",
            title: "Buenos Aires, Argentina"
        },
        {
            image: "/estambul.jpg",
            title: "Istambul, Turkey"
        },
        {
            image: "/hongkong.jpg",
            title: "Hongkong, China"
        },
        {
            image: "/newyork.jpg",
            title: "New York, USA"
        },
        {
            image: "/osaka.jpg",
            title: "Osaka, Japan"
        },
        {
            image: "/rio-1.jpeg",
            title: "Rio de Janeiro, Brasil"
        },
        {
            image: "/rome.jpg",
            title: "Rome, Italy"
        },
        {
            image: "/santiago.jpg",
            title: "Santiago, Chile"
        },
        {
            image: "/sydney.jpg",
            title: "Sydney, Australia"
        },
        {
            image: "/taipei.jpg",
            title: "Taipei, Taiwan"
        },
        {
            image: "/varsovia.JPG",
            title: "Warsaw, Poland"
        },
    ]

    let [contador, setContador] = useState(0);

    const prev = () => {
        if (contador == 0){
            setContador(photos.length   - 4);
        } else {
            setContador(contador-4)
    }
}

    const next = () => {
        setContador(contador => (contador + 4) % photos.length)
    }

    useEffect(() => {
        const interval = setInterval(next, 2000);
        return () => {
            clearInterval(interval);
        }
      }, []);

  return (
    <div className='flex car-home mx-auto h-1/2'>
        <button onClick={prev} className='text-white slide-car'>{'<'}</button>
        <div className='grid grid-cols-2 gap-5'>
            <div className='w-full rounded'>
                <img className="h-auto rounded-lg car-im" width={350} src={photos[contador].image}alt="" />
                <h1 className='flex justify-center text-white text-2xl img-title'>{photos[contador].title}</h1>
            </div>
            <div className='w-full rounded'>
                <img className="h-auto rounded-lg car-im" width={350} src={photos[contador+1].image} alt="" />
                <h1 className='flex justify-center text-white text-2xl img-title'>{photos[contador+1].title}</h1>
            </div>
            <div className='w-full rounded'>
                <img className="h-auto rounded-lg car-im" width={350} src={photos[contador+2].image} alt="" />
                <h1 className='flex justify-center text-white text-2xl img-title'>{photos[contador+2].title}</h1>
            </div>
            <div className='w-full rounded'>
                <img className="h-auto rounded-lg car-im" width={350} src={photos[contador+3].image} alt="" />
                <h1 className='flex justify-center text-white text-2xl img-title'>{photos[contador+3].title}</h1>
            </div>
        </div>
        <button onClick={next} className='text-white slide-car'>{'>'}</button>
    </div>
  )
};

export default Carousel;