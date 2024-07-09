

export function App() {

  return (
    <div className="h-screen flex items-center justify-center">
   <div className="max-w-3xl px-6 text-center">
     <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p> 

<div>
<input type="text" placeholder="Para onde você vai?"/>
<input type="text" placeholder="Quando?"/>

<button>Continuar</button>

</div>

      <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
      com nossos <a className="text-zinc-300 underline " href="#">termos de uso</a>  e <a className="text-zinc-300 underline " href="#"> políticas de privacidade</a>.</p>
      
   </div>
   </div>
  )
}


