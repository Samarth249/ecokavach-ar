// Shared Application Data for Eco-Kavach

const ECO_DATA = {
    'laptop': {
      carbon: '331kg CO2e',
      comparison: '🚗 Driving 1,300 km',
      points: -30,
      bin: 'E-waste',
      binColor: '#f1c40f', // Yellow
      alternatives: ['Repair before replacing', 'Buy refurbished'],
      steps: [
        '1. BACKUP & WIPE: Use factory reset to protect personal data.',
        '2. BATTERY SAFETY: If removable, tape terminals to prevent fire.',
        '3. DONATION FIRST: If functional, donate to schools/NGOs.',
        '4. NO LANDFILL: Contains lead, mercury, and cadmium.',
        '5. LOCATE: Find certified "R2" or "e-Stewards" recycler.'
      ]
    },
    'cell phone': {
      carbon: '63kg CO2e',
      comparison: '⚡ Charging phone 7,500 times',
      points: -15,
      bin: 'E-waste',
      binColor: '#f1c40f', // Yellow
      alternatives: ['Fairphone', 'Keep for 4+ years'],
      steps: [
        '1. CRITICAL MINERALS: Contains gold, cobalt, and rare earths.',
        '2. BATTERY HAZARD: Swollen batteries need special handling.',
        '3. FACTORY RESET: Wipe all accounts before disposal.',
        '4. TRADE-IN: Many carriers offer credit for old devices.',
        '5. ACCESSORIES: Cables and chargers are also E-waste.'
      ]
    },
    'keyboard': {
      carbon: '19kg CO2e',
      comparison: '🔋 2,200 phone charges',
      points: -5,
      bin: 'E-waste',
      binColor: '#f1c40f', // Yellow
      alternatives: ['Mechanical (repairable) keywords'],
      steps: [
        '1. MATERIAL: Mostly ABS plastic and circuit membranes.',
        '2. CLEAN: Remove keycaps to recycle plastic separately if possible.',
        '3. CABLE: Tie the cord neatly; do not cut it off.',
        '4. E-WASTE BIN: Do not place in standard home recycling.',
        '5. REUSE: USB keyboards work with almost any device.'
      ]
    },
    'mouse': {
      carbon: '12kg CO2e',
      comparison: '💡 300 days of an LED bulb',
      points: -5,
      bin: 'E-waste',
      binColor: '#f1c40f', // Yellow
      alternatives: ['Wired mice (no batteries needed)'],
      steps: [
        '1. BATTERIES: Remove AA/AAA batteries immediately.',
        '2. WIRELESS DONGLE: Don\'t forget the USB receiver inside.',
        '3. CIRCUIT BOARD: Contains small amounts of copper/gold.',
        '4. E-WASTE: Drop off at electronics store bins.',
        '5. REPAIR: Clicking issues are often fixable with cleaning.'
      ]
    },
    'tv': {
      carbon: '800kg+ CO2e',
      comparison: '✈️ 1 multi-hour flight',
      points: -50,
      bin: 'Hazardous / E-waste',
      binColor: '#e74c3c', // Red
      alternatives: ['Projectors (less e-waste)'],
      steps: [
        '1. HEAVY METALS: Older screens may contain mercury.',
        '2. SAFETY: Panel glass can shatter; do not break.',
        '3. TRANSPORT: Requires bulk pickup or dedicated drop-off.',
        '4. PLASTIC BACK: The casing is recyclable, but only by pros.',
        '5. ENERGY: New TVs use less power; recycle old plasmas.'
      ]
    },
    'remote': {
      carbon: '2kg CO2e',
      comparison: '🚗 Driving 8 km',
      points: -10,
      bin: 'E-waste',
      binColor: '#f1c40f', // Yellow
      alternatives: ['Rechargeable batteries', 'Phone app remotes'],
      steps: [
        '1. BATTERY CHECK: Leaking batteries are toxic—handle with gloves.',
        '2. RUBBER BUTTONS: Remove keypad if separating materials.',
        '3. PLASTIC SHELL: Often recyclable rigid plastic.',
        '4. BOARD: The green circuit board goes to E-waste.',
        '5. FIX: Clean battery contacts with vinegar before tossing.'
      ]
    },
    'bottle': {
      carbon: '82g CO2e',
      comparison: '📱 Charging phone 10 times',
      points: 10,
      bin: 'Dry Waste / Plastic',
      binColor: '#3498db', // Blue
      alternatives: ['Steel bottle', 'Glass bottle', 'Refillable thermos'],
      steps: [
        '1. MATERIAL ID: Check for #1 (PET) or #2 (HDPE) symbol.',
        '2. RINSE: Food residue contaminates the whole batch.',
        '3. CRUSH: Flatten to save space in the truck.',
        '4. CAP ON/OFF: Check local rules (caps are different plastic).',
        '5. LABEL: Plastic shrink wraps often need removal.'
      ]
    },
    'cup': {
      carbon: '110g CO2e (Ceramic)',
      comparison: '☕ Making 4 cups of coffee',
      points: -5,
      bin: 'Dry Waste',
      binColor: '#3498db', // Blue
      alternatives: ['Bring your own mug', 'Edible cups'],
      steps: [
        '1. PAPER CUPS: Lined with plastic—usually NOT recyclable.',
        '2. PLASTIC CUPS: Check number (#5 PP is common).',
        '3. CERAMIC: If broken, it goes in GENERAL TRASH (not glass bin).',
        '4. STYROFOAM: Avoid entirely; extremely hard to recycle.',
        '5. LID: Plastic lids are usually recyclable; separate them.'
      ]
    },
    'wine glass': {
      carbon: '250g CO2e',
      comparison: '💡 10 days of an LED bulb',
      points: -5,
      bin: 'Hazardous / Trash',
      binColor: '#e74c3c', // Red
      alternatives: ['Stainless steel wine tumblers', 'Thick durable glass'],
      steps: [
        '1. WARNING: Different melting point than bottle glass.',
        '2. NO RECYCLE BIN: Do NOT mix with jar/bottle recycling.',
        '3. DONATE: Thrift stores take intact stemware.',
        '4. BROKEN?: Wrap in newspaper and trash safely.',
        '5. LEAD: Crystal glasses contain lead; hazardous waste.'
      ]
    },
    'bowl': {
      carbon: 'Varies',
      comparison: '🍲 Varies by material',
      points: 5,
      bin: 'Dry Waste',
      binColor: '#3498db', // Blue
      alternatives: ['Wooden bowls', 'Stainless steel'],
      steps: [
        '1. CERAMIC/CLAY: Landfill only (cannot be melted down).',
        '2. GLASS (PYREX): Heat-treated; do NOT recycle with bottles.',
        '3. PLASTIC: Wash grease completely before recycling.',
        '4. METAL: Stainless steel bowls are 100% recyclable.',
        '5. REPURPOSE: Use as planter or organizer if chipped.'
      ]
    },
    'book': {
      carbon: '1.2kg CO2e',
      comparison: '🚗 Driving 5 km',
      points: 15,
      bin: 'Dry Waste / Paper',
      binColor: '#3498db', // Blue
      alternatives: ['E-readers', 'Library cards'],
      steps: [
        '1. PAPER TYPE: White paper is high value; glossy is lower.',
        '2. GLUE/SPINE: Hardcovers must have covers ripped off.',
        '3. MOISTURE: Wet books cannot be recycled (mold risk).',
        '4. DONATE: Little Free Libraries are better than recycling.',
        '5. AGE: Very old yellowed paper has short fibers (compost).'
      ]
    },
    'scissors': {
      carbon: '15g CO2e',
      comparison: '📱 Charging phone 2 times',
      points: 10,
      bin: 'Dry Waste / Metal',
      binColor: '#3498db', // Blue
      alternatives: ['All-metal scissors (last a lifetime)'],
      steps: [
        '1. COMPOSITE: Metal blades + Plastic handles = Nightmare.',
        '2. SEPARATE: Unscrew pivot screw to separate materials.',
        '3. METAL BIN: Blades go to scrap metal recycling.',
        '4. SHARP: Tape blades if putting in mixed recycling.',
        '5. MAINTAIN: Sharpening extends life indefinitely.'
      ]
    }
  };
  
// Game state logic
function getEcoScore() {
    return parseInt(localStorage.getItem('ecoScore')) || 0;
}

function updateEcoScore(points) {
    let current = getEcoScore() + points;
    localStorage.setItem('ecoScore', current);
    return current;
}
