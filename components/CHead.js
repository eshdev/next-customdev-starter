import Image from 'next/Image';
import styles from '../styles/CHead.module.css';

function CDKHead() {
  return (
    <div className={styles.CDKHead}>
      <Image src='/CDKLogo.png' width={143} height={39}></Image>
    </div>
  );
}

export default CDKHead;
