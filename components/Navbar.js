import Link from 'next/link'
import Image from 'next/image'

import styles from '../src/styles/Navbar.module.css'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/images/pokeball.png' width={40} height={40} alt='logo'/>
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}