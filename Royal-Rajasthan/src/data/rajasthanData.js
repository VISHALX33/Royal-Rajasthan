import Kota from "../assets/kota.jpg"
import sevenwonders from "../assets/7wonders.webp"
import KotaBarrage from "../assets/KotaBarrageDam.jpg"
import AlbertHallMuseum from "../assets/AlbertHallMuseum.jpg"
import amber from "../assets/amber.jpg"
import Birlamandir from "../assets/Birlamandir.jpg"
import BrijVilasPalace from "../assets/BrijVilasPalace.jpg"
import chambalgarden from "../assets/chambalgarden.jpg"
import citypalace from "../assets/citypalace.jpg"


// import gandhi from "../assets/gandhi.jpg"


export const rajasthanCities = [

 
  {
    id: 2,
    name: "Kota",
    image: Kota,
    description: "The City of Chambal, famous for its coaching institutes and gardens",
    popularPlaces: ["Kota Barrage", "Garadia Mahadev", "Seven Wonders Park", "Kishore Sagar", "Chambal Garden", "City Park"]
  },
  {
    id: 1,
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The Pink City, famous for its historic forts, palaces, and vibrant culture",
    popularPlaces: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jaigarh Fort"]
  }
];

export const touristPlaces = [
 
  // Existing Kota places (id 1-8)
  {
    "id": 1,
    "cityId": 2,
    "name": "Seven Wonders Park",
    "image": sevenwonders,
    "description": "Park featuring miniature replicas of the seven wonders of the world.",
    "distanceFromCityCenter": "5 km from Kota Junction",
    "timeRequired": "2 hours",
    "entryFee": {
      "adult": 50,
      "child": 20
    },
    "bestTimeToVisit": "November to February",
    "coordinates": { "lat": 25.2138, "lng": 75.8648 }
  },
  {
    "id": 2,
    "cityId": 2,
    "name": "Kota Barrage",
    "image": KotaBarrage,
    "description": "A scenic dam built on the Chambal River offering beautiful sunset views.",
    "distanceFromCityCenter": "3 km from Kota Junction",
    "timeRequired": "1 hour",
    "entryFee": {
      "adult": 10,
      "child": 5
    },
    "bestTimeToVisit": "October to March",
    "coordinates": { "lat": 25.1959, "lng": 75.8382 }
  },
  {
    "id": 3,
    "cityId": 2,
    "name": "Garadia Mahadev Temple",
    "image": "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "A serene temple located on a cliff overlooking the Chambal River.",
    "distanceFromCityCenter": "20 km from Kota Junction",
    "timeRequired": "2-3 hours",
    "entryFee": {
      "adult": 0,
      "child": 0
    },
    "bestTimeToVisit": "Monsoon and Winter",
    "coordinates": { "lat": 25.0794, "lng": 75.9473 }
  },
  {
    "id": 4,
    "cityId": 2,
    "name": "Kishore Sagar Lake",
    "image": "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "A historic artificial lake with a beautiful palace (Jag Mandir) in the center.",
    "distanceFromCityCenter": "2 km from Kota Junction",
    "timeRequired": "1-2 hours",
    "entryFee": {
      "adult": 20,
      "child": 10
    },
    "bestTimeToVisit": "Evening for boating",
    "coordinates": { "lat": 25.1824, "lng": 75.8332 }
  },
  {
    "id": 5,
    "cityId": 2,
    "name": "City Palace and Museum",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "A royal palace showcasing Rajput architecture and historical artifacts.",
    "distanceFromCityCenter": "1 km from Kota Junction",
    "timeRequired": "2 hours",
    "entryFee": {
      "adult": 100,
      "child": 50
    },
    "bestTimeToVisit": "October to March",
    "coordinates": { "lat": 25.1803, "lng": 75.8305 }
  },
  {
    "id": 6,
    "cityId": 2,
    "name": "Chambal Garden",
    "image": "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "A riverside garden with a mini zoo and crocodile sightings.",
    "distanceFromCityCenter": "4 km from Kota Junction",
    "timeRequired": "1-2 hours",
    "entryFee": {
      "adult": 30,
      "child": 15
    },
    "bestTimeToVisit": "Morning or Evening",
    "coordinates": { "lat": 25.1883, "lng": 75.8417 }
  },
  {
    "id": 7,
    "cityId": 2,
    "name": "Jagmandir Palace",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "A picturesque palace located in the middle of Kishore Sagar Lake.",
    "distanceFromCityCenter": "2 km from Kota Junction",
    "timeRequired": "1 hour",
    "entryFee": {
      "adult": 50,
      "child": 25
    },
    "bestTimeToVisit": "Evening for light views",
    "coordinates": { "lat": 25.1824, "lng": 75.8332 }
  },
  {
    "id": 8,
    "cityId": 2,
    "name": "Brij Vilas Palace Museum",
    "image": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "A museum displaying royal collections, including sculptures, coins, and arms.",
    "distanceFromCityCenter": "3 km from Kota Junction",
    "timeRequired": "1.5 hours",
    "entryFee": {
      "adult": 80,
      "child": 40
    },
    "bestTimeToVisit": "October to March",
    "coordinates": { "lat": 25.1786, "lng": 75.8365 }
  },
  // jaipur places (id 9 - 18)

  {
    "id": 9,
    "cityId": 1,
    "name": "Hawa Mahal",
    "image": "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Iconic palace with a honeycomb-like facade with 953 windows.",
    "distanceFromCityCenter": "1 km from Jaipur city center",
    "timeRequired": "1 hour",
    "entryFee": {
      "adult": 50,
      "child": 20
    },
    "bestTimeToVisit": "Early morning for best photos",
    "coordinates": { "lat": 26.9239, "lng": 75.8267 }
  },
  {
    "id": 10,
    "cityId": 1,
    "name": "Amber Fort",
    "image": "https://images.unsplash.com/photo-1559131397-f94da358a7d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Majestic hilltop fort with intricate carvings, mirror work, and stunning views.",
    "distanceFromCityCenter": "11 km from Jaipur city center",
    "timeRequired": "2-3 hours",
    "entryFee": {
      "adult": 100,
      "child": 50
    },
    "bestTimeToVisit": "Early morning or late afternoon",
    "coordinates": { "lat": 26.9855, "lng": 75.8513 }
  },
  {
    "id": 11,
    "cityId": 1,
    "name": "City Palace",
    "image": "https://images.unsplash.com/photo-1582972236019-ea9ab737ee4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Royal palace complex with museums, courtyards, and historic artifacts.",
    "distanceFromCityCenter": "1.5 km from Jaipur city center",
    "timeRequired": "2 hours",
    "entryFee": {
      "adult": 200,
      "child": 100
    },
    "bestTimeToVisit": "Morning to avoid crowds",
    "coordinates": { "lat": 26.9258, "lng": 75.8236 }
  },
  {
    "id": 12,
    "cityId": 1,
    "name": "Jantar Mantar",
    "image": "https://images.unsplash.com/photo-1587137305399-5f882dbbadc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "UNESCO-listed astronomical observatory with massive stone instruments.",
    "distanceFromCityCenter": "1 km from Jaipur city center",
    "timeRequired": "1 hour",
    "entryFee": {
      "adult": 50,
      "child": 20
    },
    "bestTimeToVisit": "Morning or evening",
    "coordinates": { "lat": 26.9247, "lng": 75.8246 }
  },
  {
    "id": 13,
    "cityId": 1,
    "name": "Nahargarh Fort",
    "image": "https://images.unsplash.com/photo-1630409346076-9e8a9a0e0b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Hilltop fort offering panoramic views of Jaipur, especially beautiful at sunset.",
    "distanceFromCityCenter": "15 km from Jaipur city center",
    "timeRequired": "2 hours",
    "entryFee": {
      "adult": 50,
      "child": 20
    },
    "bestTimeToVisit": "Evening for sunset views",
    "coordinates": { "lat": 26.9364, "lng": 75.8158 }
  },
  {
    "id": 14,
    "cityId": 1,
    "name": "Jaigarh Fort",
    "image": "https://images.unsplash.com/photo-1630409346076-9e8a9a0e0b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Military fort known for the world's largest cannon, Jaivana.",
    "distanceFromCityCenter": "12 km from Jaipur city center",
    "timeRequired": "2 hours",
    "entryFee": {
      "adult": 85,
      "child": 45
    },
    "bestTimeToVisit": "Morning or late afternoon",
    "coordinates": { "lat": 26.9859, "lng": 75.8511 }
  },
  {
    "id": 15,
    "cityId": 1,
    "name": "Albert Hall Museum",
    "image": "https://images.unsplash.com/photo-1582972236019-ea9ab737ee4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Oldest museum in Rajasthan with artifacts, sculptures, and Egyptian mummies.",
    "distanceFromCityCenter": "3 km from Jaipur city center",
    "timeRequired": "1.5 hours",
    "entryFee": {
      "adult": 40,
      "child": 20
    },
    "bestTimeToVisit": "Daytime",
    "coordinates": { "lat": 26.9114, "lng": 75.8166 }
  },
  {
    "id": 16,
    "cityId": 1,
    "name": "Jal Mahal",
    "image": "https://images.unsplash.com/photo-1582972236019-ea9ab737ee4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Stunning water palace floating on Man Sagar Lake (entry restricted, best viewed from outside).",
    "distanceFromCityCenter": "6 km from Jaipur city center",
    "timeRequired": "30 minutes",
    "entryFee": {
      "adult": 0,
      "child": 0
    },
    "bestTimeToVisit": "Sunset for photography",
    "coordinates": { "lat": 26.9536, "lng": 75.8465 }
  },
  {
    "id": 17,
    "cityId": 1,
    "name": "Birla Mandir",
    "image": "https://images.unsplash.com/photo-1582972236019-ea9ab737ee4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Beautiful white marble temple dedicated to Lord Vishnu and Goddess Lakshmi.",
    "distanceFromCityCenter": "4 km from Jaipur city center",
    "timeRequired": "1 hour",
    "entryFee": {
      "adult": 0,
      "child": 0
    },
    "bestTimeToVisit": "Evening for aarti",
    "coordinates": { "lat": 26.8915, "lng": 75.8167 }
  },
  {
    "id": 18,
    "cityId": 1,
    "name": "Sisodia Rani Garden",
    "image": "https://images.unsplash.com/photo-1582972236019-ea9ab737ee4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "description": "Picturesque landscaped garden with fountains, murals, and lush greenery.",
    "distanceFromCityCenter": "8 km from Jaipur city center",
    "timeRequired": "1 hour",
    "entryFee": {
      "adult": 20,
      "child": 10
    },
    "bestTimeToVisit": "Morning or evening",
    "coordinates": { "lat": 26.8412, "lng": 75.8160 }
  }
];