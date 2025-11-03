import { createRoot } from "react-dom/client"

let a = 0;
export function Button(){
    
    function alteraValor() {
        a++;
        console.log(a);
    } 
    return (
        <button onClick={alteraValor}>{a}</button>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(
    <Button/>
)


