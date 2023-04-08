import React from 'react';
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { AppWrap } from '../../wrapper';

import './Header.scss';

const Header = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className='app__header'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>✋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text' >Hola, Soy</p>
              <h1 className='head-text'>Royer</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Soy Desarrollador FullStack con más de 3 años de experiencia, construyendo, manteniendo sitios y servicios en la web, utilizando tecnologías .NET (MVC, Blazor, Web API, Entity Framework Core) como principal marco de trabajo y C# como principal lenguaje de desarrollo, además de tener sólidos conocimientos en SQL, Microsoft SQL Server, Git, GitHub, Azure DevOps y Scrum.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'>

        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle' />

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'>

          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='circle' />
            </div>
          ))}

        </motion.div>

      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');