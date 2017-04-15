import React from 'react'
import {Image,Container,Icon,Modal,List} from 'semantic-ui-react'

const themes = [
    {
        "id":1,
        "theme":"Parrafo-1"
    },
    {
        "id":2,
        "theme":"Parrafo-2"
    },
    {
        "id":3,
        "theme":"Parrafo-3"
    },
    {
        "id":4,
        "theme":"Parrafo-4"
    },
    {
        "id":5,
        "theme":"Parrafo-5"
    },
    {
        "id":6,
        "theme":"Parrafo-6"
    },
];





class Empresa extends React.Component{
    constructor(props){
        super(props);
        this.state={themes:themes}
    }


    render(){

        return(
            <div>
                <Nosotros/>
                <Mision/>
                <Vision/>
                <div className="mision-link">
                    <ModalQuestions themes = {this.state.themes}/>
                </div>
            </div>
        )
    }
};


/*trozos de codigo*/
const ModalQuestions = (props) => {
    return(
        <Modal trigger={<Icon circular name='help' size="big" inverted/>} closeIcon='close'>
            <Modal.Header className="question-modal--title">¿Porque Contratarnos?</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <ModalQuestionsItem themes={props.themes}/>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
};


const ModalQuestionsItem = (props) => {
    return(
        <List divided relaxed>
            {
                props.themes.map((theme)=>{
                    return(
                        <List.Item key={theme.id}>
                            <List.Icon name='checkmark' size='large' verticalAlign='bottom'/>
                            <List.Content className="question-modal--content">
                                <p>{theme.theme}</p>
                            </List.Content>
                        </List.Item>
                    )

                })
            }
        </List>
    )
};




const Mision = () => {
    return(
        <Container text className="container-mision">
            <h2 className="container-mision--title">Nuestra Mision</h2>
            <p className="container-mision--content">
                Desde su fundación en 2004, la misión de Facebook es ofrecer a los usuarios la posibilidad
                de compartir contenido y hacer que el mundo sea un lugar más abierto y conectado. Los usuarios utilizan
                Facebook para mantenerse conectados con sus familiares y
                amigos, para descubrir lo que está pasando en el mundo y para compartir y expresar todo lo que les interesa.
            </p>
        </Container>

    )
};



const Vision = () => {
    return(
        <Container text className="container-mision">
            <h2 className="container-mision--title">Nuestra Vision</h2>
            <p className="container-mision--content">
                Desde su fundación en 2004, la misión de Facebook es ofrecer a los usuarios la posibilidad
                de compartir contenido y hacer que el mundo sea un lugar más abierto y conectado. Los usuarios utilizan
                Facebook para mantenerse conectados con sus familiares y
                amigos, para descubrir lo que está pasando en el mundo y para compartir y expresar todo lo que les interesa.
            </p>
        </Container>

    )
};



const Nosotros = () => {
    return(
        <Container text className="container-mision">
            <h2 className="container-mision--title">Nosotros</h2>
            <p className="container-mision--content">
                Desde su fundación en 2004, la misión de Facebook es ofrecer a los usuarios la posibilidad
                de compartir contenido y hacer que el mundo sea un lugar más abierto y conectado. Los usuarios utilizan
                Facebook para mantenerse conectados con sus familiares y
                amigos, para descubrir lo que está pasando en el mundo y para compartir y expresar todo lo que les interesa.
            </p>
        </Container>

    )
}






export default Empresa