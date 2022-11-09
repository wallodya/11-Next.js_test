import Head from "next/head"
import A from "./A"
import styles from '../styles/link.module.css'

const MainContainer = ({ children, metaKeywords='' }) => {
    console.log('metaKeywords: ', metaKeywords)
    return (
        <>
            <Head>
                <meta keywords={"hello world" + metaKeywords}></meta>
                <title>Main page</title>
            </Head>
            <ul className={styles.navbar}>
                <A path={'/'} text={"Home"} />
                <A path={'/users'} text={"Users"} />
            </ul>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer