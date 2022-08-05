import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' style={{ width: '300px' }}/>
          </div>
          <h3>Tugas Form Login</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' style={{ width: '300px' }}/>
          </div>
          <h3>Tugas Input Data</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio