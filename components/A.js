import Link from "next/link"
import linkStyles from '../styles/link.module.css'


const A = ({ text, path }) => {
    return (
        <div>
            <Link href={path}>
                <li className={linkStyles.navlink}>{text}</li>
            </Link>
        </div>
    )
}

export default A 