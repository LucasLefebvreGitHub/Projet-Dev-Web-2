<script>
  import { onMount } from "svelte";
  import { supabase } from '$lib/supabaseClient'

  onMount(async () => {
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", async event => {
      event.preventDefault();

      const formInputs = form.querySelectorAll("input, select, textarea");

      let submision = {};

      formInputs.forEach(element => {
        const { value, name } = element;
        if (value) {
          submision[name] = value;
        }
      });

      const { error } = await supabase
        .from("FormContact")
        .insert([submision], { returning: "minimal" });

      if (error) {
        alert("Error occured");
      } else {
        alert("Thanks");
      }

      formInputs.forEach(element => (element.value = ""));
    });
  });

</script>

<svelte:head>
	<title> Lucas Lefebvre</title>

	<link rel="stylesheet" href="global.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">

</svelte:head>

<style>

 header h1{
		margin-left:-10px;
		margin-top:9px;
  	background-image: url('https://rgfemnhyuwkjjkurimcx.supabase.co/storage/v1/object/sign/images/Image3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvSW1hZ2UzLmpwZyIsImlhdCI6MTY3MDE3NTk2NiwiZXhwIjoxOTg1NTM1OTY2fQ.fB7oK7EPXsYmixjqFfm4ssKHB3Y427fZFOalR_0QcaU');
    background-size: cover;
    padding: 348px;
    background-position:center;
    width: 120%;
  }

  .TopPage {
    color: #fff;
    position: absolute;
    top: 11%;
    -webkit-transform: translate3d(0, -50%, 50);
    transform: translate3d(0, -50%, 0);
    z-index: 2;
    margin-left: 8%;
  }
  
	.NamePage {
    font-size: 6rem;
    margin-bottom: 1.6rem;
	}

  .container {
    display:flex;
    margin-left:65%;
    margin-top:-600px;
    font-size: 25px;
    font-family: system-ui;
  }

  form {
    position:center;
    margin: 0 auto;
    width: 550px;
    padding: 2em;
    border: 1px solid #ccc;
    border-radius: 3em;
    text-align: center;
    background: linear-gradient(purple, pink);
    color:white;
  }



  input,
  textarea {
    font: 1em system-ui;
    width: 500px;
    box-sizing: border-box;
    border: 1px solid #999;
  }

  input:focus,
  textarea:focus {
    border-color: #000;
  }

  textarea {
    vertical-align: top;
    height: 5em;
  }

</style> 




<div class="body"> 

	<header> 
    <h1></h1>
	</header>

	<div class="TopPage">	
    <h2 class="NamePage">CONTACT</h2>
  </div>

	<section class="section container">
		<form name="contact" id="contact-form">
		  <div class="field">
			  <label class="label" for="name">Name</label>
			  <div class="control">
				  <input required class="input" type="text" placeholder="Your name" name="name" />
			  </div>
		  </div>

		  <div class="field">
			  <label class="label" for="email">E-mail</label>
			  <div class="control has-icons-left">
				  <input class="input" type="email" required placeholder="Your e-mail" name="email" />
			  </div>
		  </div>

		  <div class="field">
			  <label class="label" for="message">Leave a message</label>
			  <div class="control">
				  <textarea required class="textarea" placeholder="Message" name="message"></textarea>
			  </div>
		  </div>

		  <div class="button">
			  <div class="control">
				  <button class="button is-primary" type="submit">Send</button>
			  </div>
		  </div>
	  </form>
	</section>

</div> 
