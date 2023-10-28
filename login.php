<?php
include_once("./resource/CAS-1.4.0/CAS.php");
phpCAS::client(CAS_VERSION_2_0,'cas.auth.rpi.edu',443,'/cas');

phpCAS::setNoCasServerValidation();

if (!phpCAS::isAuthenticated()) {
  phpCAS::forceAuthentication();
} else {
  if(isset($_GET['source'])){
    if($_GET['source']=="view.php" || $_GET['source']=="rate.php" || $_GET['source']=="analysis.php"){
      header('Location: '.$_GET['source']);
    } else {
      header('Location: index.html');
    }
  } else {
    header('Location: index.html');
  }
}
?>
