// Data model: categories and parts
const PART_CATEGORIES = [
  {
    name: 'ENGINE',
    parts: [
      { name: 'Crankshaft', qty: 1, fasteners: '–', buyLocation: 'Fleetari' },
      {
        name: 'Main Bearings',
        qty: 5,
        fasteners: '10 mm ×2 each',
        buyLocation: 'Fleetari'
      },
      {
        name: 'Pistons',
        qty: 4,
        fasteners: '8 mm ×2 each',
        buyLocation: 'Fleetari'
      },
      {
        name: 'Oil Pump',
        qty: 1,
        fasteners: '6 mm ×2',
        buyLocation: 'Fleetari'
      },
      { name: 'Oil Pan', qty: 1, fasteners: '7 mm ×10', buyLocation: 'No' },
      {
        name: 'Oil Drain Plug',
        qty: 1,
        fasteners: '13 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Aux Shaft',
        qty: 1,
        fasteners: '6 mm ×3',
        buyLocation: 'Fleetari'
      },
      {
        name: 'Oil Filter',
        qty: 1,
        fasteners: 'Hand-tight',
        buyLocation: 'PSK'
      },
      { name: 'Head Gasket', qty: 1, fasteners: '–', buyLocation: 'Fleetari' },
      {
        name: 'Cylinder Head',
        qty: 1,
        fasteners: '9 mm ×10',
        buyLocation: 'No'
      },
      {
        name: 'Rockers',
        qty: 8,
        fasteners: 'Screwdriver (8)',
        buyLocation: 'Fleetari'
      },
      {
        name: 'Camshaft',
        qty: 1,
        fasteners: '6 mm ×2',
        buyLocation: 'Fleetari'
      },
      { name: 'Thermostat', qty: 1, fasteners: '–', buyLocation: 'Fleetari' },
      {
        name: 'Thermostat Housing',
        qty: 1,
        fasteners: '8 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Water Pump',
        qty: 1,
        fasteners: '7 mm ×4',
        buyLocation: 'Fleetari'
      },
      {
        name: 'Water Pump Pulley',
        qty: 1,
        fasteners: '8 mm ×4',
        buyLocation: 'No'
      },
      {
        name: 'Fan',
        qty: 1,
        fasteners: 'uses pulley bolts',
        buyLocation: 'No'
      },
      {
        name: 'Aux Shaft Sprocket',
        qty: 1,
        fasteners: '14 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Camshaft Sprocket',
        qty: 1,
        fasteners: '14 mm ×1',
        buyLocation: 'No'
      },
      { name: 'Timing Belt', qty: 1, fasteners: '–', buyLocation: 'Fleetari' },
      {
        name: 'Crankshaft Pulley',
        qty: 1,
        fasteners: '13 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Fuel Pump',
        qty: 1,
        fasteners: '7 mm ×2',
        buyLocation: 'Fleetari'
      },
      { name: 'Rocker Cover', qty: 1, fasteners: '7 mm ×8', buyLocation: 'No' },
      { name: 'Carburettor', qty: 1, fasteners: '9 mm ×5', buyLocation: 'No' },
      {
        name: 'Spark Plugs',
        qty: 4,
        fasteners: 'Spark plug socket ×4',
        buyLocation: 'PSK'
      },
      {
        name: 'Exhaust Headers',
        qty: 1,
        fasteners: '9 mm ×8',
        buyLocation: 'No'
      },
      { name: 'Rear Plate', qty: 1, fasteners: '–', buyLocation: 'No' },
      {
        name: 'Flywheel or Flexplate',
        qty: 1,
        fasteners: '12 mm ×6',
        buyLocation: 'No'
      },
      { name: 'Clutch Disk', qty: 1, fasteners: '–', buyLocation: 'Fleetari' },
      { name: 'Clutch Cover Plate', qty: 1, fasteners: '–', buyLocation: 'No' },
      {
        name: 'Clutch Pressure Plate',
        qty: 1,
        fasteners: '8 mm ×6',
        buyLocation: 'No'
      },
      {
        name: 'Alternator',
        qty: 1,
        fasteners: '11 mm ×1',
        buyLocation: 'Fleetari'
      },
      { name: 'Fan Belt', qty: 1, fasteners: '–', buyLocation: 'PSK' },
      {
        name: 'Distributor',
        qty: 1,
        fasteners: 'Screwdriver ×1',
        buyLocation: 'Fleetari'
      },
      {
        name: 'Starter',
        qty: 1,
        fasteners: '8 mm ×3',
        buyLocation: 'Fleetari'
      },
      { name: 'Air Cleaner', qty: 1, fasteners: '7 mm ×1', buyLocation: 'No' },
      {
        name: 'Timing Belt Cover',
        qty: 1,
        fasteners: '6 mm ×2',
        buyLocation: 'No'
      }
    ]
  },
  {
    name: 'FRONT SUSPENSION',
    parts: [
      {
        name: 'Steering Rack',
        qty: 1,
        fasteners: '9 mm ×4',
        buyLocation: 'No'
      },
      {
        name: 'Steering Shaft',
        qty: 1,
        fasteners: '6 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Steering Column',
        qty: 1,
        fasteners: '12 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Front Lower Control Arm',
        qty: 2,
        fasteners: '14 mm ×1 each',
        buyLocation: 'No'
      },
      {
        name: 'Front Upper Control Arm',
        qty: 2,
        fasteners: '14 mm ×2 each',
        buyLocation: 'No'
      },
      { name: 'Spring Coil', qty: 2, fasteners: '–', buyLocation: 'No' },
      {
        name: 'Front Brake Assembly',
        qty: 2,
        fasteners: '12 mm ×2 + 11 mm ×1 each',
        buyLocation: 'No'
      },
      {
        name: 'Front Link',
        qty: 2,
        fasteners: '11 mm ×2 + 12 mm ×1 each',
        buyLocation: 'No'
      },
      {
        name: 'Front Shock Absorber',
        qty: 2,
        fasteners: '8 mm ×2 + 12 mm ×1 each',
        buyLocation: 'No'
      },
      {
        name: 'Tires',
        qty: 2,
        fasteners: '15 mm ×4 each',
        buyLocation: 'Fleetari'
      }
    ]
  },
  {
    name: 'REAR SUSPENSION',
    parts: [
      {
        name: 'Rear Lower Control Arm',
        qty: 2,
        fasteners: '13 mm ×1 each',
        buyLocation: 'No'
      },
      {
        name: 'Rear Upper Control Arm',
        qty: 2,
        fasteners: '15 mm ×1 each',
        buyLocation: 'No'
      },
      { name: 'Rear Axle', qty: 1, fasteners: '15 mm ×4', buyLocation: 'No' },
      { name: 'Spring Coil', qty: 2, fasteners: '–', buyLocation: 'No' },
      {
        name: 'Rear Shock Absorber',
        qty: 2,
        fasteners: '13 mm ×2 each',
        buyLocation: 'No'
      },
      {
        name: 'Tires',
        qty: 2,
        fasteners: '15 mm ×4 each',
        buyLocation: 'Fleetari'
      }
    ]
  },
  {
    name: 'ENGINE & GEARBOX INSTALL',
    parts: [
      {
        name: 'Engine Mounts',
        qty: 0,
        fasteners: '12 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Hoist Detach',
        qty: 0,
        fasteners: '10 mm ×2',
        buyLocation: 'No'
      },
      { name: 'Gearbox', qty: 1, fasteners: '11 mm ×6', buyLocation: 'No' },
      {
        name: 'Gearbox Crossmember',
        qty: 1,
        fasteners: '14 mm ×2',
        buyLocation: 'No'
      },
      { name: 'Driveshaft', qty: 1, fasteners: '8 mm ×4', buyLocation: 'No' }
    ]
  },
  {
    name: 'AUXILIARY PARTS',
    parts: [
      {
        name: 'Exhaust Pipe Front',
        qty: 1,
        fasteners: '7 mm ×1 + 8 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Exhaust Pipe Rear',
        qty: 1,
        fasteners: '9 mm ×1 + 7 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Exhaust Muffler',
        qty: 1,
        fasteners: '8 mm ×1',
        buyLocation: 'No'
      },
      { name: 'Fuel Tank', qty: 1, fasteners: '10 mm ×2', buyLocation: 'No' },
      { name: 'Radiator', qty: 1, fasteners: '10 mm ×4', buyLocation: 'No' },
      {
        name: 'Radiator Hose Bottom',
        qty: 1,
        fasteners: 'Screwdriver ×2',
        buyLocation: 'No'
      },
      {
        name: 'Radiator Hose Top',
        qty: 1,
        fasteners: 'Screwdriver ×2',
        buyLocation: 'No'
      },
      {
        name: 'Ignition Coil',
        qty: 1,
        fasteners: '8 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Brake Master Cylinder',
        qty: 1,
        fasteners: '8 mm ×4',
        buyLocation: 'No'
      },
      { name: 'Brake Lines', qty: 1, fasteners: '7 mm ×5', buyLocation: 'No' },
      {
        name: 'Front Brake Line Lock',
        qty: 0,
        fasteners: '10 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Handbrake Lever',
        qty: 1,
        fasteners: '6 mm ×1 + 7 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Gear Lever',
        qty: 1,
        fasteners: 'Hand-tight',
        buyLocation: 'No'
      },
      { name: 'Pedal Box', qty: 1, fasteners: '8 mm ×4', buyLocation: 'No' },
      { name: 'Clutch Cable', qty: 1, fasteners: '7 mm ×1', buyLocation: 'No' },
      { name: 'Heater Box', qty: 1, fasteners: '7 mm ×4', buyLocation: 'No' },
      {
        name: 'Heater Hose Inlet',
        qty: 1,
        fasteners: 'Screwdriver ×2',
        buyLocation: 'No'
      },
      {
        name: 'Heater Hose Outlet',
        qty: 1,
        fasteners: 'Screwdriver ×2',
        buyLocation: 'No'
      },
      {
        name: 'Wiper Motor Assembly',
        qty: 1,
        fasteners: '7 mm ×4',
        buyLocation: 'No'
      },
      { name: 'Battery', qty: 1, fasteners: '–', buyLocation: 'PSK' }
    ]
  },
  {
    name: 'INTERIOR',
    parts: [
      {
        name: 'Rear Seat Bench',
        qty: 1,
        fasteners: '12 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Rear Seat Backrest',
        qty: 1,
        fasteners: '12 mm ×2',
        buyLocation: 'No'
      },
      { name: 'Parcel Shelf', qty: 1, fasteners: '–', buyLocation: 'No' },
      {
        name: 'Passenger Seat',
        qty: 1,
        fasteners: '10 mm ×3 + 8 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Driver Seat',
        qty: 1,
        fasteners: '10 mm ×3 + 8 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Ventilation Box',
        qty: 1,
        fasteners: '7 mm ×4',
        buyLocation: 'No'
      },
      {
        name: 'Fresh Air Duct',
        qty: 1,
        fasteners: '8 mm ×1',
        buyLocation: 'No'
      },
      { name: 'Dashboard', qty: 1, fasteners: '7 mm ×2', buyLocation: 'No' },
      {
        name: 'Instrument Panel',
        qty: 1,
        fasteners: 'Screwdriver ×2',
        buyLocation: 'No'
      },
      {
        name: 'Dashboard Top Cover',
        qty: 1,
        fasteners: '–',
        buyLocation: 'No'
      },
      {
        name: 'Dashboard Bottom Cover',
        qty: 1,
        fasteners: 'Screwdriver ×2',
        buyLocation: 'No'
      },
      {
        name: 'Column Shroud Left',
        qty: 1,
        fasteners: '8 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Column Shroud Right',
        qty: 1,
        fasteners: '8 mm ×1',
        buyLocation: 'No'
      },
      {
        name: 'Center Console',
        qty: 1,
        fasteners: '6 mm ×2',
        buyLocation: 'No'
      },
      {
        name: 'Steering Wheel',
        qty: 1,
        fasteners: '14 mm ×1',
        buyLocation: 'No'
      }
    ]
  },
  {
    name: 'BODY',
    parts: [
      { name: 'Light Bulbs', qty: 2, fasteners: '–', buyLocation: 'PSK' },
      {
        name: 'Headlight Assembly',
        qty: 2,
        fasteners: '9 mm ×2 each',
        buyLocation: 'No'
      },
      { name: 'Fender', qty: 2, fasteners: '8 mm ×6 each', buyLocation: 'No' },
      {
        name: 'Front Bumper',
        qty: 1,
        fasteners: '10 mm ×2',
        buyLocation: 'No'
      },
      { name: 'Grille', qty: 1, fasteners: '9 mm ×2', buyLocation: 'No' },
      { name: 'Hood', qty: 1, fasteners: '7 mm ×4', buyLocation: 'No' },
      { name: 'Doors', qty: 2, fasteners: '8 mm ×4 each', buyLocation: 'No' },
      { name: 'Bootlid', qty: 1, fasteners: '8 mm ×4', buyLocation: 'No' },
      {
        name: 'Rear Lights',
        qty: 2,
        fasteners: '8 mm ×2 each',
        buyLocation: 'No'
      },
      { name: 'Rear Bumper', qty: 1, fasteners: '10 mm ×2', buyLocation: 'No' }
    ]
  }
];

// State: map partId -> number (0 to qty, tracking how many instances are marked)
const partState = {};
const PART_ID_PREFIX = 'part-';
const STORAGE_KEY = 'carPartsChecklistState.v2';

function createPartId(categoryName, part) {
  const partName = typeof part === 'string' ? part : part.name;
  return (
    PART_ID_PREFIX +
    categoryName.replace(/\s+/g, '_') +
    '-' +
    partName.replace(/[^\w]+/g, '_')
  ).toLowerCase();
}

function loadStateFromStorage() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return;
    Object.keys(parsed).forEach(id => {
      partState[id] = Number(parsed[id]) || 0;
    });
  } catch (error) {
    // If anything goes wrong (including file:// quirks), just ignore and start fresh
    console.warn('Could not load saved car parts state', error);
  }
}

function saveStateToStorage() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(partState));
  } catch (error) {
    // Non-fatal; the UI still works even if persistence fails
    console.warn('Could not save car parts state', error);
  }
}

function renderCategories() {
  const container = document.getElementById('categories');
  container.innerHTML = '';

  PART_CATEGORIES.forEach(category => {
    const categoryEl = document.createElement('section');
    categoryEl.className = 'category';

    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'category-header';
    header.setAttribute('aria-expanded', 'true');

    const titleBlock = document.createElement('div');
    titleBlock.className = 'category-title-block';

    const nameEl = document.createElement('div');
    nameEl.className = 'category-name';
    nameEl.textContent = category.name;

    const countEl = document.createElement('div');
    countEl.className = 'category-count';
    const totalParts = category.parts.reduce((sum, part) => {
      const qty = typeof part === 'object' ? part.qty : 1;
      return sum + (qty > 0 ? qty : 1);
    }, 0);
    countEl.textContent = `${category.parts.length} parts`;

    titleBlock.appendChild(nameEl);
    titleBlock.appendChild(countEl);

    const chevron = document.createElement('div');
    chevron.className = 'chevron';
    chevron.textContent = '▾';

    header.appendChild(titleBlock);
    header.appendChild(chevron);

    const partsList = document.createElement('div');
    partsList.className = 'parts';

    category.parts.forEach(part => {
      const partName = typeof part === 'object' ? part.name : part;
      const partQty =
        typeof part === 'object' ? (part.qty > 0 ? part.qty : 1) : 1;
      const partFasteners = typeof part === 'object' ? part.fasteners : '–';
      const partBuyLocation =
        typeof part === 'object' ? part.buyLocation : 'No';

      const partId = createPartId(category.name, part);
      if (!(partId in partState)) {
        partState[partId] = 0; // default missing
      }

      const row = document.createElement('div');
      row.className = 'part-row missing';
      row.dataset.partId = partId;
      row.dataset.partQty = partQty;
      row.setAttribute('tabindex', '0');

      const label = document.createElement('div');
      label.className = 'part-label';

      const dot = document.createElement('div');
      dot.className = 'part-dot';

      const nameSpan = document.createElement('div');
      nameSpan.className = 'part-name';
      nameSpan.textContent = partName;

      label.appendChild(dot);
      label.appendChild(nameSpan);

      // Purchase location badge
      if (partBuyLocation !== 'No') {
        const buyBadge = document.createElement('span');
        buyBadge.className = 'buy-badge';
        buyBadge.textContent = partBuyLocation;
        buyBadge.dataset.location = partBuyLocation.toLowerCase();
        label.appendChild(buyBadge);
      }

      // Fastener info
      if (partFasteners && partFasteners !== '–') {
        const fastenerInfo = document.createElement('span');
        fastenerInfo.className = 'fastener-info';
        fastenerInfo.textContent = partFasteners;
        label.appendChild(fastenerInfo);
      }

      const controlsWrapper = document.createElement('div');
      controlsWrapper.className = 'controls-wrapper';

      // Counter UI for parts with qty > 1
      if (partQty > 1) {
        const counterWrapper = document.createElement('div');
        counterWrapper.className = 'counter-wrapper';

        const decrementBtn = document.createElement('button');
        decrementBtn.type = 'button';
        decrementBtn.className = 'counter-btn decrement-btn';
        decrementBtn.textContent = '−';
        decrementBtn.setAttribute('aria-label', `Decrement ${partName}`);
        decrementBtn.addEventListener('click', event => {
          event.stopPropagation();
          const current = partState[partId] || 0;
          if (current > 0) {
            setPartQuantity(partId, partName, partQty, row, current - 1);
          }
        });

        const counterDisplay = document.createElement('span');
        counterDisplay.className = 'counter-display';
        counterDisplay.textContent = `${partState[partId] || 0}/${partQty}`;

        const incrementBtn = document.createElement('button');
        incrementBtn.type = 'button';
        incrementBtn.className = 'counter-btn increment-btn';
        incrementBtn.textContent = '+';
        incrementBtn.setAttribute('aria-label', `Increment ${partName}`);
        incrementBtn.addEventListener('click', event => {
          event.stopPropagation();
          const current = partState[partId] || 0;
          if (current < partQty) {
            setPartQuantity(partId, partName, partQty, row, current + 1);
          }
        });

        counterWrapper.appendChild(decrementBtn);
        counterWrapper.appendChild(counterDisplay);
        counterWrapper.appendChild(incrementBtn);
        controlsWrapper.appendChild(counterWrapper);
        row.dataset.counterDisplay = counterDisplay;
      } else {
        // Toggle switch for parts with qty === 1
        const toggleWrapper = document.createElement('div');
        toggleWrapper.className = 'toggle-wrapper';

        const toggleLabel = document.createElement('span');
        toggleLabel.className = 'toggle-label';
        toggleLabel.textContent = 'Have';

        const switchBtn = document.createElement('button');
        switchBtn.type = 'button';
        switchBtn.className = 'switch';
        switchBtn.setAttribute('role', 'switch');
        switchBtn.setAttribute('aria-checked', 'false');
        switchBtn.dataset.state = 'off';
        switchBtn.dataset.partId = partId;
        switchBtn.setAttribute(
          'aria-label',
          `Mark "${partName}" as have or missing`
        );

        const thumb = document.createElement('div');
        thumb.className = 'switch-thumb';
        switchBtn.appendChild(thumb);

        switchBtn.addEventListener('click', event => {
          event.stopPropagation();
          const newState = (partState[partId] || 0) === 0 ? 1 : 0;
          setPartQuantity(partId, partName, partQty, row, newState);
        });

        switchBtn.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            switchBtn.click();
          }
        });

        toggleWrapper.appendChild(toggleLabel);
        toggleWrapper.appendChild(switchBtn);
        controlsWrapper.appendChild(toggleWrapper);
        row.dataset.switchBtn = switchBtn;
      }

      row.appendChild(label);
      row.appendChild(controlsWrapper);

      // Make entire row clickable for single quantity parts
      if (partQty === 1) {
        row.setAttribute('role', 'button');
        row.setAttribute(
          'aria-label',
          `Toggle "${partName}" - Click to mark as have or missing`
        );
        row.addEventListener('click', () => {
          const newState = (partState[partId] || 0) === 0 ? 1 : 0;
          setPartQuantity(partId, partName, partQty, row, newState);
        });

        row.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const newState = (partState[partId] || 0) === 0 ? 1 : 0;
            setPartQuantity(partId, partName, partQty, row, newState);
          }
        });
      }

      // Apply any saved state so the UI reflects previously toggled values
      updatePartRowUI(partId, partName, partQty, row, partState[partId] || 0);

      partsList.appendChild(row);
    });

    header.addEventListener('click', () => {
      const isCollapsed = categoryEl.classList.toggle('collapsed');
      header.setAttribute('aria-expanded', String(!isCollapsed));
    });

    categoryEl.appendChild(header);
    categoryEl.appendChild(partsList);
    container.appendChild(categoryEl);
  });
}

function setPartQuantity(partId, partName, qty, rowEl, newQuantity) {
  partState[partId] = Math.max(0, Math.min(qty, newQuantity));
  updatePartRowUI(partId, partName, qty, rowEl, partState[partId]);
  applyFilterToRow(rowEl);
  updateSummary();
  saveStateToStorage();
}

function updatePartRowUI(partId, partName, qty, rowEl, currentQty) {
  const partQty = parseInt(rowEl.dataset.partQty) || qty;

  if (partQty > 1) {
    // Counter UI
    const counterDisplay = rowEl.querySelector('.counter-display');
    const decrementBtn = rowEl.querySelector('.decrement-btn');
    const incrementBtn = rowEl.querySelector('.increment-btn');

    if (counterDisplay) {
      counterDisplay.textContent = `${currentQty}/${partQty}`;
    }

    if (decrementBtn) {
      decrementBtn.disabled = currentQty <= 0;
    }

    if (incrementBtn) {
      incrementBtn.disabled = currentQty >= partQty;
    }

    if (currentQty === 0) {
      rowEl.classList.remove('have', 'partial');
      rowEl.classList.add('missing');
    } else if (currentQty === partQty) {
      rowEl.classList.remove('missing', 'partial');
      rowEl.classList.add('have');
    } else {
      rowEl.classList.remove('missing', 'have');
      rowEl.classList.add('partial');
    }
  } else {
    // Toggle switch UI
    const switchBtn = rowEl.querySelector('.switch');
    if (switchBtn) {
      if (currentQty > 0) {
        rowEl.classList.remove('missing');
        rowEl.classList.add('have');
        switchBtn.dataset.state = 'on';
        switchBtn.setAttribute('aria-checked', 'true');
      } else {
        rowEl.classList.remove('have');
        rowEl.classList.add('missing');
        switchBtn.dataset.state = 'off';
        switchBtn.setAttribute('aria-checked', 'false');
      }
    }
  }
}

function getActiveFilter() {
  const active = document.querySelector('.filter-btn.active');
  return active ? active.dataset.filter : 'all';
}

function getSearchQuery() {
  const searchInput = document.getElementById('search-input');
  return searchInput ? searchInput.value.trim().toLowerCase() : '';
}

function partNameMatchesSearch(partName, searchQuery) {
  if (!searchQuery) return true;
  return partName.toLowerCase().includes(searchQuery);
}

function applyFilterToRow(rowEl) {
  const filter = getActiveFilter();
  const searchQuery = getSearchQuery();
  const partNameEl = rowEl.querySelector('.part-name');
  const partName = partNameEl ? partNameEl.textContent : '';
  const matchesSearch = partNameMatchesSearch(partName, searchQuery);

  if (!matchesSearch) {
    rowEl.style.display = 'none';
    return;
  }

  if (filter === 'all') {
    rowEl.style.display = '';
    return;
  }

  const partId = rowEl.dataset.partId;
  const currentQty = partState[partId] || 0;
  const isHave = currentQty > 0;

  if (filter === 'have') {
    rowEl.style.display = isHave ? '' : 'none';
  } else if (filter === 'missing') {
    rowEl.style.display = !isHave ? '' : 'none';
  }
}

function applyFilterToAll() {
  const rows = document.querySelectorAll('.part-row');
  rows.forEach(row => applyFilterToRow(row));
}

// Modal management
let previousActiveElement = null;

function showResetConfirmation() {
  const modalOverlay = document.getElementById('reset-modal-overlay');
  const confirmButton = document.getElementById('reset-modal-confirm');

  if (!modalOverlay) return;

  // Store the currently focused element
  previousActiveElement = document.activeElement;

  // Show modal
  modalOverlay.classList.remove('modal-hidden');

  // Focus the confirm button for keyboard accessibility
  if (confirmButton) {
    confirmButton.focus();
  }

  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

function hideResetConfirmation() {
  const modalOverlay = document.getElementById('reset-modal-overlay');

  if (!modalOverlay) return;

  // Hide modal
  modalOverlay.classList.add('modal-hidden');

  // Restore body scroll
  document.body.style.overflow = '';

  // Return focus to the previously focused element
  if (
    previousActiveElement &&
    typeof previousActiveElement.focus === 'function'
  ) {
    previousActiveElement.focus();
  }
  previousActiveElement = null;
}

function performReset() {
  // Reset in-memory state
  Object.keys(partState).forEach(id => {
    partState[id] = 0;
  });

  // Reset all rows visually
  const rows = document.querySelectorAll('.part-row');
  rows.forEach(row => {
    const partId = row.dataset.partId;
    const partQty = parseInt(row.dataset.partQty) || 1;
    const partName = row.querySelector('.part-name')?.textContent || '';

    // Find part info
    let part = null;
    for (const category of PART_CATEGORIES) {
      for (const p of category.parts) {
        const pName = typeof p === 'object' ? p.name : p;
        const candidateId = createPartId(category.name, p);
        if (candidateId === partId) {
          part = p;
          break;
        }
      }
      if (part) break;
    }

    if (part) {
      const pName = typeof part === 'object' ? part.name : part;
      const pQty = typeof part === 'object' ? part.qty : 1;
      updatePartRowUI(partId, pName, pQty, row, 0);
    }
  });

  // Persist cleared state and refresh summary/filter
  saveStateToStorage();
  applyFilterToAll();
  updateSummary();
}

function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilterToAll();
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      applyFilterToAll();
    });
  }

  const resetButton = document.getElementById('reset-all');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      showResetConfirmation();
    });
  }

  // Setup modal event listeners
  const modalOverlay = document.getElementById('reset-modal-overlay');
  const cancelButton = document.getElementById('reset-modal-cancel');
  const confirmButton = document.getElementById('reset-modal-confirm');

  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      hideResetConfirmation();
    });
  }

  if (confirmButton) {
    confirmButton.addEventListener('click', () => {
      performReset();
      hideResetConfirmation();
    });
  }

  // Close modal on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', event => {
      // Only close if clicking directly on the overlay, not the dialog
      if (event.target === modalOverlay) {
        hideResetConfirmation();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', event => {
    if (
      event.key === 'Escape' &&
      modalOverlay &&
      !modalOverlay.classList.contains('modal-hidden')
    ) {
      hideResetConfirmation();
    }
  });
}

function updateSummary() {
  // Calculate total needed and have quantities
  let totalNeeded = 0;
  let totalHave = 0;
  const haveParts = [];
  const missingParts = [];

  PART_CATEGORIES.forEach(category => {
    category.parts.forEach(part => {
      const partName = typeof part === 'object' ? part.name : part;
      const partQty = typeof part === 'object' ? part.qty : 1;
      const partId = createPartId(category.name, part);
      const currentQty = partState[partId] || 0;

      totalNeeded += partQty > 0 ? partQty : 1;
      totalHave += currentQty;

      if (currentQty > 0) {
        if (partQty > 1) {
          haveParts.push({ name: partName, have: currentQty, needed: partQty });
        } else {
          haveParts.push({ name: partName, have: 1, needed: 1 });
        }
      } else {
        missingParts.push({
          name: partName,
          needed: partQty > 0 ? partQty : 1
        });
      }
    });
  });

  const totalCountEl = document.getElementById('total-count');
  const haveCountEl = document.getElementById('have-count');
  const missingCountEl = document.getElementById('missing-count');

  totalCountEl.textContent = String(totalNeeded);
  haveCountEl.textContent = String(totalHave);
  missingCountEl.textContent = String(totalNeeded - totalHave);

  const haveListEl = document.getElementById('have-list');
  const missingListEl = document.getElementById('missing-list');
  const haveListCountEl = document.getElementById('have-list-count');
  const missingListCountEl = document.getElementById('missing-list-count');

  haveListEl.innerHTML = '';
  missingListEl.innerHTML = '';

  if (haveParts.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'list-empty';
    empty.textContent = 'No parts selected yet.';
    haveListEl.appendChild(empty);
  } else {
    haveParts
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(part => {
        const item = document.createElement('div');
        item.className = 'list-item';
        const bullet = document.createElement('div');
        bullet.className = 'list-bullet';
        const text = document.createElement('div');
        if (part.needed > 1) {
          text.textContent = `${part.name} (${part.have}/${part.needed})`;
        } else {
          text.textContent = part.name;
        }
        item.appendChild(bullet);
        item.appendChild(text);
        haveListEl.appendChild(item);
      });
  }

  if (missingParts.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'list-empty';
    empty.textContent = 'No parts are missing. Nice work.';
    missingListEl.appendChild(empty);
  } else {
    missingParts
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(part => {
        const item = document.createElement('div');
        item.className = 'list-item';
        const bullet = document.createElement('div');
        bullet.className = 'list-bullet';
        const text = document.createElement('div');
        if (part.needed > 1) {
          text.textContent = `${part.name} (0/${part.needed})`;
        } else {
          text.textContent = part.name;
        }
        item.appendChild(bullet);
        item.appendChild(text);
        missingListEl.appendChild(item);
      });
  }

  haveListCountEl.textContent =
    haveParts.length === 1 ? '1 item' : `${haveParts.length} items`;
  missingListCountEl.textContent =
    missingParts.length === 1 ? '1 item' : `${missingParts.length} items`;
}

function findPartDisplayNameById(partId) {
  for (const category of PART_CATEGORIES) {
    for (const part of category.parts) {
      const partName = typeof part === 'object' ? part.name : part;
      const candidateId = createPartId(category.name, part);
      if (candidateId === partId) {
        return partName;
      }
    }
  }
  return partId;
}

document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  renderCategories();
  setupFilters();
  applyFilterToAll();
  updateSummary();
  setupCSSToggle();
});

// CSS Toggle Functionality
function setupCSSToggle() {
  const toggleBtn = document.getElementById('css-toggle-btn');
  const stylesheet = document.getElementById('theme-stylesheet');

  // Load saved preference from localStorage
  const savedStyle = localStorage.getItem('selectedStyle') || 'style.css';
  stylesheet.href = savedStyle;
  updateButtonText(savedStyle);

  toggleBtn.addEventListener('click', () => {
    const currentHref = stylesheet.href;
    const newHref = currentHref.includes('style90.css')
      ? 'style.css'
      : 'style90.css';

    stylesheet.href = newHref;
    localStorage.setItem('selectedStyle', newHref);
    updateButtonText(newHref);
  });

  function updateButtonText(href) {
    toggleBtn.textContent = href.includes('style90.css')
      ? 'Switch to Modern Style'
      : 'Switch to 90s Style';
  }
}
