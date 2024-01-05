const _heading = [
  {
    name: "Online Casinos",
    url: "/online-casinos",
  },
  {
    name: "Bonuses",
  },
  {
    name: "Guides",
  },
  {
    name: "Forum",
  },
  {
    name: "User Reviews",
  },
  {
    name: "Regulations",
  },
  {
    name: "Complaints",
  },
];

export const HEADINGS = _heading.map(({ url, name }) => ({
  name,
  url: url || `/${name.toLowerCase().split(" ").join("-")}`,
}));
