
import React from 'react';
import styles from './homestyle.module.css';
import { Button } from '@chakra-ui/react'


export const Home = () => {
  return (
    <div>
        <Component1/>
        <div>
          <div>
            
          </div>
          <div></div>
        </div>
    </div>
  )
}

 function Component1(){
  return(
    <>
    <div className={styles.comp1bigdiv}>
     <div className={styles.threeday} >
          
     </div>
     <div className={styles.threedayright}>
      <div  >
        <h2>Today's Popular Picks</h2>
        <div className={styles.populartop}>
        <div>
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=640;maxWidth=550" alt="iPad" />
               <p>Apple iPad 10i- 10.2inch (Latest Version) </p>
        </div>
        <div>
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6433/6433905_sd.jpg;maxHeight=640;maxWidth=550" alt="iPad" />
               <p>NordicTrack Commercial S22i Studio Cycle with UPGRADED 22”  </p>
        </div>
        <div>
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=640;maxWidth=550" alt="iPad" />
               <p>Apple Watch Series 7 (GPS) 41mm Midnight Aluminum Case </p>
        </div>
        <div>
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499742_sd.jpg;maxHeight=640;maxWidth=550" alt="iPad" />
               <p>HP - 17.3" Laptop - Intel Core i5 - 8GB  </p>
        </div>
        </div>
      </div>
      <div className={styles.topdeal}>
        <div style={{fontSize:'40px',fontWeight:'900'}}>
        <Button colorScheme='blue'>Outlets Deal</Button>
          <h1><span style={{color:'red'}}>Clearence</span>,<br/>open-box<br/>and more.</h1>
        </div>
        <div >
          <h4>Continue</h4>
          <br/>
        <img  style={{width:'60%' ,height:'150px'}}  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454715_sd.jpg;maxHeight=640;maxWidth=550" alt="iPad" />
               <p>LG - 55” Class UP7000 Series LED 4K UHD Smart webOS TV </p>
        </div>
      </div>
     </div>
    </div>
    </>
  )
 }


