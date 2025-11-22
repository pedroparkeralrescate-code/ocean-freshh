import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Mail } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'crustaceans' | 'sharks' | 'fish';
  image: string;
  description: string;
  specifications: string[];
  origin: string;
}

const products: Product[] = [
  // CRUSTÁCEOS
  {
    id: 'langosta-mora',
    name: 'Langosta mora',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
    description: 'Palinurus mauritanicus - Frozen in 2kg boxes',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'langosta-real',
    name: 'Langosta real',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&q=80',
    description: 'Palinurus regius - Premium royal lobster',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'camaron-rosado',
    name: 'Camarón rosado sureño',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80',
    description: 'Penaeus notialis - Southern pink shrimp',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'camaron-langostino',
    name: 'Camarón langostino español',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1633108344888-e1a3a1e5c1d3?w=400&q=80',
    description: 'Palinurus kerathurus - Spanish prawn',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'gamba-altura',
    name: 'Gamba de altura',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1599682477398-5e61a8e2f4c7?w=400&q=80',
    description: 'Parapenaeus longirostris - Deep-water rose shrimp',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'gamba-listada',
    name: 'Gamba listada',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80',
    description: 'Aristeus varidens - Striped red shrimp',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'camaron-flecha',
    name: 'Camarón flecha',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
    description: 'Plesionika heterocarpus - Arrow shrimp',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'gerion-guinea',
    name: 'Gerión de guinea',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400&q=80',
    description: 'Chaceon maritae - Guinea crab',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'paramola',
    name: 'Paramola',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1608208597979-66723e48b9d7?w=400&q=80',
    description: 'Paromola cuvieri - Deep-sea crab',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'calapa-real',
    name: 'Calapa real',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Calappa granulata - Box crab',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'centolla-europea',
    name: 'Centolla europea',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=400&q=80',
    description: 'Maja squinado - European spider crab',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'cigarra',
    name: 'Cigarra',
    category: 'crustaceans',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=80',
    description: 'Scyllandes latus - Slipper lobster',
    specifications: ['Frozen in 2kg boxes', 'Grouped in 10-20kg containers', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },

  // TIBURONES Y RAYAS
  {
    id: 'raya-latigo',
    name: 'Raya látigo común',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
    description: 'Dasyatis pastinaca - Common stingray',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'chucho-marmolado',
    name: 'Chucho marmolado',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400&q=80',
    description: 'Dasyatis marmorata - Marbled stingray',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'raja-altura',
    name: 'Raja de altura',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&q=80',
    description: 'Zanobatus schoenleinii - Deep-water ray',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'raya-mosaica',
    name: 'Raya mosaica',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Raja undulata - Undulate ray',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'raya-espejos',
    name: 'Raya de espejos',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Raja miraletus - Brown ray',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'chucho-vaca',
    name: 'Chucho vaca',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=400&q=80',
    description: 'Pteromylaeus bovinus - Bull ray',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'raya-mariposa',
    name: 'Raya mariposa',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
    description: 'Gymnura altavela - Butterfly ray',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'guitarra-comun',
    name: 'Guitarra común',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80',
    description: 'Rhinobatos rhinobatos - Common guitarfish',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'tremolina',
    name: 'Tremolina',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400&q=80',
    description: 'Torpedo torpedo - Common torpedo',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'musola',
    name: 'Musola',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400&q=80',
    description: 'Mustelus mustelus - Smooth-hound',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'cornuda-comun',
    name: 'Cornuda común',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400&q=80',
    description: 'Sphyrna lewini - Scalloped hammerhead',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'quelvacho',
    name: 'Quelvacho',
    category: 'sharks',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400&q=80',
    description: 'Centrophorus granulosus - Gulper shark',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },

  // PECES
  {
    id: 'rufo-imperial',
    name: 'Rufo imperial',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Schedophilus ovalis - Imperial blackfish',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'salmonete-barbudo',
    name: 'Salmonete barbudo',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=80',
    description: 'Pseudupeneus prayensis - West African goatfish',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'corvina-casava',
    name: 'Corvina casava',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80',
    description: 'Pseudotolithus senegalensis - Cassava croaker',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'catemo-africano',
    name: 'Catemo africano',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Drepane africana - African sicklefish',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'ronco-mestizo',
    name: 'Ronco mestizo',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Pomadasys incisus - Bastard grunt',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'brotula-barbas',
    name: 'Brótula de barbas',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
    description: 'Brotulas barbata - Bearded brotula',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'lija-aspera',
    name: 'Lija áspera',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Stephanolepis hispidus - Planehead filefish',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'barbudo-africano',
    name: 'Barbudo enero africano',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&q=80',
    description: 'Galeoides decadactylus - Lesser African threadfin',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'spotted-fin-rockfish',
    name: 'Spotted-fin rockfish',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Scorpaena stephanica - Spotted-fin rockfish',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'paz-san-pedro',
    name: 'Paz de San Pedro',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Zeus faber - John Dory',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'perro',
    name: 'Perro',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Psettodes belcheri - Spottail spiny turbot',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'rata',
    name: 'Rata',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Uranoscopus polli - Stargazer',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'lenguado-senegalensis',
    name: 'Lenguado senegalensis',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80',
    description: 'Solea senegalensis - Senegalese sole',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'lengua-canarias',
    name: 'Lengua de canarias',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Cynoglossus canariensis - Canary tonguesole',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'lenguado-guinea',
    name: 'Lenguado de guinea',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Synaptura lusitanica - Portuguese sole',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'bagre-bocalisa',
    name: 'Bagre bocalisa',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Carlarius heudelotii - Smoothmouth sea catfish',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'rape-negro',
    name: 'Rape negro',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
    description: 'Lophius budegassa - Blackbellied angler',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'morena-negra',
    name: 'Morena negra',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Muraena helena - Mediterranean moray',
    specifications: ['Whole and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'mero-moreno',
    name: 'Mero moreno',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Epinephelus marginatus - Dusky grouper',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'cherna-ley',
    name: 'Cherna de ley',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Epinephelus aeneus - White grouper',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'chacarona-canarias',
    name: 'Chacarona de Canarias',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Dentex canariensis - Canary dentex',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'cachucho',
    name: 'Cachucho',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80',
    description: 'Dentex macrophthalmus - Large-eye dentex',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'sergo-marroqui',
    name: 'Sergo marroquí',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Diplodus sargus - White seabream',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'sargo-mojarra',
    name: 'Sargo mojarra',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Diplodus vulgaris - Common two-banded seabream',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'pargo-semola',
    name: 'Pargo sémola',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Pagrus auriga - Redbanded seabream',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'burro-chidero',
    name: 'Burro chidero',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80',
    description: 'Plectorhinchus mediterraneus - Rubberlip grunt',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'corvina-regius',
    name: 'Corvina',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Argyrosomus regius - Meagre',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'breca-chata',
    name: 'Breca chata',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Pagellus bellottii - Red pandora',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'baila',
    name: 'Baila',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Dicentrarchus punctatus - Spotted seabass',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'verrugato-canarias',
    name: 'Verrugato de canarias',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80',
    description: 'Umbrina canariensis - Canary drum',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'hurta',
    name: 'Hurta',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Pagrus caeruleostictus - Bluespotted seabream',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'merluza-senegal',
    name: 'Merluza del senegal',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80',
    description: 'Merluccius senegalensis - Senegalese hake',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'merluza-benguela',
    name: 'Merluza de Benguela',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
    description: 'Merluccius polli - Benguela hake',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'marbre',
    name: 'Marbré',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Lithognathus mormyrus - Sand steenbras',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'sargo-picudo',
    name: 'Sargo picudo',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&q=80',
    description: 'Brama Brama - Atlantic pomfret',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  },
  {
    id: 'cobia',
    name: 'Cobia',
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    description: 'Rachycentron canadum - Cobia',
    specifications: ['Gutted and frozen', '10-20kg boxes', 'ONISPA Certified'],
    origin: 'North Atlantic Mauritania'
  }
];

export function ProductsSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'crustaceans', name: t('products.crustaceans') },
    { id: 'sharks', name: t('products.sharks') },
    { id: 'fish', name: t('products.fish') }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-thin text-gray-900 mb-6 leading-tight">
              {t('products.title')}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in-up-delay">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full font-light transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id 
                    ? "bg-black text-white hover:bg-gray-800" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up-delay-2 group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden border-0 shadow-lg rounded-3xl">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-white/90 text-gray-800 hover:bg-white rounded-full px-4 py-2 font-light">
                          {product.origin}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    <CardTitle className="text-2xl mb-3 text-gray-900 font-light">
                      {product.name}
                    </CardTitle>
                    <p className="text-gray-600 mb-6 font-light leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Specifications:</h4>
                      <ul className="text-gray-600 space-y-2 font-light">
                        {product.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-8 pt-0 flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full font-light border-gray-300 hover:bg-gray-50">
                      <Eye className="h-4 w-4 mr-2" />
                      {t('products.viewDetails')}
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-black hover:bg-gray-800 text-white rounded-full font-light"
                      onClick={scrollToContact}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {t('products.requestSample')}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}