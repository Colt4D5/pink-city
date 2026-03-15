<svelte:head>
  <title>Thank You | Pink City Cake Studio</title>
  <meta name="description" content="Thank you for contacting Pink City Cake Studio." />
</svelte:head>

<section id="thank-you">
  <div class="inner text-center">
    <h1>Thank you!</h1>
    <p>Your message was submitted successfully. We will contact you shortly.</p>
    <p>
      <a class="btn btn-lg" href="/">Back to home</a>
    </p>
  </div>
</section>

<style>
  #thank-you {
    min-height: 50vh;
    display: grid;
    place-items: center;
    padding: 2rem 1rem;
  }

  .inner {
    width: min(100%, 700px);
    background-color: hsl(var(--background-color) / 0.6);
    border: 1rem solid hsl(var(--primary-color));
    padding: 2rem 1.5rem;
  }

  h1 {
    margin-top: 0;
    text-transform: uppercase;
  }
</style>
