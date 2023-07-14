import Image from 'next/image'
import heroPic from '../../../public/images/site/max.jpg'
import classes from './hero.module.css'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={heroPic} alt='Picture of Max' priority />
      </div>
      <h1>Hi, I am Max</h1>
      <p>My personal blog</p>
    </section>
  )
}
