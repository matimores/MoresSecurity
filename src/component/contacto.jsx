const Contacto = () => {
  return (
    <>
      <main className="contact">
        <div className="contentContact">
          <div className="cart">
            <p className="textContacto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam dolorum magni ex modi soluta, id voluptatem expedita
              assumenda, voluptate quisquam praesentium corporis impedit ipsa
              accusantium quidem voluptatibus iste, dolore ab!
            </p>
          </div>

          <div class="contact_form">
            <div class="formulario">
              <h1 className="titulo">Formulario de contacto</h1>
              <h3 className="tituloDos">
                Escríbenos y en breve nos pondremos en contacto contigo
              </h3>

              <form action="submeter-formulario.php" method="post">
                <p className="parrafo">
                  <label for="nombre" class="colocar_nombre">
                    Nombre
                    <span class="obligatorio">*</span>
                  </label>
                  <input
                    type="text"
                    name="introducir_nombre"
                    id="nombre"
                    required="obligatorio"
                    placeholder="Escribe tu nombre"
                  />
                </p>

                <p className="parrafo" >
                  <label for="email" class="colocar_email">
                    Email
                    <span class="obligatorio">*</span>
                  </label>
                  <input
                    type="email"
                    name="introducir_email"
                    id="email"
                    required="obligatorio"
                    placeholder="Escribe tu Email"
                  />
                </p>

                <p className="parrafo">
                  <label for="telefone" class="colocar_telefono">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="introducir_telefono"
                    id="telefono"
                    placeholder="Escribe tu teléfono"
                  />
                </p>

                <p className="parrafo">
                  <label for="mensaje" class="colocar_mensaje">
                    Mensaje
                    <span class="obligatorio">*</span>
                  </label>
                  <textarea
                    name="introducir_mensaje"
                    class="texto_mensaje"
                    id="mensaje"
                    required="obligatorio"
                    placeholder="Deja aquí tu comentario..."
                  ></textarea>
                </p>

                <button type="submit" name="enviar_formulario" id="enviar">
                  <p >Enviar</p>
                </button>

                <p class="aviso">
                  <span class="obligatorio"> * </span>los campos son
                  obligatorios.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contacto;
