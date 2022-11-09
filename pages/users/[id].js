import Head from "next/head"
import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/user.module.scss'

const User = () => {
    const { query } = useRouter( )

    return (
        <MainContainer metaKeywords={query.id}>
            <div className={styles.user}>
                <h1>
                    User id: {query.id}
                </h1>
            </div>
        </MainContainer>
    )
}

export default User
