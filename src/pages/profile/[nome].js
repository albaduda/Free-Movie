import styles from '../../styles/Page.module.css';
import Rodape from '../../components/Footer';
import Topo from '../../components/Navbar';

//O nome deste arquivo é [nome].js pois a palavra "nome" é é nome do campo da nossa api

function Profile({ objeto = {} }) {
    return (
       
       //O css do next é difernte do que a gente conhece, a nossa maior dificuldade foi essa, porque temos que colocar o
       //nome da pasta e logo depois o nome que escolhemos para o nosso clasName, que no caso da linha 16 o nome da nossa 
       //className é "profile"
       // na linha 23 temos duas chaves, a primeira é para a gente poder dar o estilo no css e a segunda "objeto.descricao"
       //traz a descricao do ojeto e na linha 22 traz o nome do objeto que estamos descrevendo, na linha 24, traz o nome 
       //de que fez a autodescrição
       
       <div>
            <Topo/>
            
            <div className={styles.profile}> 
                <title>Descrição do Filme</title>
                <h2>{objeto.nome}</h2>
                <p className={styles.descriobjeto}>{objeto.descricao}</p>
                <p>{objeto.usuario}</p>
                <button><a href="\objetos"> Voltar</a></button>
            </div>

            <Rodape/>

        </div>
    )
}

//Esses exports vao trazer pra gente a escolha do objeto que o usario escolheu
export const getStaticProps = (async (context) => { //a função getStaticProps(Geração de site estático) de uma página, 
    //Next.js irá pré-renderizar esta página no momento da construção usando 
    //os adereços retornados.
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=filme') //isso daqui é api do nosso site e o 
    //nome=filme no final, traz os objetos que remetem a filme
    const repo = await res.json()
    const objeto = await repo[context.params.nome]; //através do params.nome trazemos o valor passado na url
    return {
        props: { objeto }
    }
}) 
export async function getStaticPaths() { //o getStaticPaths é a rota dinamica do nosso
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=filme')
    const repo = await res.json()
    const objetos = await repo;
    const paths = objetos.map((objeto, index) => {
        return { params: { nome: String(index) } };
    });
    return {
        paths,
        fallback: false, //essa configuração fallback: false, ocorrerá um erro 404 (página não encontrada) 
    };

}
export default Profile;