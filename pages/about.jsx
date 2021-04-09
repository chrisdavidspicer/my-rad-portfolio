import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About() {
    return (
        <div>
            <h1>About Page 🤘</h1>
            
            <p className={styles.extraPurple}>I'm a rad dood and I code up all sorts o' goodies!</p>
            {/* loading an image locally */}
            <Image
                src='/vercel.svg'
                alt='logo'
                width={300}
                height={300}
            />

            <Image
                src="https://placekitten.com/299"
                alt="random image"
                height={300}
                width={300}
            />

        </div>
    )
}