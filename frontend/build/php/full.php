<?php

	session_start();
	require_once("config.php");
	require_once("includes/session.php");
	require_once("classes/AppManager.php");
	require_once("classes/DBConn.php");
	require_once("classes/DBQuery.php");
	require_once("includes/mod-inputs.php");
require_once(__DIR__."/classes/PDODB.php");

	$section = "marketing";
	$page = "";
?>

<!doctype html>

<html>

    <head>

        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1";>

        <title>Inbox</title>
        <script type="text/javascript">
            var validation = '<?php echo $validation; ?>';
        </script>

        <?php include_once "includes/css-shared.php";?>
        <?php include_once "includes/js-shared.php";?>

        <link rel="stylesheet" type="text/css" href="css/device-mockups.min.css">
        <link rel="stylesheet" type="text/css" href="css/circular-countdown.css"/>
        <link href="css/bootstrap-toggle.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="mods/css/colorpicker.css" type="text/css" />
        <link rel="stylesheet" href="mods/css/jquery-te-1.4.0.css" type="text/css" />


        <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
        <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/radiobutton.css" type="text/css">
        <link rel="stylesheet" href="css/bootstrap-social.css" type="text/css" />
        <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css" type="text/css" />
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrapv3.3.2.min.css" type="text/css" />
        <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/sweetalert2.min.css">
        <link rel="stylesheet" href="//cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap-toggle.min.js"></script>
        <script src="js/sweetalert2.all.min.js"></script>
        <script src="js/sweetalert2.min.js"></script>
        <script src="js/tether.min.js"></script>
        <script src="js/jscolor.js"></script>
        <script src="js/moment.min.js"></script>

        <script src="js/hello.min.js"></script>
        <script src="//cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
        <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/jquery.tinymce.min.js" referrerpolicy="origin"></script>


<meta http-equiv="content-type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><title>Inbox</title><link href="../dist/js/chunk-33961cdd.64a60825.js" rel="prefetch"><link href="../dist/js/chunk-487824c7.fb11fe93.js" rel="prefetch"><link href="../dist/js/main.85e1551e.js" rel="preload" as="script">

    </head>

    <body>

        <script src="js/highcharts.js"></script>
        <script src="js/modules/exporting.js"></script>
        <?php include_once "includes/header.php";?>

        <div>content</div>
<div id="app"></div>

        <?php include_once "includes/footer.php";?>

<script src="../dist/js/main.85e1551e.js"></script>
    </body>
</html>
