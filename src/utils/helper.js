import moment from "moment";
import { useContext } from "react";
import { GiClothesline } from "react-icons/gi";
import { IoMusicalNotesOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdPets } from "react-icons/md";
import { RiSignalTowerLine } from "react-icons/ri";
import { TbBulb } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";
import { themeContext } from "../contexts/context";
const { dark } = useContext(themeContext);

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export function generateRandomNames() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const publishedDate = (publishedAt) =>
  moment(publishedAt).startOf("hour").fromNow();

export const formatViewCount = (num) => {
  if (num > 999999) return (num / 1000000).toFixed(1) + "M";
  else if (num > 99999 || num > 9999 || num > 999)
    return (num / 1000).toFixed(1) + "k";
  else {
    return num;
  }
};

// 1 - Film & Animation
// 2 - Autos & Vehicles
// 10 - Music
// 15 - Pets & Animals
// 17 - Sports
// 18 - Short Movies
// 19 - Travel & Events
// 20 - Gaming
// 21 - Videoblogging
// 22 - People & Blogs
// 23 - Comedy
// 24 - Entertainment
// 25 - News & Politics
// 26 - Howto & Style
// 27 - Education
// 28 - Science & Technology
// 29 - Nonprofits & Activism
// 30 - Movies
// 31 - Anime/Animation
// 32 - Action/Adventure
// 33 - Classics
// 34 - Comedy
// 35 - Documentary
// 36 - Drama
// 37 - Family
// 38 - Foreign
// 39 - Horror
// 40 - Sci-Fi/Fantasy
// 41 - Thriller
// 42 - Shorts
// 43 - Shows
// 44 - Trailers

export const btnList = [
  "All",
  "Music",
  "Chess",
  "Science",
  "Comedy",
  "Cricket",
  "Mixes",
  "Data Structures",
  "Trending videos",
  "Jukebox",
  "Live",
  "Neetcode",
];

export const explore = [
  {
    id: 10,
    title: "Music",
    url: "/?v=10",
    icon: <IoMusicalNotesOutline size={20} />,
  },
  {
    id: 17,
    title: "Sports",
    url: "/?v=17",
    icon: <TfiCup size={20} />,
  },
  {
    id: 22,
    title: "Blogs",
    url: "/?v=22",
    icon: <RiSignalTowerLine size={20} className={`${dark && "text-white"}`}/>,
  },
  {
    id: 28,
    title: "Technology",
    url: "/?v=28",
    icon: <TbBulb size={20} />,
  },
  {
    id: 25,
    title: "News",
    url: "/?v=25",
    icon: <IoNewspaperOutline size={20} />,
  },
  {
    id: 26,
    title: "Fashion & beauty",
    url: "/?v=26",
    icon: <GiClothesline size={20} />,
  },
  {
    id: 15,
    title: "Pets & Animals",
    url: "/?v=15",
    icon: <MdPets size={20} />,
  },
];
