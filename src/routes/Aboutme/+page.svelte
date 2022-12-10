
<style>
 header h1{
		margin-left:-10px;
		margin-top:9px;
  	background-image: url('https://rgfemnhyuwkjjkurimcx.supabase.co/storage/v1/object/sign/images/Image5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvSW1hZ2U1LnBuZyIsImlhdCI6MTY3MDE3NTkzMSwiZXhwIjoxOTg1NTM1OTMxfQ.ZGqubbZhk3KpqysGsu3BvsXOuPCKpVauFfXZQARfgpk');
    background-size: cover;
    padding: 348px;
    background-position:center;
    width: 120%;
  }
  .TopPage {
    color: #fff;
    position: absolute;
    overflow: hidden;
    top: 11%;
    -webkit-transform: translate3d(0, -50%, 50);
    transform: translate3d(0, -50%, 0);
    z-index: 200;
    margin-left: 8%;
  }

  .UnderTop {
    color: #fff;
    position: flex;
    overflow: hidden;
    margin-top: -350px;
    -webkit-transform: translate3d(0, -50%, 50);
    transform: translate3d(0, -50%, 0);
    z-index: 200;
    margin-left: 8%;
  }
  
	.NamePage {
    font-size: 6rem;
    margin-bottom: 1.6rem;
    font-family: "futura_m";
	}

	.TopPage .border {
    display: inline-block;

  }

  .TopPage .border span:first-child {
    margin-bottom: 1.2rem;
  }

  .TopPage .border span {
    width: 70px;
  }

  .TopPage .border span {
    display: block;
    width: 88px;
    height: 4px;
    border-radius: 5px;
    background: #ff4d5a;
  }

  .TopPage .border span:last-child {
    margin-left: 43px;
  }

  .Name {
    font-size: 3rem;
  }

  .bar {
    position: absolute;
	  top:680px;
  	margin:-10px;
    padding: 30px;
    width:96%;
    text-align: left;
    background: black;
    color: white;
  }

  .exps {
    width : 210%;
    display : block;
    margin : auto;
    margin-bottom:90px;
  }

  .title_exp_2  {
    margin-top:5rem;
    font-size: 3rem;
    font-family: "futura_m";
    color: #F76464;
  } 

  .titlefull {
    display:block;
    text-align: center;
    margin-left:20px;
  }

  .Tags {
    font-size: 1.8rem;
    font-family: monospace;
    color: white;
    margin-left:50px;
  } 

  :root {
    --success: #00b894;
    --progress: #e17055;
  }

  .progressbar-wrapper {
    background-color: #dfe6e9;
    color: white;
    border-radius: 15px;
    width: 230%;
    position:center;
  }

  .progressbar {
    background-color: var(--progress);
    color: white;
    padding: 1rem;
    text-align: right;
    font-size: 20px;
    border-radius: 15px;
  }

  .progressbar[title="downloading"] {
    background-color: var(--progress);
  }

  .progressbar[title="downloaded"] {
    background-color: var(--success);
  }
  
  .team {
    width: 60%;
  }

  .design {
    width: 80%;
  }

  .build {
    width: 70%;
  }

  .project {
    width: 80%;
  }

  .energy {
    width: 100%;
  }

  .container {
    margin-left:200px;
    margin-bottom:100px;
    font-size: 25px;
    font-family: system-ui;
  }
</style> 


<div class="body"> 

	<header> 
    <h1></h1>
	</header>

	<div class="TopPage">	
    <h2 class="NamePage">ABOUT ME</h2>
    <div class="border"><span></span><span></span></div>
  </div>

	<div class="UnderTop">	
    <p class="Name">" Hi ! My name is <br>Lucas Lefebvre "<br></p>
    <p class="Tags"><br>I’m a French Engineer <br> working for SNCF.</p>              
  </div>

  <div class="bar">
  </div>

  <div class="exps">
    <div class="titlefull">
      <h2 class="title_exp_2">─── SKILLS ───</h2>
    </div>  
  </div>

  <div class="container">
    <p>Team Manager</p>
    <div class="progressbar-wrapper">
      <div title="downloading" class="progressbar team">60%</div>
    </div>

    <p>3D Design</p>
    <div class="progressbar-wrapper">
      <div title="downloaded" class="progressbar design">80%</div>
    </div>

    <p>Design and layout of buildings</p>
    <div class="progressbar-wrapper">
      <div title="downloading" class="progressbar build">70%</div>
    </div>

    <p>Project Management</p>
    <div class="progressbar-wrapper">
      <div title="downloaded" class="progressbar project">80%</div>
    </div>

    <p>Energy</p>
    <div class="progressbar-wrapper">
      <div title="downloaded" class="progressbar energy">100%</div>
    </div>

  </div>

</div> 
