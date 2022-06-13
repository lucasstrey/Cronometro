import style from './List.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/tarefa';

interface Props {
tarefas: ITarefa [],
selecionaTarefa: (tarefaSelecionada: ITarefa) => void

}
 
    function Lista({tarefas, selecionaTarefa} : Props) {
      
            return (
              <aside className={style.listaTarefas}>
                <h2 >Estudos do dia </h2>
                <ul>
                {tarefas.map(item => (
                  <Item 
                  selecionaTarefa = {selecionaTarefa}
                  key={item.id}
                  {...item}/>
                 //ou colocar {...item} 
                
                 ))}
              
                </ul>
              </aside>
            )
          
        }
  export default Lista;