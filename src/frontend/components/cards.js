import React from 'react'

const Cards = ( props) => {
  return (
    <div className='card'>
     <div className='card-body'>
        <img src={props.image} alt='card' className='card-img'/>
        <section className='card-text-body'>
            <h2 className='card-title'>{props.title}</h2>
            <article className='card-article'>{props.article}</article>
        </section>
     </div>
    </div>
  )
}

export default Cards
