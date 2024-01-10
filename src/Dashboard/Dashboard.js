import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Slider from 'react-slick';
import { Modal, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Dashboard(){

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    const bicicletas= [
        {
          id: 1, 
          precio: 150000,
          imgUrl: 'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2022_Mockups_Assemblings/BIG_TRAIL_200_ornblk_MOC22_1.tif?p3',
          title: 'Mountain Trail 200',
          describe: "La bicicleta Mountain Trail 200 es una opción destacada para el ciclismo de montaña, destacando por su cuadro robusto, suspensión eficiente, sistema de cambio preciso y neumáticos todo terreno. Con frenos de disco potentes y un diseño ergonómico, proporciona una experiencia de conducción segura y cómoda. Su estilo moderno completa un paquete que equilibra rendimiento, durabilidad y diseño, siendo ideal para ciclistas de todos los niveles en terrenos desafiantes."
        },
        {
          id: 2, 
          precio: 170000,
          imgUrl: 'https://i.pinimg.com/originals/dc/a4/ad/dca4adfcbff24444da8f9db6085cfade.png',
          title: 'Urban Commuter Pro',
          describe: 'La bicicleta "Urban Commuter Pro" se distingue como una elección sobresaliente para los desplazamientos urbanos. Su diseño elegante y aerodinámico se combina con un cuadro resistente, perfecto para el ajetreo de la ciudad. Equipada con un sistema de cambios eficiente, la bicicleta garantiza una transición suave entre velocidades en entornos urbanos diversos. Los frenos de alta calidad ofrecen un rendimiento de frenado fiable, asegurando seguridad en las paradas. Con detalles ergonómicos, como un manillar cómodo y un sillín ajustable, proporciona una experiencia de conducción cómoda.'
        },
        {
          id: 3, 
          precio: 190000,
          imgUrl: 'data:image/jpeg;base64,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',
          title: 'Road Racer 5000',
          describe: 'La bicicleta "Road Racer 5000" sobresale como una opción de alto rendimiento diseñada para ciclismo de carretera. Su cuadro ligero y aerodinámico, combinado con una geometría precisa, ofrece una experiencia de conducción rápida y ágil. Equipada con un sistema de cambios de alta gama, la bicicleta permite transiciones suaves entre velocidades para optimizar el rendimiento en carreteras. Los frenos de disco de primera calidad proporcionan un control excepcional, asegurando una frenada eficiente y segura. Con detalles ergonómicos, como un manillar cómodo y un sillín ajustable, la Road Racer 5000 ofrece comodidad durante recorridos prolongados.'
        },
        {
            id: 4, 
            precio: 210000,
            imgUrl: 'https://www.vaic.com/1806-large_default/bicicleta-electrica-plegable-flebi-jet.jpg',
            title: 'Electric Explorer 350',
            describe: 'La bicicleta "Electric Explorer 350" destaca como una opción versátil para explorar entornos urbanos y más allá, gracias a su propulsión eléctrica. Su diseño robusto incorpora un cuadro resistente con capacidad para terrenos variados. La asistencia eléctrica, combinada con un sistema de batería eficiente, brinda un impulso adicional para viajes más largos y colinas empinadas. Equipada con frenos de calidad, ofrece un control seguro, mientras que su diseño ergonómico, que incluye un manillar cómodo y un sillín ajustable, asegura una experiencia de conducción placentera.'
          },
          {
            id: 5, 
            precio: 230000,
            imgUrl: 'https://www.libarbicicletas.com/cdn/shop/files/Meybo-2024-Superclass-Pro21-1_0a324367-a17f-4f06-995c-ba59d88b8829.jpg?v=1702421525&width=533',
            title: 'BMX Xtreme Pro',
            describe: 'La bicicleta "BMX Xtreme Pro" se presenta como una opción de alto rendimiento diseñada específicamente para acrobacias y competiciones BMX. Su cuadro resistente y ligero, combinado con una geometría especializada, ofrece agilidad y maniobrabilidad para realizar trucos extremos. Equipada con componentes duraderos, como llantas reforzadas y una horquilla robusta, la BMX Xtreme Pro se destaca en terrenos urbanos y parques de skate. Su diseño aerodinámico y detalles ergonómicos, como el manillar de agarre firme, ofrecen control y comodidad durante las acrobacias. '
          }
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };


    return(
        <div className="dashboard">
            <div className="titulo">
                <h2>Lista de bicicletas</h2>
                <Link to="/" className="salir">Salir</Link>
            </div>
            <div className="bicicletas">
                <Slider {...settings} className="bici">
                    {bicicletas.map((bicicleta) => (
                        <div key={bicicleta.id} className="card">
                        <img src={bicicleta.imgUrl} alt={bicicleta.title} />
                        <div  className="precio">
                        <p>{bicicleta.precio}</p>
                        <ShoppingCartIcon fontSize="large"/>
                        </div>
                        
                        <h4>{bicicleta.title}</h4>
                        <p>{bicicleta.describe}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="register">
             <button type="button" className="registrarBici" onClick={handleModalOpen}>Registrar Bicicleta</button>
            </div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Bicicleta</Modal.Title>
                </Modal.Header>
                <Modal.Body class="d-flex flex-column p-4">
                    <h5 class="mt-3">Nombre de Bicicleta</h5>
                    <input type="text" placeholder="Ej: electric explorer 350"></input>
                    <h5 class="mt-3">Precio</h5>
                    <input type="numbret" placeholder="Ej: 157.000"></input>
                    <h5 class="mt-3">Descripcion</h5>
                    <input type="text" placeholder="Una breve descripcion sobre la bicicleta"></input>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Dashboard;