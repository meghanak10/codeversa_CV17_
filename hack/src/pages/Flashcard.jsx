import React, { useState } from 'react';

// Flashcard data for all languages, including image URLs
const flashcardData = {
  kannada: [
    {
      word: "ಹಣ್ಣು",
      pronunciation: "haṇṇu",
      meaningEnglish: "Fruit",
      usageNative: "ನಾನು ಹಣ್ಣು ತಿನುತ್ತೇನೆ.",
      usageEnglish: "I eat a fruit.",
      imageUrl: "https://www.diagnosisdiet.com/assets/images/6/fruit-og-z8vk4201s653efw.jpg"
    },
    {
      word: "ನೀರು",
      pronunciation: "nīru",
      meaningEnglish: "Water",
      usageNative: "ನನಗೆ ನೀರು ಬೇಕು.",
      usageEnglish: "I need water.",
      imageUrl: "https://www.sciencelearn.org.nz/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F117510%2F1722377075-water_full_size_landscape.jpg&w=3840&q=75&dpl=dpl_AfxfeGhAKBtN54CKb7HfffdzoRtT"
    },
    {
      word: "ಬಟ್ಟೆ",
      pronunciation: "baṭṭe",
      meaningEnglish: "Cloth",
      usageNative: "ಅವನು ಹೊಸ ಬಟ್ಟೆ ಧರಿಸಿದ್ದಾನೆ.",
      usageEnglish: "He wore new clothes.",
      imageUrl: "https://tiimg.tistatic.com/fp/1/008/323/light-texture-plain-white-cotton-cloth-44-inches-width-30-meter-long-993.jpg"
    },
    {
      word: "ಮನೆ",
      pronunciation: "mane",
      meaningEnglish: "House",
      usageNative: "ಇದು ನನ್ನ ಮನೆ.",
      usageEnglish: "This is my house.",
      imageUrl: "https://www.homestayadvisor.in/uploads/2/1/7/1/21711386/halli-mane-chikmagalur-23.jpg"
    },
    {
      word: "ಕಿತಾಪತ್ರಿಕೆ",
      pronunciation: "kitāpatrike",
      meaningEnglish: "Book",
      usageNative: "ನಾನು ಕಿತಾಪತ್ರಿಕೆ ಓದುತ್ತಿದ್ದೇನೆ.",
      usageEnglish: "I am reading a book.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg"
    },
    {
      word: "ಬೆಂಕಿ",
      pronunciation: "benki",
      meaningEnglish: "Fire",
      usageNative: "ಬೆಂಕಿಗೆ ಮುಟ್ಟಬೇಡಿ.",
      usageEnglish: "Don’t touch the fire.",
      imageUrl: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/1/9/6/519196_gettyimages1270593514_590256.jpg"
    },
    {
      word: "ಮೇಜು",
      pronunciation: "mēju",
      meaningEnglish: "Table",
      usageNative: "ಮೇಜಿನ ಮೇಲೆ ಪುಸ್ತಕವಿದೆ.",
      usageEnglish: "There is a book on the table.",
      imageUrl: "https://images.woodenstreet.de/image/cache/data/coffee-table/elevate-sheesham-wood-glass-top-coffee-table-with-storage-walnut-finish/walnut-finish/new-logo/1-810x702.jpg"
    },
    {
      word: "ಹಾಸಿಗೆ",
      pronunciation: "hāsige",
      meaningEnglish: "Bed",
      usageNative: "ನಾನು ಹಾಸಿಗೆಯಲ್ಲಿ ಮಲಗಿದ್ದೇನೆ.",
      usageEnglish: "I am sleeping on the bed.",
      imageUrl: "https://sajosamaan.com/wp-content/uploads/2024/03/1711265633579.jpg"
    },
    {
      word: "ಪುಷ್ಪ",
      pronunciation: "puṣhpa",
      meaningEnglish: "Flower",
      usageNative: "ಈ ಪುಷ್ಪ ಸುಂದರವಾಗಿದೆ.",
      usageEnglish: "This flower is beautiful.",
      imageUrl: "https://w0.peakpx.com/wallpaper/177/566/HD-wallpaper-pink-flowers-beautiful-flowers-nature-sun.jpg"
    },
    {
      word: "ಸೂರ್ಯ",
      pronunciation: "sūrya",
      meaningEnglish: "Sun",
      usageNative: "ಸೂರ್ಯ ಬೆಳಗುತ್ತಿದೆ.",
      usageEnglish: "The sun is shining.",
      imageUrl: "https://static.toiimg.com/thumb/msid-99620278,imgsize-16106,width-400,resizemode-4/99620278.jpg"
    },
    {
      word: "ಚಂದ್ರ",
      pronunciation: "chandra",
      meaningEnglish: "Moon",
      usageNative: "ಚಂದ್ರನು ಸಂಪೂರ್ಣವಾಗಿದೆ.",
      usageEnglish: "The moon is full.",
      imageUrl: "https://helios-i.mashable.com/imagery/articles/02rndok9SluWfTq7XtMTs1A/hero-image.fill.size_1248x702.v1753706089.jpg"
    },
    {
      word: "ಆನೆ",
      pronunciation: "āane",
      meaningEnglish: "Elephant",
      usageNative: "ಆನೆ ದೊಡ್ಡದು.",
      usageEnglish: "The elephant is big.",
      imageUrl: "https://a-z-animals.com/media/2019/11/Elephant-male-1024x535.jpg"
    },
    {
      word: "ನಾಯಿ",
      pronunciation: "nāyi",
      meaningEnglish: "Dog",
      usageNative: "ನಮ್ಮ ಮನೆಯ ನಾಯಿ ಪ್ರೀತಿ ತುಂಬಿದೆ.",
      usageEnglish: "Our dog is very loving.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    },
    {
      word: "ಬೆಕ್ಕು",
      pronunciation: "bekku",
      meaningEnglish: "Cat",
      usageNative: "ಬೆಕ್ಕು ಹತ್ತಿರ ಬರುತ್ತದೆ.",
      usageEnglish: "The cat comes close.",
      imageUrl: "https://www.diamondpet.com/wp-content/uploads/2022/02/close-up-white-cat-with-blue-eyes-121224.jpg"
    },
    {
      word: "ಮರ",
      pronunciation: "mara",
      meaningEnglish: "Tree",
      usageNative: "ಈ ಮರ ಹಳೆಯದು.",
      usageEnglish: "This tree is old.",
      imageUrl: "https://www.adobe.com/uk/creativecloud/illustration/discover/media_16294017e160283065e15583487483528c38eb2e4.png?width=750&format=png&optimize=medium"
    },
    {
      word: "ಎಲೆ",
      pronunciation: "ele",
      meaningEnglish: "Leaf",
      usageNative: "ಎಲೆ ಹಸಿರುಬಣ್ಣದದು.",
      usageEnglish: "The leaf is green.",
      imageUrl: "https://t4.ftcdn.net/jpg/00/37/42/89/360_F_37428956_qHvAy9EIzMqAh15rYR31ZQevyzFGbBuH.jpg"
    },
    {
      word: "ಅಕ್ಕಿ",
      pronunciation: "akki",
      meaningEnglish: "Rice",
      usageNative: "ನಾನು ಅಕ್ಕಿ ತಿನುತ್ತೇನೆ.",
      usageEnglish: "I eat rice.",
      imageUrl: "https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307"
    },
    {
      word: "ಹಾಲು",
      pronunciation: "hālu",
      meaningEnglish: "Milk",
      usageNative: "ಹಾಲು ಬಿಸಿ ಇದೆ.",
      usageEnglish: "The milk is hot.",
      imageUrl: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg"
    },
    {
      word: "ಬಾದಾಮಿ",
      pronunciation: "bādāmi",
      meaningEnglish: "Almond",
      usageNative: "ನಾನು ಪ್ರತಿದಿನ ಬಾದಾಮಿ ತಿನುತ್ತೇನೆ.",
      usageEnglish: "I eat almonds every day.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi-00OW514UxMK9qq2Pdhz7IcFxXBwH8lRQ&s"
    },
    {
      word: "ತಟ್ಟೆ",
      pronunciation: "taṭṭe",
      meaningEnglish: "Plate",
      usageNative: "ತಟ್ಟೆಯಲ್ಲಿ ಊಟ ಇಡಲಾಗಿದೆ.",
      usageEnglish: "Food is served on the plate.",
      imageUrl: "https://vigneto.in/cdn/shop/products/Dinner_Kitchen09391-Copy.jpg?v=1672661533&width=1946"
    },
    {
      word: "ಕೈ",
      pronunciation: "kai",
      meaningEnglish: "Hand",
      usageNative: "ನನ್ನ ಕೈಗೆ ಗಾಯವಾಗಿದೆ.",
      usageEnglish: "My hand is injured.",
      imageUrl: "https://fusionmedical.com.sg/wp-content/uploads/2021/07/FM-hand-banner-1-1015x1024.jpg"
    },
    {
      word: "ಕಣ್ಣು",
      pronunciation: "kaṇṇu",
      meaningEnglish: "Eye",
      usageNative: "ನನ್ನ ಕಣ್ಣು ನೋವು ಕೊಡುತ್ತಿದೆ.",
      usageEnglish: "My eye is hurting.",
      imageUrl: "https://glaucoma.org/wp-content/uploads/2024/01/amazing-eye-close-up_900-640x420.jpg"
    },
    {
      word: "ಆಟಿಕೆ",
      pronunciation: "āṭike",
      meaningEnglish: "Toy",
      usageNative: "ನನ್ನ ಅಣ್ಣನಿಗೆ ಹೊಸ ಆಟಿಕೆ ಬೇಕು.",
      usageEnglish: "My brother wants a new toy.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGzzG5LzcHNGjCKOg2gACv_8tT0ZN2lbcbw&s"
    },
    {
      word: "ಸಕ್ಕರೆ",
      pronunciation: "sakkare",
      meaningEnglish: "Sugar",
      usageNative: "ಕಾಫಿಯಲ್ಲಿ ಹೆಚ್ಚು ಸಕ್ಕರೆ ಹಾಕಬೇಡಿ.",
      usageEnglish: "Don’t add too much sugar to the coffee.",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/8/BZ/CI/MF/55062602/refined-sugar-500x500.jpg"
    },
    {
      word: "ಗಡಿಯಾರ",
      pronunciation: "gaḍiyāra",
      meaningEnglish: "Clock/Watch",
      usageNative: "ಗಡಿಯಾರ ಎಂಟು ಗಂಟೆ ತೋರಿಸುತ್ತಿದೆ.",
      usageEnglish: "The clock shows eight o’clock.",
      imageUrl: "https://png.pngtree.com/recommend-works/png-clipart/20250427/ourmid/pngtree-a-wall-clock-with-a-black-hour-hand-pointing-to-the-png-image_16129655.png"
    },
    {
      word: "ಬಾಗಿಲು",
      pronunciation: "bāgilu",
      meaningEnglish: "Door",
      usageNative: "ಬಾಗಿಲು ಮುಚ್ಚಿ.",
      usageEnglish: "Close the door.",
      imageUrl: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
    },
  ],
  telugu: [
    {
      word: "పండు",
      pronunciation: "paṇḍu",
      meaningEnglish: "Fruit",
      usageNative: "నేను పండు తింటాను.",
      usageEnglish: "I eat a fruit.",
      imageUrl: "https://www.diagnosisdiet.com/assets/images/6/fruit-og-z8vk4201s653efw.jpg"
    },
    {
      word: "నీరు",
      pronunciation: "nīru",
      meaningEnglish: "Water",
      usageNative: "నాకు నీరు కావాలి.",
      usageEnglish: "I need water.",
      imageUrl: "https://www.sciencelearn.org.nz/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F117510%2F1722377075-water_full_size_landscape.jpg&w=3840&q=75&dpl=dpl_AfxfeGhAKBtN54CKb7HfffdzoRtT"
    },
    {
      word: "బట్ట",
      pronunciation: "baṭṭa",
      meaningEnglish: "Cloth",
      usageNative: "అతను కొత్త బట్ట వేసుకున్నాడు.",
      usageEnglish: "He wore new clothes.",
      imageUrl: "https://tiimg.tistatic.com/fp/1/008/323/light-texture-plain-white-cotton-cloth-44-inches-width-30-meter-long-993.jpg"
    },
    {
      word: "ఇల్లు",
      pronunciation: "illu",
      meaningEnglish: "House",
      usageNative: "ఇది నా ఇల్లు.",
      usageEnglish: "This is my house.",
      imageUrl: "https://www.homestayadvisor.in/uploads/2/1/7/1/21711386/halli-mane-chikmagalur-23.jpg"
    },
    {
      word: "పుస్తకం",
      pronunciation: "pustakaṁ",
      meaningEnglish: "Book",
      usageNative: "నేను పుస్తకం చదువుతున్నాను.",
      usageEnglish: "I am reading a book.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg"
    },
    {
      word: "నిప్పు",
      pronunciation: "nippu",
      meaningEnglish: "Fire",
      usageNative: "నిప్పును తాకవద్దు.",
      usageEnglish: "Don’t touch the fire.",
      imageUrl: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/1/9/6/519196_gettyimages1270593514_590256.jpg"
    },
    {
      word: "బల్ల",
      pronunciation: "balla",
      meaningEnglish: "Table",
      usageNative: "బల్ల మీద పుస్తకం ఉంది.",
      usageEnglish: "There is a book on the table.",
      imageUrl: "https://images.woodenstreet.de/image/cache/data/coffee-table/elevate-sheesham-wood-glass-top-coffee-table-with-storage-walnut-finish/walnut-finish/new-logo/1-810x702.jpg"
    },
    {
      word: "మంచం",
      pronunciation: "man̄caṁ",
      meaningEnglish: "Bed",
      usageNative: "నేను మంచం మీద నిద్రపోతున్నాను.",
      usageEnglish: "I am sleeping on the bed.",
      imageUrl: "https://sajosamaan.com/wp-content/uploads/2024/03/1711265633579.jpg"
    },
    {
      word: "పుష్పం",
      pronunciation: "puṣpaṁ",
      meaningEnglish: "Flower",
      usageNative: "ఈ పుష్పం అందంగా ఉంది.",
      usageEnglish: "This flower is beautiful.",
      imageUrl: "https://w0.peakpx.com/wallpaper/177/566/HD-wallpaper-pink-flowers-beautiful-flowers-nature-sun.jpg"
    },
    {
      word: "సూర్యుడు",
      pronunciation: "sūryuḍu",
      meaningEnglish: "Sun",
      usageNative: "సూర్యుడు ప్రకాశిస్తున్నాడు.",
      usageEnglish: "The sun is shining.",
      imageUrl: "https://static.toiimg.com/thumb/msid-99620278,imgsize-16106,width=400,resizemode-4/99620278.jpg"
    },
    {
      word: "చంద్రుడు",
      pronunciation: "candruḍu",
      meaningEnglish: "Moon",
      usageNative: "చంద్రుడు పూర్ణంగా ఉన్నాడు.",
      usageEnglish: "The moon is full.",
      imageUrl: "https://helios-i.mashable.com/imagery/articles/02rndok9SluWfTq7XtMTs1A/hero-image.fill.size_1248x702.v1753706089.jpg"
    },
    {
      word: "ఏనుగు",
      pronunciation: "ēnugu",
      meaningEnglish: "Elephant",
      usageNative: "ఏనుగు పెద్దది.",
      usageEnglish: "The elephant is big.",
      imageUrl: "https://a-z-animals.com/media/2019/11/Elephant-male-1024x535.jpg"
    },
    {
      word: "కుక్క",
      pronunciation: "kukka",
      meaningEnglish: "Dog",
      usageNative: "మా కుక్క చాలా ప్రేమగా ఉంటుంది.",
      usageEnglish: "Our dog is very loving.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    },
    {
      word: "పిల్లి",
      pronunciation: "pilli",
      meaningEnglish: "Cat",
      usageNative: "పిల్లి దగ్గరికి వస్తుంది.",
      usageEnglish: "The cat comes close.",
      imageUrl: "https://www.diamondpet.com/wp-content/uploads/2022/02/close-up-white-cat-with-blue-eyes-121224.jpg"
    },
    {
      word: "చెట్టు",
      pronunciation: "ceṭṭu",
      meaningEnglish: "Tree",
      usageNative: "ఈ చెట్టు పాతది.",
      usageEnglish: "This tree is old.",
      imageUrl: "https://www.adobe.com/uk/creativecloud/illustration/discover/media_16294017e160283065e15583487483528c38eb2e4.png?width=750&format=png&optimize=medium"
    },
    {
      word: "ఆకు",
      pronunciation: "āku",
      meaningEnglish: "Leaf",
      usageNative: "ఆ ఆకు పచ్చగా ఉంది.",
      usageEnglish: "The leaf is green.",
      imageUrl: "https://t4.ftcdn.net/jpg/00/37/42/89/360_F_37428956_qHvAy9EIzMqAh15rYR31ZQevyzFGbBuH.jpg"
    },
    {
      word: "బియ్యం",
      pronunciation: "biyyam",
      meaningEnglish: "Rice",
      usageNative: "నేను బియ్యం తింటాను.",
      usageEnglish: "I eat rice.",
      imageUrl: "https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307"
    },
    {
      word: "పాలు",
      pronunciation: "pālu",
      meaningEnglish: "Milk",
      usageNative: "పాలు వేడి‌గా ఉన్నాయి.",
      usageEnglish: "The milk is hot.",
      imageUrl: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg"
    },
    {
      word: "బాదం",
      pronunciation: "bādām",
      meaningEnglish: "Almond",
      usageNative: "నేను ప్రతిరోజు బాదం తింటాను.",
      usageEnglish: "I eat almonds every day.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi-00OW514UxMK9qq2Pdhz7IcFxXBwH8lRQ&s"
    },
    {
      word: "తాళం", // Note: User provided "తాళం" for plate, which means lock. "పళ్ళెం" or "పళ్ళెం" is more common for plate. Sticking to user's input.
      pronunciation: "tālaṁ",
      meaningEnglish: "Plate",
      usageNative: "తాళంలో భోజనం పెట్టారు.",
      usageEnglish: "Food is served on the plate.",
      imageUrl: "https://vigneto.in/cdn/shop/products/Dinner_Kitchen09391-Copy.jpg?v=1672661533&width=1946"
    },
    {
      word: "చేయి",
      pronunciation: "cēyi",
      meaningEnglish: "Hand",
      usageNative: "నా చేతికి గాయం అయ్యింది.",
      usageEnglish: "My hand is injured.",
      imageUrl: "https://fusionmedical.com.sg/wp-content/uploads/2021/07/FM-hand-banner-1-1015x1024.jpg"
    },
    {
      word: "కన్ను",
      pronunciation: "kannu",
      meaningEnglish: "Eye",
      usageNative: "నా కన్ను నొప్పిగా ఉంది.",
      usageEnglish: "My eye is hurting.",
      imageUrl: "https://glaucoma.org/wp-content/uploads/2024/01/amazing-eye-close-up_900-640x420.jpg"
    },
    {
      word: "బొమ్మ",
      pronunciation: "bomma",
      meaningEnglish: "Toy",
      usageNative: "నా తమ్ముడికి కొత్త బొమ్మ కావాలి.",
      usageEnglish: "My brother wants a new toy.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGzzG5LzcHNGjCKOg2gACv_8tT0ZN2lbcbw&s"
    },
    {
      word: "చక్కెర",
      pronunciation: "cakkera",
      meaningEnglish: "Sugar",
      usageNative: "కాఫీకి ఎక్కువ చక్కెర వేయకండి.",
      usageEnglish: "Don’t add too much sugar to the coffee.",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/8/BZ/CI/MF/55062602/refined-sugar-500x500.jpg"
    },
    {
      word: "గడియారం",
      pronunciation: "gaḍiyāraṁ",
      meaningEnglish: "Clock/Watch",
      usageNative: "గడియారం ఎనిమిది గంటలు చూపిస్తోంది.",
      usageEnglish: "The clock shows eight o’clock.",
      imageUrl: "https://png.pngtree.com/recommend-works/png-clipart/20250427/ourmid/pngtree-a-wall-clock-with-a-black-hour-hand-pointing-to-the-png-image_16129655.png"
    },
    {
      word: "తలుపు",
      pronunciation: "talupu",
      meaningEnglish: "Door",
      usageNative: "తలుపు మూసి వేయండి.",
      usageEnglish: "Close the door.",
      imageUrl: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
    },
  ],
  malayalam: [
    {
      word: "പഴം",
      pronunciation: "paḻaṁ",
      meaningEnglish: "Fruit",
      usageNative: "ഞാൻ ഒരു പഴം തിന്നു.",
      usageEnglish: "I ate a fruit.",
      imageUrl: "https://www.diagnosisdiet.com/assets/images/6/fruit-og-z8vk4201s653efw.jpg"
    },
    {
      word: "വെള്ളം",
      pronunciation: "veḷḷaṁ",
      meaningEnglish: "Water",
      usageNative: "എനിക്ക് വെള്ളം വേണം.",
      usageEnglish: "I need water.",
      imageUrl: "https://www.sciencelearn.org.nz/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F117510%2F1722377075-water_full_size_landscape.jpg&w=3840&q=75&dpl=dpl_AfxfeGhAKBtN54CKb7HfffdzoRtT"
    },
    {
      word: "വസ്ത്രം",
      pronunciation: "vastraṁ",
      meaningEnglish: "Cloth",
      usageNative: "അവൻ പുതിയ വസ്ത്രം ധരിച്ചു.",
      usageEnglish: "He wore new clothes.",
      imageUrl: "https://tiimg.tistatic.com/fp/1/008/323/light-texture-plain-white-cotton-cloth-44-inches-width-30-meter-long-993.jpg"
    },
    {
      word: "വീട്",
      pronunciation: "vīṭu",
      meaningEnglish: "House",
      usageNative: "ഇത് എന്റെ വീട് ആണ്.",
      usageEnglish: "This is my house.",
      imageUrl: "https://www.homestayadvisor.in/uploads/2/1/7/1/21711386/halli-mane-chikmagalur-23.jpg"
    },
    {
      word: "പുസ്തകം",
      pronunciation: "pustakaṁ",
      meaningEnglish: "Book",
      usageNative: "ഞാൻ പുസ്തകം വായിക്കുന്നു.",
      usageEnglish: "I am reading a book.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg"
    },
    {
      word: "തീ",
      pronunciation: "tī",
      meaningEnglish: "Fire",
      usageNative: "തീ തൊടരുത്.",
      usageEnglish: "Don’t touch the fire.",
      imageUrl: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/1/9/6/519196_gettyimages1270593514_590256.jpg"
    },
    {
      word: "മേശ",
      pronunciation: "mēśa",
      meaningEnglish: "Table",
      usageNative: "മേശപ്പുറത്ത് പുസ്തകം ഉണ്ട്.",
      usageEnglish: "There is a book on the table.",
      imageUrl: "https://images.woodenstreet.de/image/cache/data/coffee-table/elevate-sheesham-wood-glass-top-coffee-table-with-storage-walnut-finish/walnut-finish/new-logo/1-810x702.jpg"
    },
    {
      word: "കിടക്ക",
      pronunciation: "kiṭakka",
      meaningEnglish: "Bed",
      usageNative: "ഞാൻ കിടക്കയിൽ ഉറങ്ങുന്നു.",
      usageEnglish: "I am sleeping on the bed.",
      imageUrl: "https://sajosamaan.com/wp-content/uploads/2024/03/1711265633579.jpg"
    },
    {
      word: "പുഷ്പം",
      pronunciation: "puṣpaṁ",
      meaningEnglish: "Flower",
      usageNative: "ഈ പുഷ്പം മനോഹരമാണ്.",
      usageEnglish: "This flower is beautiful.",
      imageUrl: "https://w0.peakpx.com/wallpaper/177/566/HD-wallpaper-pink-flowers-beautiful-flowers-nature-sun.jpg"
    },
    {
      word: "സൂര്യൻ",
      pronunciation: "sūryan",
      meaningEnglish: "Sun",
      usageNative: "സೂರ್ಯൻ പ്രകാശിക്കുന്നു.",
      usageEnglish: "The sun is shining.",
      imageUrl: "https://static.toiimg.com/thumb/msid-99620278,imgsize-16106,width=400,resizemode-4/99620278.jpg"
    },
    {
      word: "ചന്ദ്രൻ",
      pronunciation: "candran",
      meaningEnglish: "Moon",
      usageNative: "ചന്ദ്രൻ പൂർണ്ണമാണ്.",
      usageEnglish: "The moon is full.",
      imageUrl: "https://helios-i.mashable.com/imagery/articles/02rndok9SluWfTq7XtMTs1A/hero-image.fill.size_1248x702.v1753706089.jpg"
    },
    {
      word: "ആന",
      pronunciation: "āna",
      meaningEnglish: "Elephant",
      usageNative: "ആന വലുതാണ്.",
      usageEnglish: "The elephant is big.",
      imageUrl: "https://a-z-animals.com/media/2019/11/Elephant-male-1024x535.jpg"
    },
    {
      word: "നായ",
      pronunciation: "nāya",
      meaningEnglish: "Dog",
      usageNative: "നമ്മുടെ നായ വളരെ സ്നേഹമുള്ളതാണ്.",
      usageEnglish: "Our dog is very loving.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    },
    {
      word: "പൂച്ച",
      pronunciation: "pūcca",
      meaningEnglish: "Cat",
      usageNative: "പൂച്ച അടുത്തേക്ക് വരുന്നു.",
      usageEnglish: "The cat comes close.",
      imageUrl: "https://www.diamondpet.com/wp-content/uploads/2022/02/close-up-white-cat-with-blue-eyes-121224.jpg"
    },
    {
      word: "മരം",
      pronunciation: "maraṁ",
      meaningEnglish: "Tree",
      usageNative: "ഈ മരം പഴയതാണ്.",
      usageEnglish: "This tree is old.",
      imageUrl: "https://www.adobe.com/uk/creativecloud/illustration/discover/media_16294017e160283065e15583487483528c38eb2e4.png?width=750&format=png&optimize=medium"
    },
    {
      word: "ഇല",
      pronunciation: "ila",
      meaningEnglish: "Leaf",
      usageNative: "ഈ ഇല പച്ചയാണ്.",
      usageEnglish: "The leaf is green.",
      imageUrl: "https://t4.ftcdn.net/jpg/00/37/42/89/360_F_37428956_qHvAy9EIzMqAh15rYR31ZQevyzFGbBuH.jpg"
    },
    {
      word: "അರಿ",
      pronunciation: "ari",
      meaningEnglish: "Rice",
      usageNative: "ഞാൻ അരി കഴിക്കുന്നു.",
      usageEnglish: "I eat rice.",
      imageUrl: "https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307"
    },
    {
      word: "പാലു",
      pronunciation: "pālu",
      meaningEnglish: "Milk",
      usageNative: "പാലു ചൂടാണ്.",
      usageEnglish: "The milk is hot.",
      imageUrl: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg"
    },
    {
      word: "ബദാം",
      pronunciation: "badāṁ",
      meaningEnglish: "Almond",
      usageNative: "ഞാൻ ദിവസവും ബദാം കഴിക്കുന്നു.",
      usageEnglish: "I eat almonds every day.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSi-00OW514UxMK9qq2Pdhz7IcFxXBwH8lRQ&s"
    },
    {
      word: "തളിക",
      pronunciation: "taḷika",
      meaningEnglish: "Plate",
      usageNative: "തളികയിൽ ഭക്ഷണം വച്ചു.",
      usageEnglish: "Food is served on the plate.",
      imageUrl: "https://vigneto.in/cdn/shop/products/Dinner_Kitchen09391-Copy.jpg?v=1672661533&width=1946"
    },
    {
      word: "കൈ",
      pronunciation: "kai",
      meaningEnglish: "Hand",
      usageNative: "എന്റെ കൈക്ക് പരിക്കേറ്റു.",
      usageEnglish: "My hand is injured.",
      imageUrl: "https://fusionmedical.com.sg/wp-content/uploads/2021/07/FM-hand-banner-1-1015x1024.jpg"
    },
    {
      word: "കണ്ണ്",
      pronunciation: "kaṇṇu",
      meaningEnglish: "Eye",
      usageNative: "എന്റെ കണ്ണ് വേദനിക്കുന്നു.",
      usageEnglish: "My eye is hurting.",
      imageUrl: "https://glaucoma.org/wp-content/uploads/2024/01/amazing-eye-close-up_900-640x420.jpg"
    },
    {
      word: "കളിപ്പാട്ടം",
      pronunciation: "kaḷippaṭṭaṁ",
      meaningEnglish: "Toy",
      usageNative: "എന്റെ സഹോദരന് പുതിയ കളിപ്പാട്ടം വേണം.",
      usageEnglish: "My brother wants a new toy.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGzzG5LzcHNGjCKOg2gACv_8tT0ZN2lbcbw&s"
    },
    {
      word: "പഞ്ചസാര",
      pronunciation: "pañcasāra",
      meaningEnglish: "Sugar",
      usageNative: "കാപ്പിയിലേക്ക് അധികം പഞ്ചസാര ചേർക്കരുത്.",
      usageEnglish: "Don’t add too much sugar to the coffee.",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/8/BZ/CI/MF/55062602/refined-sugar-500x500.jpg"
    },
    {
      word: "ഗഡികാരം",
      pronunciation: "gaḍikāraṁ",
      meaningEnglish: "Clock/Watch",
      usageNative: "ഗഡികാരം എട്ട് മണി കാണിക്കുന്നു.",
      usageEnglish: "The clock shows eight o’clock.",
      imageUrl: "https://png.pngtree.com/recommend-works/png-clipart/20250427/ourmid/pngtree-a-wall-clock-with-a-black-hour-hand-pointing-to-the-png-image_16129655.png"
    },
    {
      word: "വാതിൽ",
      pronunciation: "vāt̠il",
      meaningEnglish: "Door",
      usageNative: "വാതിൽ അടയ്ക്കുക.",
      usageEnglish: "Close the door.",
      imageUrl: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
    },
  ],
  manipuri: [
    {
      word: "ꯄꯥꯝ",
      pronunciation: "pam",
      meaningEnglish: "Fruit",
      usageNative: "ꯑꯃꯁꯤ ꯄꯥꯝ ꯇꯧꯔꯤ.",
      usageEnglish: "I ate a fruit.",
      imageUrl: "https://www.diagnosisdiet.com/assets/images/6/fruit-og-z8vk4201s653efw.jpg"
    },
    {
      word: "ꯄꯨꯡ",
      pronunciation: "pung",
      meaningEnglish: "Water",
      usageNative: "ꯑꯃꯁꯤ ꯄꯨꯡ ꯇꯧꯔꯤ.",
      usageEnglish: "I need water.",
      imageUrl: "https://www.sciencelearn.org.nz/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F117510%2F1722377075-water_full_size_landscape.jpg&w=3840&q=75&dpl=dpl_AfxfeGhAKBtN54CKb7HfffdzoRtT"
    },
    {
      word: "ꯀꯥꯢꯁꯤ",
      pronunciation: "kai-shi",
      meaningEnglish: "Cloth",
      usageNative: "ꯑꯃꯁꯤ ꯀꯥꯢꯁꯤ ꯅꯧꯔꯥ ꯍꯣꯡꯆꯤ.",
      usageEnglish: "He wore new clothes.",
      imageUrl: "https://tiimg.tistatic.com/fp/1/008/323/light-texture-plain-white-cotton-cloth-44-inches-width-30-meter-long-993.jpg"
    },
    {
      word: "ꯍꯥꯏ",
      pronunciation: "hai",
      meaningEnglish: "House",
      usageNative: "ꯑꯃꯁꯤ ꯍꯥꯏ ꯍꯧꯖꯤ.",
      usageEnglish: "This is my house.",
      imageUrl: "https://www.homestayadvisor.in/uploads/2/1/7/1/21711386/halli-mane-chikmagalur-23.jpg"
    },
    {
      word: "ꯄꯨꯁ꯭ꯇꯛ",
      pronunciation: "pustak",
      meaningEnglish: "Book",
      usageNative: "ꯑꯃꯁꯤ ꯄꯨꯁ꯭ꯇꯛ ꯋꯥꯏꯖꯤ.",
      usageEnglish: "I am reading a book.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg"
    },
    {
      word: "ꯈꯤꯡ",
      pronunciation: "khing",
      meaningEnglish: "Fire",
      usageNative: "ꯈꯤꯡ ꯇꯧꯔꯨ ꯂꯩꯔꯤ.",
      usageEnglish: "Don’t touch the fire.",
      imageUrl: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/1/9/6/519196_gettyimages1270593514_590256.jpg"
    },
    {
      word: "ꯃꯦꯖꯤ",
      pronunciation: "meji",
      meaningEnglish: "Table",
      usageNative: "ꯃꯦꯖꯤ ꯑꯣꯏ ꯄꯨꯁ꯭ꯇꯛ ꯇꯧꯔꯤ.",
      usageEnglish: "There is a book on the table.",
      imageUrl: "https://images.woodenstreet.de/image/cache/data/coffee-table/elevate-sheesham-wood-glass-top-coffee-table-with-storage-walnut-finish/walnut-finish/new-logo/1-810x702.jpg"
    },
    {
      word: "ꯀꯤꯗꯤꯀꯥ",
      pronunciation: "kidika",
      meaningEnglish: "Bed",
      usageNative: "ꯑꯃꯁꯤ ꯀꯤꯗꯤꯀꯥ ꯋꯥꯡꯂꯤ.",
      usageEnglish: "I am sleeping on the bed.",
      imageUrl: "https://sajosamaan.com/wp-content/uploads/2024/03/1711265633579.jpg"
    },
    {
      word: "ꯄꯨꯁꯄ",
      pronunciation: "puspa",
      meaningEnglish: "Flower",
      usageNative: "ꯑꯃꯁꯤ ꯄꯨꯁꯄ ꯑꯥꯔꯥ ꯍꯣꯡꯆꯤ.",
      usageEnglish: "This flower is beautiful.",
      imageUrl: "https://w0.peakpx.com/wallpaper/177/566/HD-wallpaper-pink-flowers-beautiful-flowers-nature-sun.jpg"
    },
    {
      word: "ꯁꯨꯔꯌ",
      pronunciation: "surya",
      meaningEnglish: "Sun",
      usageNative: "ꯁꯨꯔꯌ ꯃꯥꯡ ꯃꯣꯡꯁꯤ.",
      usageEnglish: "The sun is shining.",
      imageUrl: "https://static.toiimg.com/thumb/msid-99620278,imgsize-16106,width=400,resizemode-4/99620278.jpg"
    },
    {
      word: "ꯆꯦꯟꯗ꯭ꯔꯟ",
      pronunciation: "chendra",
      meaningEnglish: "Moon",
      usageNative: "ꯆꯦꯟꯗ꯭ꯔꯟ ꯑꯥꯔꯥ ꯄꯨꯔ꯭ꯅꯤꯌꯥꯔꯤ.",
      usageEnglish: "The moon is full.",
      imageUrl: "https://helios-i.mashable.com/imagery/articles/02rndok9SluWfTq7XtMTs1A/hero-image.fill.size_1248x702.v1753706089.jpg"
    },
    {
      word: "ꯑꯥꯅ",
      pronunciation: "aan",
      meaningEnglish: "Elephant",
      usageNative: "ꯑꯥꯅ ꯑꯣꯏ ꯄꯨꯔꯥꯡ.",
      usageEnglish: "The elephant is big.",
      imageUrl: "https://a-z-animals.com/media/2019/11/Elephant-male-1024x535.jpg"
    },
    {
      word: "ꯅꯥꯏ",
      pronunciation: "nai",
      meaningEnglish: "Dog",
      usageNative: "ꯑꯃꯁꯤ ꯅꯥꯏ ꯑꯥꯔꯥ ꯍꯣꯡꯆꯤ.",
      usageEnglish: "Our dog is very loving.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    },
    {
      word: "ꯀꯦꯠ",
      pronunciation: "ket",
      meaningEnglish: "Cat",
      usageNative: "ꯀꯦꯠ ꯑꯍꯥꯟ ꯁꯤꯟꯕꯤ.",
      usageEnglish: "The cat comes close.",
      imageUrl: "https://www.diamondpet.com/wp-content/uploads/2022/02/close-up-white-cat-with-blue-eyes-121224.jpg"
    },
    {
      word: "ꯃꯔꯦꯝ",
      pronunciation: "marem",
      meaningEnglish: "Tree",
      usageNative: "ꯑꯃꯁꯤ ꯃꯔꯦꯝ ꯑꯣꯏ ꯄꯨꯔꯥꯡ.",
      usageEnglish: "This tree is old.",
      imageUrl: "https://www.adobe.com/uk/creativecloud/illustration/discover/media_16294017e160283065e15583487483528c38eb2e4.png?width=750&format=png&optimize=medium"
    },
    {
      word: "ꯏꯂꯦꯝ",
      pronunciation: "ilem",
      meaningEnglish: "Leaf",
      usageNative: "ꯏꯂꯦꯝ ꯑꯥꯔꯥ ꯄꯥꯆꯤ.",
      usageEnglish: "The leaf is green.",
      imageUrl: "https://t4.ftcdn.net/jpg/00/37/42/89/360_F_37428956_qHvAy9EIzMqAh15rYR31ZQevyzFGbBuH.jpg"
    },
    {
      word: "ꯑꯥꯔꯤ",
      pronunciation: "ari",
      meaningEnglish: "Rice",
      usageNative: "ꯑꯃꯁꯤ ꯑꯥꯔꯤ ꯇꯧꯔꯤ.",
      usageEnglish: "I eat rice.",
      imageUrl: "https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307"
    },
    {
      word: "ꯄꯥꯂ",
      pronunciation: "paal",
      meaningEnglish: "Milk",
      usageNative: "ꯄꯥꯂ ꯑꯣꯏ ꯆꯨꯗꯤ.",
      usageEnglish: "The milk is hot.",
      imageUrl: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg"
    },
    {
      word: "ꯁꯥꯛꯀꯦꯔꯦ",
      pronunciation: "sakkare",
      meaningEnglish: "Sugar",
      usageNative: "ꯀꯥꯐꯤꯌꯥ ꯁꯥꯛꯀꯦꯔꯦ ꯑꯣꯏ ꯍꯧꯔꯤ.",
      usageEnglish: "Don’t add too much sugar to the coffee.",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/8/BZ/CI/MF/55062602/refined-sugar-500x500.jpg"
    },
    {
      word: "ꯒꯗꯤꯌꯥꯔ",
      pronunciation: "gadiyaar",
      meaningEnglish: "Clock/Watch",
      usageNative: "ꯒꯗꯤꯌꯥꯔ ꯑꯣꯏ ꯑꯦꯠ ꯃꯅꯤ ꯆꯤꯟꯕꯤ.",
      usageEnglish: "The clock shows eight o’clock.",
      imageUrl: "https://png.pngtree.com/recommend-works/png-clipart/20250427/ourmid/pngtree-a-wall-clock-with-a-black-hour-hand-pointing-to-the-png-image_16129655.png"
    },
    {
      word: "ꯕꯥꯒꯤꯂꯨ",
      pronunciation: "bagilu",
      meaningEnglish: "Door",
      usageNative: "ꯕꯥꯒꯤꯂꯨ ꯑꯗꯤꯛ.",
      usageEnglish: "Close the door.",
      imageUrl: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
    },
    {
      word: "ꯀꯥꯏ",
      pronunciation: "kai",
      meaningEnglish: "Hand",
      usageNative: "ꯑꯃꯁꯤ ꯀꯥꯏ ꯑꯣꯏ ꯒꯥꯌꯥ ꯇꯧꯔꯤ.",
      usageEnglish: "My hand is injured.",
      imageUrl: "https://fusionmedical.com.sg/wp-content/uploads/2021/07/FM-hand-banner-1-1015x1024.jpg"
    },
    {
      word: "ꯇꯥꯠꯇꯦ",
      pronunciation: "tatte",
      meaningEnglish: "Plate",
      usageNative: "ꯇꯥꯠꯇꯦ ꯑꯣꯏ ꯎꯠꯇꯦ ꯇꯧꯔꯤ.",
      usageEnglish: "Food is served on the plate.",
      imageUrl: "https://vigneto.in/cdn/shop/products/Dinner_Kitchen09391-Copy.jpg?v=1672661533&width=1946"
    },
    {
      word: "ꯀꯟꯅꯨ",
      pronunciation: "kannu",
      meaningEnglish: "Eye",
      usageNative: "ꯑꯃꯁꯤ ꯀꯟꯅꯨ ꯅꯣꯏ ꯇꯧꯔꯤ.",
      usageEnglish: "My eye is hurting.",
      imageUrl: "https://glaucoma.org/wp-content/uploads/2024/01/amazing-eye-close-up_900-640x420.jpg"
    },
    {
      word: "ꯑꯥꯇꯤꯀꯦ",
      pronunciation: "aatike",
      meaningEnglish: "Toy",
      usageNative: "ꯑꯃꯁꯤ ꯑꯥꯟꯅꯥ ꯅꯧꯔꯥ ꯑꯥꯇꯤꯀꯦ ꯇꯧꯔꯤ.",
      usageEnglish: "My brother wants a new toy.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGzzG5LzcHNGjCKOg2gACv_8tT0ZN2lbcbw&s"
    },
  ],
};

// Main App component
const App = () => {
  // State to manage the currently selected language, defaulting to Kannada
  const [selectedLanguage, setSelectedLanguage] = useState('kannada');

  // Function to handle language button clicks
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Get the flashcards for the currently selected language
  const currentFlashcards = flashcardData[selectedLanguage] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-4 font-inter text-gray-800">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-800 drop-shadow-lg">
        Multilingual Flashcards
      </h1>

      {/* Language Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(flashcardData).map((langKey) => (
          <button
            key={langKey}
            onClick={() => handleLanguageChange(langKey)}
            // Apply different styles based on whether the button is selected
            className={`
              px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-xl transform hover:-translate-y-1
              ${selectedLanguage === langKey
                ? 'bg-purple-600 text-white ring-4 ring-purple-300'
                : 'bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800'
              }
            `}
          >
            {/* Capitalize the first letter for display */}
            {langKey.charAt(0).toUpperCase() + langKey.slice(1)}
          </button>
        ))}
      </div>

      {/* Flashcard Display Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentFlashcards.length > 0 ? (
          currentFlashcards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105
                         flex flex-col border border-gray-200"
            >
              {/* Flashcard Image */}
              <div className="w-full h-48 sm:h-56 overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={card.imageUrl}
                  alt={card.meaningEnglish}
                  className="w-full h-full object-cover"
                  // Fallback for broken images
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = `https://placehold.co/400x300/E0E0E0/808080?text=Image+Not+Found`;
                  }}
                />
              </div>

              {/* Flashcard Content - Now explicitly using flexbox for internal layout */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="flex flex-col gap-2"> {/* Added flex-col and gap for spacing */}
                  {/* Native Word */}
                  <h2 className="text-3xl font-bold text-purple-700">
                    {card.word}
                  </h2>
                  {/* Pronunciation */}
                  <p className="text-md text-gray-600 italic">
                    Pronunciation: {card.pronunciation}
                  </p>
                  {/* English Meaning */}
                  <p className="text-lg font-semibold text-gray-800">
                    Meaning: {card.meaningEnglish}
                  </p>
                  {/* Native Usage */}
                  <p className="text-base text-gray-700">
                    <span className="font-medium">Usage ({selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}):</span> {card.usageNative}
                  </p>
                  {/* English Usage */}
                  <p className="text-base text-gray-700">
                    <span className="font-medium">Usage (English):</span> {card.usageEnglish}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Message if no flashcards are available for the selected language
          <p className="col-span-full text-center text-xl text-gray-600 mt-10">
            No flashcards available for {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
