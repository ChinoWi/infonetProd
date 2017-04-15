import React,{Component} from 'react'
import { Header, Icon } from 'semantic-ui-react'

import {fondohack,iconTarget1} from '../../../img/images/index'

class Services extends React.Component{
    render(){
        return(
            <div id="services">
                <div className="services-one">
                    <div className="row large-9 medium-6 columns">
                        <div className="text-center">
                            <div className="one-img">
                                <img src={fondohack} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services-two">
                    <div className="row large-6 medium-6 columns" style={{border:'1px solid red'}}>
                        <div className="text-center">
                            <div className="two-title">
                                <h1>Servicios de Hacking Etico y Consultoria</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row large-6 medium-6 columns" style={{border:'1px solid red'}}>
                        <div className="text-center">
                            <div className="two-subtitle">
                                <h3>Brindadsfsdf </h3>
                            </div>
                        </div>
                    </div>
                    <div className="two-content">
                        <div className="row">
                            <div className="large-up-4 text-center">
                                <div className="columns">
                                    <div className="content-content">
                                        <div className="content-target1">
                                            <img src={iconTarget1} alt=""/>

                                        </div>
                                        <div className="content-target2">
                                            <h3>Pentesting Web</h3>
                                        </div>
                                        <div className="content-target3">
                                            <div>Anasda dasd asda sdnas dnausodn asdnb</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="columns">
                                    <div className="content-content">
                                        <div className="content-target1">
                                            <img src={iconTarget1} alt=""/>

                                        </div>
                                        <div className="content-target2">
                                            <h3>Pentesting Web</h3>
                                        </div>
                                        <div className="content-target3">
                                            <div>Anasda dasd asda sdnas dnausodn asdnb</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="columns">
                                    <div className="content-content">
                                        <div className="content-target1">
                                            <img src={iconTarget1} alt=""/>

                                        </div>
                                        <div className="content-target2">
                                            <h3>Pentesting Web</h3>
                                        </div>
                                        <div className="content-target3">
                                            <div>Anasda dasd asda sdnas dnausodn asdnb</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="columns" >
                                    <div className="content-content">
                                        <div className="content-target1">
                                            <img src={iconTarget1} alt=""/>

                                        </div>
                                        <div className="content-target2">
                                            <h3>Pentesting Web</h3>
                                        </div>
                                        <div className="content-target3">
                                            <div>Anasda dasd asda sdnas dnausodn asdnb</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services-three">
                    <div className="row large-5 medium-6 columns" style={{border:'1px solid red'}}>
                        <div className="text-center">
                            <div className="two-title">
                                <h2>Tecnologias Aplicadas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row large-5 medium-4 columns" style={{border:'1px solid red'}}>
                        <div className="text-center">
                            <div className="two-subtitle">
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row large-6 medium-6 columns" style={{border:'1px solid red'}}>
                        <div className="text-center">
                            <div className="two-content">
                                <h3>CONTENT CONTENT CONTENT CONTENT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row large-9 medium-8 columns" style={{border:'1px solid red'}}>
                        <div className="text-center">
                            <div className="large-6 columns" style={{border:'1px solid blue'}}>
                                <div className="two-izq-content">
                                    dsfsdf
                                </div>
                            </div>
                            <div className="large-6 columns" style={{border:'1px solid blue'}}>
                                <div className="two-der-content">
                                    sdfsdf
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Services;