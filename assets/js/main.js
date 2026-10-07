/**
 * GO GREEN NURSERY - KADIYAM
 * Interactive Front-end Logic, Catalog Engine, Quote Builder & Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Plant Catalog Data ---
  const plantCatalog = [
    {
      id: 'mango-grafted',
      name: 'Grafted Mango Varieties',
      botanical: 'Mangifera indica',
      category: 'fruit',
      categoryLabel: 'Fruit Plant',
      image: 'assets/images/fruit-plants-showcase.jpg',
      desc: 'Premium grafted mango saplings including Banganapalli, Kesar, Alphonso, Totapuri, and All-Season Baramasi varieties. High yield with early fruiting.',
      specs: ['Height: 2–4 ft', 'Sun: Full Sun', 'Bearing: 2 Years', 'Grafted'],
      care: 'Prefers well-drained fertile red or alluvial soil. Regular irrigation during flowering and fruit setting.'
    },
    {
      id: 'taiwan-guava',
      name: 'Taiwan Pink & Safeda Guava',
      botanical: 'Psidium guajava',
      category: 'fruit',
      categoryLabel: 'Fruit Plant',
      image: 'assets/images/gallery-1.jpg',
      desc: 'High-density commercial guava saplings. Big fruit size, sweet pink/white pulp, prolific year-round yield.',
      specs: ['Height: 2–3 ft', 'Sun: Full Sun', 'High Yield', 'Grafted'],
      care: 'Extremely resilient to diverse soils. Pruning promotes heavy flowering and big fruit clusters.'
    },
    {
      id: 'royal-palm',
      name: 'Royal Palm & Foxtail Palm',
      botanical: 'Roystonea regia / Wodyetia',
      category: 'avenue',
      categoryLabel: 'Avenue Tree',
      image: 'assets/images/avenue-trees-showcase.jpg',
      desc: 'Majestic architectural avenue palms with smooth concrete-like trunks and lush emerald fronds. Ideal for main entrances, driveways, and estates.',
      specs: ['Height: 4–12 ft', 'Growth: Fast', 'Regal Look', 'Drought Hardy'],
      care: 'Thrives in tropical sunshine. Low maintenance once root system is established.'
    },
    {
      id: 'tabebuia-rosea',
      name: 'Pink Trumpet (Tabebuia Rosea)',
      botanical: 'Tabebuia rosea',
      category: 'avenue',
      categoryLabel: 'Avenue Tree',
      image: 'assets/images/gallery-5.jpg',
      desc: 'Breathtaking flowering avenue shade tree. Smothers entirely in vibrant pink floral blossoms during spring, resembling cherry blossoms.',
      specs: ['Height: 4–8 ft', 'Flowering: Spring', 'Shade Tree', 'Avenue Favorite'],
      care: 'Very hardy once established. Excellent windbreak and street ornamentation.'
    },
    {
      id: 'bougainvillea-exotic',
      name: 'Bougainvillea Hybrids',
      botanical: 'Bougainvillea spectabilis',
      category: 'flowering',
      categoryLabel: 'Flowering & Shrub',
      image: 'assets/images/gallery-2.jpg',
      desc: 'Dazzling multi-color flowering varieties (Magenta, Snow White, Sunset Orange, Bicolor). Heavy continuous year-round bloomers.',
      specs: ['Bloom: 365 Days', 'Sun: Full Sun', 'Low Water', 'Vibrant'],
      care: 'Requires minimal water and maximum sunlight for richest bloom density.'
    },
    {
      id: 'ficus-topiary',
      name: 'Ficus Panda & Topiary Bonsai',
      botanical: 'Ficus microcarpa',
      category: 'ornamental',
      categoryLabel: 'Ornamental / Hedge',
      image: 'assets/images/gallery-3.jpg',
      desc: 'Thick, glossy, dense oval foliage. Can be shaped into globes, topiaries, or privacy perimeter hedges for manicured lawns.',
      specs: ['Evergreen', 'Pest Resistant', 'Sculptable', 'Glossy Leaves'],
      care: 'Prune every 4-6 weeks to retain desired geometric sculpture or hedge density.'
    },
    {
      id: 'kagzi-lime',
      name: 'Kagzi Seedless Lime / Citrus',
      botanical: 'Citrus aurantiifolia',
      category: 'fruit',
      categoryLabel: 'Fruit Plant',
      image: 'assets/images/gallery-4.jpg',
      desc: 'Heavy bearing grafted acid lime plants. Thin skin, rich juice content, ideal for backyard orchards and containers.',
      specs: ['Height: 2–3 ft', 'Bearing: 1 Year', 'Juicy', 'Container Ready'],
      care: 'Needs bright sunshine and organic vermicompost every 3 months.'
    },
    {
      id: 'lawn-turf',
      name: 'Mexican Grass & Carpet Turf',
      botanical: 'Zoysia japonica',
      category: 'landscaping',
      categoryLabel: 'Landscaping & Lawn',
      image: 'assets/images/landscaping-showcase.jpg',
      desc: 'Dense, soft, velvety green lawn turf slabs. Suppresses weeds and creates lush villa carpet lawns.',
      specs: ['Per Sq.Ft Supply', 'Soft Texture', 'Weed Resisting', 'Villa Grade'],
      care: 'Requires regular mowing and sprinkler irrigation for velvety emerald texture.'
    },
    {
      id: 'sapota-kalipatti',
      name: 'Kalipatti / Cricket Ball Sapota',
      botanical: 'Manilkara zapota',
      category: 'fruit',
      categoryLabel: 'Fruit Plant',
      image: 'assets/images/gallery-7.jpg',
      desc: 'Famous high-sugar sweet Chiku variety. Grafted on Khirni rootstock for high resilience and long life span.',
      specs: ['Height: 3–5 ft', 'Sweet Pulp', 'Grafted', 'Hardy Rootstock'],
      care: 'Very tolerant to diverse soil conditions and coastal winds.'
    },
    {
      id: 'areca-indoor-palms',
      name: 'Areca Palm & Air Purifiers',
      botanical: 'Dypsis lutescens',
      category: 'ornamental',
      categoryLabel: 'Indoor & Patio',
      image: 'assets/images/gallery-8.jpg',
      desc: 'Feathery tropical foliage that naturally humidifies and purifies indoor air. Perfect for verandas, patios, and offices.',
      specs: ['Indirect Light', 'Air Purifying', 'Lush Tropical', 'Potted'],
      care: 'Keep in bright indirect light. Water when top inch of soil feels dry.'
    },
    {
      id: 'crotons-foliage',
      name: 'Exotic Colorful Crotons',
      botanical: 'Codiaeum variegatum',
      category: 'ornamental',
      categoryLabel: 'Ornamental / Hedge',
      image: 'assets/images/gallery-6.jpg',
      desc: 'Multicolor foliage with striking shades of red, yellow, orange, and deep green. Adds instant brightness to garden borders.',
      specs: ['Partial Sun', 'Bright Colors', 'Garden Borders', 'Perennial'],
      care: 'Bright light intensifies foliage colors. Keep soil moist and well-aerated.'
    },
    {
      id: 'custard-apple',
      name: 'Balanagar Custard Apple (Sitaphal)',
      botanical: 'Annona squamosa',
      category: 'fruit',
      categoryLabel: 'Fruit Plant',
      image: 'assets/images/gallery-9.jpg'
    },
    {
      id: 'jasmine-mogra',
      name: 'Gundumalli & Madurai Jasmine (Mogra)',
      botanical: 'Jasminum sambac',
      category: 'flowering',
      categoryLabel: 'Flowering & Shrub',
      image: 'assets/images/gallery-10.jpg'
    },
    {
      id: 'tecoma-golden',
      name: 'Golden Trumpet (Tecoma Gaudi Chaudi)',
      botanical: 'Tecoma stans',
      category: 'flowering',
      categoryLabel: 'Flowering & Shrub',
      image: 'assets/images/gallery-12.jpg'
    },
    {
      id: 'alphonso-totapuri',
      name: 'Alphonso & Kesar Mango Grafted',
      botanical: 'Mangifera indica',
      category: 'fruit',
      categoryLabel: 'Fruit Plant',
      image: 'assets/images/gallery-13.jpg'
    },
    {
      id: 'neem-shade-avenue',
      name: 'Neem & Millettia Avenue Trees',
      botanical: 'Azadirachta indica',
      category: 'avenue',
      categoryLabel: 'Avenue Tree',
      image: 'assets/images/gallery-14.jpg'
    },
    {
      id: 'hibiscus-hybrids',
      name: 'Exotic Hybrid Hibiscus Varieties',
      botanical: 'Hibiscus rosa-sinensis',
      category: 'flowering',
      categoryLabel: 'Flowering & Shrub',
      image: 'assets/images/gallery-15.jpg'
    },
    {
      id: 'red-sandalwood',
      name: 'Red Sandalwood & Malabar Neem',
      botanical: 'Pterocarpus santalinus',
      category: 'avenue',
      categoryLabel: 'Avenue Tree',
      image: 'assets/images/gallery-16.jpg'
    }
  ];

  // --- 2. Render Plant Catalog (Photo + Name Only) ---
  const plantsGrid = document.getElementById('plantsGrid');
  const catalogEmpty = document.getElementById('catalogEmpty');
  const searchInput = document.getElementById('plantSearch');
  const searchClear = document.getElementById('searchClear');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let activeCategory = 'all';
  let searchQuery = '';

  function renderCatalog() {
    if (!plantsGrid) return;

    const filtered = plantCatalog.filter(plant => {
      const matchesCat = (activeCategory === 'all') || (plant.category === activeCategory);
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        plant.name.toLowerCase().includes(query) || 
        (plant.botanical && plant.botanical.toLowerCase().includes(query)) ||
        plant.categoryLabel.toLowerCase().includes(query);

      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      plantsGrid.style.display = 'none';
      if (catalogEmpty) catalogEmpty.style.display = 'block';
      return;
    }

    plantsGrid.style.display = 'grid';
    if (catalogEmpty) catalogEmpty.style.display = 'none';

    plantsGrid.innerHTML = filtered.map(plant => `
      <a href="https://wa.me/919441734133?text=${encodeURIComponent(`Hello Go Green Nursery! I am inquiring about: *${plant.name}*. Please share available sizes and rates.`)}" 
         target="_blank" 
         rel="noopener" 
         class="plant-card" 
         aria-label="Inquire about ${plant.name} on WhatsApp">
        <div class="plant-img-wrap">
          <img src="${plant.image}" alt="${plant.name}" loading="lazy">
          <div class="plant-card-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 2.029.924 3.15.925h.005c3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.767-5.774-5.767zm0 10.334c-.958 0-1.895-.272-2.709-.785l-.194-.122-1.294.34.345-1.261-.134-.214c-.563-.895-.86-1.928-.859-2.992 0-2.518 2.049-4.567 4.57-4.567 2.52 0 4.569 2.049 4.57 4.567 0 2.52-2.048 4.569-4.568 4.569z"/>
            </svg>
            Inquire
          </div>
        </div>
        <div class="plant-card-body">
          <h3 class="plant-name">${plant.name}</h3>
        </div>
      </a>
    `).join('');
  }

  // Initial render
  renderCatalog();

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClear) {
        searchClear.style.display = searchQuery ? 'block' : 'none';
      }
      renderCatalog();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        renderCatalog();
        searchInput.focus();
      }
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      renderCatalog();
    });
  });

  // --- 3. Plant Quick View Modal ---
  const quickviewModal = document.getElementById('quickviewModal');
  const quickviewClose = document.getElementById('quickviewClose');
  const qvImg = document.getElementById('qvImg');
  const qvName = document.getElementById('qvName');
  const qvBotanical = document.getElementById('qvBotanical');
  const qvCategory = document.getElementById('qvCategory');
  const qvDesc = document.getElementById('qvDesc');
  const qvCare = document.getElementById('qvCare');
  const qvSpecs = document.getElementById('qvSpecs');
  const qvWhatsApp = document.getElementById('qvWhatsApp');

  function openQuickView(id) {
    const plant = plantCatalog.find(p => p.id === id);
    if (!plant || !quickviewModal) return;

    if (qvImg) qvImg.src = plant.image;
    if (qvName) qvName.textContent = plant.name;
    if (qvBotanical) qvBotanical.textContent = plant.botanical;
    if (qvCategory) qvCategory.textContent = plant.categoryLabel;
    if (qvDesc) qvDesc.textContent = plant.desc;
    if (qvCare) qvCare.textContent = plant.care;
    if (qvSpecs) {
      qvSpecs.innerHTML = plant.specs.map(s => `<span class="spec-pill">🌱 ${s}</span>`).join('');
    }
    if (qvWhatsApp) {
      const msg = `Hello Go Green Nursery! I am interested in: *${plant.name}* (${plant.botanical}). Please share price list and stock availability.`;
      qvWhatsApp.href = `https://wa.me/919441734133?text=${encodeURIComponent(msg)}`;
    }

    quickviewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (quickviewModal) {
      quickviewModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (quickviewClose) {
    quickviewClose.addEventListener('click', closeQuickView);
  }

  if (quickviewModal) {
    quickviewModal.addEventListener('click', (e) => {
      if (e.target === quickviewModal) closeQuickView();
    });
  }

  // --- 4. Interactive WhatsApp Quote Calculator / Inquirer ---
  const quoteCategory = document.getElementById('quoteCategory');
  const quotePlantName = document.getElementById('quotePlantName');
  const quoteQuantity = document.getElementById('quoteQuantity');
  const quoteState = document.getElementById('quoteState');
  const quoteUserName = document.getElementById('quoteUserName');
  const quoteUserPhone = document.getElementById('quoteUserPhone');
  const quoteSendBtn = document.getElementById('quoteSendBtn');

  // Preview elements
  const previewCategory = document.getElementById('previewCategory');
  const previewPlant = document.getElementById('previewPlant');
  const previewQuantity = document.getElementById('previewQuantity');
  const previewState = document.getElementById('previewState');
  const previewMessage = document.getElementById('previewMessage');

  function updateQuoteSummary() {
    const cat = quoteCategory ? quoteCategory.value : 'Fruit Plants';
    const plant = (quotePlantName && quotePlantName.value.trim()) ? quotePlantName.value.trim() : 'General Plant Variety';
    const qty = quoteQuantity ? quoteQuantity.value : 'Retail (1 - 10 plants)';
    const st = quoteState ? quoteState.value : 'Andhra Pradesh';
    const uName = (quoteUserName && quoteUserName.value.trim()) ? quoteUserName.value.trim() : 'Customer';
    const uPhone = (quoteUserPhone && quoteUserPhone.value.trim()) ? quoteUserPhone.value.trim() : '';

    if (previewCategory) previewCategory.textContent = cat;
    if (previewPlant) previewPlant.textContent = plant;
    if (previewQuantity) previewQuantity.textContent = qty;
    if (previewState) previewState.textContent = st;

    const formattedText = 
`🌱 *Go Green Nursery Inquiry*
• *Name:* ${uName}${uPhone ? ` (${uPhone})` : ''}
• *Category:* ${cat}
• *Plant Interest:* ${plant}
• *Quantity Requirement:* ${qty}
• *Delivery Destination:* ${st}

Please share current wholesale/retail price quotation and shipping details. Thank you!`;

    if (previewMessage) previewMessage.textContent = formattedText;

    if (quoteSendBtn) {
      quoteSendBtn.href = `https://wa.me/919441734133?text=${encodeURIComponent(formattedText)}`;
    }
  }

  [quoteCategory, quotePlantName, quoteQuantity, quoteState, quoteUserName, quoteUserPhone].forEach(el => {
    if (el) {
      el.addEventListener('input', updateQuoteSummary);
      el.addEventListener('change', updateQuoteSummary);
    }
  });

  updateQuoteSummary();

  // --- 5. Real Nursery Gallery & Lightbox ---
  const galleryItems = [
    { src: 'assets/images/gallery-1.jpg', title: 'Taiwan Pink Guava Saplings', category: 'plants' },
    { src: 'assets/images/gallery-2.jpg', title: 'Flowering Bougainvillea Rows', category: 'ornamental' },
    { src: 'assets/images/gallery-3.jpg', title: 'Sculpted Ficus & Bonsai Topiary', category: 'ornamental' },
    { src: 'assets/images/gallery-4.jpg', title: 'Grafted Kagzi Lime Saplings', category: 'plants' },
    { src: 'assets/images/gallery-5.jpg', title: 'Pink Tabebuia Avenue Trees', category: 'avenue' },
    { src: 'assets/images/gallery-6.jpg', title: 'Colorful Croton Foliage Beds', category: 'ornamental' },
    { src: 'assets/images/gallery-7.jpg', title: 'Grafted Kalipatti Sapota Plants', category: 'plants' },
    { src: 'assets/images/gallery-8.jpg', title: 'Areca Palms & Shade Foliage', category: 'ornamental' },
    { src: 'assets/images/gallery-9.jpg', title: 'Balanagar Custard Apple Stock', category: 'plants' },
    { src: 'assets/images/gallery-10.jpg', title: 'Kadiyam Nursery Mother Beds', category: 'nursery' },
    { src: 'assets/images/gallery-13.jpg', title: 'Healthy Grafted Fruit Nursery Stock', category: 'nursery' },
    { src: 'assets/images/gallery-14.jpg', title: 'Avenue Highway Palm Plantation', category: 'avenue' }
  ];

  const galleryGrid = document.getElementById('galleryGrid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryList = [...galleryItems];
  let currentLightboxIndex = 0;

  function renderGallery(cat = 'all') {
    if (!galleryGrid) return;

    currentGalleryList = (cat === 'all') 
      ? [...galleryItems] 
      : galleryItems.filter(item => item.category === cat);

    galleryGrid.innerHTML = currentGalleryList.map((item, index) => `
      <div class="gallery-item" data-index="${index}">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-zoom-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <h4 class="gallery-title">${item.title}</h4>
          <span class="gallery-subtitle">Click to enlarge</span>
        </div>
      </div>
    `).join('');

    // Attach click listeners to open lightbox
    galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
    });
  }

  renderGallery('all');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-gallery-filter') || 'all';
      renderGallery(cat);
    });
  });

  function openLightbox(index) {
    if (!lightboxModal || !currentGalleryList[index]) return;
    currentLightboxIndex = index;
    updateLightbox();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateLightbox() {
    const item = currentGalleryList[currentLightboxIndex];
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) lightboxCaption.textContent = item.title;
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryList.length;
    updateLightbox();
  }

  function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
    updateLightbox();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard navigation for modals
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }
    if (quickviewModal && quickviewModal.classList.contains('active')) {
      if (e.key === 'Escape') closeQuickView();
    }
  });

  // --- 6. Navbar Scroll Effect & Back-to-Top Button ---
  const header = document.querySelector('.header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollPos > 350) {
        scrollTopBtn.style.display = 'flex';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 7. Mobile Navigation Toggle & Drawer System ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const drawerClose = document.getElementById('drawerClose');

  function openMobileNav() {
    if (navMenu) navMenu.classList.add('active');
    if (mobileToggle) mobileToggle.classList.add('active');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (navMenu) navMenu.classList.remove('active');
    if (mobileToggle) mobileToggle.classList.remove('active');
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeMobileNav);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close menu when clicking any nav link
  if (navMenu) {
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // --- 8. Contact Form Handling ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || '';
      const phone = document.getElementById('contactPhone')?.value || '';
      const service = document.getElementById('contactService')?.value || 'General Inquiry';
      const message = document.getElementById('contactMessage')?.value || '';

      const waText = `🌿 *Go Green Nursery Message*\n• Name: ${name}\n• Phone: ${phone}\n• Subject: ${service}\n• Message: ${message}`;
      
      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Open WhatsApp after brief delay
      setTimeout(() => {
        window.open(`https://wa.me/919441734133?text=${encodeURIComponent(waText)}`, '_blank');
      }, 700);
    });
  }
});
