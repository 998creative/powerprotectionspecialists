(() => {
  const initNavigation = () => {
    const nav = document.getElementById('pps-primary-nav');
    const navToggle = document.querySelector('.pps-nav-toggle');
    const isDesktopViewport = () => window.matchMedia('(min-width: 1024px)').matches;
    const mobileNavRoot =
      nav instanceof HTMLElement ? nav.querySelector('[data-mobile-nav]') : null;
    const mobileNavTriggers =
      mobileNavRoot instanceof HTMLElement
        ? Array.from(mobileNavRoot.querySelectorAll('[data-mobile-nav-toggle]'))
        : [];
    const mobileNavPanels =
      mobileNavRoot instanceof HTMLElement
        ? Array.from(mobileNavRoot.querySelectorAll('[data-mobile-nav-panel]'))
        : [];

    const closeMobilePanels = (exceptKey = null) => {
      mobileNavTriggers.forEach((trigger) => {
        if (!(trigger instanceof HTMLButtonElement)) {
          return;
        }

        const key = trigger.getAttribute('data-mobile-nav-toggle');
        const isOpen = key !== null && key === exceptKey;
        trigger.setAttribute('aria-expanded', String(isOpen));
      });

      mobileNavPanels.forEach((panel) => {
        if (!(panel instanceof HTMLElement)) {
          return;
        }

        const key = panel.getAttribute('data-mobile-nav-panel');
        const isOpen = key !== null && key === exceptKey;
        panel.hidden = !isOpen;
      });
    };

    const closeMobileMenu = () => {
      if (navToggle instanceof HTMLElement) {
        navToggle.setAttribute('aria-expanded', 'false');
      }

      if (nav instanceof HTMLElement) {
        nav.classList.remove('pps-open');
      }

      closeMobilePanels();
    };

    if (nav && navToggle) {
      navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('pps-open', !expanded);

        if (expanded) {
          closeMobilePanels();
        }
      });
    }

    const menuParents = Array.from(document.querySelectorAll('.pps-has-mega'));
    const triggers = Array.from(document.querySelectorAll('.pps-nav-trigger'));
    const closeTimers = new WeakMap();

    const clearCloseTimer = (parent) => {
      const timer = closeTimers.get(parent);
      if (timer) {
        clearTimeout(timer);
        closeTimers.delete(parent);
      }
    };

    const closeParent = (parent) => {
      parent.classList.remove('pps-open');
      const trigger = parent.querySelector('.pps-nav-trigger');
      if (trigger instanceof HTMLElement) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    };

    const closeAllMenus = (exceptParent = null) => {
      menuParents.forEach((parent) => parent.classList.remove('pps-open'));
      triggers.forEach((trigger) => {
        const parent = trigger.closest('.pps-has-mega');
        if (exceptParent && parent === exceptParent) {
          return;
        }

        trigger.setAttribute('aria-expanded', 'false');
      });
    };

    const openMenu = (parent) => {
      clearCloseTimer(parent);
      closeAllMenus(parent);
      parent.classList.add('pps-open');
      const trigger = parent.querySelector('.pps-nav-trigger');
      if (trigger instanceof HTMLElement) {
        trigger.setAttribute('aria-expanded', 'true');
      }
    };

    const scheduleCloseMenu = (parent) => {
      clearCloseTimer(parent);
      const timer = setTimeout(() => {
        closeParent(parent);
      }, 550);
      closeTimers.set(parent, timer);
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const parent = trigger.closest('.pps-has-mega');
        if (!parent) {
          return;
        }

        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          closeParent(parent);
          return;
        }

        openMenu(parent);
      });

      trigger.addEventListener('focus', () => {
        const parent = trigger.closest('.pps-has-mega');
        if (!parent) {
          return;
        }
        openMenu(parent);
      });
    });

    menuParents.forEach((parent) => {
      const mega = parent.querySelector('.pps-mega');

      parent.addEventListener('mouseenter', () => {
        if (!isDesktopViewport()) {
          return;
        }
        openMenu(parent);
      });

      parent.addEventListener('mouseleave', () => {
        if (!isDesktopViewport()) {
          return;
        }
        scheduleCloseMenu(parent);
      });

      if (mega instanceof HTMLElement) {
        mega.addEventListener('mouseenter', () => clearCloseTimer(parent));
        mega.addEventListener('mouseleave', () => {
          if (!isDesktopViewport()) {
            return;
          }
          scheduleCloseMenu(parent);
        });
      }
    });

    mobileNavTriggers.forEach((trigger) => {
      if (!(trigger instanceof HTMLButtonElement)) {
        return;
      }

      trigger.addEventListener('click', () => {
        const key = trigger.getAttribute('data-mobile-nav-toggle');
        if (!key) {
          return;
        }

        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        closeMobilePanels(isExpanded ? null : key);
      });
    });

    if (nav instanceof HTMLElement) {
      const navLinks = Array.from(nav.querySelectorAll('a'));
      navLinks.forEach((link) => {
        if (!(link instanceof HTMLAnchorElement)) {
          return;
        }

        link.addEventListener('click', () => {
          closeAllMenus();
          if (!isDesktopViewport()) {
            closeMobileMenu();
          }
        });
      });
    }

    document.addEventListener('click', (event) => {
      if (!event.target || !(event.target instanceof Node)) {
        return;
      }

      const insideNav = nav?.contains(event.target);
      if (!insideNav) {
        closeAllMenus();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAllMenus();
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (isDesktopViewport()) {
        closeMobileMenu();
      } else {
        closeAllMenus();
      }
    });

    closeMobilePanels();
  };

  const initHomeSliders = () => {
    const sliders = Array.from(document.querySelectorAll('[data-home-slider]'));

    sliders.forEach((slider) => {
      const track = slider.querySelector('[data-home-slider-track]');
      const slides = Array.from(slider.querySelectorAll('[data-home-slide]'));
      const prevButton = slider.querySelector('[data-home-slider-prev]');
      const nextButton = slider.querySelector('[data-home-slider-next]');
      const progress = slider.querySelector('[data-home-slider-progress]');
      const sliderType = slider.getAttribute('data-home-slider');

      if (!(track instanceof HTMLElement) || slides.length === 0) {
        return;
      }

      let currentStep = 0;
      let cardsPerView = 1;
      let maxStep = 0;

      const getCardsPerView = () => {
        const width = window.innerWidth;

        if (
          sliderType === 'services' ||
          sliderType === 'sectors' ||
          sliderType === 'other-sectors' ||
          sliderType === 'aftercare'
        ) {
          if (width < 768) {
            return 1;
          }

          if (width < 1200) {
            return 2;
          }

          return 3;
        }

        if (sliderType === 'testimonials') {
          if (width < 768) {
            return 1;
          }

          return 2;
        }

        return 1;
      };

      const syncLayout = () => {
        cardsPerView = getCardsPerView();
        maxStep = Math.max(0, slides.length - cardsPerView);
        currentStep = Math.min(currentStep, maxStep);

        slides.forEach((slide) => {
          if (slide instanceof HTMLElement) {
            slide.style.flex = `0 0 ${100 / cardsPerView}%`;
          }
        });

        const progressWidth = `${((currentStep + 1) / (maxStep + 1)) * 100}%`;
        track.style.transform = `translateX(-${(currentStep * 100) / cardsPerView}%)`;

        if (progress instanceof HTMLElement) {
          progress.style.width = progressWidth;
        }

        if (prevButton instanceof HTMLButtonElement) {
          prevButton.disabled = currentStep === 0;
        }

        if (nextButton instanceof HTMLButtonElement) {
          nextButton.disabled = currentStep === maxStep;
        }
      };

      if (prevButton instanceof HTMLButtonElement) {
        prevButton.addEventListener('click', () => {
          currentStep = Math.max(0, currentStep - 1);
          syncLayout();
        });
      }

      if (nextButton instanceof HTMLButtonElement) {
        nextButton.addEventListener('click', () => {
          currentStep = Math.min(maxStep, currentStep + 1);
          syncLayout();
        });
      }

      window.addEventListener('resize', syncLayout);
      syncLayout();
    });
  };

  const initHomeContactForm = () => {
    const form = document.querySelector('[data-contact-form]');

    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    const stepPanels = Array.from(form.querySelectorAll('[data-contact-step]'));
    const progressSteps = Array.from(form.querySelectorAll('[data-contact-progress-step]'));
    const progressLines = Array.from(form.querySelectorAll('.pps-home-form-progress i'));
    const backButton = form.querySelector('[data-contact-back]');
    const nextButton = form.querySelector('[data-contact-next]');
    const submitButton = form.querySelector('[data-contact-submit]');
    const successPanel = form.querySelector('[data-contact-success]');

    let currentStep = 1;

    const getValue = (name) => {
      const inputs = Array.from(form.querySelectorAll(`[data-contact-input="${name}"]`));

      if (inputs.length === 0) {
        return '';
      }

      const first = inputs[0];

      if (first instanceof HTMLInputElement && first.type === 'radio') {
        const selected = inputs.find(
          (input) => input instanceof HTMLInputElement && input.checked
        );

        return selected instanceof HTMLInputElement ? selected.value.trim() : '';
      }

      if (
        first instanceof HTMLInputElement ||
        first instanceof HTMLTextAreaElement ||
        first instanceof HTMLSelectElement
      ) {
        return first.value.trim();
      }

      return '';
    };

    const setError = (field, message) => {
      const target = form.querySelector(`[data-error-for="${field}"]`);
      if (target instanceof HTMLElement) {
        target.textContent = message;
      }
    };

    const clearErrors = () => {
      Array.from(form.querySelectorAll('[data-error-for]')).forEach((item) => {
        if (item instanceof HTMLElement) {
          item.textContent = '';
        }
      });
    };

    const validateStep = (stepNumber) => {
      clearErrors();
      const errors = {};

      if (stepNumber === 1) {
        if (!getValue('service')) {
          errors.service = 'Please select a service.';
        }
      }

      if (stepNumber === 2) {
        if (!getValue('sector')) {
          errors.sector = 'Please select your sector.';
        }

        if (!getValue('location')) {
          errors.location = 'Please tell us where you are based.';
        }
      }

      if (stepNumber === 3) {
        const preferred = getValue('preferredContact') || 'email';

        if (!getValue('name')) {
          errors.name = 'Please enter your name.';
        }

        if (preferred === 'email' && !getValue('email')) {
          errors.email = 'Please enter your email address.';
        }

        if (preferred === 'phone' && !getValue('phone')) {
          errors.phone = 'Please enter your phone number.';
        }
      }

      Object.entries(errors).forEach(([field, message]) => setError(field, message));
      return Object.keys(errors).length === 0;
    };

    const syncUi = () => {
      stepPanels.forEach((panel) => {
        const panelStep = Number(panel.getAttribute('data-contact-step'));
        panel.hidden = panelStep !== currentStep;
      });

      progressSteps.forEach((stepElement) => {
        const stepNumber = Number(stepElement.getAttribute('data-contact-progress-step'));
        stepElement.classList.remove('active', 'completed');

        if (stepNumber < currentStep) {
          stepElement.classList.add('completed');
        } else if (stepNumber === currentStep) {
          stepElement.classList.add('active');
        }
      });

      progressLines.forEach((line, index) => {
        line.classList.toggle('active', index < currentStep - 1);
      });

      if (backButton instanceof HTMLElement) {
        backButton.hidden = currentStep === 1;
      }

      if (nextButton instanceof HTMLElement) {
        nextButton.hidden = currentStep === 3;
      }

      if (submitButton instanceof HTMLElement) {
        submitButton.hidden = currentStep !== 3;
      }
    };

    Array.from(form.querySelectorAll('[data-contact-input]')).forEach((input) => {
      if (
        input instanceof HTMLInputElement ||
        input instanceof HTMLTextAreaElement ||
        input instanceof HTMLSelectElement
      ) {
        input.addEventListener('input', clearErrors);
        input.addEventListener('change', clearErrors);
      }
    });

    if (backButton instanceof HTMLButtonElement) {
      backButton.addEventListener('click', () => {
        clearErrors();
        currentStep = Math.max(1, currentStep - 1);
        syncUi();
      });
    }

    if (nextButton instanceof HTMLButtonElement) {
      nextButton.addEventListener('click', () => {
        if (!validateStep(currentStep)) {
          return;
        }

        currentStep = Math.min(3, currentStep + 1);
        syncUi();
      });
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!validateStep(3)) {
        return;
      }

      stepPanels.forEach((panel) => {
        panel.hidden = true;
      });

      if (backButton instanceof HTMLElement) {
        backButton.hidden = true;
      }

      if (nextButton instanceof HTMLElement) {
        nextButton.hidden = true;
      }

      if (submitButton instanceof HTMLElement) {
        submitButton.hidden = true;
      }

      if (successPanel instanceof HTMLElement) {
        successPanel.hidden = false;
      }
    });

    syncUi();
  };

  const initManuals = () => {
    const manualsRoot = document.querySelector('[data-manuals-root]');

    if (!(manualsRoot instanceof HTMLElement)) {
      return;
    }

    const searchInput = manualsRoot.querySelector('[data-manuals-search]');
    const brandsContainer = manualsRoot.querySelector('[data-manuals-brands]');
    const typesSelect = manualsRoot.querySelector('[data-manuals-types]');
    const clearBtn = manualsRoot.querySelector('[data-manuals-clear]');
    const clearEmptyBtn = manualsRoot.querySelector('[data-manuals-clear-empty]');
    const countEl = manualsRoot.querySelector('[data-manuals-count]');
    const resultsEl = manualsRoot.querySelector('[data-manuals-results]');
    const emptyEl = manualsRoot.querySelector('[data-manuals-empty]');

    if (
      !(searchInput instanceof HTMLInputElement) ||
      !(brandsContainer instanceof HTMLElement) ||
      !(typesSelect instanceof HTMLSelectElement) ||
      !(resultsEl instanceof HTMLElement) ||
      !(countEl instanceof HTMLElement) ||
      !(emptyEl instanceof HTMLElement)
    ) {
      return;
    }

    const ALL_BRANDS = 'All Brands';
    const ALL_TYPES = 'All Types';

    let manuals = [];
    let selectedBrand = ALL_BRANDS;
    let selectedType = ALL_TYPES;
    let query = '';

    const formatCount = (count) => `${count} manual${count === 1 ? '' : 's'} found`;

    const normalize = (value) => String(value || '').toLowerCase().trim();

    const getFilteredManuals = () => {
      return manuals.filter((manual) => {
        const searchBlob = normalize(`${manual.title} ${manual.brand} ${manual.category}`);
        const matchesQuery = !query || searchBlob.includes(query);
        const matchesBrand = selectedBrand === ALL_BRANDS || manual.brand === selectedBrand;
        const matchesType = selectedType === ALL_TYPES || manual.category === selectedType;
        return matchesQuery && matchesBrand && matchesType;
      });
    };

    const renderTypeOptions = (records) => {
      const scoped = records.filter((manual) =>
        selectedBrand === ALL_BRANDS ? true : manual.brand === selectedBrand
      );
      const types = Array.from(new Set(scoped.map((manual) => manual.category))).sort((a, b) =>
        a.localeCompare(b)
      );

      const validCurrentType = selectedType === ALL_TYPES || types.includes(selectedType);
      if (!validCurrentType) {
        selectedType = ALL_TYPES;
      }

      typesSelect.innerHTML = '';

      const defaultOption = document.createElement('option');
      defaultOption.value = ALL_TYPES;
      defaultOption.textContent = ALL_TYPES;
      typesSelect.appendChild(defaultOption);

      types.forEach((type) => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typesSelect.appendChild(option);
      });

      typesSelect.value = selectedType;
    };

    const renderBrandButtons = (records) => {
      const brands = Array.from(new Set(records.map((manual) => manual.brand))).sort((a, b) =>
        a.localeCompare(b)
      );

      const fragment = document.createDocumentFragment();

      const makeButton = (label) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'pps-chip';
        button.textContent = label;
        if (selectedBrand === label) {
          button.classList.add('active');
        }
        button.addEventListener('click', () => {
          selectedBrand = label;
          selectedType = ALL_TYPES;
          renderTypeOptions(manuals);
          render();
        });
        return button;
      };

      fragment.appendChild(makeButton(ALL_BRANDS));
      brands.forEach((brand) => fragment.appendChild(makeButton(brand)));

      brandsContainer.innerHTML = '';
      brandsContainer.appendChild(fragment);
    };

    const renderResults = (records) => {
      const byBrand = new Map();

      records.forEach((manual) => {
        if (!byBrand.has(manual.brand)) {
          byBrand.set(manual.brand, new Map());
        }
        const categories = byBrand.get(manual.brand);
        if (!categories.has(manual.category)) {
          categories.set(manual.category, []);
        }
        categories.get(manual.category).push(manual);
      });

      resultsEl.innerHTML = '';

      Array.from(byBrand.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([brand, categories]) => {
          const group = document.createElement('section');
          group.className = 'pps-manuals-group';

          const heading = document.createElement('h3');
          heading.textContent = brand;
          group.appendChild(heading);

          Array.from(categories.entries())
            .sort(([a], [b]) => a.localeCompare(b))
            .forEach(([category, entries]) => {
              const categoryWrap = document.createElement('div');
              categoryWrap.className = 'pps-manuals-category';

              const categoryLabel = document.createElement('p');
              categoryLabel.textContent = category;
              categoryWrap.appendChild(categoryLabel);

              const cards = document.createElement('div');
              cards.className = 'pps-manuals-cards';

              entries
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title))
                .forEach((manual) => {
                  const card = document.createElement('article');
                  card.className = 'pps-manual-card';

                  const title = document.createElement('h4');
                  title.textContent = manual.title;
                  card.appendChild(title);

                  const meta = document.createElement('p');
                  meta.textContent = `${manual.brand} - ${manual.category}`;
                  card.appendChild(meta);

                  const link = document.createElement('a');
                  link.href = manual.href;
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  link.textContent = 'Open manual PDF';
                  card.appendChild(link);

                  cards.appendChild(card);
                });

              categoryWrap.appendChild(cards);
              group.appendChild(categoryWrap);
            });

          resultsEl.appendChild(group);
        });
    };

    const render = () => {
      renderBrandButtons(manuals);
      renderTypeOptions(manuals);

      const filtered = getFilteredManuals();
      countEl.textContent = formatCount(filtered.length);

      const hasActiveFilters =
        query.length > 0 || selectedBrand !== ALL_BRANDS || selectedType !== ALL_TYPES;

      if (clearBtn instanceof HTMLButtonElement) {
        clearBtn.disabled = !hasActiveFilters;
      }

      emptyEl.hidden = filtered.length > 0;
      resultsEl.hidden = filtered.length === 0;

      if (filtered.length > 0) {
        renderResults(filtered);
      } else {
        resultsEl.innerHTML = '';
      }
    };

    const clearFilters = () => {
      selectedBrand = ALL_BRANDS;
      selectedType = ALL_TYPES;
      query = '';
      searchInput.value = '';
      render();
    };

    searchInput.addEventListener('input', () => {
      query = normalize(searchInput.value);
      render();
    });

    typesSelect.addEventListener('change', () => {
      selectedType = typesSelect.value;
      render();
    });

    if (clearBtn instanceof HTMLButtonElement) {
      clearBtn.addEventListener('click', clearFilters);
    }

    if (clearEmptyBtn instanceof HTMLButtonElement) {
      clearEmptyBtn.addEventListener('click', clearFilters);
    }

    const dataUrl = typeof ppsTheme === 'object' && ppsTheme ? ppsTheme.manualsDataUrl : '';

    if (!dataUrl) {
      countEl.textContent = 'Manuals unavailable';
      emptyEl.hidden = false;
      emptyEl.innerHTML = '<p>Manual data could not be loaded. Please try again later.</p>';
      resultsEl.innerHTML = '';
      return;
    }

    fetch(dataUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Manual data request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Manual data format is invalid.');
        }
        manuals = data;
        render();
      })
      .catch((error) => {
        console.error(error);
        countEl.textContent = 'Manuals unavailable';
        emptyEl.hidden = false;
        emptyEl.innerHTML = '<p>Manual data could not be loaded. Please try again later.</p>';
        resultsEl.innerHTML = '';
      });
  };

  const initFooterAccordion = () => {
    const roots = Array.from(document.querySelectorAll('[data-footer-accordion]'));

    roots.forEach((root) => {
      if (!(root instanceof HTMLElement)) {
        return;
      }

      const triggers = Array.from(root.querySelectorAll('[data-footer-toggle]'));
      const panels = Array.from(root.querySelectorAll('[data-footer-panel]'));

      if (triggers.length === 0 || panels.length === 0) {
        return;
      }

      const openPanel = (key) => {
        triggers.forEach((trigger) => {
          if (!(trigger instanceof HTMLButtonElement)) {
            return;
          }
          const isActive = trigger.getAttribute('data-footer-toggle') === key;
          trigger.setAttribute('aria-expanded', String(isActive));
        });

        panels.forEach((panel) => {
          if (!(panel instanceof HTMLElement)) {
            return;
          }
          const isActive = panel.getAttribute('data-footer-panel') === key;
          panel.hidden = !isActive;
        });
      };

      const defaultTrigger = triggers.find(
        (trigger) =>
          trigger instanceof HTMLButtonElement &&
          trigger.getAttribute('aria-expanded') === 'true'
      );
      const defaultKey =
        defaultTrigger instanceof HTMLButtonElement
          ? defaultTrigger.getAttribute('data-footer-toggle')
          : triggers[0]?.getAttribute('data-footer-toggle');

      if (defaultKey) {
        openPanel(defaultKey);
      }

      triggers.forEach((trigger) => {
        if (!(trigger instanceof HTMLButtonElement)) {
          return;
        }

        trigger.addEventListener('click', () => {
          const key = trigger.getAttribute('data-footer-toggle');
          if (!key) {
            return;
          }
          openPanel(key);
        });
      });
    });
  };

  const initAboutTimeline = () => {
    const timelines = Array.from(document.querySelectorAll('[data-about-timeline]'));

    timelines.forEach((timeline) => {
      if (!(timeline instanceof HTMLElement)) {
        return;
      }

      const items = Array.from(timeline.querySelectorAll('[data-about-timeline-item]'));
      const mediaItems = Array.from(timeline.querySelectorAll('[data-about-media-item]'));
      const dateLabel = timeline.querySelector('[data-about-media-date]');
      const titleLabel = timeline.querySelector('[data-about-media-title]');

      if (items.length === 0 || mediaItems.length === 0) {
        return;
      }

      const getText = (node, selector) => {
        if (!(node instanceof HTMLElement)) {
          return '';
        }
        const target = node.querySelector(selector);
        return target instanceof HTMLElement ? target.textContent?.trim() ?? '' : '';
      };

      const setActive = (index) => {
        items.forEach((item) => {
          if (!(item instanceof HTMLElement)) {
            return;
          }
          const itemIndex = Number(item.getAttribute('data-about-index'));
          item.classList.toggle('is-active', itemIndex === index);
        });

        mediaItems.forEach((mediaItem) => {
          if (!(mediaItem instanceof HTMLElement)) {
            return;
          }
          const mediaIndex = Number(mediaItem.getAttribute('data-about-media-index'));
          mediaItem.classList.toggle('is-active', mediaIndex === index);
        });

        const activeItem = items.find((item) => {
          if (!(item instanceof HTMLElement)) {
            return false;
          }
          return Number(item.getAttribute('data-about-index')) === index;
        });

        if (activeItem instanceof HTMLElement) {
          if (dateLabel instanceof HTMLElement) {
            dateLabel.textContent = getText(activeItem, 'p');
          }
          if (titleLabel instanceof HTMLElement) {
            titleLabel.textContent = getText(activeItem, 'h3');
          }
        }
      };

      items.forEach((item) => {
        if (!(item instanceof HTMLElement)) {
          return;
        }

        const index = Number(item.getAttribute('data-about-index'));
        if (Number.isNaN(index)) {
          return;
        }

        item.addEventListener('mouseenter', () => setActive(index));
        item.addEventListener('focus', () => setActive(index));
        item.addEventListener('click', () => setActive(index));
      });

      let observer = null;
      const syncObserver = () => {
        if (observer instanceof IntersectionObserver) {
          observer.disconnect();
          observer = null;
        }

        if (!window.matchMedia('(min-width: 1024px)').matches) {
          return;
        }

        observer = new IntersectionObserver(
          (entries) => {
            let nextIndex = null;
            let bestRatio = -1;

            entries.forEach((entry) => {
              if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) {
                return;
              }
              const index = Number(entry.target.getAttribute('data-about-index'));
              if (Number.isNaN(index)) {
                return;
              }

              if (entry.intersectionRatio > bestRatio) {
                bestRatio = entry.intersectionRatio;
                nextIndex = index;
              }
            });

            if (nextIndex !== null) {
              setActive(nextIndex);
            }
          },
          {
            threshold: [0.2, 0.4, 0.6, 0.8],
            rootMargin: '-18% 0px -42% 0px',
          }
        );

        items.forEach((item) => {
          if (item instanceof HTMLElement) {
            observer.observe(item);
          }
        });
      };

      setActive(0);
      syncObserver();
      window.addEventListener('resize', syncObserver);
    });
  };

  const initWhyUsStackCards = () => {
    const stacks = Array.from(document.querySelectorAll('[data-why-stack]'));

    if (stacks.length === 0) {
      return;
    }

    const isMobileViewport = () => window.matchMedia('(max-width: 767px)').matches;
    const stickyTopOffset = 80;
    const mobileCardOffset = 20;
    const mobileCardStartY = 520;
    let ticking = false;

    const updateStacks = () => {
      stacks.forEach((stack) => {
        if (!(stack instanceof HTMLElement)) {
          return;
        }

        const stage = stack.querySelector('[data-why-stack-stage]');
        const track = stack.querySelector('[data-why-stack-track]');
        const cards = Array.from(stack.querySelectorAll('[data-why-card]'));

        if (
          !(stage instanceof HTMLElement) ||
          !(track instanceof HTMLElement) ||
          cards.length === 0
        ) {
          return;
        }

        if (!isMobileViewport()) {
          cards.forEach((card, index) => {
            if (!(card instanceof HTMLElement)) {
              return;
            }

            card.style.transform = `translateY(${index * mobileCardOffset}px)`;
            card.style.opacity = '1';
            card.style.zIndex = String(index + 1);
          });
          return;
        }

        const stackRect = stack.getBoundingClientRect();
        const scrollableDistance = track.offsetHeight;

        let mobileProgress = 0;
        if (scrollableDistance > 0) {
          const rawProgress = (stickyTopOffset - stackRect.top) / scrollableDistance;
          const clampedProgress = Math.min(1, Math.max(0, rawProgress));
          mobileProgress = clampedProgress * (cards.length - 1);
        }

        cards.forEach((card, index) => {
          if (!(card instanceof HTMLElement)) {
            return;
          }

          const settleOffset = index * mobileCardOffset;
          let translateY = settleOffset;
          let opacity = 1;

          if (index > 0) {
            const enterStart = index - 1;
            const enterEnd = index;

            if (mobileProgress <= enterStart) {
              translateY = mobileCardStartY + settleOffset;
              opacity = 0;
            } else if (mobileProgress < enterEnd) {
              const t = mobileProgress - enterStart;
              translateY =
                (1 - t) * (mobileCardStartY + settleOffset) + t * settleOffset;
              opacity = Math.min(1, t * 1.8);
            }
          }

          card.style.transform = `translateY(${translateY}px)`;
          card.style.opacity = String(opacity);
          card.style.zIndex = String(index + 1);
        });
      });
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateStacks();
        ticking = false;
      });
    };

    updateStacks();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
  };

  initNavigation();
  initHomeSliders();
  initHomeContactForm();
  initManuals();
  initFooterAccordion();
  initAboutTimeline();
  initWhyUsStackCards();
})();
