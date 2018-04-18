const establishments = [
  {
    id: 1,
    name: "Machete Tequila + Tacos",
    address: "1730 Wynkoop St, Denver, CO 80202",
    long: "-104.999077",
    lat: "39.752944",
    phone: "(720)612-7698",
    website: "machetedenver.com",
    description:
      "Vibrant bar & grill focusing on tacos with creative fillings & an extensive menu of tequilas."
  },
  {
    id: 2,
    name: "La Loma A Mexican Kitchen",
    address: "1801 Broadway, Denver, CO 80202",
    long: "-104.987854",
    lat: "39.744905",
    phone: "(303)433-8300",
    website: "lalomamexican.com",
    description:
      "Family-run kitchen known for traditional Mexican meals, margaritas & an upscale-rustic atmosphere."
  },
  {
    id: 3,
    name: "Las Margs Tavern",
    address: "1521 N Marion St, Denver, CO 80218",
    long: "-104.972610",
    lat: "39.740531",
    phone: "(303)322-5219",
    website: "lasmargstavern.com",
    description:
      "Offering happy-hour deals, this relaxed gathering place offers a variety of tacos & margaritas."
  },
  {
    id: 4,
    name: "Mezcal",
    address: "3230 E Colfax Ave, Denver, CO 80206",
    long: "-104.948808",
    lat: "39.739936",
    phone: "(720)612-7698",
    website: "mezcalcolorado.com",
    description:
      "Homestyle Mexican eats, margaritas & a long tequila list in a high-energy dining room."
  },
  {
    id: 5,
    name: "Margs Taco Bistro",
    address: "1519 Wynkoop St, Denver, CO 80202",
    long: "-105.001692",
    lat: "39.751446",
    phone: "(303)534-6274",
    website: "margstacobistro.com",
    description:
      "Tacos take on global overtones at this hip, modern hangout, which also pours funky margaritas."
  },
  {
    id: 6,
    name: "Benny's Restaurant and Tequila Bar",
    address: "301 E 7th Ave, Denver, CO 80203",
    long: "-104.983221",
    lat: "39.727458",
    phone: "(303)894-0788",
    website: "bennysrestaurant.com",
    description:
      "Vibrant haunt with a year-round patio offering margaritas, smothered burritos & other Mexican eats."
  },
  {
    id: 7,
    name: "El Camino Community Tavern",
    address: "3628 W 32nd Ave, Denver, CO 80211",
    long: "-105.035400",
    lat: "39.762001",
    phone: "(720)889-7946",
    website: "elcaminotaern.com",
    description:
      "Mexican kitchen with artsy ambiance using area-sourced ingredients, known for happy hour & brunch."
  },
  {
    id: 8,
    name: "Los Chingones",
    address: "2463 Larimer St, Denver, CO 80205",
    long: "-104.986878",
    lat: "39.757570",
    phone: "(303)894-0788",
    website: "loschingonesmexican.com",
    description:
      "Bi-level Mexican eatery & lounge boasting a menu of innovative bites & a terrace with skyline views."
  },
  {
    id: 9,
    name: "Tacos Tequila Whiskey",
    address: "1514 York St, Denver, CO 80206",
    long: "-104.959621",
    lat: "39.740278",
    phone: "(720)475-1337",
    website: "tacostequilawhiskey.com",
    description:
      "Innovative street-style tacos (such as tongue & pork belly) & cocktails in a packed setting."
  },
  {
    id: 10,
    name: "Tacos Jalisco Mexican Food",
    address: "34309 W 38th Ave, Denver, CO 80212",
    long: "-105.068931",
    lat: "39.769372",
    phone: "(303)458-1437",
    website: "originaltacosjalisco.com",
    description:
      "Modest storefront offers wide variety of Mexican tacos, seafood & combos to pair with margaritas."
  },
  {
    id: 11,
    name: "Rio Grande Mexican Restaurant",
    address: "1525 Blake Street, Denver, CO",
    long: "-105.000087",
    lat: "39.750224",
    phone: "303-623-5432",
    website: "riograndemexican.com",
    description:
      "Vibrant venue where south-of-the-border eats are matched with famously strong margaritas."
  },
  {
    id: 12,
    name: "Lola Coastal Mexican",
    address: "1575 Boulder Street, Denver, CO",
    long: "-105.010906",
    lat: "39.759230",
    phone: "720-570-8686",
    website: "loladenver.com",
    description:
      "Highbrow Mexican cuisine & imaginative drinks fuel the bustling scene at this cantina with a patio."
  },
  {
    id: 13,
    name: "D'Corazon Mexican Restaurant",
    address: "1530 Blake Street, Denver, CO",
    long: "-104.999539",
    lat: "39.749902",
    phone: "720-904-8226",
    website: "places.singleplatform.com",
    description:
      "Busy & easygoing outpost for Mexican comfort food such as carnitas paired with potent margaritas."
  },
  {
    id: 14,
    name: "Comida at The Source",
    address: "3350 Brighton Blvd #105, Denver, CO",
    long: "-104.979758",
    lat: "39.768611",
    phone: "303-296-2747",
    website: "places.singleplatform.com",
    description:
      "Sit-down extension of a popular food truck featuring Mexican street eats & creative margaritas."
  },
  {
    id: 15,
    name: "Tamayo",
    address: "1400 Larimer Street, Denver, CO",
    long: "-104.999460",
    lat: "39.747245",
    phone: "720-946-1433",
    website: "eattamayo.com",
    description:
      "Innovative Mexican plates come out of the kitchen of this chic spot with a vast rooftop deck."
  },
  {
    id: 16,
    name: "Agave Taco Bar",
    address: "2217 E Mississippi Avenue, Denver, CO",
    long: "-104.961273",
    lat: "39.696709",
    phone: "303-425-6225",
    website: "agavetacobar.com",
    description:
      "Rustic-chic cantina with a patio serving Mexican plates with a twist, margaritas & a weekend brunch."
  },
  {
    id: 17,
    name: "Dos Santos Taqueria de Mexico",
    address: "1475 E 17th Avenue, Denver, CO",
    long: "-104.969174",
    lat: "39.743431",
    phone: "303-386-3509",
    website: "dossantosdenver.com",
    description:
      "Innovative Mexican fare, beer & craft cocktails served in industrial, wood-accented digs."
  },
  {
    id: 18,
    name: "El Jefe Denver",
    address: "2450 W 44th Avenue, Denver, CO",
    long: "-105.017138",
    lat: "39.776415",
    phone: "720-389-7615",
    website: "opentable.com",
    description:
      "Stylish, coastal-inspired Mexican eatery serving up gourmet seafood, tacos, margaritas & more."
  },
  {
    id: 19,
    name: "Otra Vez Cantina",
    address: "610 16th Street, Denver, CO",
    long: "-104.991784",
    lat: "39.744653",
    phone: "303-226-1567",
    website: "otravezcantina.com",
    description:
      "Upscale-casual Mexican eatery serving tacos, mole & more, with a bar showcasing agave spirits."
  }
];
    
    module.exports = establishments;
