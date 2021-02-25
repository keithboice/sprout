<?php

session_start();
require_once("config.php");
require_once("includes/session.php");
require_once("classes/DBConn.php");
require_once("classes/DBQuery.php");
require_once("includes/mod-inputs.php");

$section = "inbox";
$page = "";
?>

<html>

<head>


  <?php include_once("includes/css-shared.php"); ?>
  <?php include_once("includes/js-shared.php"); ?>
  <link href="/inbox.main.js" rel="preload" as="script">

</head>

<body id="inbox">

<?php include_once("includes/headerFluid.php"); ?>

<div style="position:absolute;top:40px;left:0;min-width:98vw;margin:0;padding:0;z-index:1000;">

  <div id="app"></div>

  <script src="/inbox.main.js"></script>

</div>

<?php include_once("includes/footer.php"); ?>

</body>

</html>