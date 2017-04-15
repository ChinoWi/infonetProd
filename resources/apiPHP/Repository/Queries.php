<?php

include 'Repository/Conexion.php';
include 'Clases/Contacto.php';

class Queries extends Conexion
{
    //protected $contacto;
    protected $contacto;

    public function __construct(array $data){
        $this->contacto = new Contacto($data);
       // $this->datos =  $this->contacto->getData();
        //$this->data = $data;
    }
    
    /*public function Data(){
        return $this->datos;
    }*/



   public function registerContacto(){
         $nombre = $this->contacto->getNombre();
         $email = $this->contacto->getEmail();
         $mensaje = $this->contacto->getMensaje();

         $cn = new Conexion();
         $query = 'insert into contacto(nombre,email,mensaje) values(:nombre,:email,:mensaje)';
         $sql = $cn->getConexion()->prepare($query);
         $sql->bindParam(':nombre',$nombre);
         $sql->bindParam(':email',$email);
         $sql->bindParam(':mensaje',$mensaje);
         $bandera = $sql->execute();
         return $bandera;
    }




}