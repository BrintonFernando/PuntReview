const _name = [
  "BET365 - 4.5/5",
  "JUNGLE RUMMY - 4.3/5",
  "POKER SAINT - 4.3/5",
  "BETAWAY- 4.3/5",
  "RUMMY CIRCLE- 4.3/5",
  "BET365 - 4.5/5",
  "JUNGLE RUMMY - 4.3/5",
];

export const RATINGS = _name.map((name) => ({
  name: name || `/${name.toUpperCase().split(" ").join("-")}`,
}));
