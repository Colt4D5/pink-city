<script lang="ts">
	import SocialMediaIcons from "./SocialMediaIcons.svelte";

  let { config } = $props();
  let phoneNumber = config.contact.phone.countryCode + config.contact.phone.areaCode + config.contact.phone.number;
  const email = config.contact.email.toLowerCase();
</script>

<footer>
  <div class="inner text-center">

    <div id="verse-container">
      <p class="text-center">the lord has done great things for us,<br>and we are filled with joy<br>psalms 126:3</p>
    </div>

    <SocialMediaIcons />

    <p><a href="tel:+{phoneNumber}">{config.contact.phone.numberFormatted}</a> | <a href="mailto:{email}">{email}</a></p>

    <p>{config.site.description}</p>

    <p class="text-uppercase">&copy; {new Date().getFullYear()} | {config.site.name} | ALL RIGHTS RESERVED</p>
  </div>
</footer>


<style>
  footer {
    --alpha: 0.4;
    --line-inset: 0.75rem;
    background-color: hsl(var(--background-color) / var(--alpha));
    color: hsl(var(--text-color));
    padding: 1rem 1rem 3rem;
    font-size: 0.875rem;
    text-align: center;
    position: relative;
    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.75rem;
      border-style: solid;
      border-top-color: hsl(var(--background-color));
      border-bottom-color: hsl(var(--background-color));
    }
    &::before {
      top: var(--line-inset);
      border-top-width: 4px;
      border-bottom-width: 2px;
    }
    &::after {
      bottom: var(--line-inset);
      border-top-width: 2px;
      border-bottom-width: 4px;
    }
    .inner {
      width: min(800px, 100%);
      margin: 0 auto;
      #verse-container {
        font-size: 1.5rem;
        background-color: hsl(var(--primary-color) / 1);
      }
    }
  }

</style>