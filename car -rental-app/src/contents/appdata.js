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
    imgUrl: "/car-1.jpg",
    title: "Luxury Sedan",
    subtitle:
      "Experience the encapsulation of luxury with Limolux's astonishing decision of premium vehicles. Whether you pick a Mercedes-Benz E-Class, BMW 5 Series, Lexus ES300, or a similar upscale model, our extent of lavishness vehicles is planned to lift every occasion. Lower yourself in the predictable blend of cutting edge development, unequaled comfort, and unparalleled sensibility all at a sensible expense. Find the allure of refinement as you set out on your cycle in style with Limolux.",
  },
  {
    imgUrl: "/premium-sedan.jpg",
    title: "Premium Sedan",
    subtitle:
      "Limolux presents a handpicked determination of the best extravagance vehicles for the individuals who request only awesome. Look over the lofty BMW 7 Series, the notorious Mercedes-Benz S-Class, the modern Audi A8, or practically identical tip top models. Our vehicles are not simply include pressed; they address the zenith of current extravagance cars. With Limolux, you'll make a stupendous entry, blowing some people's minds and delighting in outright style and solace. Lift your appearance and have an enduring effect with our impeccable fleet of luxury automobiles.",
  },
  {
    imgUrl: "/car-3.jpg",
    title: "Luxury SUV",
    subtitle:
      "Limolux offers an answer for those looking for both more than adequate baggage limit and positive extravagance. Investigate our determination of premium SUVs, including the Mercedes-Benz GLE, BMW X5, and comparable upscale models. These extravagance SUVs give similar remarkable elements tracked down in our extravagance cars while offering additional room for your possessions. Express farewell to splits the difference and raise your movement experience with Limolux's sumptuous SUVs, where style and capacity flawlessly coincide.",
  },
  {
    imgUrl: "/car-4.jpg",
    title: "Van",
    subtitle:
      "Find the Mercedes-Benz V-Class, a top decision for obliging 5-6 travelers easily with more than adequate baggage space. This open extravagance individual’s mover flaunts enormous back seats and a liberal boot, guaranteeing a smooth and spacious excursion. Prestigious overall for its flexibility, the Mercedes V-Class sets the norm for moving travelers in style and refinement. Raise your gathering travel insight with this remarkable vehicle from Limolux.",
  },
  {
    imgUrl: "/car-5.jpg",
    title: "Transporter",
    subtitle:
      "Limolux gladly presents the Mercedes-Benz Runner and Renault Masterbus, ideal for obliging bigger gatherings of up to eleven individuals. These lofty vehicles are the favored decision for leaders, as well as those looking for consistent transportation for air terminal exchanges, weddings, and corporate occasions. Raise your gathering travel insight with Limolux, where extravagance, solace, and style combine. For requests, if it's not too much trouble, connect with us today. Your excursion with us starts with a straightforward call.",
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
