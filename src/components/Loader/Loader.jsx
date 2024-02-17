import { ThreeDots } from 'react-loader-spinner'
import styles from "./loader.module.css"

export const Loader = () => { 
    return (
        <div className={styles.loader}>
            <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="rgb(229, 129, 75)"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>        
    )
}