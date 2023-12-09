import styles from '../styles/Components.module.css'
import Image from 'next/image';

export default function Navbar() {
return (

       //O css do next é difernte do que a gente conhece, a nossa maior dificuldade foi essa, porque temos que colocar o
       //nome da pasta e logo depois o nome que escolhemos para o nosso clasName, que no caso da linha 10 o nome da nossa 
       //className é "navbar", entao no css vamos encontrar assim .navbar, agora se quisermos decorar uma outra className
       //como na linha 14 e 15, é so a gente colocar no css, .navbar .titulo{}, isso quer dizer que vamos decorar a 
       //className chamada titulo da div navbar.

<div className={styles.navbar}>

     <h1 className={styles.sobreooquee}>O seu site de Filmes Gratis</h1>
     <div  className={styles.iamgemdalogo}>
          <Image src="/img/logo.png" width={80} height={50} alt="Logo do nosso site, umma palavra free, com f maisculo com cor rosa claro, e ree escrito em letras minusculas na cor roxa, e embaixo a palavra movie, com M maisculo na cor roxo, e ovie em letras minuscuas na cor rosa claro"/>
     </div>

</div>
)
}