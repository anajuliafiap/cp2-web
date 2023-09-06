import { Link } from "react-router-dom"
import { listaProdutos } from "/Users/anajuliavianna/Documents/cp2-web/exercicio-rotas/src/routes/Produtos/todosProdutos.js"

export default function Produtos(){
    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>Editar o produto: {prod.nome}</Link>
                </div>
            ))

            }
        </main>
    )
}