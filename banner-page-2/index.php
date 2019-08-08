<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>test</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
     


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="page-banner parallax-container" data-speed="0.4" data-image-src="https://via.placeholder.com/1400x400">
      <div class="container-outer">
        <div class="container">
          <div class="row"> 
            <div class="col-md-6">
              <div class="banner-text">
                <h2>Page Banner</h2>
                <ul class="list-inline add-icon">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Page</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bread-outer">
      <div class="container">
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li class="active">Quarterly Highlights</li>
        </ol>
      </div>
    </div>

    <div style="height:800px"></div>
    <style>
      .page-banner {
        position: relative;
        overflow:hidden;  
        padding-top:100px;
        padding-bottom: 100px;
      }
      .page-banner .banner-text h2{
        font-size: 40px;
        color: #fff;
        margin-bottom: 18px !important;
      }
      .page-banner .container-outer {
        left: 0px;
        right: 0px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .page-banner ul {
        margin-bottom: 0px;
      }
      .page-banner ul li a {
        color: #fff;
        font-size: 15px;
      }
      .page-banner .add-icon li:before {
        font-family: FontAwesome;
        content: "\f105";
        background-size: 10px 20px;
        display: inline-block;
        padding-right: 9px;
        vertical-align: middle;
        top: -1px;
        left: -4px;
        position: relative;
        color: #fff;
      }
      .page-banner .add-icon li:first-child:before {
        display: none;
      }
      .bread-outer {
        background-color: #f1f1f1;
        margin-bottom: 15px;
      }
      .bread-outer .breadcrumb {
        padding: 4px 0px;
        background-color: transparent;
        margin-bottom: 0px;
      }
      .bread-outer .breadcrumb li {
        font-size: 13px;
      }
      .bread-outer .breadcrumb li a{
        color: #e30007;
        text-decoration: none;
      }
    </style>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="parallax.js"></script>
    <script>
       $(document).ready(function(){
        $('.parallax-container').parallax();
      });
    </script>
  </body>
</html>