import Head from 'next/head';
import Rodape from '../components/Footer';
import Topo from '../components/Navbar';
import styles from '../styles/Page.module.css';
import Image from 'next/image';

export default function Home() {
  return (

       //O css do next é difernte do que a gente conhece, a nossa maior dificuldade foi essa, porque temos que colocar o
       //nome da pasta e logo depois o nome que escolhemos para o nosso clasName, que no caso da linha 21 o nome da nossa 
       //className é "home", entao no css vamos encontrar assim .home, agora se quisermos decorar esse h1 a gente 
       //coloca assim no css .home h1{}, isso quer dizer que vamos decorar o h1 da div home.
       // na linha 26 e 33, temos as nossas divs que sao as colunas que estao de rosa, chamadas coluna1 e coluna2, para 
       //decorar elas a gente coloca no css .home.coluna1{} e .home .coluna2{}, assim vamos conseguir mexer nessas divs 
       //e tudo que estiver dentro fica dentro da div coluna1 ou coluna2



      <div>
           <Head>
             <title> Free Movie </title>
           </Head>
          <Topo />
         
     
         <div className={styles.home}>
           
           <div className={styles.coluna1}> 
              <h1 >Seu site é acessível para pessoas com deficiência visual?</h1>
              <p>A internet pode ser uma grande facilitadora para muitos, já que permite fazer compras, adquirir novos conhecimentos, pesquisar informações e realizar muitas outras atividades. Mas esta facilidade nem sempre está disponível para todos. 
                  Mesmo com um grande aumento da presença digital de empresas e usuários brasileiros nos últimos anos, a acessibilidade e a inclusão de grupos minorizados tais como as pessoas com deficiência, idosos, analfabetos e pessoas em processo de alfabetização, por vezes, são esquecidas.</p>
              <p >Um dos grupos mais afetados pela falta de acessibilidade digital é o de pessoas com deficiência visual. Atualmente, os sites e redes sociais são criados justamente para atrair a atenção de seus usuários por meio de estímulos visuais, dificultando o acesso de pessoas com cegueira total ou parcial. 
                  Nesta Semana Nacional de Luta da Pessoa com Deficiência, que tal entender melhor como pessoas com deficiência visual são afetadas pela falta de acessibilidade na internet e conhecer soluções para transformar esse cenário?</p>
           </div>
             
           <div className={styles.coluna2}>
              <h1 >Pessoas com deficiência visual, encontra barreiras, acessando a internet</h1>
              <p>À Internet ainda ser um espaço extremamente visual,   onde a comunicação é normalmente feita por meio de imagens. Sejam elas fotos, vídeos ou até mesmo artes onde o texto é posicionado em formato de imagem, cria-se uma dificuldade de entendimento da mensagem e de acesso às pessoas com deficiência visual sempre que há recursos de acessibilidade digital disponíveis. 
                 Mesmo com a Lei 5.296/2004, que por exemplo torna   obrigatória a existência de sinalização visual e tátil para orientação de pessoas com deficiência auditiva e visual, 18 anos após sua criação, ainda encontramos muitos obstáculos, tanto na acessibilidade física como na navegabilidade digital independente e inclusiva.
                 Dentre as principais barreiras encontradas, as mais notórias são a falta de integração aos leitores de tela, de descrição da imagem, de audiodescrição e outras ferramentas que permitam que pessoas com deficiência visual consigam ter igualdade de acesso aos conteúdos. 
                 Mas mesmos assim muitos sites não tem essas sinalizações para essas pessoas
              </p>
           </div>

           <div className={styles.coluna3}>
              <h1 >Como melhorar a navegação para pessoas com deficiência visual</h1>
              <p>Sem as ferramentas citadas acima e outras que permitem igualdade de acesso ao conteúdo disponibilizado na internet, a navegação de pessoas com deficiência visual se torna condicionada ao auxílio de outras pessoas. 
              </p>
              <p>Com isso, além de afastar mais de 35 milhões de brasileiros que possuem algum tipo de deficiência visual (dos quais 6,6 milhões são pessoas cegas ou com baixa visão), sites sem acessibilidade também descumprem as leis e correm o risco de sofrer punições por parte do Ministério Público e dos órgãos reguladores em geral.
               </p> 
              <p>A disponibilidade do recurso pode ser feita mixada ao áudio original em filmes, distribuída em fones receptores em teatros, acessada através de texto pelos softwares leitores de tela em livros digitais, disponibilizada em audioguias, entre outros.
              </p>
              <p>Mas resolver este problema é muito mais simples do que se imagina! Com a tecnologia disponibilizada pela BocaWeb,
              </p>
           </div>
          
            <div>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/N-iR_ROJIU4?si=ht-Z-0vCmAf4gKgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Video do professor Ricardo explicando sobre o BocaWeb, o site que usamos de inspiração"> </iframe>
           </div> 

           <div>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/N-iR_ROJIU4?si=ht-Z-0vCmAf4gKgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Video do professor Ricardo explicando sobre o BocaWeb, o site que usamos de inspiração"> </iframe>
           </div> 
                <button><a href="\objetos">Saiba sobre os filmes cadastrados</a></button>


       </div>
           <Rodape />
      </div>

       //na linha 44 e 48, fizemos quase a mesma com a imagem só que com video, que consiguimos no youtube, ai apertamos em
       //incorporar e ai copiamos o proprio link que o site da
  )
}