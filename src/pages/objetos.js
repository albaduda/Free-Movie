import React from 'react';
import Rodape from '../components/Footer';
import Topo from '../components/Navbar';
import styles from '../styles/Page.module.css';
import Link from 'next/link';

function Objetos({ objetos }) {

    return (

        //O css do next é difernte do que a gente conhece, a nossa maior dificuldade foi essa, porque temos que colocar o
       //nome da pasta e logo depois o nome que escolhemos para o nosso clasName, que no caso da linha 17 o nome da nossa 
       //className é "objeto", entao no css vamos encontrar assim .objeto, agora se quisermos decorar esse h1 a gente 
       //coloca assim no css .objeto h1{}, isso quer dizer que vamos decorar o h1 da div objeto.

        <div>
           <Topo />
            <div className={styles.objeto}> 
                <title>Filmes</title>
                 <h1>Veja todos os Filmes Cadastrados Aqui</h1>
                 {objetos.map((objeto, index) => (

                       //A função link vai permitir a navegação entre as páginas, o Link – href e as
                       //O href indica o que será aberto.
                       //O as indica qual o valor a ser passado

                       <Link href='/profile/[nome]' as={`/profile/${index}`}> 
                        <div key={objeto.nome}> <p> {objeto.nome} </p> </div> 
                       </Link> 
                       
                     // Também vamos incluir um novo parâmetro na função map para retornar também o índice do elemento, 
                     //que será passado como parâmetro para a rota dinâmica

                ))}
                <button><a href="\"> Voltar</a></button>
            

           </div>
              <Rodape/>

        </div>
    )
}

//Aqui ele vai mostra todos os dados sobre filme, da nossa api

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=filme')
    const repo = await res.json()
    const objetos = await repo;
    return {
        props: { objetos }
    }
})
export default Objetos;