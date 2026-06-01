import { Droplets, Wind, Zap, Box, Radio, Sun } from 'lucide-react'

export interface ProductSpecRow {
  capacity: string
  voltage: string
  dimensions: string
  weight?: string
}

export interface SpecColumn {
  key: string
  label: string
  unit?: string
}

export interface DetailedSpecRow {
  [key: string]: string | number | null | undefined
}

export interface DetailedSpecTable {
  columns: SpecColumn[]
  rows: DetailedSpecRow[]
  note?: string
}

export interface Product {
  id: string
  icon: React.ElementType
  title: string
  shortDescription: string
  fullDescription: string
  standardSizes: string[]
  image: string
  specs: {
    voltage: string
    capacity: string
    frequency: string
    cooling: string
    standards: string
  }
  features: string[]
  specTable?: ProductSpecRow[]
  detailedSpecTable?: DetailedSpecTable
}

export const products: Product[] = [
  {
    id: 'oil-immersed-transformer',
    icon: Droplets,
    title: 'Oil-Immersed Transformers',
    shortDescription: 'High-efficiency oil-cooled transformers for industrial applications and power distribution networks.',
    fullDescription: 'Oil immersed transformers are widely used in industrial plants, utility networks, power distribution systems and renewable energy projects. The mineral oil provides excellent insulation and cooling properties.',
    standardSizes: ['100kVA', '250kVA', '500kVA', '1000kVA', '2500kVA', '5000kVA', '10000kVA'],
    image: '/oil-immersed-transformer.jpg.jpg',
    specs: {
      voltage: '6kV – 11kV',
      capacity: '30kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC 60076',
    },
    features: [
      'High overload capacity',
      'Low noise operation',
      'Long service life',
      'Outdoor installation suitable',
      'Wide temperature range',
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: 'Capacity', unit: 'kVA' },
        { key: 'hv_kv', label: 'HV', unit: 'kV' },
        { key: 'lv_kv', label: 'LV', unit: 'kV' },
        { key: 'connection', label: 'Connection' },
        { key: 'no_load_loss_w', label: 'No-Load Loss', unit: 'W' },
        { key: 'load_loss_w', label: 'Load Loss', unit: 'W' },
        { key: 'no_load_current_pct', label: 'I₀', unit: '%' },
        { key: 'impedance_pct', label: 'Uk', unit: '%' },
        { key: 'noise_db', label: 'Noise', unit: 'dB' },
        { key: 'size_mm', label: 'Dimensions', unit: 'mm' },
        { key: 'weight_kg', label: 'Weight', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 30, hv_kv: 6, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 80, load_loss_w: '630/600', no_load_current_pct: 0.5, impedance_pct: 4.0, noise_db: 43, size_mm: '830×650×950', weight_kg: 380 },
        { capacity_kva: 50, hv_kv: 6.3, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 100, load_loss_w: '910/870', no_load_current_pct: 0.5, impedance_pct: 4.0, noise_db: 43, size_mm: '850×680×960', weight_kg: 420 },
        { capacity_kva: 80, hv_kv: 6.6, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 130, load_loss_w: '1310/1250', no_load_current_pct: 0.45, impedance_pct: 4.0, noise_db: 44, size_mm: '870×700×1010', weight_kg: 520 },
        { capacity_kva: 100, hv_kv: 10, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 150, load_loss_w: '1580/1500', no_load_current_pct: 0.45, impedance_pct: 4.0, noise_db: 44, size_mm: '900×720×1020', weight_kg: 580 },
        { capacity_kva: 160, hv_kv: 10.5, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 200, load_loss_w: '2310/2200', no_load_current_pct: 0.4, impedance_pct: 4.0, noise_db: 46, size_mm: '1190×770×1090', weight_kg: 790 },
        { capacity_kva: 200, hv_kv: 11, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 240, load_loss_w: '2730/2600', no_load_current_pct: 0.4, impedance_pct: 4.0, noise_db: 47, size_mm: '1260×850×1120', weight_kg: 880 },
        { capacity_kva: 250, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 290, load_loss_w: '3200/3050', no_load_current_pct: 0.35, impedance_pct: 4.0, noise_db: 48, size_mm: '1300×860×1140', weight_kg: 1020 },
        { capacity_kva: 315, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 340, load_loss_w: '3830/3650', no_load_current_pct: 0.35, impedance_pct: 4.0, noise_db: 48, size_mm: '1370×910×1160', weight_kg: 1220 },
        { capacity_kva: 400, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 410, load_loss_w: '4520/4300', no_load_current_pct: 0.35, impedance_pct: 4.0, noise_db: 48, size_mm: '1400×920×1220', weight_kg: 1430 },
        { capacity_kva: 500, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 480, load_loss_w: '5410/5150', no_load_current_pct: 0.3, impedance_pct: 4.0, noise_db: 49, size_mm: '1530×1000×1280', weight_kg: 1730 },
        { capacity_kva: 630, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 570, load_loss_w: 6200, no_load_current_pct: 0.25, impedance_pct: 4.5, noise_db: 49, size_mm: '1610×1060×1320', weight_kg: 2100 },
        { capacity_kva: 800, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 700, load_loss_w: 7500, no_load_current_pct: 0.18, impedance_pct: 4.5, noise_db: 50, size_mm: '1670×1120×1380', weight_kg: 2480 },
        { capacity_kva: 1000, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 830, load_loss_w: 10300, no_load_current_pct: 0.17, impedance_pct: 4.5, noise_db: 50, size_mm: '1720×1160×1400', weight_kg: 2880 },
        { capacity_kva: 1250, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 970, load_loss_w: 12000, no_load_current_pct: 0.17, impedance_pct: 4.5, noise_db: 52, size_mm: '1770×1180×1500', weight_kg: 3500 },
        { capacity_kva: 1600, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1170, load_loss_w: 14500, no_load_current_pct: 0.16, impedance_pct: 4.5, noise_db: 52, size_mm: '1860×1240×1600', weight_kg: 4130 },
        { capacity_kva: 2000, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1360, load_loss_w: 18300, no_load_current_pct: 0.16, impedance_pct: 5.0, noise_db: 54, size_mm: '1950×1320×1720', weight_kg: 5420 },
        { capacity_kva: 2500, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1600, load_loss_w: 21200, no_load_current_pct: 0.15, impedance_pct: 5.0, noise_db: 54, size_mm: '2070×1400×1800', weight_kg: 6500 },
      ],
      note: 'S13 Series. HV options: 6 / 6.3 / 6.6 / 10 / 10.5 / 11 kV. Custom voltage ratios available on request.',
    },
  },
  {
    id: 'dry-type-transformer',
    icon: Wind,
    title: 'Dry-Type Transformers',
    shortDescription: 'Environmentally friendly air-cooled transformers for indoor installations with high fire safety.',
    fullDescription: 'Dry type transformers use air as the cooling medium, eliminating the need for oil. They are ideal for indoor applications in commercial buildings, hospitals, and data centers.',
    standardSizes: ['125kVA', '250kVA', '500kVA', '1000kVA', '1600kVA', '2500kVA'],
    image: '/dry-type-transformer.jpg.png',
    specs: {
      voltage: '6kV – 11kV',
      capacity: '125kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'AN / AF',
      standards: 'IEC 60076-11',
    },
    features: [
      'No fire hazard',
      'Environmentally friendly',
      'Low maintenance',
      'Indoor installation suitable',
      'Self-extinguishing insulation',
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: 'Capacity', unit: 'kVA' },
        { key: 'hv_kv', label: 'HV', unit: 'kV' },
        { key: 'connection', label: 'Connection' },
        { key: 'no_load_loss_scb12_w', label: 'P₀ SCB12', unit: 'W' },
        { key: 'no_load_loss_scb13_w', label: 'P₀ SCB13', unit: 'W' },
        { key: 'load_loss_scb12_w', label: 'Pk SCB12', unit: 'W' },
        { key: 'load_loss_scb13_w', label: 'Pk SCB13', unit: 'W' },
        { key: 'no_load_current_pct', label: 'I₀', unit: '%' },
        { key: 'impedance_pct', label: 'Uk', unit: '%' },
        { key: 'noise_db', label: 'Noise', unit: 'dB' },
        { key: 'body_size_mm', label: 'Body Size', unit: 'mm' },
        { key: 'body_weight_kg', label: 'Body Wt.', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 125, hv_kv: 6, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 375, no_load_loss_scb13_w: 335, load_loss_scb12_w: 1850, load_loss_scb13_w: 1660, no_load_current_pct: 1.3, impedance_pct: 4, noise_db: 58, body_size_mm: '920×610×1120', body_weight_kg: 685 },
        { capacity_kva: 160, hv_kv: 6.3, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 430, no_load_loss_scb13_w: 385, load_loss_scb12_w: 2130, load_loss_scb13_w: 1910, no_load_current_pct: 1.3, impedance_pct: 4, noise_db: 58, body_size_mm: '950×610×1120', body_weight_kg: 735 },
        { capacity_kva: 200, hv_kv: 6.6, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 495, no_load_loss_scb13_w: 445, load_loss_scb12_w: 2530, load_loss_scb13_w: 2270, no_load_current_pct: 1.1, impedance_pct: 4, noise_db: 58, body_size_mm: '990×720×1150', body_weight_kg: 820 },
        { capacity_kva: 250, hv_kv: 10, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 575, no_load_loss_scb13_w: 515, load_loss_scb12_w: 2760, load_loss_scb13_w: 2480, no_load_current_pct: 1.1, impedance_pct: 4, noise_db: 58, body_size_mm: '1030×720×1180', body_weight_kg: 960 },
        { capacity_kva: 315, hv_kv: 10.5, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 705, no_load_loss_scb13_w: 635, load_loss_scb12_w: 3470, load_loss_scb13_w: 3120, no_load_current_pct: 1.0, impedance_pct: 4, noise_db: 60, body_size_mm: '1050×720×1210', body_weight_kg: 1080 },
        { capacity_kva: 400, hv_kv: 11, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 785, no_load_loss_scb13_w: 705, load_loss_scb12_w: 3990, load_loss_scb13_w: 3590, no_load_current_pct: 1.0, impedance_pct: 4, noise_db: 60, body_size_mm: '1060×720×1270', body_weight_kg: 1330 },
        { capacity_kva: 500, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 930, no_load_loss_scb13_w: 835, load_loss_scb12_w: 4880, load_loss_scb13_w: 4390, no_load_current_pct: 1.0, impedance_pct: 4, noise_db: 62, body_size_mm: '1110×880×1340', body_weight_kg: 1480 },
        { capacity_kva: 630, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1040, no_load_loss_scb13_w: 935, load_loss_scb12_w: 5960, load_loss_scb13_w: 5360, no_load_current_pct: 0.85, impedance_pct: 6, noise_db: 62, body_size_mm: '1240×880×1300', body_weight_kg: 1530 },
        { capacity_kva: 800, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1210, no_load_loss_scb13_w: 1090, load_loss_scb12_w: 6960, load_loss_scb13_w: 6260, no_load_current_pct: 0.85, impedance_pct: 6, noise_db: 64, body_size_mm: '1320×880×1350', body_weight_kg: 1840 },
        { capacity_kva: 1000, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1410, no_load_loss_scb13_w: 1270, load_loss_scb12_w: 8130, load_loss_scb13_w: 7310, no_load_current_pct: 0.85, impedance_pct: 6, noise_db: 64, body_size_mm: '1360×880×1460', body_weight_kg: 2320 },
        { capacity_kva: 1250, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1670, no_load_loss_scb13_w: 1500, load_loss_scb12_w: 9690, load_loss_scb13_w: 8720, no_load_current_pct: 0.85, impedance_pct: 6, noise_db: 65, body_size_mm: '1430×880×1520', body_weight_kg: 2530 },
        { capacity_kva: 1600, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 1960, no_load_loss_scb13_w: 1760, load_loss_scb12_w: 11700, load_loss_scb13_w: 10500, no_load_current_pct: 0.85, impedance_pct: 6, noise_db: 66, body_size_mm: '1470×1130×1690', body_weight_kg: 3010 },
        { capacity_kva: 2000, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 2440, no_load_loss_scb13_w: 2190, load_loss_scb12_w: 14400, load_loss_scb13_w: 13000, no_load_current_pct: 0.7, impedance_pct: 6, noise_db: 66, body_size_mm: '1510×1130×1770', body_weight_kg: 3540 },
        { capacity_kva: 2500, hv_kv: null, connection: 'Dyn11/Yyn0', no_load_loss_scb12_w: 2880, no_load_loss_scb13_w: 2590, load_loss_scb12_w: 17100, load_loss_scb13_w: 15400, no_load_current_pct: 0.7, impedance_pct: 6, noise_db: 71, body_size_mm: '1560×1130×1900', body_weight_kg: 4190 },
      ],
      note: 'SCB12/SCB13 Series. HV options: 6 / 6.3 / 6.6 / 10 / 10.5 / 11 kV. LV: 0.4 kV. Enclosure (IP20) available as option.',
    },
  },
  {
    id: 'distribution-transformer',
    icon: Box,
    title: 'Distribution Transformers',
    shortDescription: 'Reliable transformers for utility power distribution networks and smart grid applications.',
    fullDescription: 'Distribution transformers are designed for utility power distribution networks. They are commonly used in residential areas, commercial developments, and urban distribution systems.',
    standardSizes: ['50kVA', '100kVA', '160kVA', '250kVA', '400kVA', '630kVA', '1000kVA'],
    image: '/distribution-transformer.jpg.png',
    specs: {
      voltage: '6kV – 11kV',
      capacity: '30kVA – 2,500kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC 60076',
    },
    features: [
      'Reliable performance',
      'Low energy loss',
      'Long operational life',
      'Easy maintenance',
      'Wide deployment range',
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: 'Capacity', unit: 'kVA' },
        { key: 'hv_kv', label: 'HV', unit: 'kV' },
        { key: 'lv_kv', label: 'LV', unit: 'kV' },
        { key: 'connection', label: 'Connection' },
        { key: 'no_load_loss_w', label: 'No-Load Loss', unit: 'W' },
        { key: 'load_loss_w', label: 'Load Loss', unit: 'W' },
        { key: 'no_load_current_pct', label: 'I₀', unit: '%' },
        { key: 'impedance_pct', label: 'Uk', unit: '%' },
        { key: 'noise_db', label: 'Noise', unit: 'dB' },
        { key: 'size_mm', label: 'Dimensions', unit: 'mm' },
        { key: 'weight_kg', label: 'Weight', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 30, hv_kv: 6, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 80, load_loss_w: '630/600', no_load_current_pct: 0.5, impedance_pct: 4.0, noise_db: 43, size_mm: '830×650×950', weight_kg: 380 },
        { capacity_kva: 50, hv_kv: 6.3, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 100, load_loss_w: '910/870', no_load_current_pct: 0.5, impedance_pct: 4.0, noise_db: 43, size_mm: '850×680×960', weight_kg: 420 },
        { capacity_kva: 80, hv_kv: 6.6, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 130, load_loss_w: '1310/1250', no_load_current_pct: 0.45, impedance_pct: 4.0, noise_db: 44, size_mm: '870×700×1010', weight_kg: 520 },
        { capacity_kva: 100, hv_kv: 10, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 150, load_loss_w: '1580/1500', no_load_current_pct: 0.45, impedance_pct: 4.0, noise_db: 44, size_mm: '900×720×1020', weight_kg: 580 },
        { capacity_kva: 160, hv_kv: 10.5, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 200, load_loss_w: '2310/2200', no_load_current_pct: 0.4, impedance_pct: 4.0, noise_db: 46, size_mm: '1190×770×1090', weight_kg: 790 },
        { capacity_kva: 200, hv_kv: 11, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 240, load_loss_w: '2730/2600', no_load_current_pct: 0.4, impedance_pct: 4.0, noise_db: 47, size_mm: '1260×850×1120', weight_kg: 880 },
        { capacity_kva: 250, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 290, load_loss_w: '3200/3050', no_load_current_pct: 0.35, impedance_pct: 4.0, noise_db: 48, size_mm: '1300×860×1140', weight_kg: 1020 },
        { capacity_kva: 315, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 340, load_loss_w: '3830/3650', no_load_current_pct: 0.35, impedance_pct: 4.0, noise_db: 48, size_mm: '1370×910×1160', weight_kg: 1220 },
        { capacity_kva: 400, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 410, load_loss_w: '4520/4300', no_load_current_pct: 0.35, impedance_pct: 4.0, noise_db: 48, size_mm: '1400×920×1220', weight_kg: 1430 },
        { capacity_kva: 500, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 480, load_loss_w: '5410/5150', no_load_current_pct: 0.3, impedance_pct: 4.0, noise_db: 49, size_mm: '1530×1000×1280', weight_kg: 1730 },
        { capacity_kva: 630, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 570, load_loss_w: 6200, no_load_current_pct: 0.25, impedance_pct: 4.5, noise_db: 49, size_mm: '1610×1060×1320', weight_kg: 2100 },
        { capacity_kva: 800, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 700, load_loss_w: 7500, no_load_current_pct: 0.18, impedance_pct: 4.5, noise_db: 50, size_mm: '1670×1120×1380', weight_kg: 2480 },
        { capacity_kva: 1000, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 830, load_loss_w: 10300, no_load_current_pct: 0.17, impedance_pct: 4.5, noise_db: 50, size_mm: '1720×1160×1400', weight_kg: 2880 },
        { capacity_kva: 1250, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 970, load_loss_w: 12000, no_load_current_pct: 0.17, impedance_pct: 4.5, noise_db: 52, size_mm: '1770×1180×1500', weight_kg: 3500 },
        { capacity_kva: 1600, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1170, load_loss_w: 14500, no_load_current_pct: 0.16, impedance_pct: 4.5, noise_db: 52, size_mm: '1860×1240×1600', weight_kg: 4130 },
        { capacity_kva: 2000, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1360, load_loss_w: 18300, no_load_current_pct: 0.16, impedance_pct: 5.0, noise_db: 54, size_mm: '1950×1320×1720', weight_kg: 5420 },
        { capacity_kva: 2500, hv_kv: null, lv_kv: 0.4, connection: 'D,yn11/Y,yn0', no_load_loss_w: 1600, load_loss_w: 21200, no_load_current_pct: 0.15, impedance_pct: 5.0, noise_db: 54, size_mm: '2070×1400×1800', weight_kg: 6500 },
      ],
      note: 'S13 Series. HV options: 6 / 6.3 / 6.6 / 10 / 10.5 / 11 kV. Pole-mounted (50–500 kVA), pad-mounted, and substation types available.',
    },
  },
  {
    id: 'high-voltage-power-transformer',
    icon: Zap,
    title: 'High Voltage Power Transformers',
    shortDescription: 'Heavy-duty transformers for utility grids and large industrial power systems up to 220kV.',
    fullDescription: 'High voltage power transformers are designed for utility power grids, large industrial power systems, and major infrastructure developments. These transformers handle high voltage levels with superior performance and reliability.',
    standardSizes: ['6.3MVA', '10MVA', '16MVA', '25MVA', '40MVA', '63MVA'],
    image: '/高压电力变压器.jpg',
    specs: {
      voltage: '66kV – 220kV',
      capacity: '6.3MVA – 63MVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF / OFAF',
      standards: 'IEC 60076',
    },
    features: [
      'Superior voltage capacity',
      'Advanced cooling systems',
      'On-load tap changer',
      'Heavy-duty construction',
      'Extended service life',
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: 'Capacity', unit: 'kVA' },
        { key: 'hv_kv', label: 'HV', unit: 'kV' },
        { key: 'tap_range', label: 'Tap Range' },
        { key: 'mv_kv', label: 'MV', unit: 'kV' },
        { key: 'lv_kv', label: 'LV', unit: 'kV' },
        { key: 'connection', label: 'Connection' },
        { key: 'no_load_loss_kw', label: 'No-Load Loss', unit: 'kW' },
        { key: 'load_loss_kw', label: 'Load Loss', unit: 'kW' },
        { key: 'no_load_current_pct', label: 'I₀', unit: '%' },
      ],
      rows: [
        { capacity_kva: 6300, hv_kv: 110, tap_range: '±4×1.25%', mv_kv: 36, lv_kv: 6.3, connection: 'YNyn0d11', no_load_loss_kw: 7.7, load_loss_kw: 42, no_load_current_pct: 0.61 },
        { capacity_kva: 8000, hv_kv: 110, tap_range: '±6×1.25%', mv_kv: 37, lv_kv: 6.6, connection: 'YNyn0d11', no_load_loss_kw: 9.2, load_loss_kw: 50, no_load_current_pct: 0.61 },
        { capacity_kva: 10000, hv_kv: 110, tap_range: '±8×1.25%', mv_kv: 38.5, lv_kv: 10.5, connection: 'YNyn0d11', no_load_loss_kw: 10.9, load_loss_kw: 59, no_load_current_pct: 0.57 },
        { capacity_kva: 12500, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: 21, connection: 'YNyn0d11', no_load_loss_kw: 12.9, load_loss_kw: 70, no_load_current_pct: 0.57 },
        { capacity_kva: 16000, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: null, connection: 'YNyn0d11', no_load_loss_kw: 15.4, load_loss_kw: 86, no_load_current_pct: 0.54 },
        { capacity_kva: 20000, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: null, connection: 'YNyn0d11', no_load_loss_kw: 18.2, load_loss_kw: 101, no_load_current_pct: 0.54 },
        { capacity_kva: 25000, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: null, connection: 'YNyn0d11', no_load_loss_kw: 21.6, load_loss_kw: 120, no_load_current_pct: 0.5 },
        { capacity_kva: 31500, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: null, connection: 'YNyn0d11', no_load_loss_kw: 25.7, load_loss_kw: 142, no_load_current_pct: 0.5 },
        { capacity_kva: 40000, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: null, connection: 'YNyn0d11', no_load_loss_kw: 30.8, load_loss_kw: 170, no_load_current_pct: 0.46 },
        { capacity_kva: 50000, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: null, connection: 'YNyn0d11', no_load_loss_kw: 36.4, load_loss_kw: 202, no_load_current_pct: 0.46 },
        { capacity_kva: 63000, hv_kv: 110, tap_range: null, mv_kv: null, lv_kv: null, connection: 'YNyn0d11', no_load_loss_kw: 43.3, load_loss_kw: 243, no_load_current_pct: 0.42 },
      ],
      note: '110kV class. Voltage range: 66kV to 750kV AC, ±800kV DC. On-load tap changer standard. IEC certified.',
    },
  },
  {
    id: 'pole-mounted-transformer',
    icon: Radio,
    title: 'Pole Mounted Transformers',
    shortDescription: 'Compact single-phase and three-phase transformers designed for overhead line installation on utility poles.',
    fullDescription: 'Pole mounted transformers are compact, lightweight units designed for overhead distribution line applications. Widely used in rural electrification, last-mile power delivery, and utility distribution networks, they provide reliable step-down transformation from medium voltage to low voltage at the point of consumption.',
    standardSizes: ['5kVA', '10kVA', '25kVA', '50kVA', '75kVA', '100kVA', '167kVA'],
    image: '/杆式变压器.png',
    specs: {
      voltage: '7.2kV – 34.5kV',
      capacity: '5kVA – 167kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN',
      standards: 'IEC / ANSI',
    },
    features: [
      'Compact and lightweight',
      'Single-phase and three-phase options',
      'Suitable for rural electrification',
      'Overhead line installation',
      'Weather-resistant design',
    ],
    detailedSpecTable: {
      columns: [
        { key: 'capacity_kva', label: 'Capacity', unit: 'kVA' },
        { key: 'hv_v', label: 'HV', unit: 'V' },
        { key: 'lv_v', label: 'LV', unit: 'V' },
        { key: 'no_load_loss_w', label: 'No-Load Loss', unit: 'W' },
        { key: 'load_loss_w', label: 'Load Loss', unit: 'W' },
        { key: 'dims_mm', label: 'W×D×H', unit: 'mm' },
        { key: 'oil_weight_kg', label: 'Oil Wt.', unit: 'kg' },
        { key: 'total_weight_kg', label: 'Total Wt.', unit: 'kg' },
      ],
      rows: [
        { capacity_kva: 5, hv_v: '34500/19920/13800', lv_v: '120–240/240–480/347/600', no_load_loss_w: 19, load_loss_w: 75, dims_mm: '465×485×855', oil_weight_kg: 15, total_weight_kg: 92 },
        { capacity_kva: 10, hv_v: 7957, lv_v: 600, no_load_loss_w: 36, load_loss_w: 120, dims_mm: '500×525×885', oil_weight_kg: 22, total_weight_kg: 150 },
        { capacity_kva: 15, hv_v: 7957, lv_v: 600, no_load_loss_w: 50, load_loss_w: 195, dims_mm: '520×565×905', oil_weight_kg: 30, total_weight_kg: 210 },
        { capacity_kva: 25, hv_v: 13200, lv_v: 600, no_load_loss_w: 80, load_loss_w: 290, dims_mm: '560×590×935', oil_weight_kg: 45, total_weight_kg: 258 },
        { capacity_kva: 37.5, hv_v: 7620, lv_v: 600, no_load_loss_w: 105, load_loss_w: 360, dims_mm: '610×625×935', oil_weight_kg: 50, total_weight_kg: 340 },
        { capacity_kva: 50, hv_v: 12470, lv_v: 600, no_load_loss_w: 135, load_loss_w: 500, dims_mm: '635×675×1035', oil_weight_kg: 62, total_weight_kg: 395 },
        { capacity_kva: 75, hv_v: 7200, lv_v: 600, no_load_loss_w: 190, load_loss_w: 650, dims_mm: '745×840×1035', oil_weight_kg: 88, total_weight_kg: 480 },
        { capacity_kva: 100, hv_v: null, lv_v: null, no_load_loss_w: 210, load_loss_w: 850, dims_mm: '770×965×1135', oil_weight_kg: 94, total_weight_kg: 530 },
        { capacity_kva: 167, hv_v: null, lv_v: null, no_load_loss_w: 350, load_loss_w: 1410, dims_mm: '795×890×1335', oil_weight_kg: 138, total_weight_kg: 680 },
      ],
      note: 'Fully-sealed steel tank. Low-loss core. Copper windings standard (aluminum optional). Weather-resistant design. Efficiency ≥98%.',
    },
  },
  {
    id: 'renewable-energy-transformer',
    icon: Sun,
    title: 'Renewable Energy Transformers',
    shortDescription: 'Purpose-built step-up transformers for solar PV, wind power, and other renewable energy applications.',
    fullDescription: 'Renewable energy transformers are specially engineered for the demanding requirements of solar photovoltaic farms, wind power plants, and energy storage systems. Designed to handle variable load profiles and harmonic content typical of inverter-based generation, these transformers ensure efficient and reliable power conversion from generation to the grid.',
    standardSizes: ['1000kVA', '1250kVA', '1600kVA', '2500kVA', '3150kVA'],
    image: '/配电变压器 copy.png',
    specs: {
      voltage: '0.4kV / 10kV / 35kV',
      capacity: '1000kVA – 3,150kVA',
      frequency: '50Hz / 60Hz',
      cooling: 'ONAN / ONAF',
      standards: 'IEC 60076 / IEEE C57',
    },
    features: [
      'Optimized for inverter-based generation',
      'Low harmonic losses',
      'High overload capability',
      'Solar PV and wind compatible',
      'Suitable for energy storage systems',
    ],
    detailedSpecTable: {
      columns: [
        { key: 'label', label: 'Parameter' },
        { key: 'value', label: 'Specification' },
      ],
      rows: [
        { label: 'Capacity Options', value: '1000 / 1250 / 1600 / 2500 / 3150 kVA' },
        { label: 'Primary Voltage', value: '10 / 11 / 20 / 33 / 35 kV (or custom)' },
        { label: 'Secondary Voltage', value: 'Custom (application-specific)' },
        { label: 'Frequency', value: '50 Hz / 60 Hz' },
        { label: 'Vector Group', value: 'Dyn11 / Ynd11 / Dyn11yn11 / YNd11d11' },
        { label: 'Winding Material', value: 'Aluminum / Copper' },
        { label: 'Max. Altitude', value: '1,000 m (higher altitude on request)' },
        { label: 'Tank Material', value: 'Mild steel / 304 Stainless steel' },
        { label: 'Applications', value: 'Solar PV, Wind turbines, BESS, Grid Step-Up (GSU)' },
        { label: 'Voltage Range', value: '400 V to 220 kV' },
        { label: 'Certifications', value: 'IEC 60076 / IEEE C57' },
        { label: 'Color', value: 'ANSI 70 Light Grey / Munsell 7GY3.29/1.5 or custom' },
        { label: 'Custom Options', value: 'Non-standard ratios, extreme environment, compact design' },
      ],
      note: 'Custom specifications available. Optimized for variable load profiles and harmonic content typical of inverter-based systems.',
    },
  },
]

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.id === slug)
}
