<?php

class Contacto
{
   protected $nombre;
   protected $email;
   protected $mensaje;
   protected  $servicios;

   public $data;
    
   public function __construct(array $data)
   {
       $this->nombre = $data["nombre"];
       $this->email = $data["email"];
       $this->mensaje = $data["mensaje"];
       $this->servicios = $data["servicios"];
   }
    
    public function getNombre(){
        return $this->nombre;
    }

    public function getEmail(){
       return $this->email;
    }

    public function getMensaje(){
         return $this->mensaje;
    }

    public function getServicios(){
        return $this->servicios;
    }

}




