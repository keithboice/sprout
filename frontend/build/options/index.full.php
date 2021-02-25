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
    //$revision_ = "2020111793";
	//$revision = "2020111793";

//loading revisions
$criteria =  array(
    'WHERE' => 'module_name = :module'
);

$params =	array(
    ":module" => 'marketing'
);

$marketingRevision = 0;
$resultsRevisions  = (new PDODB())->findByAttribute("revisions_tbl", $criteria, $params);

if(array_key_exists(0, $resultsRevisions)){
  if($resultsRevisions[0]['value'] == 'auto')
    $marketingRevision = time() - 1000;
  else
    $marketingRevision = $resultsRevisions[0]['value'];
}

  //$widget_revision = 'CDjo1l1093';
  //$builder_revision = 'tKhx2oB193';

	function validation(){
		$id = $_SESSION['id'];
		$result = 'No';
		$url = CLNTCtonfig::PUNCHG_URL_HREF . "api/";
		$data = array(
			'function' 	=>	"getValidateKioskCid",
			'cid' 		=> 	$_SESSION['id']
			);

		$curl = curl_init();
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  // 1 for string, 0 for output
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_TIMEOUT, 30);
		curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
		$response = curl_exec($curl);
		curl_close($curl);

		$resultCurl = json_decode($response);
		if(!is_null($resultCurl) && $resultCurl->status === 'success' && $resultCurl->response !== null){
			$responseCurl = $resultCurl->response;
			if($responseCurl->active === '1'){
				$result = 'Si';
			}
		}


		return $result;
	}

	$validation = validation();
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


        <style type="text/css">
            .iframe-preview {
                box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15)!important;
                border-radius: 0.85em;
                overflow: hidden;
            }
            .iframe-preview-header:after {
                content: "\f111 \f111 \f111";
                color: #fff;
                padding-left: 19px;
                top: 11px;
                font-family: "fontawesome";
                position: absolute;
                font-size: 0.5em;
                letter-spacing: 8px !important;
            }
            .iframe-preview-header {
                background: #646c7b;
                border-radius: 0.85em 0.85em 0 0;
                height: 30px;
            }
            .iframe-preview-content {
                padding: 0;
                border-radius: 0 0 0.85em 0.85em;
            }
            .preview-iframe {
                border-radius: 0 0 0.85em 0.85em;
            }
            .additional-info {
                padding: 0 4px;
            }
            .additional-info:hover {
                text-decoration: underline !important;
            }
            .rewards-table td {
                vertical-align: middle !important;
            }
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 34px;
              margin-bottom: 0px;
            }

            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              -webkit-transition: .4s;
              transition: .4s;
            }

            .switch.disabled .slider {
                background-color: #eee !important;
                pointer-events: none !important;
            }

            .slider:before {
              position: absolute;
              content: "";
              height: 26px;
              width: 26px;
              left: 4px;
              bottom: 4px;
              background-color: white;
              -webkit-transition: .4s;
              transition: .4s;
            }

            input:checked + .slider {
              background-color: #2196F3;
            }

            input:focus + .slider {
              box-shadow: 0 0 1px #2196F3;
            }

            input:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            }

            .spinner {
              margin: 100px auto 0;
              width: 70px;
              text-align: center;
            }

            .spinner > div {
              width: 18px;
              height: 18px;
              background-color: #dedede;

              border-radius: 100%;
              display: inline-block;
              -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
              animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }

            .spinner .bounce1 {
              -webkit-animation-delay: -0.32s;
              animation-delay: -0.32s;
            }

            .spinner .bounce2 {
              -webkit-animation-delay: -0.16s;
              animation-delay: -0.16s;
            }

            @-webkit-keyframes sk-bouncedelay {
              0%, 80%, 100% { -webkit-transform: scale(0) }
              40% { -webkit-transform: scale(1.0) }
            }

            @keyframes sk-bouncedelay {
              0%, 80%, 100% {
                -webkit-transform: scale(0);
                transform: scale(0);
              } 40% {
                -webkit-transform: scale(1.0);
                transform: scale(1.0);
              }
            }
        </style>

        <?php include_once "includes/css-shared.php";?>
        <?php include_once "includes/js-shared.php";?>

        <link rel="stylesheet" type="text/css" href="css/device-mockups.min.css">
        <link rel="stylesheet" type="text/css" href="css/circular-countdown.css"/>
        <link href="css/bootstrap-toggle.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="mods/css/colorpicker.css" type="text/css" />
        <link rel="stylesheet" href="mods/css/jquery-te-1.4.0.css" type="text/css" />


        <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
        <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>

        <script src="mods/js/ColorContrast.js?<?php echo $marketingRevision; ?>"></script>

        <link rel="stylesheet" href="mods/css/layout.css?<?php echo $marketingRevision; ?>" media="screen" />
        <link rel="stylesheet" href="mods/css/mod-marketing-widget.css?<?php echo $marketingRevision; ?>" media="screen" />
        <link rel="stylesheet" href="mods/css/modal-widget.css?<?php echo $marketingRevision; ?>" media="screen" />
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

        <script src="js/bootstrap-datetimepicker.min.js"></script>
        <script src="mods/js/mod-marketing-1.0.js?<?php echo $marketingRevision; ?>"></script>
        <script src="mods/js/mod-marketing-widget-1.2.js?<?php echo $marketingRevision; ?>"></script>
        <script src="mods/js/mod-marketing-qr-1.0.js"></script>
        <script src="mods/js/mod-marketing-builder-1.5.js?<?php echo $marketingRevision; ?>"></script>
        <script src="mods/js/mod-marketing-pg-1.3.js"></script>
        <script src="mods/js/jquery-te-1.4.0.min.js"></script>
        <script type="text/javascript" src="js/jquery.circular-countdown.js"></script>
        <script src="mods/js/colorpicker.js"></script>
        <script src="mods/js/eye.js"></script>
        <script src="mods/js/utils.js"></script>
        <script src="mods/js/layout.js?ver=1.0.2"></script>
        <script src="js/hello.min.js"></script>
        <script src="//cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
        <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/jquery.tinymce.min.js" referrerpolicy="origin"></script>

/*

        <script type="text/javascript">

        function copyToClipboard(target, element) {
          var $temp = $("<input>")
            var Id = $(element).attr('data-AttachmentId');
          $("body").append($temp);
          $temp.val($(element).data('url')).select();
          document.execCommand("copy");
          $temp.remove();
            var show =  setInterval(function() {
                $("#labelCopied-"+Id).fadeTo(100, 0.1).fadeTo(200, 1.0);
            },700);
            setTimeout(function(){
                    clearInterval(show);
                    $("#labelCopied-"+Id).fadeOut(700);
                },1450);
        }

        function copyOptinUrlToClipboard(target, element) {
            var $temp = $("<input>")
            var Id = $(element).attr('data-AttachmentId');
            $("body").append($temp);
            if($(element).data('url')) {
                $temp.val($(element).data('url')).select();
            }
            else {
                $temp.val($(element).val()).select();
            }
            document.execCommand("copy");
            $temp.remove();
            var show =  setInterval(function() {
                $(target).find('.ui-button-text').text('Copied!')
            },100);
            setTimeout(function(){
                clearInterval(show);

                $(target).find('.ui-button-text').text($(target).data('original-text'))
            },1450);
        }

        $(document).ready(function ()  {
            marketing.init()
            $('[data-toggle="tooltip"]').tooltip()
            $('.content').css({
                padding: '0px',
                margin: '20px'
            });
        });

        function onIframeLoad(iframe) {
            iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
            $('.widget-loading').addClass('hide');
        }

        </script> */


    </head>

    <body>

        <script src="js/highcharts.js"></script>
        <script src="js/modules/exporting.js"></script>
        <?php include_once "includes/header.php";?>

        <div>content</div>

        /* <?php echo $hiddeninputs; ?>
        <input type="hidden" name="GATEWAY_URL" id="GATEWAY_URL" value="<?php print CLNTCtonfig::GATEWAY_URL;?>"/>
        <input type="hidden" name="ENROLL_URL" id="ENROLL_URL" value="<?php print CLNTCtonfig::ENROLL_URL;?>"/>
        <input type="hidden" name="PUNCHG_URL_HREF" id="PUNCHG_URL_HREF" value="<?php print CLNTCtonfig::PUNCHG_URL_HREF;?>"/>
        <input type="hidden" name="mobile-coupons" id="update-record" value="<?=isset($_GET['mc']) ? $_GET['mc'] : ""?>"/>
        <input type="hidden" name="web-page" id="update-digital-kiosk" value="<?=isset($_GET['dk']) ? $_GET['dk'] : ""?>"/> */
        /* <?php include_once "mods/mod-marketing.php";?>
        <?php include_once "mods/phone-preview.php";?>
        <?php include_once "mods/mod-library-dialog.php";?> */
        <?php include_once "includes/footer.php";?>
    </body>
</html>
