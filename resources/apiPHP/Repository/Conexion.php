<?php


class Conexion
{
   public $cn;

    public function __construct()
    {

       try{
           $this->cn = new PDO('mysql:host=localhost;dbname=infonet', 'root', '');
       }catch(PDOException $ex){
             echo $ex->getMessage();
       }

    }


    public function getConexion(){
        return $this->cn;
    }

}