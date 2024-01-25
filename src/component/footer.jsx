const Footer = () => {
  return (
    <footer className="footer">
      <div >
        <div className="divInfo">
        <div class="infoDiv">
        <h2 className="infoTexto">ATENCION
          DE LUNES A VIERNES
          DE 7 A 18.
        </h2>
      </div>
      <div class="infoDiv">
        <h2 className="infoTexto">TOTORAS, SANTA FE CELULAR: 3476592414
        </h2>
      </div>
        </div>
        <div className="logosRedes">
         <a href=" https://www.instagram.com/mores_security?igsh=ZXI5ZHR2Mnp1eW82" target="blank"><img className="logo1"
            src="../../public/iconosRedes/instagram-svgrepo-com.svg"
            alt=""
          /></a> 
         <a href="https://web.whatsapp.com/" target="blank"><img className="logo2" src="../../public/iconosRedes/whatsapp-svgrepo-com.svg" alt="" /></a> 
        </div>
      </div>

      <p className="derecho">&copy; 2021 - MoresSecurity</p>
    </footer>
  );
};

export default Footer;
