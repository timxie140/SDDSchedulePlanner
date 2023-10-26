<?php
include_once("./resource/CAS-1.4.0/CAS.php");
phpCAS::client(CAS_VERSION_2_0,'cas.auth.rpi.edu',443,'/cas');

phpCAS::setNoCasServerValidation();

if (phpCAS::isAuthenticated()) {
  phpCAS::logout();
} else {
  if(isset($_GET['source'])){
    header('Location: '.$_GET['source']);
  } else {
    header('Location: index.html');
  }
}
?>
