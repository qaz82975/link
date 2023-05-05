const app = Vue.createApp({
  data() {
    return {
      buttons: [
            {
          url: "https://www.patreon.com/rorong",
          class: "button n03",
          img: "fa-brands fa-patreon",
          icon: "icon.svg#ig_icon",
          label: "patreon",
        },
        {
          url: "https://www.instagram.com/ron.eros/",
          class: "button n03",
          img: "fa-brands fa-instagram",
          icon: "icon.svg#ig_icon",
          label: "Instagram",
        },
        {
          url: "mailto:ronwork1998@gmail.com",
          class: "button n01",
          img: "fa-regular fa-envelope",
          icon: "#icon-c0646d28bbeb18e39eb973f96b44bd0f",
          label: "Email",
        },
      
        {
          url: "https://www.facebook.com/profile.php?id=100063709464264",
          class: "button n02",
          img: "fa-brands fa-facebook",
          icon: "#icon-a1eb5cac0cee3b05a40d856c98ce14a5",
          label: "Facebook",
        },
        {
          url: "https://twitter.com/Ron_kaneshiro?t=AY4zZM9j5xrT1VkmCmwADA&amp;s=09",
          class: "button n01",
          img:"fa-brands fa-twitter" ,
          icon: "#icon-0c4db87eff374f0f1ef47f8f043f0132",
          label: "Twitter",
        },
        {
          url: "https://rorong.com",
          class: "button n02",
          img: "fa-brands fa-blogger",
          icon: "#icon-f4ce3a44c2936b27f0e8b764bae7e6af",
          label: "Blog",
        },
        {
          url: "https://shope.ee/6AEm2WEu3Q",
          class: "button n02",
          img: "fa-solid fa-bag-shopping",
          icon: "#icon-f4ce3a44c2936b27f0e8b764bae7e6af",
          label: "Shopee",
        },
        
        {
          url: "https://lin.ee/VVkvE0j",
          class: "button n02",
          img: "fa-brands fa-line",
          icon: "#icon-f4ce3a44c2936b27f0e8b764bae7e6af",
          label: "Line",
        },
      ],
    };
  },
});

app.mount("#app");
