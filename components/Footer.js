import Link from "next/link"
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Copyrigth &copy; DJ Events 2021</p>
        <p>
            <Link href='/about'>About this Project</Link>
        </p>
    </footer>
  )
}

export default Footer