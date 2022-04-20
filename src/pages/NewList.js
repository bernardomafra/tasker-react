// import { Link } from 'react-router-dom'
import '../styles/pages/new-form.css'
import Input from '../components/Input'

export default function NewList() {
   return <div id="home" className="container-center">
     <img
      src="assets/icons/arrow-left.png"
      width="48px"
      height="48px"
      alt="Ícone de uma seta para esquerda que ao clicar volta à página anterior"
      onClick={() => window.history.back()}
    />
    <h1 class="title">Nova <br />Lista</h1>
    <form>
      <Input id="name"
          type="text"
          name="name"
          placeholder="Ex.: Lista de compras"
          required
          tabindex="1"
          label="Nome"
      />
      <Input
          id="description"
          type="text"
          name="description"
          placeholder="Ex.: Lista para lembrar o que comprar no super-mercado"
          tabindex="2"
          label="Descrição"
        />
      <button class="primary-btn" type="submit">Criar Lista</button>
    </form>
    </div>
}