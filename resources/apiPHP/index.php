<?php

  header("Content-Type: text/event-stream");
  header("Cache-Control: no-cache");
  header("Access-Control-Allow-Origin: *");


  require 'Repository/Queries.php';


  $contacto = new Queries(@$_POST);
  $bandera = "";
  if($contacto->registerContacto()){
      $bandera = "correcto";
  }else{
      $bandera = "error";
  }

   echo json_encode(['mensaje' => $bandera]);
  //var_dump($contacto->registerContacto());

?>