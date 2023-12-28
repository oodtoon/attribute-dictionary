<script lang="ts">
  import Divider from "$lib/components/icons/Divider.svelte";
  import Facebook from "$lib/components/icons/Facebook.svelte";
  import Twitter from "$lib/components/icons/Twitter.svelte";
  import LinkedIn from "$lib/components/icons/LinkedIn.svelte";
  import YouTube from "$lib/components/icons/YouTube.svelte";
  import OneWorldSync from "$lib/images/1ws.png";

  const date = new Date();

  const socialLinks = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/1worldsync/",
    },
    {
      icon: Twitter,
      link: "https://twitter.com/1worldsync?lang=en",
    },
    {
      icon: LinkedIn,
      link: "https://www.linkedin.com/company/1worldsync/",
    },
    {
      icon: YouTube,
      link: "https://www.youtube.com/@1worldsync",
    },
  ];

  const siteLinks = [
    {
      name: "About 1WorldSync",
      link: "https://1worldsync.com/about-us/",
    },
    {
      name: "Contact Us",
      link: "https://1worldsync.com/contact-us/",
    },
    {
      name: "News & Press",
      link: "https://1worldsync.com/about-us/news-press/",
    },
    {
      name: "Support",
      link: "https://1worldsync.com/resource-center/support/",
    },
    {
      name: "Customer Stories",
      link: "https://1worldsync.com/resource-center/customer-stories/",
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      link: "https://1worldsync.com/privacy-policy/",
    },
    {
      name: "Applicants, Employees & Contractors Privacy Notice",
      link: "https://1worldsync.com/privacy-policy/applicants-employees-contractors/",
    },
    {
      name: "Terms of Use",
      link: "https://1worldsync.com/terms-of-use/",
    },
    {
      name: "Security",
      link: "https://1worldsync.com/security/",
    },
    {
      name: "Antitrust Statement",
      link: "https://1worldsync.com/antitrust-statement/",
    },
  ];
</script>

<footer class="footer">
  <div class="divider-container">
    <Divider />
  </div>
  <div class="footer-content-container">
    <div class="footer-content">
      <img class="img-content" src={OneWorldSync} alt="1WorldSync Logo" />
      <div class="img-content">
        1WorldSync is the leader in Product Content Orchestration
      </div>
      <div class="socials-container img-content">
        {#each socialLinks as social}
          <a href={social.link} target="_blank">
            <svelte:component this={social.icon} />
          </a>
        {/each}
      </div>
    </div>
    <div class="site-links-container">
      {#each siteLinks as site}
        <a href={site.link} target="_blank">{site.name}</a>
      {/each}
    </div>
  </div>
  <div class="legal-container">
    <div class="copyright">
      ©{date.getFullYear()} 1WorldSync All Rights Reserved
    </div>
    <div class="legal-links">
      {#each legalLinks as legal}
        <a class="legal-link" href={legal.link}>{legal.name}</a>
      {/each}
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--primary-color);
    padding-top: 3em;
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: var(--fifth-color);
  }

  .footer-content-container {
    color: white;
    margin: auto;
    display: flex;
    gap: 2em;
  }

  .divider-container {
    max-width: 100%;
    overflow: hidden;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .site-links-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .img-content {
    max-width: 244px;
  }

  .socials-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .legal-container {
    display: flex;
    padding: 1em;
    margin-top: 2em;
  }

  .copyright {
    margin-right: auto;
  }

  .legal-links {
    display: flex;
    gap: 2em;
  }

  @media (max-width: 769px) {
    .legal-container {
      flex-direction: column;
      gap: 1em;
    }

    .legal-links {
      flex-direction: column;
      gap: 1em;
    }

    .copyright {
      margin: auto;
    }

    .legal-link {
      margin: auto;
    }
  }

  @media (max-width: 320px) {
    .footer-content-container {
      flex-direction: column;
      align-items: center;
    }

    .site-links-container {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }

  @media(max-width: 250px) {
    .img-content {
      max-width: 150px;
    }
  }
</style>
