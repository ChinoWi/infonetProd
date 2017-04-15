<?php

  header("Cache-Control: no-cache");
  header("Access-Control-Allow-Origin: *");


  require 'Repository/Queries.php';
  $contacto = new Queries(@$_POST);

  $contacto->registerContacto();

?>