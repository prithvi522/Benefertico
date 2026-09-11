
/* =========================================================
   NEW PRODUCT IMAGES
========================================================= */

import bene4040 from '../assets/Bene4040.jpeg';
import beneCa from '../assets/BeneCaChelatedCalcium-9Percent.jpeg';
import beneCal from '../assets/BeneCal.jpeg';
import beneCombi from '../assets/BeneCombiChealtedMixMicronutrient.jpeg';
import beneFe from '../assets/Bene-Fe.jpeg';
import brix353 from '../assets/Benefert_Brix-X-353.jpeg';
import fruitPk3130 from '../assets/Benefert_fruit-Pk.jpeg';
import stress505 from '../assets/Benefert_Stress505.jpeg';
import vigorK from '../assets/BenefertVigor-k.jpeg';
import beneMg from '../assets/BeneMgChelatedMagnesium-5Percent.jpeg';
import beneMn from '../assets/BeneMnChelatedManganese-10Percent.jpeg';
import benePhos from '../assets/BenePhos.jpeg';
import benePk from '../assets/Bene-PK.jpeg';
import beneSil from '../assets/BeneSil.jpeg';
import beneZinc from '../assets/BeneZnChelatedZinc-12-percent.jpeg';
import bloomPk from '../assets/Bloom-PK.jpeg';
import budMgZn from '../assets/Bud-MgZn.jpeg';
import fruitFinish from '../assets/Fruit-Finish.jpeg';
import fruitPk from '../assets/FruitPk.jpeg';
import nGrow from '../assets/N-Grow.jpeg';
import benePlusK from '../assets/Potassium_ThioSulphate.jpeg';
import growX255 from '../assets/Grow-x-255.jpeg';
import agri1 from '../assets/Agri1.jpg';
import agri2 from '../assets/Agri2.jpg';


/* =========================================================
   FILTER OPTIONS
========================================================= */

export const filterOptions = {
  categories: [
    'All Products',
    'Water Soluble Fertilizers',
    'Liquid Fertilizers',
    'Chelated Micronutrients',
    'Micronutrient Blends',
  ],

  cropTypes: [
    'All',
    'Vegetables',
    'Fruits',
    'Flowers',
    'Field Crops',
    'General Crops',
  ],

  applications: [
    'All',
    'Drip Irrigation',
    'Foliar Application',
  ],

  productTypes: [
    'All',
    'Water Soluble',
    'Liquid',
    'Chelated',
  ],
};




  /* =======================================================
     NEW PRODUCTS
  ======================================================= */
export const products = [

  {
    id: 16,
    name: 'BeneFert Bene4040',
    category: 'Water Soluble Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 00-40-40 + TE designed to support crop nutrition and development.',

    benefit:
      'Supports phosphorus and potassium nutrition for crop development.',

    benefits: [
      'NPK 00-40-40 + TE.',
      'Water soluble formulation.',
      'Supports crop nutrition.',
      'Suitable for different crop nutrition programs.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '2.5Kg',
    image: bene4040,
  },


  {
    id: 17,
    name: 'BeneCa',
    category: 'Chelated Micronutrients',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Chelated',

    description:
      'A chelated calcium formulation containing 9% calcium for efficient crop nutrition.',

    benefit:
      'Provides chelated calcium nutrition to crops.',

    benefits: [
      'Chelated Calcium.',
      '9% Calcium.',
      'Supports crop structure and growth.',
      'Designed for efficient nutrient delivery.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '500gm',
    image: beneCa,
  },


  {
    id: 18,
    name: 'BeneCal',
    category: 'Liquid Fertilizers',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Liquid',

    description:
      'A rapidly available calcium formulation designed for instant crop response.',

    benefit:
      'Provides rapidly available calcium nutrition.',

    benefits: [
      'Rapidly available calcium.',
      'Supports calcium nutrition.',
      'Supports crop growth and development.',
      'Suitable for crop nutrition programs.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '1000ml',
    image: beneCal,
  },


  {
    id: 19,
    name: 'BeneCombi',
    category: 'Micronutrient Blends',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Chelated',

    description:
      'A chelated micronutrient blend designed to provide comprehensive crop nutrition.',

    benefit:
      'Provides combined micronutrient support for crops.',

    benefits: [
      'Chelated micronutrient blend.',
      'Supports balanced crop nutrition.',
      'Supports efficient nutrient delivery.',
      'Suitable for different crop nutrition programs.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '500gm',
    image: beneCombi,
  },


  {
    id: 20,
    name: 'BENE-FE',
    category: 'Chelated Micronutrients',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Chelated',

    description:
      'A chelated ferrous formulation containing Fe-HEDP 17% for crop iron nutrition.',

    benefit:
      'Provides chelated iron nutrition to crops.',

    benefits: [
      'Chelated Ferrous as Fe-HEDP 17%.',
      'Supports iron nutrition.',
      'Supports healthy crop development.',
      'Designed for efficient nutrient availability.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '500gm',
    image: beneFe,
  },


  {
    id: 21,
    name: 'BeneFert Brix-X-353',
    category: 'Water Soluble Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 03-00-53 + TE designed to support crop quality and development.',

    benefit:
      'Supports crop quality and potassium nutrition.',

    benefits: [
      'NPK 03-00-53 + TE.',
      'Water soluble formulation.',
      'Supports crop quality.',
      'Supports crop development.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',
    image: brix353,
  },


  {
    id: 22,
    name: 'BeneFert Fruit-PK 3130',
    category: 'Water Soluble Fertilizers',
    cropType: 'Fruits',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 00-31-30 + TE formulated for fruit crop nutrition.',

    benefit:
      'Supports fruit development and crop nutrition.',

    benefits: [
      'NPK 00-31-30 + TE.',
      'Water soluble formulation.',
      'Supports fruit crop development.',
      'Supports balanced fruit nutrition.',
    ],

    cropSuitability: [
      'Fruits',
      'Vegetables',
      'Field Crops',
    ],

    packSize: '500gm',
    image: fruitPk3130,
  },


  {
    id: 23,
    name: 'BeneFert Stress505',
    category: 'Water Soluble Fertilizers',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Water Soluble',

    description:
      'A water-soluble NPK formulation with magnesium and trace elements designed for demanding crop conditions.',

    benefit:
      'Supports crop performance during stress conditions.',

    benefits: [
      'NPK 05-05-05 + 4% MgO + TE.',
      'Water soluble formulation.',
      'Supports crop performance.',
      'Suitable for demanding crop stages.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',
    image: stress505,
  },


  {
    id: 24,
    name: 'BeneFert Vigor-K',
    category: 'Water Soluble Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble NPK formulation with NPK 13-12-18 + TE designed for crop nutrition and development.',

    benefit:
      'Supports balanced crop nutrition and crop vigor.',

    benefits: [
      'NPK 13-12-18 + TE.',
      'Water soluble formulation.',
      'Supports balanced nutrition.',
      'Supports overall crop development.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',
    image: vigorK,
  },


  {
    id: 25,
    name: 'BeneMg',
    category: 'Chelated Micronutrients',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Chelated',

    description:
      'A chelated magnesium formulation containing 5% magnesium for crop nutrition.',

    benefit:
      'Provides chelated magnesium nutrition to crops.',

    benefits: [
      'Chelated Magnesium.',
      '5% Magnesium.',
      'Supports crop nutrition.',
      'Designed for efficient nutrient delivery.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '500gm',
    image: beneMg,
  },


  {
    id: 26,
    name: 'BeneMn',
    category: 'Chelated Micronutrients',
    cropType: 'General Crops',
    application: 'Foliar Application',
    productType: 'Chelated',

    description:
      'A chelated manganese formulation containing 10% manganese for crop nutrition.',

    benefit:
      'Provides chelated manganese nutrition to crops.',

    benefits: [
      'Chelated Manganese.',
      '10% Manganese.',
      'Supports crop nutrition.',
      'Designed for efficient nutrient delivery.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '500gm',
    image: beneMn,
  },


  {
    id: 27,
    name: 'BenePhos',
    category: 'Liquid Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Liquid',

    description:
      'A liquid calcium di-hydrogen phosphate formulation designed to provide crop phosphorus and calcium nutrition.',

    benefit:
      'Supports calcium and phosphorus nutrition.',

    benefits: [
      'Calcium Di-Hydrogen Phosphate.',
      'Liquid formulation.',
      'Supports crop nutrition.',
      'Supports crop growth and development.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '1000ml',
    image: benePhos,
  },


  {
    id: 28,
    name: 'BENE-PK',
    category: 'Water Soluble Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A potassium metaphosphate dimer formulation with NPK 00-40-40 for crop nutrition.',

    benefit:
      'Supports phosphorus and potassium nutrition.',

    benefits: [
      'Potassium Metaphosphate Dimer.',
      'NPK 00-40-40.',
      'Supports crop nutrition.',
      'Water soluble formulation.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Flowers',
      'Field Crops',
    ],

    packSize: '500gm',
    image: benePk,
  },


  {
    id: 29,
    name: 'BeneSil',
    category: 'Liquid Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Liquid',

    description:
      'A silicon-based crop nutrition formulation containing Orthosilicic Acid (OSA) 2.0% WSL.',

    benefit:
      'Supports stronger crop structure and performance.',

    benefits: [
      'Orthosilicic Acid (OSA) 2.0% WSL.',
      'Supports stronger crops.',
      'Supports crop structural development.',
      'Designed for crop nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '1000ml',
    image: beneSil,
  },


  {
    id: 30,
    name: 'BeneZinc',
    category: 'Liquid Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Liquid',

    description:
      'A liquid chelated zinc formulation using zinc glycinate for crop zinc nutrition.',

    benefit:
      'Provides chelated zinc nutrition with improved availability.',

    benefits: [
      'Chelated zinc as Zinc glycinate.',
      'Liquid formulation.',
      'Supports zinc nutrition.',
      'Supports crop performance.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '1000ml',
    image: beneZinc,
  },


  {
    id: 31,
    name: 'BeneFert Bloom-PK',
    category: 'Water Soluble Fertilizers',
    cropType: 'Flowers',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 00-44-29 + Fe designed to support flowering and crop nutrition.',

    benefit:
      'Supports flowering and reproductive crop development.',

    benefits: [
      'NPK 00-44-29 + Fe.',
      'Water soluble formulation.',
      'Supports flowering.',
      'Supports crop nutrition during reproductive stages.',
    ],

    cropSuitability: [
      'Flowers',
      'Fruits',
      'Vegetables',
    ],

    packSize: '2.5Kg',
    image: bloomPk,
  },


  {
    id: 32,
    name: 'BUD-MgZn',
    category: 'Micronutrient Blends',
    cropType: 'Flowers',
    application: 'Foliar Application',
    productType: 'Chelated',

    description:
      'A complete crop nutrition formulation combining magnesium and zinc for crop development.',

    benefit:
      'Supports complete crop nutrition with magnesium and zinc.',

    benefits: [
      'Magnesium (as Mg) 24%.',
      'Zinc (as Zn) 10%.',
      'Supports bud and crop development.',
      'Provides combined micronutrient support.',
    ],

    cropSuitability: [
      'Flowers',
      'Fruits',
      'Vegetables',
    ],

    packSize: '500gm',
    image: budMgZn,
  },


  /* =======================================================
     33. FRUIT-FINISH
     ======================================================= */

  {
    id: 33,
    name: 'BeneFert Fruit-Finish',
    category: 'Water Soluble Fertilizers',
    cropType: 'Fruits',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 00-35-65 + TE designed to support fruit finishing and crop quality.',

    benefit:
      'Supports fruit finishing and crop quality.',

    benefits: [
      'NPK 00-35-65 + TE.',
      'Water soluble formulation.',
      'Supports fruit finishing.',
      'Supports fruit quality and development.',
    ],

    cropSuitability: [
      'Fruits',
      'Vegetables',
    ],

    packSize: '2.5Kg',
    image: fruitFinish,
  },


  /* =======================================================
     34. FRUIT-PK
     ======================================================= */

  {
    id: 34,
    name: 'BeneFert Fruit-PK',
    category: 'Water Soluble Fertilizers',
    cropType: 'Fruits',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 00-48-47 + Fe designed for fruit crop nutrition and development.',

    benefit:
      'Supports fruit development and crop quality.',

    benefits: [
      'NPK 00-48-47 + Fe.',
      'Water soluble formulation.',
      'Supports fruit development.',
      'Supports crop quality.',
    ],

    cropSuitability: [
      'Fruits',
      'Vegetables',
    ],

    packSize: '2.5Kg',
    image: fruitPk,
  },


  /* =======================================================
     35. N-GROW
     ======================================================= */

  {
    id: 35,
    name: 'BeneFert N-Grow',
    category: 'Water Soluble Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 30-10-10 + TE designed to support vegetative crop growth.',

    benefit:
      'Supports vegetative growth and crop development.',

    benefits: [
      'NPK 30-10-10 + TE.',
      'Water soluble formulation.',
      'Supports vegetative growth.',
      'Supports balanced crop nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '2.5Kg',
    image: nGrow,
  },


  /* =======================================================
     36. BENE+K
     ======================================================= */

  {
    id: 36,
    name: 'Bene+K',
    category: 'Liquid Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Liquid',

    description:
      'A liquid potassium thiosulfate formulation designed to provide potassium and sulfur nutrition.',

    benefit:
      'Provides potassium and sulfur nutrition to crops.',

    benefits: [
      'Potassium Thiosulfate.',
      'Liquid formulation.',
      'Supports potassium nutrition.',
      'Supports crop development.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '1000ml',
    image: benePlusK,
  },


  /* =======================================================
     37. GROW-X-255
     ======================================================= */

  {
    id: 37,
    name: 'BeneFert Grow-X-255',
    category: 'Water Soluble Fertilizers',
    cropType: 'General Crops',
    application: 'Drip Irrigation',
    productType: 'Water Soluble',

    description:
      'A water-soluble fertilizer with NPK 25-05-10 + TE designed to support crop growth and development.',

    benefit:
      'Supports strong vegetative growth and crop development.',

    benefits: [
      'NPK 25-05-10 + TE.',
      'Water soluble formulation.',
      'Supports crop growth.',
      'Supports balanced crop nutrition.',
    ],

    cropSuitability: [
      'Vegetables',
      'Fruits',
      'Field Crops',
    ],

    packSize: '500gm',
    image: growX255,
  },

];


/* =========================================================
   LANDSCAPE / OTHER ASSETS
========================================================= */

export const landscapeAssets = {
  hero: agri2,
  story: agri1,
};
