import styles from '../styles/Components.module.css'
export default function Footer() {
return (


       //O css do next é difernte do que a gente conhece, a nossa maior dificuldade foi essa, porque temos que colocar o
       //nome da pasta e logo depois o nome que escolhemos para o nosso clasName, que no caso da linha 13 o nome da nossa 
       //className é "footer", entao no css vamos encontrar assim .footer, agora se quisermos decorar um p da div footer, 
       //é só colocar no css, .footer p{}, 
       


        <footer className={styles.footer} >
           <p>Maria Eduarda S. Alba e Amanda Batista - 6° - Frameworks2 - IFMS Dourados - Professor, Ricardo Nascimento </p>
        </footer>
)
}