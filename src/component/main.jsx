const Main = () => {
  return (
    <main className="mainInicio">
      <div className="Inicio">
        <div className="detalleInicio">
          <h2 className="tituloInicio">TU SEGURIDAD ES NUESTRA PRIORIDAD</h2>
          <h3 className="infoInicio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium blanditiis fuga aut cumque quo mollitia rerum veniam
            laborum voluptatibus error sequi accusantium magni voluptatum sunt
            consectetur, repellat dolore iste qui.
          </h3>
          <a style={{textDecoration:'none',width:'100%',display:'flex' ,justifyContent:'center'}} href="/contacto">
            <button class="buttonInicio">
              Contacto
              
            </button>
          </a>
        </div>
        <div  className="imgInicio">
          <img className="image" src="../../public/mores1.jpeg" alt="" />
          <img className="image" src="../../public/mores2.jpeg" alt="" />
        </div>
      </div>
    </main>
  );
};
export default Main;
