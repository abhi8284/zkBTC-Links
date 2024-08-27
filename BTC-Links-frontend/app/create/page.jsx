import ScrollHorizontal from '@/components/create-section/ScrollHorizontal';
import styles from '@/app/styles/create.module.css'

// @kamal this helps in the creation of BTC-Links
function Create(){

    return(
        <div className={styles.parentContainer} style={{ background: "linear-gradient(135deg, rgba(135, 206, 235, 0.2), rgba(255, 255, 255, 0.8))", height: '100%', width: '100%', display: 'flex', justifyContent: 'center',}}>
          <div className={styles.container}>
            <ScrollHorizontal/>
          </div>
      </div>
    )
}

export default Create