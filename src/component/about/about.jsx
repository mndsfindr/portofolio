import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpeg'
import {FaBirthdayCake} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
import {CgGenderMale} from 'react-icons/cg'
import {FaAddressBook} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
       <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='about image' style={{ width: "350px" }} />
        </div>
       </div>

      <div className="about__content">
        <div className='about__cards'>
          <article className='about__card'>
            <FaBirthdayCake className="about__icon" />
            <h5>Date of Birth</h5>
            <small>23 December 2005</small>
          </article>

          <article className='about__card'>
            <FaSchool className="about__icon" />
            <h5>SChool</h5>
            <small>SMKN 1 KOTA BEKASI</small>
          </article>

          <article className='about__card'>
            <CgGenderMale className="about__icon" />
            <h5>Gender</h5>
            <small>Famele</small>
          </article>
          </div>
          
          <div className='about__cardl'>
          <article className='about__card'>
            <FaAddressBook className="about__icon" />
            <h5>Address</h5>
            <small>Jl Tahir Gg.Kharisma 1 NO 75</small>
          </article>
          </div>

        <p>
        Halo, saya adalah seorang siswa dari program studi Rekayasa Perangkat lunak.
        Memiliki ketertarikan terhadap dunia teknologi terutama tentang programing.
        </p>

        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
      </div>

    </section>
  )
}
export default about