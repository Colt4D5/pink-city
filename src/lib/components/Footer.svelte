<script lang="ts">
	import SocialMediaIcons from "./SocialMediaIcons.svelte";

  let { config } = $props();
  let phoneNumber = config.contact.phone.countryCode + config.contact.phone.areaCode + config.contact.phone.number;
  const email = config.contact.email.toLowerCase();
</script>

<footer>
  <div class="inner text-center">

    <div id="awards-container">
      <div class="left">
        <img src="/images/threebest-award.webp" alt="Three Best Award" />
        <img src="/images/topthree-award.webp" alt="Top Three Award" />
      </div>
      <div id="verse-container" class="center">
        <p class="text-center">The Lord has done great things for us, and we are filled with joy<br>psalms 126:3</p>
        <img src="/images/fish.webp" alt="The Lord has done great things for us, and we are filled with joy. Psalms 126:3" />
      </div>
      <div class="right">
      </div>
    </div>

    <SocialMediaIcons linkAlt={true} />

    <p><a href="tel:+{phoneNumber}">{config.contact.phone.numberFormatted}</a> | <a href="mailto:{email}">{email}</a></p>

    <p class="text-uppercase">{config.site.description}</p>

    <p class="text-uppercase">&copy; {new Date().getFullYear()} | {config.site.name} | ALL RIGHTS RESERVED</p>
  </div>
</footer>


<style>
  footer {
    --alpha: 0.4;
    --line-inset: 0.5rem;
    background-color: hsl(var(--background-color) / var(--alpha));
    color: hsl(var(--text-color));
    padding: 2rem 1rem 3rem;
    font-size: 0.875rem;
    text-align: center;
    position: relative;
    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.25rem;
      background-color: #fff;
    }
    &::before {
      top: var(--line-inset);
      box-shadow: 0 12px 0 -1px #fff;
    }
    &::after {
      bottom: var(--line-inset);
      box-shadow: 0 -12px 0 -1px #fff;
    }
    .inner {
      width: min(800px, 100%);
      margin: 0 auto;
      color: hsl(var(--text-color));
      #awards-container {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        @media (min-width: 768px) {
          grid-template-columns: 100px 1fr 100px;
        }
        .left {
          display: flex;
          justify-content: center;
          align-items: center;
          @media (min-width: 768px) {
            flex-direction: column;
          }
        }
        #verse-container {
          font-size: 1.5rem;
          background-color: hsl(var(--primary-color) / 1);
          padding: 1rem 3rem;
          order: -1;
          @media (min-width: 768px) {
            order: 0;
          }
          p {
            margin: 0;
            text-wrap: balance;
          }
        }
      }
      a {
        color: hsl(var(--text-color));
        &:hover {
          color: hsl(var(--primary-color));
        }
      }
    }
  }

</style>