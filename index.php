<!--
Design and coding: Tomasz Pawelec
https://tpawelec.github.io

Copyright 2021
-->


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Patryk Maksymow Tomasz Pawelec">
    <meta name="description" content="Home page and portfolio for tattoo studio RadRatInk">
    <meta property="og:image" content="assets/logo/radratlogo.png">
    <meta property="og:description" content="Home page and portfolio for tattoo studio RadRatInk">
    <meta property="og:title" content="RadRatInk">
    <link href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/animation.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>RadRatInk</title>
</head>

<body>

    <div class="loadingScreen" id="loadingScreen">
       <img src="assets/logo/radratlogo.png" alt="RadRatInk Logo" class="loadingScreen__logo">
       <div class="loader">
  <div class="loader--label">Loading...
  </div>
  <div class="loader--background">
      <div class="loader--bar"> 
  </div>

</div>
</div>
  
       
    </div>

</div>
    </div>
    <div class="content">
        <video autoplay muted loop playsinline id="videoBg">
        </video>

        <div class="content__frame display--flex scale--on" id="mainFrame">
            <a href="https://www.instagram.com/radratink/" class="frame__link" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <g class="link__instagram">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </g>
                    <g class="link__instagram--text">
                        <text y="80%">@radratink</text>
                    </g>
                </svg>
            </a>
            <a href="mailto:radrat.kidstore@gmail.com" class="frame__link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <g class="link__mail">
                        <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.021 17.824c-3.907 0-6.021-2.438-6.021-5.586 0-3.363 2.381-6.062 6.638-6.062 3.107 0 5.362 2.019 5.362 4.801 0 4.356-5.165 5.506-4.906 3.021-.354.555-.927 1.177-2.026 1.177-1.257 0-2.04-.92-2.04-2.403 0-2.222 1.461-4.1 3.19-4.1.829 0 1.399.438 1.638 1.11l.232-.816h1.169c-.122.416-1.161 4.264-1.161 4.264-.323 1.333.675 1.356 1.562.648 1.665-1.29 1.75-4.664-.499-6.071-2.411-1.445-7.897-.551-7.897 4.347 0 2.806 1.976 4.691 4.914 4.691 1.719 0 2.771-.465 3.648-.974l.588.849c-.856.482-2.231 1.104-4.391 1.104zm-1.172-7.153c-.357.67-.588 1.538-.588 2.212 0 1.805 1.761 1.816 2.626.12.356-.697.586-1.586.586-2.265 0-1.458-1.748-1.717-2.624-.067z" />
                    </g>
                    <g class="link__mail--text--name">
                        <text y="80%">radrat.kidstore</text>
                    </g>
                    <g class="link__mail--text--domain">
                        <text y="90%">@gmail.com</text>
                    </g>
                </svg>
            </a>
            <a href="" id="galleryLink" class="frame__link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                    <g class="link__gallery">
                        <path
                            d="M18 10v13h-18v-13h18zm-13 2h-3v2h3v-2zm11 5c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm-4-2c-1.104 0-2 .897-2 2s.896 2 2 2 2-.897 2-2-.896-2-2-2zm-5.314-7l1.615-4.437 13.154 4.789-1.455 4v5.848l4-11.042-16.895-6.158-2.548 7h2.129z" />
                    </g>
                    <g class="link__gallery--text">
                        <text y="80%">gallery</text>
                    </g>
                </svg>
            </a>
        </div>

        <div class="content__gallery display--hidden scale--off" id="galleryContainer">
            <div class="gallery__images" id="galleryImages">

            </div>
            <div class="gallery__icons">
                <button class="icons icons__close" id="closeGallery">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252">
                        <g>
                            <path d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
		c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z" />
                            <path d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
		c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
		c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
		s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
		C168.127,96.601,168.127,90.902,164.612,87.388z" />
                        </g>
                    </svg>
                </button>

                <button class="icons icons__up" id="arrowUp">
                    <svg width="30" height=30 xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"
                        viewBox="0 0 24 24">
                        <path
                            d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z" />
                    </svg>
                </button>

                <button class="icons icons__down" id="arrowDown">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                        clip-rule="evenodd" viewBox="0 0 24 24">
                        <path
                            d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" />
                    </svg>
                </button>

            </div>
        </div>
        <div class="imagePopUp" id="imagePopUp">
            <button class="imagePopUp__button" id="closePopUp">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 252 252"
                    style="enable-background:new 0 0 252 252;" xml:space="preserve">
                    <g>
                        <path d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
		c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z" />
                        <path d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
		c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
		c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
		s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
		C168.127,96.601,168.127,90.902,164.612,87.388z" />
                    </g>
                </svg>
            </button>

            <button class="imagePopUp__button imagePopUp__button--left" id="buttonLeft" data-index="">
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/>
                </svg>
            </button>

            <button class="imagePopUp__button imagePopUp__button--right" id="buttonRight" data-index="">
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/>
                </svg>
            </button>
            <span class="spinner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
    </div>


    <script type="text/javascript">
    
    let images =
        <?php 
    $files = glob('images/thumbs/*.*');
    $size = 0;
    usort($files, function($a, $b) {
        return filemtime($a) - filemtime($b);
    });
    echo json_encode($files); 
    
    foreach($files as $file) {
        $size += filesize($file);
    }
    ?>;

    let thumbsSize = 
    <?php
        echo $size;
    ?>
    </script>
    <script src="js/loading.js"></script>
    <!--<script type="text/javascript" src="js/script.js"></script>-->
</body>

</html>