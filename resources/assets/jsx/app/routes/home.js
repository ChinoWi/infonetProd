import React from 'react'

import { Button, Icon, Header,Menu,Grid,Image } from 'semantic-ui-react'

import Slider from 'react-slick'

import {owasp,kali,defacement,servidor,homePorque,homeAnalisis,homeAtaque,homeSeguro} from '../../../img/images/index'

const Home=React.createClass({
    render(){
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500
        };
        var settings2 = {
            className: '',
            dots: true,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        };

        return(
            <div id="home">
                <div className="home-one">
                    <div className="columns text-center">
                        <div className="one-p">
                            <div className="row large-6 medium-6 columns" >
                                <h3 style={{color:'#D1D1D1'}}>
                                    //Consultoria y Entramiento en Seguridad Informatica//
                                </h3>
                                <h1>
                                    Infonet Soluciones en
                                </h1>
                            </div>


                            <div className="row large-4 medium-6 columns">
                                <Slider {...settings}>
                                    <div><h1 style={{color:'#4cc1be'}}>Asesorias y Audotiras Web</h1></div>
                                    <div><h1 style={{color:'#4cc1be'}}>Segurindad Informatica</h1></div>
                                    <div><h1 style={{color:'#4cc1be'}}>Instalacion y servidores Linux</h1></div>
                                    <div><h1 style={{color:'#4cc1be'}}>Hacking Etico</h1></div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="row columns">
                    </div>
                </div>

                <div className="home-two" >
                    <div className="two-one columns">
                        <div className="row large-7 medium-8 columns title" >
                            <h1>Hacking Etico y Seguridad Informatica para Empresas</h1>
                        </div>
                        <div className="row large-6 medium-7 columns subtitle">
                            <h4></h4>
                        </div>
                    </div>
                    <div className="two-two columns text-center" >
                        <div className="columns">
                            <div className="row large-8 columns" >
                                <div className="row item-img">
                                    <div className="large-6 medium-6 small-4 columns" >
                                        <Image src={homePorque} />
                                    </div>
                                    <div className="large-6 medium-6 small-8 columns" >
                                        <h3>¿Porque tener una Seguridad Informatica en tu Empresa?</h3>
                                        <p className="item-text-p" >
                                            Las principales concecuencias en tu empresa, es encontrarte
                                            con un atacante con fines malicioso, y este probocar posibles <strong>perdidas
                                            de dinero</strong>, <strong>robo de informacion</strong>, daña la <strong>reputacion de la empresa</strong>,
                                            puedes tener <strong>problemas legales</strong>.
                                            Para prevenir eso es importante que tu empresa tenga como Infonet Soluciones

                                            a su dispocicion para la seguridad en tu empresa.
                                        </p>
                                    </div>
                                </div>
                                <div className="row item-img">
                                    <div className="large-6 medium-6 small-8 columns" >
                                        <h3>Detecte debilidades en su empresa</h3>
                                        <p className="item-text-p" >
                                            Realizamos <strong> Auditoria Informático </strong>
                                            para verificar de donde un hackers puede acceder a alguna parte
                                            del sistema para evitar daños informaticos.
                                            Obtenga un informe detallado de las debilidades en redes, aplicaciones web
                                            y mala configuracion de los servidores.
                                        </p>
                                    </div>
                                    <div className="large-6 medium-6 small-4 columns">
                                        <Image src={homeAnalisis} />
                                    </div>
                                </div>
                                <div className="row item-img">
                                    <div className="large-6 medium-6 small-4 columns" >
                                        <Image src={homeAtaque} />
                                    </div>
                                    <div className="large-6 medium-6 small-8 columns" >
                                        <h3>¿A sufrido recientemente un ataque informatico?</h3>
                                        <p className="item-text-p" >
                                            Debe tener en cuenta q al momento e recibir un ataque informatico
                                            el Hackers puede obtener <strong>elevacion de privilegios</strong>,
                                            <strong> obtener su red</strong>,
                                            y <strong>servidores a su antojo</strong>.
                                            Inmediatamente Infonet Soluciones detectara una shell por donde un hacker
                                            lograria ingresar a cada momento, o falla de ejecucion de codigo.
                                        </p>
                                    </div>
                                </div>
                                <div className="row item-img">
                                    <div className="large-6 medium-6 small-8 columns" >
                                        <h3>¿Cuenta o desea implementar un servidor seguro?</h3>
                                        <p className="item-text-p" >
                                            La mala configuración, no tener hadware y sofware de protección y no estar al dia en las actualizaciones
                                            de las aplicaciones, kernel, sevicios, y configuraciones por defaul..
                                            Permiten generar Contratiempos, y provoca fallos en sus servidores, a veces
                                            exponiendo parte de confindencialidad del sistema.
                                        </p>
                                    </div>
                                    <div className="large-6 medium-6 small-4 columns">
                                        <Image src={homeSeguro} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row"></div>
                </div>

                <div className="home-three text-center">
                    <div className="row">
                        <div className="large-up-4 small-up-2" >
                            <div className="columns block">
                                <img src={owasp}/>
                                <Header as='h2'>
                                    Owasp top 10 Security
                                    <Header.Subheader>
                                        10 Riesgos de seguridad que son muy comunes importantes, segun
                                        la organizacion de Owasp.
                                    </Header.Subheader>
                                </Header>
                            </div>
                            <div className="columns block">
                                <img src={kali}/>
                                <Header as='h2'>
                                   Kali Linux - Hacking Ético
                                    <Header.Subheader>
                                        Kali Linux, dedicado al Hacking Etico, Herramienta
                                        principal para los analisis de Vulnerabilidades.
                                    </Header.Subheader>
                                </Header>
                            </div>
                            <div className="columns block">
                                <img src={defacement}/>
                                <Header as='h2'>
                                    Defacement Website
                                    <Header.Subheader>
                                        Desfiguracion de Website, un cambio no autoriza por parte del hacker
                                        para dar a conocer que a sido hackeado.
                                    </Header.Subheader>
                                </Header>
                            </div>
                            <div className="columns block">
                                <img src={servidor}/>
                                <Header as='h2'>
                                    Servidor Linux Security
                                    <Header.Subheader>
                                        Cambiar la seguridad por defaul para mejorar la seguridad en los servidores Linux
                                        y evitar posibles xploit comunces.
                                    </Header.Subheader>
                                </Header>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default Home