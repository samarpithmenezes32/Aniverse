import React, { useState } from 'react';

const AnimeFigures = ({ activeCategory = 'All Items' }) => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const figures = [
    {
      id: 1,
      name: 'Naruto Uzumaki Figure',
      image: '/images/figures/figure1.jpg',
      link: 'https://amzn.in/d/fgea4kZ',
      price: '₹999',
      category: 'Figures & Models'
    },
    {
      id: 2,
      name: 'Luffy Gear 5 Figure',
      image: '/images/figures/figure2.jpg',
      link: 'https://amzn.in/d/3zIBXmx',
      price: '₹1,299',
      category: 'Figures & Models'
    },
    {
      id: 3,
      name: 'Goku Super Saiyan Figure',
      image: '/images/figures/figure3.jpg',
      link: 'https://amzn.in/d/bGVC4sY',
      price: '₹1,499',
      category: 'Figures & Models'
    },
    {
      id: 4,
      name: 'Sasuke Uchiha Figure',
      image: '/images/figures/figure4.jpg',
      link: 'https://amzn.in/d/4Va3EuG',
      price: '₹1,199',
      category: 'Figures & Models'
    },
    {
      id: 5,
      name: 'Eren Yeager Figure',
      image: '/images/figures/figure5.jpg',
      link: 'https://amzn.in/d/4Mw4WqV',
      price: '₹1,399',
      category: 'Figures & Models'
    },
    {
      id: 6,
      name: 'Tanjiro Kamado Figure',
      image: '/images/figures/figure6.jpg',
      link: 'https://amzn.in/d/cNfYie3',
      price: '₹1,099',
      category: 'Figures & Models'
    },
    {
      id: 7,
      name: 'Zenitsu Agatsuma Figure',
      image: '/images/figures/figure7.jpg',
      link: 'https://amzn.in/d/0WVNhja',
      price: '₹1,099',
      category: 'Figures & Models'
    },
    {
      id: 8,
      name: 'Inosuke Hashibira Figure',
      image: '/images/figures/figure8.jpg',
      link: 'https://amzn.in/d/7qj4g2j',
      price: '₹1,099',
      category: 'Figures & Models'
    },
    {
      id: 9,
      name: 'Todoroki Shoto Figure',
      image: '/images/figures/figure9.jpg',
      link: 'https://amzn.in/d/53b8DXp',
      price: '₹1,249',
      category: 'Figures & Models'
    },
    {
      id: 10,
      name: 'Deku Izuku Midoriya Figure',
      image: '/images/figures/figure10.jpg',
      link: 'https://amzn.in/d/dk55H23',
      price: '₹1,349',
      category: 'Figures & Models'
    },
    {
      id: 11,
      name: 'Kakashi Hatake Figure',
      image: '/images/figures/figure11.jpg',
      link: 'https://amzn.in/d/e2KxeX9',
      price: '₹1,449',
      category: 'Figures & Models'
    },
    // Clothing items
    {
      id: 12,
      name: 'Wind Hashira Graphic Oversized T-Shirt',
      image: '/images/clothes/clothes1.jpg',
      link: 'https://www.bewakoof.com/p/mens-black-wind-hashira-graphic-printed-oversized-t-shirt-jet-black',
      price: '₹699',
      category: 'Clothing'
    },
    {
      id: 13,
      name: 'One Piece Graphic Oversized T-Shirt',
      image: '/images/clothes/clothes2.jpg',
      link: 'https://www.bewakoof.com/p/mens-black-one-piece-graphic-printed-oversized-t-shirt-men',
      price: '₹699',
      category: 'Clothing'
    },
    {
      id: 14,
      name: 'Nezuko Kamado Graphic Boyfriend T-Shirt',
      image: '/images/clothes/clothes3.jpg',
      link: 'https://www.bewakoof.com/p/womens-pink-nezuko-kamado-graphic-printed-boyfriend-t-shirt',
      price: '₹649',
      category: 'Clothing'
    },
    {
      id: 15,
      name: 'S-Rank Jogger',
      image: '/images/clothes/clothes4.jpg',
      link: 'https://www.comicsense.store/product/s-rank-jogger/',
      price: '₹1,499',
      category: 'Clothing'
    },
    {
      id: 16,
      name: 'Soul Reaper Joggers',
      image: '/images/clothes/clothes5.jpg',
      link: 'https://www.comicsense.store/product/soul-reaper-joggers/',
      price: '₹1,499',
      category: 'Clothing'
    },
    {
      id: 17,
      name: '5th Division Captain Cosplay Oversize',
      image: '/images/clothes/clothes6.jpg',
      link: 'https://www.comicsense.store/product/5th-division-captain-cosplay-oversize-drop-shoulder/',
      price: '₹1,799',
      category: 'Clothing'
    },
    {
      id: 18,
      name: 'Ten Blades Oversize T-Shirt',
      image: '/images/clothes/clothes7.jpg',
      link: 'https://www.comicsense.store/product/ten-blades-oversize/',
      price: '₹1,299',
      category: 'Clothing'
    },
    {
      id: 19,
      name: 'Karasuno 10 T-Shirt',
      image: '/images/clothes/clothes8.jpg',
      link: 'https://www.comicsense.store/product/karasuno-10-t-shirt/',
      price: '₹999',
      category: 'Clothing'
    },
    {
      id: 20,
      name: 'Prisoner Jogger',
      image: '/images/clothes/clothes9.jpg',
      link: 'https://www.comicsense.store/product/prisoner-jogger/',
      price: '₹1,499',
      category: 'Clothing'
    },
    {
      id: 21,
      name: 'Scar Beanie',
      image: '/images/clothes/clothes10.jpg',
      link: 'https://www.comicsense.store/product/scar-beanie-2/',
      price: '₹699',
      category: 'Clothing'
    },
    {
      id: 22,
      name: 'Rogue Shinobi Beanie',
      image: '/images/clothes/clothes11.jpg',
      link: 'https://www.comicsense.store/product/rogue-shinobi-beanie-2/',
      price: '₹699',
      category: 'Clothing'
    },
    {
      id: 23,
      name: 'Chainsaw Devil Baby Tee',
      image: '/images/clothes/clothes12.jpg',
      link: 'https://www.comicsense.store/product/chainsaw-devil-baby-tee-2/',
      price: '₹899',
      category: 'Clothing'
    },
    {
      id: 24,
      name: 'Mugiwara Pirates Oversize Stone Wash',
      image: '/images/clothes/clothes13.jpg',
      link: 'https://www.comicsense.store/product/mugiwara-pirates-oversize-stone-wash-rust/',
      price: '₹1,599',
      category: 'Clothing'
    },
    {
      id: 25,
      name: 'Attack on Titan Cotton T-Shirt',
      image: '/images/clothes/clothes14.jpg',
      link: 'https://www.amazon.in/ADRO-Attack-Titan-Cotton-T-Shirt/dp/B0B4PB8GL3/',
      price: '₹499',
      category: 'Clothing'
    },
    {
      id: 26,
      name: 'Anime Graphic T-Shirt',
      image: '/images/clothes/clothes15.jpg',
      link: '#',
      price: '₹799',
      category: 'Clothing'
    },
    {
      id: 27,
      name: 'Anime Streetwear Hoodie',
      image: '/images/clothes/clothes16.jpg',
      link: '#',
      price: '₹899',
      category: 'Clothing'
    },
    {
      id: 28,
      name: 'Anime Casual Jacket',
      image: '/images/clothes/clothes17.jpg',
      link: '#',
      price: '₹999',
      category: 'Clothing'
    },
    // Accessories items
    {
      id: 29,
      name: 'Attack on Titan Pendant Necklace',
      image: '/images/accessories/acess1.jpg',
      link: 'https://www.amazon.in/Kawn-Attack-Shingeki-Pendant-Necklace/dp/B07M5Y3Y4P/',
      price: '₹299',
      category: 'Accessories'
    },
    {
      id: 30,
      name: 'Anime Printed Keychain',
      image: '/images/accessories/acess2.jpg',
      link: 'https://www.amazon.in/Replix-Premium-Printed-Keychain-Keyholder/dp/B0D1NJWYXZ/',
      price: '₹199',
      category: 'Accessories'
    },
    {
      id: 31,
      name: 'Multicolor Anime Keychain Set',
      image: '/images/accessories/acess3.jpg',
      link: 'https://www.amazon.in/TheInkPalette-Printed-Keychain-Keyholder-4Multicolor/dp/B0D21FZBQN/',
      price: '₹249',
      category: 'Accessories'
    },
    {
      id: 32,
      name: 'Attack on Titan Leather Bracelet',
      image: '/images/accessories/acess4.jpg',
      link: 'https://www.amazon.in/DIANZHU-Leather-Bracelet-Regiment-Decoration/dp/B0CJXPZ2CM/',
      price: '₹399',
      category: 'Accessories'
    },
    {
      id: 33,
      name: 'Bleach Ichigo Shikai',
      image: '/images/accessories/acess5,jpg.webp',
      link: 'https://geekmonkey.in/collections/anime/products/bleach-ichigo-shikai',
      price: '₹1,299',
      category: 'Accessories'
    },
    {
      id: 34,
      name: 'Demon Slayer Keychain',
      image: '/images/accessories/acess6.jpg',
      link: 'https://www.amazon.in/MCSID-RAZZ-Slayer-Kimetsu-Plastic/dp/B081V45VRZ/',
      price: '₹199',
      category: 'Accessories'
    },
    {
      id: 35,
      name: 'Gojo Satoru Keychain',
      image: '/images/accessories/acess7.jpg',
      link: 'https://www.amazon.in/SINCE-STORE-Satoru-Gojo-Products/dp/B0CJMYLWCW/',
      price: '₹249',
      category: 'Accessories'
    },
    {
      id: 36,
      name: 'Cartoon Anime Keychain',
      image: '/images/accessories/acess8.jpg',
      link: 'https://www.amazon.in/PATPAT%C2%AE-Cartoon-Keychain-Accessories-Backpack/dp/B0DRVPYXL4/',
      price: '₹149',
      category: 'Accessories'
    },
    {
      id: 37,
      name: 'Metal Rotating Sharingan',
      image: '/images/accessories/acess9.jpg',
      link: 'https://www.amazon.in/Metal-Rotating-Revolving-Mechanism-Collectibles/dp/B0CHJ51D9C/',
      price: '₹599',
      category: 'Accessories'
    },
    {
      id: 38,
      name: 'Anime Collectible Necklace',
      image: '/images/accessories/acess10.jpg',
      link: 'https://www.amazon.in/SQUISHCO-Necklace-Accessories-Halloween-Collectible/dp/B0FCF8DS35/',
      price: '₹399',
      category: 'Accessories'
    },
    {
      id: 39,
      name: 'Adjustable Knuckle Ring',
      image: '/images/accessories/acess11.jpg',
      link: 'https://www.amazon.in/MEN-THING-DLOOP-ARM-Knuckle-Adjustable/dp/B0CJ5HHRF4/',
      price: '₹299',
      category: 'Accessories'
    },
    {
      id: 40,
      name: 'One Piece Luffy Jolly Roger Bracelet',
      image: '/images/accessories/acess12.webp',
      link: 'https://drakon-lifestyle.com/products/one-piece-luffy-jolly-roger-leather-bracelet-with-metal-charm-anime-jewelry-wristband-copy',
      price: '₹799',
      category: 'Accessories'
    },
    {
      id: 41,
      name: 'Roronoa Zoro Ear Stud',
      image: '/images/accessories/acess13.webp',
      link: 'https://drakon-lifestyle.com/products/roronoa-zoro-ear-stud-three-sword-style-clip-on-earrings-one-piece-anime-cosplay-jewelry-copy',
      price: '₹599',
      category: 'Accessories'
    },
    {
      id: 42,
      name: 'DBZ Orange Baseball Cap',
      image: '/images/accessories/acess14.webp',
      link: 'https://shoppingnest.in/products/dbz-themed-orange-baseball-hat-caps-for-cosplay-and-regular-use',
      price: '₹699',
      category: 'Accessories'
    },
    {
      id: 43,
      name: 'Doflamingo Cosplay Sunglasses',
      image: '/images/accessories/acess15.webp',
      link: 'https://shoppingnest.in/products/one-piece-donquixote-doflamingo-inspired-cosplay-sunglasses-anime-glasses',
      price: '₹899',
      category: 'Accessories'
    },
    {
      id: 44,
      name: 'Naruto Merchandise Set of 5',
      image: '/images/accessories/acess16.webp',
      link: 'https://shoppingnest.in/products/copy-of-naruto-merchandise-set-of-5-merch-minato-knife-leaf-village-head-band-uzumaki-ring-uchiha-necklace-and-shuriken-set',
      price: '₹1,499',
      category: 'Accessories'
    },
    {
      id: 45,
      name: 'Gojo Satoru Eyes Sunglasses',
      image: '/images/accessories/acess17.webp',
      link: 'https://shoppingnest.in/products/jujutsu-kaisen-gojo-satoru-eyes-shades-model-2-cosplay',
      price: '₹799',
      category: 'Accessories'
    },
    {
      id: 46,
      name: 'Genshin Impact Pyro Pendant Watch',
      image: '/images/accessories/acess18.webp',
      link: 'https://shoppingnest.in/products/genshin-impact-pyro-element-design-spinning-top-pendant-with-pocket-watch',
      price: '₹999',
      category: 'Accessories'
    },
    {
      id: 47,
      name: 'Gaara Cap',
      image: '/images/accessories/acess19.webp',
      link: 'https://www.zamsfashion.in/products/gaara-cap',
      price: '₹599',
      category: 'Accessories'
    },
    {
      id: 48,
      name: 'Snake Ring',
      image: '/images/accessories/acess20.webp',
      link: 'https://www.zamsfashion.in/products/snake-ring',
      price: '₹399',
      category: 'Accessories'
    },
    {
      id: 49,
      name: 'Otaku Embroidery Cap',
      image: '/images/accessories/acess21.jpg',
      link: 'https://www.zamsfashion.in/products/otaku-embroidery-cap',
      price: '₹699',
      category: 'Accessories'
    },
    // Collectibles items
    {
      id: 50,
      name: 'Red Sandai Kiketsu Zoro Wooden Katana',
      image: '/images/collectibles/collectibles1.jpg',
      link: 'https://anibox.in/products/red-sandai-kiketsu-zoro-one-piece-anime-wooden-katana-104cm',
      price: '₹2,499',
      category: 'Collectibles'
    },
    {
      id: 51,
      name: 'Zoro Wado Ichimonji White Wooden Katana',
      image: '/images/collectibles/collectibles2.jpg',
      link: 'https://anibox.in/products/zoro-s-wado-ichimonji-one-piece-anime-white-wooden-katana-104cm',
      price: '₹2,499',
      category: 'Collectibles'
    },
    {
      id: 52,
      name: 'Tanjiro Desk Mat',
      image: '/images/collectibles/collectibles3.jpg',
      link: 'https://otakukulture.in/products/tanjiro-desk-mat',
      price: '₹799',
      category: 'Collectibles'
    },
    {
      id: 53,
      name: 'Berserk Oversized T-Shirt',
      image: '/images/collectibles/collectibles4.jpg',
      link: 'https://otakukulture.in/products/berserk-oversized-t-shirt?variant=47787727814941',
      price: '₹1,299',
      category: 'Collectibles'
    },
    {
      id: 54,
      name: 'Zenitsu Cosplay',
      image: '/images/collectibles/collectibles5.jpg/',
      link: 'https://otakuindiastore.in/products/zenitsu-cosplay',
      price: '₹2,999',
      category: 'Collectibles'
    },
    {
      id: 55,
      name: 'Solo Levelling Oversized T-Shirt',
      image: '/images/collectibles/collectibles6.jpg',
      link: 'https://otakukulture.in/products/solo-levelling-oversized-t-shirt?variant=48310154199325',
      price: '₹1,299',
      category: 'Collectibles'
    },
    {
      id: 56,
      name: 'Gojo Vintage Oversized T-Shirt',
      image: '/images/collectibles/collectibles7.jpg',
      link: 'https://otakukulture.in/products/gojo-vintage-oversized-t-shirt?variant=49934405501213',
      price: '₹1,299',
      category: 'Collectibles'
    },
    {
      id: 57,
      name: 'Mini AOT Katana',
      image: '/images/collectibles/collectibles8.jpg',
      link: 'https://otakukulture.in/products/mini-aot-katana',
      price: '₹599',
      category: 'Collectibles'
    },
    {
      id: 58,
      name: 'Mini Inosuke Nichirin Katana',
      image: '/images/collectibles/collectibles9.jpg',
      link: 'https://otakukulture.in/products/mini-inosuke-nichirin-katana',
      price: '₹599',
      category: 'Collectibles'
    },
    {
      id: 59,
      name: 'Mini Zenitsu Nichirin Katana',
      image: '/images/collectibles/collectibles10.jpg',
      link: 'https://otakukulture.in/products/mini-zenitsu-nichirin-katana',
      price: '₹599',
      category: 'Collectibles'
    },
    {
      id: 60,
      name: 'Vagabond Oversized T-Shirt',
      image: '/images/collectibles/collectibles11.jpg',
      link: 'https://otakukulture.in/products/vagabond-oversized-t-shirt?variant=48507244577053',
      price: '₹1,299',
      category: 'Collectibles'
    },
    {
      id: 61,
      name: 'Dragon Ball Embroidered Beanie',
      image: '/images/collectibles/collectibles12.jpg',
      link: 'https://otakukulture.in/products/dragon-ball-embroidered-beanie',
      price: '₹699',
      category: 'Collectibles'
    },
    {
      id: 62,
      name: 'Anime Tote Bag Collection',
      image: '/images/collectibles/collectibles13.jpg',
      link: 'https://geekmonkey.in/collections/anime/products/anime-tote-bag-collection',
      price: '₹899',
      category: 'Collectibles'
    },
    {
      id: 63,
      name: 'Blue Lock Cosplay',
      image: '/images/collectibles/collectibles14.jpg',
      link: 'https://otakuindiastore.in/products/blue-lock-cosplay',
      price: '₹2,999',
      category: 'Collectibles'
    },
    {
      id: 64,
      name: 'Boa Hancock Cosplay',
      image: '/images/collectibles/collectibles15.jpg',
      link: 'https://otakuindiastore.in/products/boa-hancock-cosplay',
      price: '₹3,499',
      category: 'Collectibles'
    },
    {
      id: 65,
      name: 'Anime Collectible Item',
      image: '/images/collectibles/collectibles16.jpeg',
      link: '#',
      price: '₹999',
      category: 'Collectibles'
    },
    {
      id: 66,
      name: 'Anime Collectible Special',
      image: '/images/collectibles/collectibles17.jpg',
      link: '#',
      price: '₹1,199',
      category: 'Collectibles'
    },
    // Home Decor items
    {
      id: 67,
      name: 'Anime Aesthetic Poster Set',
      image: '/images/homedecor/decor1.jpg',
      link: 'https://www.amazon.in/Posters-Inc-Aesthetic-Birthday-Quality/dp/B0DK3SWR9Z/',
      price: '₹399',
      category: 'Home Decor'
    },
    {
      id: 68,
      name: 'Naruto Posters Multicolor Set',
      image: '/images/homedecor/decor2.jpg',
      link: 'https://www.amazon.in/Unquote-Naruto-Posters-Multicolor-Cartoon/dp/B0CLGWXSZ7/',
      price: '₹499',
      category: 'Home Decor'
    },
    {
      id: 69,
      name: 'Anime Wall Poster Collection',
      image: '/images/homedecor/decor3.jpg',
      link: 'https://www.amazon.in/dp/B0FJ5J88R4/',
      price: '₹449',
      category: 'Home Decor'
    },
    {
      id: 70,
      name: 'Lying Panda Night Light',
      image: '/images/homedecor/decor4.jpg',
      link: 'https://www.amazon.in/Desidiya%C2%AE-Lying-Panda-Night-Light/dp/B0DVZ814D7/',
      price: '₹799',
      category: 'Home Decor'
    },
    {
      id: 71,
      name: 'Jujutsu Kaisen Collage Poster',
      image: '/images/homedecor/decor5.jpg',
      link: 'https://www.amazon.in/Moment-Prints-Posters-Jujutsu-Collage/dp/B0FDW2LF2M/',
      price: '₹349',
      category: 'Home Decor'
    },
    {
      id: 72,
      name: 'One Piece Bounties Poster Set',
      image: '/images/homedecor/decor6.jpg',
      link: 'https://www.amazon.in/Thepaper9store-posters-Adhesive-Bounties-Post-Timeskip/dp/B0BY8ZGKD4/',
      price: '₹599',
      category: 'Home Decor'
    },
    {
      id: 73,
      name: 'Obito Mask Replica',
      image: '/images/homedecor/decor7.jpg',
      link: 'https://bankai-world.com/products/obito-mask-2',
      price: '₹1,499',
      category: 'Home Decor'
    },
    {
      id: 74,
      name: 'Itachi Uchiha Hanging Scroll',
      image: '/images/homedecor/decor8.jpg',
      link: 'https://bankai-world.com/products/itachi-uchiha-hanging-scroll',
      price: '₹899',
      category: 'Home Decor'
    },
    {
      id: 75,
      name: 'Obito Poster',
      image: '/images/homedecor/decor9.jpg',
      link: 'https://bankai-world.com/products/obito-poster',
      price: '₹499',
      category: 'Home Decor'
    },
    {
      id: 76,
      name: 'Upper Moon Kokushibo Wooden Katana',
      image: '/images/homedecor/decor10.jpg',
      link: 'https://bankai-world.com/products/the-upper-moon-1-kokushibo-wooden-katana',
      price: '₹2,499',
      category: 'Home Decor'
    },
    {
      id: 77,
      name: 'Anime Home Decor Item',
      image: '/images/homedecor/decor11.jpg',
      link: '#',
      price: '₹699',
      category: 'Home Decor'
    },
    {
      id: 78,
      name: 'Anime Wall Art',
      image: '/images/homedecor/decor12.jpg',
      link: '#',
      price: '₹799',
      category: 'Home Decor'
    },
    {
      id: 79,
      name: 'Anime Decoration Special',
      image: '/images/homedecor/decor13.jpg',
      link: '#',
      price: '₹899',
      category: 'Home Decor'
    },
    {
      id: 80,
      name: 'Upper Moon Kokushibo Neon Katana',
      image: '/images/homedecor/decor14.jpg',
      link: 'https://bankai-world.com/products/the-1st-upper-moon-kokushibo-neon-katana',
      price: '₹3,499',
      category: 'Home Decor'
    },
    {
      id: 81,
      name: 'Eren and Mikasa Poster - Attack on Titan',
      image: '/images/homedecor/decor15.jpg',
      link: 'https://weebshop.in/products/eren-and-mikasa-poster-attack-on-titan',
      price: '₹499',
      category: 'Home Decor'
    }
  ];

  // Filter figures based on active category
  const filteredFigures = activeCategory === 'All Items' 
    ? figures 
    : figures.filter(figure => figure.category === activeCategory);

  return (
    <div className="anime-figures-section">
      <div className="section-header">
        <h2 className="section-title">
          {activeCategory === 'All Items' ? 'ANIME FIGURES COLLECTION' : activeCategory.toUpperCase()}
        </h2>
        <p className="section-subtitle">
          {filteredFigures.length} {filteredFigures.length === 1 ? 'item' : 'items'} available
        </p>
      </div>

      <div className="figures-grid">
        {filteredFigures.map((figure) => (
          <a
            key={figure.id}
            href={figure.link}
            target="_blank"
            rel="noopener noreferrer"
            className="figure-card"
          >
            <div className="figure-image-wrapper">
              {imageErrors[figure.id] ? (
                <div className="placeholder-image">
                  <span className="placeholder-icon">🎭</span>
                  <span className="placeholder-text">{figure.name}</span>
                </div>
              ) : (
                <img 
                  src={figure.image}
                  alt={figure.name}
                  className="figure-image"
                  loading="lazy"
                  onError={() => handleImageError(figure.id)}
                />
              )}
              <div className="hover-overlay">
                <span className="shop-now-btn">Shop Now</span>
              </div>
            </div>
            <div className="figure-info">
              <h3 className="figure-name">{figure.name}</h3>
              <div className="figure-footer">
                <span className="figure-price">{figure.price}</span>
                <span className="amazon-badge">
                  <span className="amazon-icon">🛒</span>
                  Buy
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .anime-figures-section {
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          background: linear-gradient(180deg, 
            var(--color-bg) 0%, 
            rgba(10, 15, 24, 0.95) 50%,
            var(--color-bg) 100%
          );
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 900;
          font-family: 'Japan Ramen', 'Impact', 'Arial Black', sans-serif;
          color: #ffa500;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .icon {
          font-size: 2rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-dim);
          opacity: 0.9;
        }

        .figures-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
          padding: 1rem 0;
        }

        .figure-card {
          background: var(--color-glass);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .figure-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow: 
            0 12px 40px rgba(255, 215, 0, 0.2),
            0 0 30px rgba(255, 107, 53, 0.15);
        }

        .figure-image-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          overflow: hidden;
        }

        .figure-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .figure-card:hover .figure-image {
          transform: scale(1.1);
        }

        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            transparent 100%
          );
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .figure-card:hover .hover-overlay {
          opacity: 1;
        }

        .shop-now-btn {
          background: linear-gradient(135deg, #ffd700, #ff6b35);
          color: #000;
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .figure-card:hover .shop-now-btn {
          transform: translateY(0);
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          gap: 1rem;
          padding: 2rem;
        }

        .placeholder-icon {
          font-size: 4rem;
          opacity: 0.6;
        }

        .placeholder-text {
          font-size: 1rem;
          color: var(--color-text-dim);
          text-align: center;
          opacity: 0.8;
        }

        .figure-info {
          padding: 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .figure-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text);
          margin: 0;
          line-height: 1.4;
        }

        .figure-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .figure-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffd700;
        }

        .amazon-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 215, 0, 0.15);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffd700;
          border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .amazon-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .anime-figures-section {
            padding: 3rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .figures-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1.5rem;
          }

          .figure-image-wrapper {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .figures-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimeFigures;
