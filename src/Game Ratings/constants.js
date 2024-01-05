const _name = [
  { name: "BET365 - 4.5/5" },
  { name: "JUNGLE RUMMY - 4.3/5" },
  { name: "POKER SAINT - 4.3/5" },
  { name: "BETAWAY- 4.3/5" },
  { name: "RUMMY CIRCLE- 4.3/5" },
  { name: "BET365 - 4.5/5" },
  { name: "JUNGLE RUMMY - 4.3/5" },
];

export const RATINGS = _name.map(({ name }) => ({
  name: name || `/${name.toUpperCase().split(" ").join("-")}`,
}));
