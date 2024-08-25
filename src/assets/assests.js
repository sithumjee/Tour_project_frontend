import hero1 from "./hero1.jpg";
import hero2 from "./hero2.jpg";
import hero3 from "./hero3.jpg";
import hero4 from "./hero4.jpg";
import hero5 from "./hero5.jpg";
import heroVideo from "./heroVideo.mp4";
import playImage from "./play.png";
import pauseImage from "./pause.png";
import settingsImage from "./settings.png";
import bookingImage from "./booking.png";
import billingImage from "./billing.png";
import manageTours from "./manageTours.png";
import manageReviews from "./ManageReviews.png";
import manageUsers from "./manageUsers.png";
import reviewImage from "./reviews.png";
import UploadArea from "./uploadImage.png";
import logoImage from "./logo.png";
import worldMap from "./worldmap.png";
import menuIcon from "./menuIcon.png";
import userImage from "./userImage.png";
import tour2cover from "./tour2cover.jpg";
import tour3cover from "./tour3cover.jpg";
import tour4cover from "./tour4cover.jpg";
import tour5cover from "./tour5cover.jpg";
import tour6cover from "./tour6cover.jpg";
import tour7cover from "./tour7cover.jpg";
import tour8cover from "./tour8cover.jpg";
import tour9cover from "./tour9cover.jpg";
import tour10cover from "./tour10cover.jpg";
import tour11cover from "./tour11cover.jpg";
import tour12cover from "./tour12cover.jpg";
import tour13cover from "./tour13cover.jpg";
import tour14cover from "./tour14cover.jpg";
import tour15cover from "./tour15cover.jpg";
import tour16cover from "./tour16cover.jpg";

export const heroImages = {
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  heroVideo,
  playImage,
  pauseImage,
  UploadArea,
  logoImage,
  worldMap,
  menuIcon,
  userImage,
  tour2cover,
  tour3cover,
  tour4cover,
  tour5cover,
  tour6cover,
  tour7cover,
  tour8cover,
  tour9cover,
  tour10cover,
  tour11cover,
  tour12cover,
  tour13cover,
  tour14cover,
  tour15cover,
  tour16cover,
};

export const ProfileImages = {
  settingsImage,
  bookingImage,
  billingImage,
  manageTours,
  manageReviews,
  manageUsers,
  reviewImage,
};

export const tour_list = [
  {
    startLocation: {
      description: "Miami, USA",
      type: "Point",
      coordinates: [-80.185942, 25.774772],
      address: "301 Biscayne Blvd, Miami, FL 33132, USA",
    },
    ratingsAverage: 4.8,
    ratingsQuantity: 6,
    images: [hero1, hero2, hero3, hero4, hero5],
    startDates: [
      "2021-06-19T09:00:00.000Z",
      "2021-07-20T09:00:00.000Z",
      "2021-08-18T09:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c2955",
    name: "The Sea Explorer",
    duration: 7,
    maxGroupSize: 15,
    difficulty: "medium",
    guides: ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
    price: 497,
    summary: "Exploring the jaw-dropping US east coast by foot and by boat",
    description:
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageCover: hero1,
    locations: [
      {
        _id: "5c88fa8cf4afda39709c2959",
        description: "Lummus Park Beach",
        type: "Point",
        coordinates: [-80.128473, 25.781842],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c2958",
        description: "Islamorada",
        type: "Point",
        coordinates: [-80.647885, 24.909047],
        day: 2,
      },
      {
        _id: "5c88fa8cf4afda39709c2957",
        description: "Sombrero Beach",
        type: "Point",
        coordinates: [-81.0784, 24.707496],
        day: 3,
      },
      {
        _id: "5c88fa8cf4afda39709c2956",
        description: "West Key",
        type: "Point",
        coordinates: [-81.768719, 24.552242],
        day: 5,
      },
    ],
  },
  {
    startLocation: {
      description: "Banff, CAN",
      type: "Point",
      coordinates: [-115.570154, 51.178456],
      address: "224 Banff Ave, Banff, AB, Canada",
    },
    ratingsAverage: 5,
    ratingsQuantity: 9,
    images: ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
    startDates: [
      "2021-04-25T09:00:00.000Z",
      "2021-07-20T09:00:00.000Z",
      "2021-10-05T09:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c2951",
    name: "The Forest Hiker",
    duration: 5,
    maxGroupSize: 25,
    difficulty: "easy",
    guides: [
      "5c8a21d02f8fb814b56fa189",
      "5c8a201e2f8fb814b56fa186",
      "5c8a1f292f8fb814b56fa184",
    ],
    price: 397,
    summary: "Breathtaking hike through the Canadian Banff National Park",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageCover: hero2,
    locations: [
      {
        _id: "5c88fa8cf4afda39709c2954",
        description: "Banff National Park",
        type: "Point",
        coordinates: [-116.214531, 51.417611],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c2953",
        description: "Jasper National Park",
        type: "Point",
        coordinates: [-118.076152, 52.875223],
        day: 3,
      },
      {
        _id: "5c88fa8cf4afda39709c2952",
        description: "Glacier National Park of Canada",
        type: "Point",
        coordinates: [-117.490309, 51.261937],
        day: 5,
      },
    ],
  },
  {
    startLocation: {
      description: "Aspen, USA",
      type: "Point",
      coordinates: [-106.822318, 39.190872],
      address: "419 S Mill St, Aspen, CO 81611, USA",
    },
    ratingsAverage: 4.5,
    ratingsQuantity: 6,
    images: ["tour-3-1.jpg", "tour-3-2.jpg", "tour-3-3.jpg"],
    startDates: [
      "2022-01-05T10:00:00.000Z",
      "2022-02-12T10:00:00.000Z",
      "2023-01-06T10:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c295a",
    name: "The Snow Adventurer",
    duration: 4,
    maxGroupSize: 10,
    difficulty: "difficult",
    guides: [
      "5c8a21d02f8fb814b56fa189",
      "5c8a23412f8fb814b56fa18c",
      "5c8a1f4e2f8fb814b56fa185",
    ],
    price: 997,
    summary: "Exciting adventure in the snow with snowboarding and skiing",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
    imageCover: hero3,
    locations: [
      {
        _id: "5c88fa8cf4afda39709c295c",
        description: "Aspen Highlands",
        type: "Point",
        coordinates: [-106.855385, 39.182677],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c295b",
        description: "Beaver Creek",
        type: "Point",
        coordinates: [-106.516623, 39.60499],
        day: 2,
      },
    ],
  },
  {
    startLocation: {
      description: "Las Vegas, USA",
      type: "Point",
      coordinates: [-115.172652, 36.110904],
      address: "3663 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
    },
    ratingsAverage: 4.7,
    ratingsQuantity: 7,
    images: ["tour-5-1.jpg", "tour-5-2.jpg", "tour-5-3.jpg"],
    startDates: [
      "2021-08-05T09:00:00.000Z",
      "2022-03-20T10:00:00.000Z",
      "2022-08-12T09:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c2961",
    name: "The Park Camper",
    duration: 10,
    maxGroupSize: 15,
    difficulty: "medium",
    guides: [
      "5c8a21f22f8fb814b56fa18a",
      "5c8a23412f8fb814b56fa18c",
      "5c8a201e2f8fb814b56fa186",
    ],
    price: 1497,
    summary: "Breathing in Nature in America's most spectacular National Parks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!",
    imageCover: hero4,
    locations: [
      {
        _id: "5c88fa8cf4afda39709c2965",
        description: "Zion Canyon National Park",
        type: "Point",
        coordinates: [-112.987418, 37.198125],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c2964",
        description: "Antelope Canyon",
        type: "Point",
        coordinates: [-111.376161, 36.86438],
        day: 4,
      },
      {
        _id: "5c88fa8cf4afda39709c2963",
        description: "Grand Canyon National Park",
        type: "Point",
        coordinates: [-112.115763, 36.058973],
        day: 5,
      },
      {
        _id: "5c88fa8cf4afda39709c2962",
        description: "Joshua Tree National Park",
        type: "Point",
        coordinates: [-116.107963, 34.011646],
        day: 9,
      },
    ],
  },
  {
    startLocation: {
      description: "NYC, USA",
      type: "Point",
      coordinates: [-73.985141, 40.75894],
      address: "Manhattan, NY 10036, USA",
    },
    ratingsAverage: 4.6,
    ratingsQuantity: 5,
    images: ["tour-4-1.jpg", "tour-4-2.jpg", "tour-4-3.jpg"],
    startDates: [
      "2021-03-11T10:00:00.000Z",
      "2021-05-02T09:00:00.000Z",
      "2021-06-09T09:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c295d",
    name: "The City Wanderer",
    duration: 9,
    maxGroupSize: 20,
    difficulty: "easy",
    guides: ["5c8a22c62f8fb814b56fa18b", "5c8a201e2f8fb814b56fa186"],
    price: 1197,
    summary: "Living the life of Wanderlust in the US' most beatiful cities",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!",
    imageCover: hero5,
    locations: [
      {
        _id: "5c88fa8cf4afda39709c2960",
        description: "New York",
        type: "Point",
        coordinates: [-73.967696, 40.781821],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c295f",
        description: "Los Angeles",
        type: "Point",
        coordinates: [-118.324396, 34.097984],
        day: 3,
      },
      {
        _id: "5c88fa8cf4afda39709c295e",
        description: "San Francisco",
        type: "Point",
        coordinates: [-122.408865, 37.787825],
        day: 5,
      },
    ],
  },
  {
    startLocation: {
      description: "California, USA",
      type: "Point",
      coordinates: [-118.803461, 34.006072],
      address: "29130 Cliffside Dr, Malibu, CA 90265, USA",
    },
    ratingsAverage: 3.9,
    ratingsQuantity: 7,
    images: ["tour-6-1.jpg", "tour-6-2.jpg", "tour-6-3.jpg"],
    startDates: [
      "2021-07-19T09:00:00.000Z",
      "2021-09-06T09:00:00.000Z",
      "2022-03-18T10:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c2966",
    name: "The Sports Lover",
    duration: 14,
    maxGroupSize: 8,
    difficulty: "difficult",
    guides: [
      "5c8a21f22f8fb814b56fa18a",
      "5c8a1f292f8fb814b56fa184",
      "5c8a1f4e2f8fb814b56fa185",
    ],
    price: 2997,
    summary:
      "Surfing, skating, parajumping, rock climbing and more, all in one tour",
    description:
      "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",
    imageCover: "tour-6-cover.jpg",
    locations: [
      {
        _id: "5c88fa8cf4afda39709c296b",
        description: "Point Dume Beach",
        type: "Point",
        coordinates: [-118.809361, 34.003098],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c296a",
        description: "Venice Skate Park",
        type: "Point",
        coordinates: [-118.47549, 33.987367],
        day: 4,
      },
      {
        _id: "5c88fa8cf4afda39709c2969",
        description: "San Diego Skydive",
        type: "Point",
        coordinates: [-116.830104, 33.022843],
        day: 6,
      },
      {
        _id: "5c88fa8cf4afda39709c2968",
        description: "Kern River Rafting",
        type: "Point",
        coordinates: [-118.4547, 35.710359],
        day: 7,
      },
      {
        _id: "5c88fa8cf4afda39709c2967",
        description: "Yosemite National Park",
        type: "Point",
        coordinates: [-119.600492, 37.742371],
        day: 10,
      },
    ],
  },
  {
    startLocation: {
      description: "Utah, USA",
      type: "Point",
      coordinates: [-109.55099, 37.283469],
      address: "Bluff, UT 84512, USA",
    },
    ratingsAverage: 4.8,
    ratingsQuantity: 6,
    images: ["tour-8-1.jpg", "tour-8-2.jpg", "tour-8-3.jpg"],
    startDates: [
      "2021-03-23T10:00:00.000Z",
      "2021-10-25T09:00:00.000Z",
      "2022-01-30T10:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c2970",
    name: "The Star Gazer",
    duration: 9,
    maxGroupSize: 8,
    difficulty: "medium",
    guides: ["5c8a21d02f8fb814b56fa189", "5c8a1f292f8fb814b56fa184"],
    price: 2997,
    summary:
      "The most remote and stunningly beautiful places for seeing the night sky",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageCover: "tour-8-cover.jpg",
    locations: [
      {
        _id: "5c88fa8cf4afda39709c2973",
        description: "Natural Bridges National Monument",
        type: "Point",
        coordinates: [-109.99953, 37.629017],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c2972",
        description: "Horseshoe Bend",
        type: "Point",
        coordinates: [-111.50954, 36.883269],
        day: 3,
      },
      {
        _id: "5c88fa8cf4afda39709c2971",
        description: "Death Valley National Park",
        type: "Point",
        coordinates: [-117.07399, 36.501435],
        day: 6,
      },
    ],
  },
  {
    startLocation: {
      description: "Yellowknife, CAN",
      type: "Point",
      coordinates: [-114.406097, 62.439943],
      address: "Yellowknife, NT X1A 2L2, Canada",
    },
    ratingsAverage: 4.7,
    ratingsQuantity: 7,
    images: ["tour-9-1.jpg", "tour-9-2.jpg", "tour-9-3.jpg"],
    startDates: [
      "2021-12-16T10:00:00.000Z",
      "2022-01-16T10:00:00.000Z",
      "2022-12-12T10:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c2974",
    name: "The Northern Lights",
    duration: 3,
    maxGroupSize: 12,
    difficulty: "easy",
    guides: [
      "5c8a21f22f8fb814b56fa18a",
      "5c8a201e2f8fb814b56fa186",
      "5c8a23412f8fb814b56fa18c",
    ],
    price: 1497,
    summary: "Enjoy the Northern Lights in one of the best places in the world",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
    imageCover: "tour-9-cover.jpg",
    locations: [
      {
        _id: "5c88fa8cf4afda39709c2975",
        description: "Yellowknife",
        type: "Point",
        coordinates: [-114.406097, 62.439943],
        day: 1,
      },
    ],
  },
  {
    startLocation: {
      description: "California, USA",
      type: "Point",
      coordinates: [-122.29286, 38.294065],
      address: "560 Jefferson St, Napa, CA 94559, USA",
    },
    ratingsAverage: 4.4,
    ratingsQuantity: 7,
    images: ["tour-7-1.jpg", "tour-7-2.jpg", "tour-7-3.jpg"],
    startDates: [
      "2021-02-12T10:00:00.000Z",
      "2021-04-14T09:00:00.000Z",
      "2021-09-01T09:00:00.000Z",
    ],
    _id: "5c88fa8cf4afda39709c296c",
    name: "The Wine Taster",
    duration: 5,
    maxGroupSize: 8,
    difficulty: "easy",
    guides: ["5c8a22c62f8fb814b56fa18b", "5c8a23412f8fb814b56fa18c"],
    price: 1997,
    summary:
      "Exquisite wines, scenic views, exclusive barrel tastings,  and much more",
    description:
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageCover: "tour-7-cover.jpg",
    locations: [
      {
        _id: "5c88fa8cf4afda39709c296f",
        description: "Beringer Vineyards",
        type: "Point",
        coordinates: [-122.479887, 38.510312],
        day: 1,
      },
      {
        _id: "5c88fa8cf4afda39709c296e",
        description: "Clos Pegase Winery & Tasting Room",
        type: "Point",
        coordinates: [-122.582948, 38.585707],
        day: 3,
      },
      {
        _id: "5c88fa8cf4afda39709c296d",
        description: "Raymond Vineyard and Cellar",
        type: "Point",
        coordinates: [-122.434697, 38.482181],
        day: 5,
      },
    ],
  },
];

export const review_list = [
  {
    _id: "5c8a34ed14eb5c17645c9108",
    review:
      "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
    rating: 5,
    user: "66c4bec74776a6ca198d7842",
    tour: "5c88fa8cf4afda39709c2955",
  },
  {
    _id: "5c8a355b14eb5c17645c9109",
    review:
      "Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!",
    rating: 4,
    user: "66c4bec74776a6ca198d7842",
    tour: "5c88fa8cf4afda39709c295a",
  },
  {
    _id: "5c8a359914eb5c17645c910a",
    review:
      "Convallis turpis porttitor sapien ad urna efficitur dui vivamus in praesent nulla hac non potenti!",
    rating: 5,
    user: "5c8a1dfa2f8fb814b56fa181",
    tour: "5c88fa8cf4afda39709c295d",
  },
  {
    _id: "5c8a35b614eb5c17645c910b",
    review:
      "Habitasse scelerisque class quam primis convallis integer eros congue nulla proin nam faucibus parturient.",
    rating: 4,
    user: "66c4bec74776a6ca198d7842",
    tour: "5c88fa8cf4afda39709c296c",
  },
  {
    _id: "5c8a364c14eb5c17645c910c",
    review:
      "Cras consequat fames faucibus ac aliquam dolor a euismod porttitor rhoncus venenatis himenaeos montes tristique pretium libero nisi!",
    rating: 5,
    user: "5c8a1e1a2f8fb814b56fa182",
    tour: "5c88fa8cf4afda39709c296c",
  },
  {
    _id: "5c8a368c14eb5c17645c910d",
    review:
      "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
    rating: 5,
    user: "5c8a1e1a2f8fb814b56fa182",
    tour: "5c88fa8cf4afda39709c2974",
  },
  {
    _id: "5c8a36a014eb5c17645c910e",
    review:
      "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
    rating: 5,
    user: "5c8a1e1a2f8fb814b56fa182",
    tour: "5c88fa8cf4afda39709c2970",
  },
  {
    _id: "5c8a36b714eb5c17645c910f",
    review:
      "Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!",
    rating: 4,
    user: "5c8a1e1a2f8fb814b56fa182",
    tour: "5c88fa8cf4afda39709c2955",
  },
  {
    _id: "5c8a379a14eb5c17645c9110",
    review:
      "Pretium vel inceptos fringilla sit dui fusce varius gravida platea morbi semper erat elit porttitor potenti!",
    rating: 5,
    user: "5c8a24402f8fb814b56fa190",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a37b114eb5c17645c9111",
    review:
      "Ex a bibendum quis volutpat consequat euismod vulputate parturient laoreet diam sagittis amet at blandit.",
    rating: 4,
    user: "5c8a24402f8fb814b56fa190",
    tour: "5c88fa8cf4afda39709c295a",
  },
  {
    _id: "5c8a37cb14eb5c17645c9112",
    review:
      "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
    rating: 5,
    user: "5c8a24402f8fb814b56fa190",
    tour: "5c88fa8cf4afda39709c2961",
  },
  {
    _id: "5c8a37dd14eb5c17645c9113",
    review:
      "A facilisi justo ornare magnis velit diam dictumst parturient arcu nullam rhoncus nec!",
    rating: 4,
    user: "5c8a24402f8fb814b56fa190",
    tour: "5c88fa8cf4afda39709c2966",
  },
  {
    _id: "5c8a37f114eb5c17645c9114",
    review:
      "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
    rating: 5,
    user: "5c8a24402f8fb814b56fa190",
    tour: "5c88fa8cf4afda39709c2974",
  },
  {
    _id: "5c8a381714eb5c17645c9115",
    review:
      "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
    rating: 5,
    user: "5c8a1ec62f8fb814b56fa183",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a382d14eb5c17645c9116",
    review:
      "Semper blandit felis nostra facilisi sodales pulvinar habitasse diam sapien lobortis urna nunc ipsum orci.",
    rating: 5,
    user: "5c8a1ec62f8fb814b56fa183",
    tour: "5c88fa8cf4afda39709c295a",
  },
  {
    _id: "5c8a384114eb5c17645c9117",
    review:
      "Neque amet vel integer placerat ex pretium elementum vitae quis ullamcorper nullam nunc habitant cursus justo!!!",
    rating: 5,
    user: "5c8a1ec62f8fb814b56fa183",
    tour: "5c88fa8cf4afda39709c2961",
  },
  {
    _id: "5c8a385614eb5c17645c9118",
    review:
      "Sollicitudin sagittis ex ut fringilla enim condimentum et netus tristique.",
    rating: 5,
    user: "5c8a1ec62f8fb814b56fa183",
    tour: "5c88fa8cf4afda39709c295d",
  },
  {
    _id: "5c8a387214eb5c17645c9119",
    review:
      "Semper tempus curae at platea lobortis ullamcorper curabitur luctus maecenas nisl laoreet!",
    rating: 5,
    user: "5c8a1ec62f8fb814b56fa183",
    tour: "5c88fa8cf4afda39709c296c",
  },
  {
    _id: "5c8a38ac14eb5c17645c911a",
    review:
      "Arcu adipiscing lobortis sem finibus consequat ac justo nisi pharetra ultricies facilisi!",
    rating: 5,
    user: "5c8a211f2f8fb814b56fa188",
    tour: "5c88fa8cf4afda39709c296c",
  },
  {
    _id: "5c8a38c714eb5c17645c911b",
    review:
      "Rutrum viverra turpis nunc ultricies dolor ornare metus habitant ex quis sociosqu nascetur pellentesque quam!",
    rating: 5,
    user: "5c8a211f2f8fb814b56fa188",
    tour: "5c88fa8cf4afda39709c2970",
  },
  {
    _id: "5c8a38da14eb5c17645c911c",
    review:
      "Elementum massa porttitor enim vitae eu ligula vivamus amet imperdiet urna tristique donec mattis mus erat.",
    rating: 5,
    user: "5c8a211f2f8fb814b56fa188",
    tour: "5c88fa8cf4afda39709c2966",
  },
  {
    _id: "5c8a38ed14eb5c17645c911d",
    review:
      "Fusce ullamcorper gravida libero nullam lacus litora class orci habitant sollicitudin...",
    rating: 5,
    user: "5c8a211f2f8fb814b56fa188",
    tour: "5c88fa8cf4afda39709c295d",
  },
  {
    _id: "5c8a390d14eb5c17645c911e",
    review:
      "Varius potenti proin hendrerit felis sit convallis nunc non id facilisis aliquam platea elementum",
    rating: 5,
    user: "5c8a211f2f8fb814b56fa188",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a391f14eb5c17645c911f",
    review:
      "Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus",
    rating: 5,
    user: "5c8a211f2f8fb814b56fa188",
    tour: "5c88fa8cf4afda39709c2955",
  },
  {
    _id: "5c8a395b14eb5c17645c9120",
    review:
      "Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus",
    rating: 5,
    user: "5c8a20d32f8fb814b56fa187",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a399014eb5c17645c9121",
    review:
      "Tortor dolor sed vehicula neque ultrices varius orci feugiat dignissim auctor consequat.",
    rating: 4,
    user: "5c8a20d32f8fb814b56fa187",
    tour: "5c88fa8cf4afda39709c295d",
  },
  {
    _id: "5c8a39a214eb5c17645c9122",
    review:
      "Felis mauris aenean eu lectus fringilla habitasse nullam eros senectus ante etiam!",
    rating: 5,
    user: "5c8a20d32f8fb814b56fa187",
    tour: "5c88fa8cf4afda39709c2970",
  },
  {
    _id: "5c8a39b614eb5c17645c9123",
    review:
      "Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis",
    rating: 3,
    user: "5c8a20d32f8fb814b56fa187",
    tour: "5c88fa8cf4afda39709c2974",
  },
  {
    _id: "5c8a3a7014eb5c17645c9124",
    review:
      "Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis",
    rating: 5,
    user: "5c8a23c82f8fb814b56fa18d",
    tour: "5c88fa8cf4afda39709c2955",
  },
  {
    _id: "5c8a3a8d14eb5c17645c9125",
    review:
      "Iaculis mauris eget sed nec lobortis rhoncus montes etiam dapibus suspendisse hendrerit quam pellentesque potenti sapien!",
    rating: 5,
    user: "5c8a23c82f8fb814b56fa18d",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a3a9914eb5c17645c9126",
    review:
      "Netus eleifend adipiscing ligula placerat fusce orci sollicitudin vivamus conubia.",
    rating: 5,
    user: "5c8a23c82f8fb814b56fa18d",
    tour: "5c88fa8cf4afda39709c295a",
  },
  {
    _id: "5c8a3aaa14eb5c17645c9127",
    review:
      "Eleifend suspendisse ultricies platea primis ut ornare purus vel taciti faucibus justo nunc",
    rating: 4,
    user: "5c8a23c82f8fb814b56fa18d",
    tour: "5c88fa8cf4afda39709c2961",
  },
  {
    _id: "5c8a3abc14eb5c17645c9128",
    review:
      "Malesuada consequat congue vel gravida eros conubia in sapien praesent diam!",
    rating: 4,
    user: "5c8a23c82f8fb814b56fa18d",
    tour: "5c88fa8cf4afda39709c2966",
  },
  {
    _id: "5c8a3acf14eb5c17645c9129",
    review:
      "Curabitur maximus montes vestibulum nulla vel dictum cubilia himenaeos nunc hendrerit amet urna.",
    rating: 5,
    user: "5c8a23c82f8fb814b56fa18d",
    tour: "5c88fa8cf4afda39709c2970",
  },
  {
    _id: "5c8a3b1e14eb5c17645c912a",
    review:
      "Curabitur maximus montes vestibulum nulla vel dictum cubilia himenaeos nunc hendrerit amet urna.",
    rating: 5,
    user: "5c8a23de2f8fb814b56fa18e",
    tour: "5c88fa8cf4afda39709c296c",
  },
  {
    _id: "5c8a3b3214eb5c17645c912b",
    review:
      "Sociosqu eleifend tincidunt aenean condimentum gravida lorem arcu pellentesque felis dui feugiat nec.",
    rating: 5,
    user: "5c8a23de2f8fb814b56fa18e",
    tour: "5c88fa8cf4afda39709c2974",
  },
  {
    _id: "5c8a3b4714eb5c17645c912c",
    review:
      "Ridiculus facilisis sem id aenean amet penatibus gravida phasellus a mus dui lacinia accumsan!!",
    rating: 1,
    user: "5c8a23de2f8fb814b56fa18e",
    tour: "5c88fa8cf4afda39709c2966",
  },
  {
    _id: "5c8a3b6714eb5c17645c912e",
    review:
      "Venenatis molestie luctus cubilia taciti tempor faucibus nostra nisi curae integer.",
    rating: 5,
    user: "5c8a23de2f8fb814b56fa18e",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a3b7c14eb5c17645c912f",
    review:
      "Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt natoque ipsum est.",
    rating: 5,
    user: "5c8a23de2f8fb814b56fa18e",
    tour: "5c88fa8cf4afda39709c2955",
  },
  {
    _id: "5c8a3b9f14eb5c17645c9130",
    review:
      "Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt natoque ipsum est.",
    rating: 5,
    user: "5c8a24282f8fb814b56fa18f",
    tour: "5c88fa8cf4afda39709c295a",
  },
  {
    _id: "5c8a3bc414eb5c17645c9131",
    review:
      "Conubia semper efficitur rhoncus suspendisse taciti lectus ex sapien dolor molestie fusce class.",
    rating: 5,
    user: "5c8a24282f8fb814b56fa18f",
    tour: "5c88fa8cf4afda39709c2961",
  },
  {
    _id: "5c8a3bdc14eb5c17645c9132",
    review:
      "Conubia pharetra pulvinar libero hac class congue curabitur mi porttitor!!",
    rating: 5,
    user: "5c8a24282f8fb814b56fa18f",
    tour: "5c88fa8cf4afda39709c2966",
  },
  {
    _id: "5c8a3bf514eb5c17645c9133",
    review:
      "Nullam felis dictumst eros nulla torquent arcu inceptos mi faucibus ridiculus pellentesque gravida mauris.",
    rating: 5,
    user: "5c8a24282f8fb814b56fa18f",
    tour: "5c88fa8cf4afda39709c2974",
  },
  {
    _id: "5c8a3c2514eb5c17645c9134",
    review:
      "Euismod suscipit ipsum efficitur rutrum dis mus dictumst laoreet lectus.",
    rating: 5,
    user: "5c8a245f2f8fb814b56fa191",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a3c3b14eb5c17645c9135",
    review:
      "Massa orci lacus suspendisse maximus ad integer donec arcu parturient facilisis accumsan consectetur non",
    rating: 4,
    user: "5c8a245f2f8fb814b56fa191",
    tour: "5c88fa8cf4afda39709c295a",
  },
  {
    _id: "5c8a3c5314eb5c17645c9136",
    review:
      "Blandit varius finibus imperdiet tortor hendrerit erat rhoncus dictumst inceptos massa in.",
    rating: 5,
    user: "5c8a245f2f8fb814b56fa191",
    tour: "5c88fa8cf4afda39709c2961",
  },
  {
    _id: "5c8a3c6814eb5c17645c9137",
    review:
      "Tristique semper proin pellentesque ipsum urna habitasse venenatis tincidunt morbi nisi at",
    rating: 4,
    user: "5c8a245f2f8fb814b56fa191",
    tour: "5c88fa8cf4afda39709c295d",
  },
  {
    _id: "5c8a3c7814eb5c17645c9138",
    review:
      "Potenti etiam placerat mi metus ipsum curae eget nisl torquent pretium",
    rating: 4,
    user: "5c8a245f2f8fb814b56fa191",
    tour: "5c88fa8cf4afda39709c2966",
  },
  {
    _id: "5c8a3c9014eb5c17645c9139",
    review:
      "Molestie non montes at fermentum cubilia quis dis placerat maecenas vulputate sapien facilisis",
    rating: 5,
    user: "5c8a245f2f8fb814b56fa191",
    tour: "5c88fa8cf4afda39709c2970",
  },
  {
    _id: "5c8a3ca314eb5c17645c913a",
    review:
      "Velit vulputate faucibus in nascetur praesent potenti primis pulvinar tempor",
    rating: 5,
    user: "5c8a245f2f8fb814b56fa191",
    tour: "5c88fa8cf4afda39709c296c",
  },
  {
    _id: "5c8a3cdc14eb5c17645c913b",
    review:
      "Magna magnis tellus dui vivamus donec placerat vehicula erat turpis",
    rating: 5,
    user: "5c8a24822f8fb814b56fa192",
    tour: "5c88fa8cf4afda39709c2955",
  },
  {
    _id: "5c8a3cf414eb5c17645c913c",
    review:
      "Ligula lorem taciti fringilla himenaeos ex aliquam litora nam ad maecenas sit phasellus lectus!!",
    rating: 5,
    user: "5c8a24822f8fb814b56fa192",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a3d1e14eb5c17645c913d",
    review:
      "Nam ultrices quis leo viverra tristique curae facilisi luctus sapien eleifend fames orci lacinia pulvinar.",
    rating: 4,
    user: "5c8a24822f8fb814b56fa192",
    tour: "5c88fa8cf4afda39709c2961",
  },
  {
    _id: "5c8a3d3a14eb5c17645c913e",
    review: "Ullamcorper ac nec id habitant a commodo eget libero cras congue!",
    rating: 4,
    user: "5c8a24822f8fb814b56fa192",
    tour: "5c88fa8cf4afda39709c2970",
  },
  {
    _id: "5c8a3d5314eb5c17645c913f",
    review:
      "Ultrices nam dui ex posuere velit varius himenaeos bibendum fermentum sollicitudin purus",
    rating: 5,
    user: "5c8a24822f8fb814b56fa192",
    tour: "5c88fa8cf4afda39709c2974",
  },
  {
    _id: "5c8a3d8614eb5c17645c9140",
    review:
      "Ultrices nam dui ex posuere velit varius himenaeos bibendum fermentum sollicitudin purus",
    rating: 5,
    user: "5c8a24a02f8fb814b56fa193",
    tour: "5c88fa8cf4afda39709c2974",
  },
  {
    _id: "5c8a3d9b14eb5c17645c9141",
    review:
      "Vitae vulputate id quam metus orci cras mollis vivamus vehicula sapien et",
    rating: 2,
    user: "5c8a24a02f8fb814b56fa193",
    tour: "5c88fa8cf4afda39709c296c",
  },
  {
    _id: "5c8a3de514eb5c17645c9143",
    review:
      "Sem risus tempor auctor mattis netus montes tincidunt mollis lacinia natoque adipiscing",
    rating: 5,
    user: "5c8a24a02f8fb814b56fa193",
    tour: "5c88fa8cf4afda39709c2961",
  },
  {
    _id: "5c8a3e0714eb5c17645c9144",
    review:
      "Feugiat egestas ac pulvinar quis dui ligula tempor ad platea quisque scelerisque!",
    rating: 5,
    user: "5c8a24a02f8fb814b56fa193",
    tour: "5c88fa8cf4afda39709c2951",
  },
  {
    _id: "5c8a3e63e12c44188b4dbc5b",
    review:
      "Quisque egestas faucibus primis ridiculus mi felis tristique curabitur habitasse vehicula",
    rating: 4,
    user: "5c8a24a02f8fb814b56fa193",
    tour: "5c88fa8cf4afda39709c2966",
  },
];

export const user_list = [
  {
    _id: "5c8a1d5b0190b214360dc057",
    name: "Jonas Schmedtmann",
    email: "admin@natours.io",
    role: "admin",
    active: true,
    photo: "user-1.jpg",
    password: "$2a$12$Q0grHjH9PXc6SxivC8m12.2mZJ9BbKcgFpwSG4Y1ZEII8HJVzWeyS",
  },
  {
    _id: "5c8a1dfa2f8fb814b56fa181",
    name: "Lourdes Browning",
    email: "loulou@example.com",
    role: "user",
    active: true,
    photo: "user-2.jpg",
    password: "$2a$12$hP1h2pnNp7wgyZNRwPsOTeZuNzWBv7vHmsR3DT/OaPSUBQT.y0S..",
  },
  {
    _id: "5c8a1e1a2f8fb814b56fa182",
    name: "Sophie Louise Hart",
    email: "sophie@example.com",
    role: "user",
    active: true,
    photo: "user-3.jpg",
    password: "$2a$12$9nFqToiTmjgfFVJiQvjmreLt4k8X4gGYCETGapSZOb2hHa55t0dDq",
  },
  {
    _id: "5c8a1ec62f8fb814b56fa183",
    name: "Ayla Cornell",
    email: "ayls@example.com",
    role: "user",
    active: true,
    photo: "user-4.jpg",
    password: "$2a$12$tm33.M/4pfEbZF64WbFuHuVFv85v4qEhi.ik8njbud7yaoqCZpjiy",
  },
  {
    _id: "5c8a1f292f8fb814b56fa184",
    name: "Leo Gillespie",
    email: "leo@example.com",
    role: "guide",
    active: true,
    photo: hero3,
    password: "$2a$12$OOPr90tBEBF1Iho3ox0Jde0O/WXUR0VLA5xdh6tWcu7qb.qOCvSg2",
  },
  {
    _id: "5c8a1f4e2f8fb814b56fa185",
    name: "Jennifer Hardy",
    email: "jennifer@example.com",
    role: "guide",
    active: true,
    photo: hero3,
    password: "$2a$12$XCXvvlhRBJ8CydKH09v1v.jpg0hB9gVVfMVEoz4MsxqL9zb5PrF42",
  },
  {
    _id: "5c8a201e2f8fb814b56fa186",
    name: "Kate Morrison",
    email: "kate@example.com",
    role: "guide",
    active: true,
    photo: hero3,
    password: "$2a$12$II1F3aBSFDF3Xz7iB4rk/.a2dogwkClMN5gGCWrRlILrG1xtJG7q6",
  },
  {
    _id: "5c8a20d32f8fb814b56fa187",
    name: "Eliana Stout",
    email: "eliana@example.com",
    role: "user",
    active: true,
    photo: "user-8.jpg",
    password: "$2a$12$Jb/ILhdDV.ZpnPMu19xfe.NRh5ntE2LzNMNcsty05QWwRbmFFVMKO",
  },
  {
    _id: "5c8a211f2f8fb814b56fa188",
    name: "Cristian Vega",
    email: "chris@example.com",
    role: "user",
    active: true,
    photo: "user-9.jpg",
    password: "$2a$12$r7/jtdWtzNfrfC7zw3uS.eDJ3Bs.8qrO31ZdbMljL.lUY0TAsaAL6",
  },
  {
    _id: "5c8a21d02f8fb814b56fa189",
    name: "Steve T. Scaife",
    email: "steve@example.com",
    role: "lead-guide",
    active: true,
    photo: hero3,
    password: "$2a$12$q7v9dm.S4DvqhAeBc4KwduedEDEkDe2GGFGzteW6xnHt120oRpkqm",
  },
  {
    _id: "5c8a21f22f8fb814b56fa18a",
    name: "Aarav Lynn",
    email: "aarav@example.com",
    role: "lead-guide",
    active: true,
    photo: "user-11.jpg",
    password: "$2a$12$lKWhzujFvQwG4m/X3mnTneOB3ib9IYETsOqQ8aN5QEWDjX6X2wJJm",
  },
  {
    _id: "5c8a22c62f8fb814b56fa18b",
    name: "Miyah Myles",
    email: "miyah@example.com",
    role: "lead-guide",
    active: true,
    photo: hero5,
    password: "$2a$12$.XIvvmznHQSa9UOI639yhe4vzHKCYO1vpTUZc4d45oiT4GOZQe1kS",
  },
  {
    _id: "5c8a23412f8fb814b56fa18c",
    name: "Ben Hadley",
    email: "ben@example.com",
    role: "guide",
    active: true,
    photo: "user-13.jpg",
    password: "$2a$12$D3fyuS9ETdBBw5lOwceTMuZcDTyVq28ieeGUAanIuLMcSDz6bpfIe",
  },
  {
    _id: "5c8a23c82f8fb814b56fa18d",
    name: "Laura Wilson",
    email: "laura@example.com",
    role: "user",
    active: true,
    photo: "user-14.jpg",
    password: "$2a$12$VPYaAAOsI44uhq11WbZ5R.cHT4.fGdlI9gKJd95jmYw3.sAsmbvBq",
  },
  {
    _id: "5c8a23de2f8fb814b56fa18e",
    name: "Max Smith",
    email: "max@example.com",
    role: "user",
    active: true,
    photo: "user-15.jpg",
    password: "$2a$12$l5qamwqcqC2NlgN6o5A5..9Fxzr6X.bjx/8j3a9jYUHWGOL99oXlm",
  },
  {
    _id: "5c8a24282f8fb814b56fa18f",
    name: "Isabel Kirkland",
    email: "isabel@example.com",
    role: "user",
    active: true,
    photo: "user-16.jpg",
    password: "$2a$12$IUnwPH0MGFeMuz7g4gtfvOll.9wgLyxG.9C3TKlttfLtCQWEE6GIu",
  },
  {
    _id: "5c8a24402f8fb814b56fa190",
    name: "Alexander Jones",
    email: "alex@example.com",
    role: "user",
    active: true,
    photo: "user-17.jpg",
    password: "$2a$12$NnclhoYFNcSApoQ3ML8kk.b4B3gbpOmZJLfqska07miAnXukOgK6y",
  },
  {
    _id: "5c8a245f2f8fb814b56fa191",
    name: "Eduardo Hernandez",
    email: "edu@example.com",
    role: "user",
    active: true,
    photo: "user-18.jpg",
    password: "$2a$12$uB5H1OxLMOqDYTuTlptAoewlovENJvjrLwzsL1wUZ6OkAIByPPBGq",
  },
  {
    _id: "5c8a24822f8fb814b56fa192",
    name: "John Riley",
    email: "john@example.com",
    role: "user",
    active: true,
    photo: "user-19.jpg",
    password: "$2a$12$11JElTatQlAFo1Obw/dwd..vuVmQyYS7MT14pkl3lRvVPjGA00G8O",
  },
  {
    _id: "5c8a24a02f8fb814b56fa193",
    name: "Lisa Brown",
    email: "lisa@example.com",
    role: "user",
    active: true,
    photo: "user-20.jpg",
    password: "$2a$12$uA9FsDw63v6dkJKGlLQ/8ufYBs8euB7kqIQewyYlZXU5azEKeLEky",
  },
];

export const booking_list = [
  {
    _id: "5c8a24a02f8fb814b56fa193",
    user: "66c4bec74776a6ca198d7842",
    tour: "5c88fa8cf4afda39709c2955",
  },
  {
    _id: "5c8a24a02f8fb814b56fa193",
    user: "66c4bec74776a6ca198d7842",
    tour: "5c88fa8cf4afda39709c295a",
  },
  {
    _id: "5c8a24a02f8fb814b56fa193",
    user: "66c4bec74776a6ca198d7dede42",
    tour: "5c88fa8cf4afda39709c295a",
  },
];
