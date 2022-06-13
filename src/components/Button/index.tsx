import { type } from 'os';
import React from 'react'; 
import style from './Button.module.scss';


class Botao extends React.Component <{
  children?:string
type?: "button" | "submit" | "reset" | undefined,
onClick? : () =>void;

}> {
  render() {
   const {type = "button", onClick} = this.props
     return (
       <button onClick={onClick} type={type} className={style.botao}>
           {this.props.children}
         </button>
        )
     }
    }
    export default Botao;

