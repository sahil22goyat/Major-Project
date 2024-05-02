import { fadeIn } from "./motion";

export const links = [
  {
    link: "/",
    text: "HomePage",
    exact: true,
  },
  {
    link: "/booking?index=1",
    text: "Booking",
    exact: true,
  },
  {
    link: "/event-boooking",
    text: "Event-booking",
    exact: true,
  },
  {
    link: "/offerings",
    text: "offerings",
  },
  
    {
      link: "/fleetpool",
      text: "Fleet Pool",
      keyword: true,
    },
  {
    link: "/aboutus",
    text: "About Us",
  },
];

// carousel array
export const profile = [
  {
    name: "Welcome",
    img: "/home1.jpeg",
    text: "Embark on a journey of freedom and flexibility with Car Pool. Your ride to unforgettable experiences starts here!",
 
  },
  {
   name: "Quotes",
    text: "Life is short, but the open road is endless. Let's make every mile count.",
  
    img: "/home2.jpg",
  },
  {
    name: "Inspiration",
    text: "From bustling city streets to winding country roads, we're here to ignite your sense of adventure and fuel your journey with inspiration, one mile at a time.",
    img: "/home3.jpg",
  
  },
];

export const cardhold = [
  {
    id: "cardhold1",
    imgUrl: "/card1.jpg",
    title: "Reliable Elegance: Ensuring Security and Luxury",
    description:
      "At Car Pool, we anticipate your needs – pairing skilled chauffeurs with impeccably stylish vehicles for your journey.",
  },
  {
    id: "cardhold2",
    imgUrl: "/card2.jpg",
    title: "Versatile Rides: Tailored for Every Event",
    description:
    "Embark on a Journey of Luxury and Comfort: Car Pool Awaits Your Reservation!",
  },
  {
    id: "cardhold3",
    imgUrl: "/card3.jpg",
    title: "Weeding specialists",
    description:
      "On Your Special Day, Car Pool Creates Unforgettable Memories with Every Ride, Setting the Standard for Elegance and Luxury.",
  },
];

export const vgcar = [
  {
    img: "/vgcar1.jpg",
    title: "Future Horizons",
    description:
      "Transforming transportation with real-time vehicle tracking for peak efficiency and minimal downtime.",
  },
  {
    img: "/vgcar2.jpg",
    title: "Pathway to Progress",
    description:
      "Empowering progress through innovative solutions and cutting-edge technology, our mission is to drive efficiency, enhance experiences, and create lasting value for our stakeholders.",
  },
  {
    img: "/vgcar3.jpg",
    title: "Strategic Paths",
    description:
      "Crafting success through a strategic and adaptive approach, we navigate challenges with creativity, innovation, and a commitment to excellence.",
  },
];

export const serviceList = [
  {
    id: 1,
    text: "Indulge in unparalleled reliability and comfort with our Railway Station transfers. Whether you're traveling alone or with loved ones, we ensure a warm welcome, assistance with luggage, and constant monitoring of schedules and traffic for timely arrivals. Relax and rejuvenate as you journey with us, day or night.",
    title: "Railway Station Transfers",
    img: "/railwaystation.jpeg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 2,
    text: "Elevate the anticipation of your upcoming special event with Car Pool. Whether it's a wedding, bachelor or bachelorette party, or milestone birthday celebration, infuse a touch of luxury with our immaculate fleet. Need ample space for a large group? Make a statement arrival, day or night, with our 15-seater Mahindra Xylo at your disposal. It's more than just transportation; it's a customized experience designed to ensure you and your guests arrive in style.",
    title: "Special Events Transportation",
    img: "/weedevent.jpeg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 3,
    text: "Carpool Concierge provides top-notch corporate, executive, and VIP transportation services, guaranteeing a seamless and comfortable journey for every occasion. Whether it's a crucial client meeting or an important business event, our service ensures you arrive relaxed and ready. Count on us for smooth, professional, and reliable experiences, every time.",
    title: "Business Commutes",
    img: "/business.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 4,
    text: "Embark on Unforgettable Family Adventures with Carpool ,From spontaneous picnics to elaborate family outings, let Carpool enhance your family travel experience. Traveling with little ones? We'll ensure all necessary arrangements, including child seats, are taken care of prior to your arrival. Carpool provides a safe, reliable, and luxurious solution for all your family transportation needs. When planning your next outdoor excursion, be sure to book a ride with Carpool for a seamless and comfortable start to your journey.",
    title: "Family Fun Outings",
    img: "/picnictrip.jpeg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 5,
    text: "Explore the Marvels of India with Carpool: Experience Unmatched Luxury on Iconic RoutesEmbark on a Luxurious Journey: Discover India's Treasured Sites with Carpool Experience India's Rich Heritage with Carpool: A Luxurious Tour of Iconic Destinations Discover India in Style: Explore Famous Landmarks with Carpool's Premium Service Unravel the Beauty of India: Enjoy Scenic Routes and Cultural Experiences with Carpool",
    title: "Scenic Adventures",
    img: "/scenicsites.png",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 6,
    text: "Explore India's Majestic Peaks and Trails with Carpool: Discover the Splendor of India's Mountain Hikes with Carpool - A Journey of Adventure and Exploration. Experience the Beauty of India's Mountain Trails with Carpool: Unparalleled Comfort and Safety. Venture into the Wilderness: Navigate India's Mountain Trails in Luxury with Carpool. Escape to the Indian Peaks with Carpool: A Journey of Discovery and Excitement through Majestic Landscapes.",
    title: "Mountain Hikes",
    img: "/mountainhikes.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 7,
    text: "Immerse Yourself in Opulence: Experience Luxury Redefined with Our Exclusive Fleet, Showcasing Prestigious Indian Models like the Mahindra Alturas G4, Tata Harrier, and Land Rover Range Rover, Celebrated for Their Unrivaled Comfort and Performance. Paired with Our Seasoned Drivers, Embark on a Journey of Unparalleled Sophistication and Grandeur.",
    title: "Premier Luxury Car Hire",
    img: "/expensivecars.jpeg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
];

export const insights = [
  {
    imgUrl: "/insight1.png",
    title: "opulence  collection",
    subtitle:
      "Indulge in the epitome of opulence with Car Pool's remarkable selection of premium Indian vehicles. Whether you opt for a luxurious Tata Hexa, Mahindra XUV700, Toyota Innova Crysta, or a similar upscale model, our range of luxury cars is designed to elevate every occasion. Immerse yourself in the seamless fusion of cutting-edge technology, unmatched comfort, and unparalleled affordability, all at a reasonable price. Discover the allure of sophistication as you embark on your journey in style with Car Pool..",
  },
  {
    imgUrl: "/insight2.jpg",
    title: "Maruti Suzuki Dzire",
    subtitle:
      "Car Pool presents a curated selection of the finest  vehicles for those who demand nothing but the best. Choose from the prestigious Maruti Suzuki Desire, the iconic Honda City, the sleek Hyundai Verna, or comparable elite models. Our vehicles are not just feature-packed; they represent the pinnacle of modern cars. With Car Pool, you'll make a grand entrance, turning heads and reveling in absolute style and comfort. Elevate your presence and leave a lasting impression with our impeccable fleet of luxury automobiles..",
  },
  {
    imgUrl: "/insight3.jpeg",
    title: "Taxi/Cab",
    subtitle:
      "Car Pool provides a solution for those seeking ample luggage capacity without compromising on comfort and style. Explore our selection of premium taxi cabs, including the Maruti Suzuki Ertiga, Hyundai Creta, and similar upscale models. These taxis offer the same exceptional features found in our luxury cars while providing extra space for your belongings. Say goodbye to compromises and elevate your travel experience with Car Pool's premium taxi cabs, where style and functionality seamlessly intersect.",
  },
  {
    imgUrl: "/insight4.jpeg",
    title: "Van",
    subtitle:
      "Explore our van collection, featuring the Mahindra Marazzo, a premier choice for accommodating 5-6 passengers comfortably with ample luggage space. This spacious van boasts large rear seats and a generous boot, ensuring a smooth and roomy journey. Renowned for its versatility, the Mahindra Marazzo sets the benchmark for transporting passengers in style and comfort. Enhance your group travel experience with this exceptional vehicle from Car Pool.",
  },
  {
    imgUrl: "/insight5.jpg",
    title: "8 Seater Toyota Innova Crysta",
    subtitle:
      "Car Pool proudly presents the Toyota Innova Crysta, a spacious 8-seater ideal for accommodating larger groups of up to eight people. This prestigious vehicle is the preferred choice for executives, as well as those seeking seamless transportation for airport transfers, weddings, and corporate events. Elevate your group travel experience with Car Pool, where comfort, style, and reliability come together. For inquiries, please reach out to us today. Your journey with us begins with a simple call.",
  },
];

export const steps = [
  {
    name: "Enter Ride Details",
  },
  {
    name: "Choose a Vahicle",
  },
  {
    name: "Enter Contact Details",
  },
  {
    name: "Booking Summary",
  },
];

export const pickupTime = [
  "12:00 am",
  "12:15 am",
  "12:30 am",
  "12:45 am",
  "1:00 am",
  "1:15 am",
  "1:30 am",
  "1:45 am",
  "2:00 am",
  "2:15 am",
  "2:30 am",
  "2:45 am",
  "3:00 am",
  "3:15 am",
  "3:30 am",
  "3:45 am",
  "4:00 am",
  "4:15 am",
  "4:30 am",
  "4:45 am",
  "5:00 am",
  "5:15 am",
  "5:30 am",
  "5:45 am",
  "6:00 am",
  "6:15 am",
  "6:30 am",
  "6:45 am",
  "7:00 am",
  "7:15 am",
  "7:30 am",
  "7:45 am",
  "8:00 am",
  "8:15 am",
  "8:30 am",
  "8:45 am",
  "9:00 am",
  "9:15 am",
  "9:30 am",
  "9:45 am",
  "10:00 am",
  "10:15 am",
  "10:30 am",
  "10:45 am",
  "11:00 am",
  "11:15 am",
  "11:30 am",
  "11:45 am",
  "12:00 pm",
  "12:15 pm",
  "12:30 pm",
  "12:45 pm",
  "1:00 pm",
  "1:15 pm",
  "1:30 pm",
  "1:45 pm",
  "2:00 pm",
  "2:15 pm",
  "2:30 pm",
  "2:45 pm",
  "3:00 pm",
  "3:15 pm",
  "3:30 pm",
  "3:45 pm",
  "4:00 pm",
  "4:15 pm",
  "4:30 pm",
  "4:45 pm",
  "5:00 pm",
  "5:15 pm",
  "5:30 pm",
  "5:45 pm",
  "6:00 pm",
  "6:15 pm",
  "6:30 pm",
  "6:45 pm",
  "7:00 pm",
  "7:15 pm",
  "7:30 pm",
  "7:45 pm",
  "8:00 pm",
  "8:15 pm",
  "8:30 pm",
  "8:45 pm",
  "9:00 pm",
  "9:15 pm",
  "9:30 pm",
  "9:45 pm",
  "10:00 pm",
  "10:15 pm",
  "10:30 pm",
  "10:45 pm",
  "11:00 pm",
  "11:15 pm",
  "11:30 pm",
  "11:45 pm",
];
