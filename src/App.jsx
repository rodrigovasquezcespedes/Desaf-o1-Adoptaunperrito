import img1 from './assets/image/imagen1.jpg';
import img2 from './assets/image/imagen2.jpg';
import img3 from './assets/image/imagen3.jpg';
import img4 from './assets/image/imagen4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';



function App() {

  return (
    <>
      

      <div className='container'>
      <Header title="Adopta un perrito" />
        < div className="row ">
          <div className="col-md-3 g-2">
            <MyCard
              image={img1}
              title="Bartolo"
              text="Lleno de energia,listo para jugar contigo.¡Dale a Bartolo el hogar amoroso que merece!"
              bg="success"
              buttonText="Husky"
            />
          </div>
          <div className="col-md-3 g-2">
            <MyCard
              image={img2}
              title="Messi"
              text="Es jugueton,amigable y se lleva con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
              bg="primary"
              buttonText="Bobtail"
            />
          </div>
          <div className="col-md-3 g-2">
            <MyCard
              image={img3}
              title="Gohan"
              text="Un perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenmta el amor incondicional!"
              bg="danger"
              buttonText="Shar Pei"
            />
          </div>
          <div className="col-md-3 g-2">
            <MyCard
              image={img4}
              title="Princesa"
              text="Es una compañera leal y cariñosa que adora los mimos y los abazos ¡ayuda a princesa a encontrar su Final Feliz!"
              bg="warning"
              buttonText="Beagle"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
