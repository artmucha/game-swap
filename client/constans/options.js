export const platform = [
  {
    name: 'Wybierz platformę',
    value: {label: '', name: ''},
    default: true,
  },
  {
    name: 'PlayStation 5',
    value: {maker: 'playstation', name: 'playstation-5', label: 'ps5'},
  },
  {
    name: 'PlayStation 4',
    value: {maker: 'playstation', name: 'playstation-4', label: 'ps4'},
  },
  {
    name: 'PlayStation 3',
    value: {maker: 'playstation', name: 'playstation-3', label: 'ps3'},
  },
  {
    name: 'PlayStation 2',
    value: {maker: 'playstation', name: 'playstation-2', label: 'ps2'},
  },
  {
    name: 'PlayStation Vita',
    value: {maker: 'playstation', name: 'playstation-vita', label: 'psvita'},
  },
  {
    name: 'PlayStation Portable',
    value: {maker: 'playstation', name: 'playstation-portable', label: 'psp'},
  },
  {
    name: 'Xbox Series X/S',
    value: {maker: 'xbox', name: 'xbox-series-x', label: 'xsx'},
  },
  {
    name: 'Xbox One',
    value: {maker: 'xbox', name: 'xbox-one', label: 'xone'},
  },
  {
    name: 'Xbox 360',
    value: {maker: 'xbox', name: 'xbox-360', label: 'x360'},
  },
  {
    name: 'Xbox',
    value: {maker: 'xbox', name: 'xbox', label: 'xbox'},
  },
  {
    name: 'Switch',
    value: {maker: 'nintendo', name: 'nintendo-switch', label: 'switch'},
  },
  {
    name: 'WII',
    value: {maker: 'nintendo', name: 'nintendo-wii', label: 'wii'},
  },
  {
    name: 'GameCube',
    value: {maker: 'nintendo', name: 'nintendo-game-cube', label: 'gamecube'},
  },
  {
    name: '3DS',
    value: {maker: 'nintendo', name: 'nintendo-3ds', label: '3ds'},
  },
  {
    name: 'DualScreen',
    value: {maker: 'nintendo', name: 'nintendo-dual-screen', label: 'nds'},
  },
  {
    name: 'PC',
    value: {maker: 'pc', name: 'pc', label: 'pc'},
  },
];

export const language = [
  {
    name: 'Wybierz język',
    value: '',
    default: true,
  },
  {
    name: 'Polski',
    value: 'pl'
  },
  {
    name: 'Angielski',
    value: 'en'
  },
  {
    name: 'Niemiecki',
    value: 'de'
  },
  {
    name: 'Inny',
    value: 'other'
  }
];

export const state = [
  {
    name: 'Określ stan płyty',
    value: '',
    default: true,
  },
  {
    name: 'Nowa',
    value: 'new'
  },
  {
    name: 'Idealny',
    value: 'perfect'
  },
  {
    name: 'Bardzo dobry',
    value: 'verygood'
  },
  {
    name: 'Dobry (kilka rys)',
    value: 'good'
  },
  {
    name: 'Porysowana',
    value: 'scratch'
  }
];