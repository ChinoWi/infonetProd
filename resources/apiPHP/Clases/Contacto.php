<?php

class Contacto
{
   protected $nombre;
   protected $email;
   protected $mensaje;

   public $data;
    
   public function __construct(array $data)
   {
       $this->nombre = $data["nombre"];
       $this->email = $data["email"];
       $this->mensaje = $data["mensaje"];
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

}




