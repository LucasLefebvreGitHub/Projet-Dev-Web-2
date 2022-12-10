  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>

	.bot {
		display: flex;
	}

	.nav {
		background-color: white;
		z-index: 2;
	}

  .header {
    position: fixed;
	  top:0px;
	  margin:-10px;
    padding: 20px;
    width:100%;
    text-align: left;
    background: black;
    color: white;
  }

  .footer {
	  margin:-10px;
    position: fixed;
 	  bottom: 0;
    width: 100%;
   background-color: black;
    color: white;
    text-align: center;
	  padding:20px;
    font-size:20px;
  }

  .sidepanel  {
    width: 0;
    position: fixed;
    z-index: 1;
    height: 100%;
    top: 0;
    right: 60;
    background-color: purple;
    background: linear-gradient(purple, pink);
    letter-spacing: 1.4rem;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align: center; 
}

  .sidepanel a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 60px;
    color: white;
    display: block;
    transition: 0.3s;
  }

  .sidepanel a:hover {
    color: #f1f1f1;
  }

  .sidepanel .closebtn {
    position: flex;
    top: 0;
    right: 25px;
    font-size: 100px;
  }

  .openbtn {
    font-size: 30px;
    cursor: pointer;
    position: flex;
    color: black;
    padding: 10px 20px;
    border: none;
  }

  .openbtn:hover {
    background-color:#444;
  }

</style> 


<div class="body"> 

	<div class="header">

    <button class="openbtn" onclick="openNav()">☰</button>
  
    <script>
      function openNav() {
        document.getElementById("mySidepanel").style.width = "100%";
        document.addEventListener('click', closeMenuOnBodyClick);
      }

      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
        document.removeEventListener('click', closeMenuOnBodyClick);
      }

      function closeMenuOnBodyClick(event){
        closeNav();
      }

      function closeMenuOnBodyClick(event){
        const path = event.composedPath();
        if (path.some(elem => elem.id === 'mySidepanel')) {
          closeNav()
          return;
        }
      }
    </script>

  </div>

	<div class ="bot">
	  <slot />
	</div>

	<div class="footer">
		<a class="active" href="https://www.instagram.com/l.l.peintre/"><i class="fa fa-instagram w3-hover-opacity"></i></a> 
		<a class="active" href="https://www.linkedin.com/in/lucas-lefebvre-139961194/"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
		<a class="active" href="https://rgfemnhyuwkjjkurimcx.supabase.co/storage/v1/object/sign/cv/CV%20LEFEBVRE%20LUCAS%20(1).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdi9DViBMRUZFQlZSRSBMVUNBUyAoMSkucGRmIiwiaWF0IjoxNjcwMTc1MDEwLCJleHAiOjE5ODU1MzUwMTB9.iagTDuU-_ccE8LgW4CY3KYooev3XBRSpEtbaaIBKZkw">Get CV </a>
	</div>

  <div align="right">
    <div id="mySidepanel" class="sidepanel">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
      <a href="https://sveltejskittemplatedefaultq3fsun-zu1q--5173.local-credentialless.webcontainer.io/">HOME</a>
      <a href="Studies">STUDIES</a>
      <a class="closeMenuOnBodyClick()" href="Works">WORKS</a>
      <a href="Aboutme">ABOUT ME</a>
      <a href="Contact">CONTACT</a>
    </div>
  </div>

</div> 


