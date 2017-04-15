import React from 'react'
import $ from 'jquery';
import { Image,Header,Segment,Icon,Form,Input,Grid,TextArea,Select,Checkbo,Button,Modal } from 'semantic-ui-react'
import {contactPatrick} from '../../../img/images/index'


const ActiveButton1=(onClick)=>{return(<h4 onClick={onClick}>Auditoria</h4>)}
const NoActiveButton1=(onClick)=>{return(<div><h4 onClick={onClick}>Auditoria <Icon name="check circle"></Icon></h4></div>)}

const ActiveButton2=(onClick)=>{return(<h4 onClick={onClick}>Asesoramiento</h4>)}
const NoActiveButton2=(onClick)=>{return(<div><h4 onClick={onClick}>Asesoramiento <Icon name="check circle"></Icon></h4></div>)}

const ActiveButton3=(onClick)=>{return(<h4 onClick={onClick}>Servidores</h4>)}
const NoActiveButton3=(onClick)=>{return(<div><h4 onClick={onClick}>Servidores <Icon name="check circle"></Icon></h4></div>)}

const ActiveButton4=(onClick)=>{return(<h4 onClick={onClick}>Otros</h4>)}
const NoActiveButton4=(onClick)=>{return(<div><h4 onClick={onClick}>Otros <Icon name="check circle"></Icon></h4></div>)}


const ActiveMensajeNombre=()=>{return <div className="ErrorMensaje">Error: ingrese Minimo 3 caracteres. Solo Letras</div>}
const ActiveMensajeEmail=()=>{return <div className="ErrorMensaje">Error: ingrese email correcto "infonet@dominio.com"</div>}
const ActiveMensajeMensajes=()=>{return <div className="ErrorMensaje">Error: ingrese Minimo 10</div>}

const ActiveMensajeTipoServicio=()=>{return <div className="ErrorMensajeTipoServicio">Error: Seleccione al menos un tipo de Servicio.</div>}

const ActiveErrorStyle={
    border:'1px solid red'
}


class ModalActive extends React.Component{

    onClickModalNo=()=>{
        window.location.href = 'http://localhost:9000/';
    }

    onClickModalYes=()=>{
        window.location.reload()
    }
    render(){
        return(
            <div>
                <div className="ui page modals dimmer transition visible active">
                    <div  className="ui small basic modal transition visible active" style={{marginTop:'-100px'}}>
                        <div className="ui header">
                            <i aria-hidden="true" className="archive icon"></i>
                            <div className="content">Mensaje Archivado</div>
                        </div><div className="content">
                        <h2>Su Mensaje a sido enviado Satisfactoriamente.</h2>
                    </div>
                        <div className="actions">
                            Enviar otro Mensaje
                            <button className="ui red basic inverted button" onClick={this.onClickModalNo.bind(this)}>
                                <i aria-hidden="true" className="remove icon"></i>No
                            </button>
                            <button className="ui green inverted button" onClick={this.onClickModalYes.bind(this)}>
                                <i aria-hidden="true" className="checkmark icon"></i>Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showAuditoria1:true,showAuditoria2:true,
            showAuditoria3:true,showAuditoria4:true,
            nombreAuditoria:'',nombreAsesoramiento:'',nombreServidores:'',nombreOtros:'',
            validaAuditoria:false,validaAsesoramiento:false,validaServidores:false,validaOtros:false,
            showErrorTipoServicios:false,
            showErrorNombre:false,showErrorEmail:false,showErrorMensajes:false,
            textNombresForm:'',textEmailForm:'',textMensajesForm:'',
            validoNombres:false,validoEmail:false,validoMensajes:false,
            showModal:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNombres = this.handleChangeNombres.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMensajes = this.handleChangeMensajes.bind(this);
        this.onClickAuditoria=this.onClickAuditoria.bind(this);
        this.onClickNoAuditoria=this.onClickNoAuditoria.bind(this);
        this.onClickAsesoramiento=this.onClickAsesoramiento.bind(this);
        this.onClickNoAsesoramiento=this.onClickNoAsesoramiento.bind(this);
        this.onClickServidores=this.onClickServidores.bind(this);
        this.onClickNoServidores=this.onClickNoServidores.bind(this);
        this.onClickOtros=this.onClickOtros.bind(this);
        this.onClickNoOtros=this.onClickNoOtros.bind(this)
    }

    Date(){
        var d=new Date();
        var dia=new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado")
        var mes = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre")
        var resultado="Hoy es "+ dia[d.getDay()]+" "+ d.getDate() + " de " +mes[d.getMonth()]+" del "+ d.getUTCFullYear()
        return(
            <div>{resultado} </div>
        )
    }

    onClickActive1(e){e.preventDefault();this.setState({showAuditoria1: !this.state.showAuditoria1})}
    onClickActive2(e){e.preventDefault();this.setState({showAuditoria2: !this.state.showAuditoria2})}
    onClickActive3(e){e.preventDefault();this.setState({showAuditoria3: !this.state.showAuditoria3})}
    onClickActive4(e){e.preventDefault();this.setState({showAuditoria4: !this.state.showAuditoria4})}

    validateNombre(value) {
        var re=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        return re.test(value);
    }
    validateEmail(value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);


    }

    handleSubmit(e){
        if(this.state.validoNombres===true && this.state.validoEmail===true && this.state.validoMensajes===true){
            e.preventDefault();
            let form = document.forms[0];
            let nombre = this.state.textNombresForm;
            let email = this.state.textEmailForm;
            let mensaje = this.state.textMensajesForm;

            let nombreAuditoria=this.state.nombreAuditoria;
            let nombreAsesoramiento=this.state.nombreAsesoramiento;
            let nombreServidores=this.state.nombreServidores;
            let nombreOtros=this.state.nombreOtros

            if(this.state.validaAuditoria == false  && this.state.validaAsesoramiento==false &&
                this.state.validaServidores==false && this.state.validaOtros==false){
                this.setState({
                    showErrorTipoServicios:true
                })
            }else{
                let data = `nombre=${nombre}&email=${email}&mensaje=${mensaje}`;
                //adjuntar los nombre del servicio en uno solo igual q la data
                this.setState({
                    showModal:true
                })
                this.clearForm(form)
                /*
                 fetch('./apiPHP/index.php',{
                 method:'post',
                 headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 body:data
                 })
                 .then(function(res){
                 return res.text()
                 })
                 .catch(function(err){
                 console.log(err);
                 });
                */

            }

        }else{
            alert("Error Al enviar El Mensaje. Complete correctamente los datos Validados")
        }
    }

    clearForm(form){
        for(let i=0;i<3;i++){
            form.elements[i].value = " ";
        }
    }


    handleChangeNombres(e) {
        var valorNombre=e.target.value
        if(valorNombre.length>=3 && this.validateNombre(valorNombre) && valorNombre!=''){
            this.setState({
                textNombresForm:valorNombre,
                showErrorNombre:false,
                validoNombres:true
            })
        }
        if(valorNombre.length<=2 ){
            this.setState({showErrorNombre:true, validoNombres:false})
        }
    }
    handleChangeEmail(e) {
        var valorEmail=e.target.value
        if(this.validateEmail(valorEmail)){
            this.setState({
                textEmailForm:valorEmail,
                showErrorEmail:false,
                validoEmail:true
            })
        }else{
            this.setState({
                showErrorEmail:true,
                validoEmail:false
            })
        }

    }
    handleChangeMensajes(e) {
        var valorMensajes=e.target.value
        if(valorMensajes.length>=10 && valorMensajes.length<=100){
            this.setState({
                textMensajesForm: valorMensajes,
                showErrorMensajes:false,
                validoMensajes:true
            });
        }else{
            this.setState({
                showErrorMensajes:true,
                validoMensajes:false
            });
        }

    }
    onClickAuditoria(){
        this.setState({
            nombreAuditoria:'Auditoria',
            validaAuditoria:true,
            showErrorTipoServicios:false
        })
    }
    onClickNoAuditoria(){
        this.setState({
            nombreAuditoria:'',
            validaAuditoria:false
        })
    }
    onClickAsesoramiento(){
        this.setState({
            nombreAsesoramiento:'Asesoramiento',
            validaAsesoramiento:true,
            showErrorTipoServicios:false
        })
    }
    onClickNoAsesoramiento(){
        this.setState({
            nombreAsesoramiento:'',
            validaAsesoramiento:false
        })
    }
    onClickServidores(){
        this.setState({
            nombreServidores:'Servidores',
            validaServidores:true,
            showErrorTipoServicios:false
        })
    }
    onClickNoServidores(){
        this.setState({
            nombreServidores:'',
            validaServidores:false
        })
    }
    onClickOtros(){
        this.setState({
            nombreOtros:'Otros',
            validaOtros:true,
            showErrorTipoServicios:false
        })
    }
    onClickNoOtros(){
        this.setState({
            nombreOtros:'',
            validaOtros:false
        })
    }

    render(){
        const prueba="hola"
        const prueba2="Walter"
        const activeButton1=this.state.showAuditoria1 ? ActiveButton1(this.onClickAuditoria) : NoActiveButton1(this.onClickNoAuditoria)
        const activeButton2=this.state.showAuditoria2 ? ActiveButton2(this.onClickAsesoramiento) : NoActiveButton2(this.onClickNoAsesoramiento)
        const activeButton3=this.state.showAuditoria3 ? ActiveButton3(this.onClickServidores) : NoActiveButton3(this.onClickNoServidores)
        const activeButton4=this.state.showAuditoria4 ? ActiveButton4(this.onClickOtros) : NoActiveButton4(this.onClickNoOtros)

        const activeClass1=this.state.showAuditoria1 ? 'selection-one-noactive' : 'selection-one-active'
        const activeClass2=this.state.showAuditoria2 ? 'selection-two-noactive' : 'selection-two-active'
        const activeClass3=this.state.showAuditoria3 ? 'selection-three-noactive' : 'selection-three-active'
        const activeClass4=this.state.showAuditoria4 ? 'selection-for-noactive' : 'selection-for-active'

        const MensajeErrorNombres=this.state.showErrorNombre ? ActiveMensajeNombre() : null
        const MensajeErrorEmail=this.state.showErrorEmail ? ActiveMensajeEmail() : null
        const MensajeErrorMensajes=this.state.showErrorMensajes ? ActiveMensajeMensajes() : null
        const MensajeErrorTipoServicio=this.state.showErrorTipoServicios ? ActiveMensajeTipoServicio() : <strong style={{color:'#CACBCD'}}>Seleccione Minimo 1</strong>

        const MostrarModal=this.state.showModal? <ModalActive/> : null

        return(
            <div >
                <div id="contacto">
                    {MostrarModal}

                        <div className="contacto-one">
                            <div className="row large-7 medium-9 columns">
                                <div className="one-content">
                                    <div className="content-title">
                                        <Header as='h2'>
                                            <Image shape='circular' src={contactPatrick} />
                                            <Header.Content>
                                                Patrick Ramirez Juano
                                                <Header.Subheader>
                                                    <div className="title-day">
                                                        {this.Date()}
                                                    </div>
                                                </Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                        <Segment attached>
                                            <Icon name="quote left"></Icon>
                                            Mi Nombre es <strong>Patrick Patrick Ramirez Juano</strong>,
                                            estoy aqui para decirte que estas
                                            estas dando un gran paso para tu empresa.
                                            Cualquier duda que tengas le responderemos lo mas pronto posible
                                            para darte respuestas y soluciones para tu empresa.

                                        </Segment>
                                    </div>

                                    <div className="content-seleccion">
                                        <h3 className="content-seleccion-title"> ¿Porque nos contacta? </h3>
                                        {MensajeErrorTipoServicio}
                                        <div className="row small-up-2 medium-up-4 large-up-4 text-center">
                                            <div className="columns">
                                                <div className="seleccion-full">
                                                    <div className={activeClass1} onClick={this.onClickActive1.bind(this)}>
                                                        {activeButton1}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="seleccion-full">
                                                    <div className={activeClass2} onClick={this.onClickActive2.bind(this)}>
                                                        {activeButton2}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="seleccion-full">
                                                    <div className={activeClass3} onClick={this.onClickActive3.bind(this)}>
                                                        {activeButton3}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="columns">
                                                <div className="seleccion-full">
                                                    <div className={activeClass4}  onClick={this.onClickActive4.bind(this)}>
                                                        {activeButton4}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="content-title-form">
                                        <h3>Escribamos en este formulario</h3>
                                    </div>

                                    <div className="content-form">
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group widths='equal' >
                                                <Form.Field control={Input} label='Nombres' placeholder='Minimo 3 ...' onBlur={this.handleChangeNombres} style={{border:this.state.showErrorNombre ? '1px solid red' : null }} />

                                                <Form.Field control={Input} label='Correo' placeholder='infonet@dominio.com' onBlur={this.handleChangeEmail} style={{border:this.state.showErrorEmail ? '1px solid red' : null }}/>
                                            </Form.Group>
                                            <Form.Group>
                                                <div>{MensajeErrorNombres}</div>
                                                <div>{MensajeErrorEmail}</div>
                                            </Form.Group>
                                            <Form.Field control={TextArea} label='Deje su Comentario' placeholder='Su Mensaje...' onBlur={this.handleChangeMensajes} style={{border:this.state.showErrorMensajes ? '1px solid red' : null }}/>
                                            <div>{MensajeErrorMensajes}</div>
                                            <input type="submit" value="Submit" />
                                        </Form>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
            </div>

        )
    }
}


/*
class  ContactFormData extends React.Component{
     constructor(props){
         super(props);
         this.state={nombre:'',
             email:'',
             mensaje:'',
             message:'',
             message1:null
         },
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
     }

    handleSubmit(e){
        e.preventDefault();
        let form = document.forms[0];
        let nombre = this.state.nombre;
        let email = this.state.email;
        let mensaje = this.state.mensaje;
        let data = `nombre=${nombre}&email=${email}&mensaje=${mensaje}`;
        let message = "";

        fetch('./apiPHP/index.php',{
              method:'post',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
               body:data
           })
            .then(function(res){
                return res.text()
            })
            .catch(function(err){
                console.log(err);
            });
        this.clearForm(form);
    }



    clearForm(form){
        for(let i=0;i<3;i++){
           form.elements[i].value = " ";
        }
    }



    handleChange(e){
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
           [name]:value
        });
    }



    render() {
        return (
            <Form className="Contact-form" onSubmit={this.handleSubmit} id="form-data">
                <Grid>
                    <Grid.Row className="Contact-formInput">
                        <Grid.Column width={7}>
                            <Form.Input label='Nombre' placeholder='Nombre' name="nombre" id="nombre" required onChange={this.handleChange} value={this.state.nombre}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="Contact-formInput">
                        <Grid.Column width={7}>
                            <Form.Input label='Email' placeholder='Email' type="email" name="email" id="email" required onChange={this.handleChange} value={this.state.email}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="Contact-formInput">
                        <Grid.Column width={14}>
                            <Form.TextArea label='Mensaje' placeholder='Escribe tu mensaje' name="mensaje" id="mensaje" required onChange={this.handleChange}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered className="Contact-formInput">
                        <Grid.Column width={6}>
                            <Form.Input type="submit" value="Enviar Mensaje" name="enviar"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        )
    }
}



Trozos de Codigo

const ContactFormTitle = (props) => {
    return  <h1 className="Contact-title">{props.titulo}</h1>
};


const ContactFormLegend = (props) => {
    return <p>{props.legend}</p>
};

*/

export default Contact;
