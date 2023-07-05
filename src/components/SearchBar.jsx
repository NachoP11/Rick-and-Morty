import style from './SearchBar.module.css'


export default function SearchBar({onSearch}) {
   
   
   return (
      <div className={style.container}>
         <div className={style.containerInput}>
         <input className={style.input} type='search' placeholder='Id'/>
         <button className={style.btn} onClick={() => onSearch()}>Agregar</button>
         </div>
      </div>
   );
};
