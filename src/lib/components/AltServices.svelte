<script lang="ts">
  import type { servicesObj } from "$lib/types.js";
  import CAimg from "$lib/images/CA.png";
  import CCimg from "$lib/images/CC.png";
  import DCimg from "$lib/images/DC.webp";
  import DLMimg from "$lib/images/DLM.png";
  import ICimg from "$lib/images/IC.png";
  import PIMimg from "$lib/images/PIM.png";
  import REAimg from "$lib/images/REA.gif";
  import logo from "$lib/images/1wsColor.png";

  export let slug: string;
  export let isImgDisplayed: boolean = false;
  let services = [
    {
      title: "Need Help Loading Your Item Data?",
      link: "https://1worldsync.com/platform/item-setup-automation/data-loading-maintenance-services/",
      solution: "1WorldSync Will Load Your Data For You!",
      img: DLMimg,
      alt: "Phone Next To Crate",
    },
    {
      title: "Unsure How To Create Your Product Content?",
      link: "https://1worldsync.com/platform/item-setup-automation/",
      solution: "1WorldSync Will Create Your Product Content!",
      img: CAimg,
      alt: "Phone and Computer",
    },
    {
      title: "Need Images Of Your Product?",
      link: "https://1worldsync.com/platform/product-photography/",
      solution: "1WorldSync Will Get You Your Product Images You Need!",
      img: ICimg,
      alt: "Product On Phone Next To Multiple Angles of 1WorldSync Product",
    },
    {
      title: "Want To Make Your Products Stand Out Online?",
      link: "https://1worldsync.com/platform/rich-content-syndication/",
      solution: "1WorldSync Can Make Your Product Pop!",
      img: CCimg,
      alt: "Product Conected To Multiple Retail Brands",
    },
    {
      title: "Want Your Entered Product Content To Do More?",
      link: "https://1worldsync.com/platform/syndication/digital-catalog/",
      solution:
        "Use Your Existing Data to Make Powerful Sales Material Online!",
      img: DCimg,
      alt: "Computer Displaying Digital Catalog",
    },
    {
      title: "Only Want Certain Departments To Change Specific Attributes?",
      link: "https://1worldsync.com/platform/product-information-management-pim/",
      solution: "1WorldSync Can Create That Workflow For You!",
      img: PIMimg,
      alt: "Product With Workflow Steps",
    },
    // {
    //   title: "Do Other Trading Partners Need Your Item Data?",
    //   link: "https://1worldsync.com/trading-partners/",
    //   solution: "Check Out the Retailers in 1WorldSync's Network!",
    //   img: logo,
    //   alt: "1WorldSync Logo",
    // },
    {
      title: "Want To Increase Your Online Walmart Sales?",
      link: "https://1worldsync.com/platform/retail-ecommerce-analytics/",
      solution:
        "1WorldSync Can Provide You With The Info You Need To Sell More Online!",
      img: REAimg,
      alt: "Phone Scrolling Product Details Next To Computer and Product",
    },
    // {
    //   title: "Need Additional Help Managing Your Product Content?",
    //   link: "https://1worldsync.com/resource-center/webinars/",
    //   solution: "Check Out These Helpful Webinars!",
    //   img: logo,
    //   alt: "1WorldSync Logo",
    // },
  ];

  let selectedService: servicesObj;

  $: if (slug) {
    const randomIndex = Math.floor(Math.random() * services.length);
    selectedService = services[randomIndex];
  }
</script>

<div class="service-container">
  {#if selectedService}
    <h3>{selectedService.title}</h3>
    <div class="content-container">
      <a class="service-link" href={selectedService.link} target="_blank"
        >{selectedService.solution}</a
      >
      {#if isImgDisplayed && selectedService.img}
        <img class="img" src={selectedService.img} alt={selectedService.alt} />
      {/if}
    </div>
  {/if}
</div>

<style>
  h3 {
    margin: 0;
  }

  .service-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .service-link {
    font-size: 20px;
    font-weight: 700;
    color: var(--tertiary-color);
    min-width: 200px;
  }

  .service-link:hover {
    color: var(--fifth-color);
  }

  .content-container {
    display: flex;
    align-items: center;
    gap: 1em;

  }

  .img {
    height: 200px;
    width: auto;
  }

  @media (max-width: 900px) {
    
  }

  @media (max-width: 900px) {
    .content-container {
      flex-direction: column;
    }
  }
</style>
