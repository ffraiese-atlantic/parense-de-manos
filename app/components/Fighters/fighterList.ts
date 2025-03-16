export interface fighterItem {
  name: string;
  id: string;
  image: string;
  country: string;
  age: number;
  height: string;
  weight: number;
  vs: string;
  nick: string;
}

// prettier-ignore
export const fighterList: fighterItem[] = [
  { name: "Casero", nick: "Casero", id: "list-Casero", country: "Argentina", age: 38, height: "1,73", weight: 69, vs: "Lorente", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/casero.png",},
  { name: "El Ruso", nick: "El Ruso", id: "list-Ruso", country: "Argentina", age: 60, height: "1,75", weight: 99, vs: "Turco", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/elruso.png",},
  { name: "Emilio", nick: "Emilio", id: "list-Emilio", country: "Argentina", age: 44, height: "1,76", weight: 80, vs: "Rober", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/emilio.png",},
  { name: "Federikita", nick: "Federikita", id: "list-Federikita", country: "Argentina", age: 24, height: "1,59", weight: 59, vs: "Marti", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/federikita.png",},
  { name: "Flor Vigna", nick: "Flor Vigna", id: "list-Vigna", country: "Argentina", age: 29, height: "1,68", weight: 59, vs: "Manuela", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/flor.png",},
  { name: "Lorente", nick: "Lorente", id: "list-Lorente", country: "España", age: 32, height: "1,75", weight: 68, vs: "Casero", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/lorente.png",},
  { name: "Luken", nick: "Luken", id: "list-Luken", country: "Argentina", age: 27, height: "1,80", weight: 83, vs: "Will", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/luken.png",},
  { name: "Manuela", nick: "Manuela", id: "list-Manu", country: "Colombia", age: 21, height: "1,60", weight: 59, vs: "Flor Vigna", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/manuela.png",},
  { name: "Maravilla", nick: "Maravilla", id: "list-Maravilla", country: "Argentina", age: 50, height: "1,80", weight: 75, vs: "Migliore", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/maravilla.png",},
  { name: "Marti", nick: "Marti", id: "list-Marti", country: "Argentina", age: 23, height: "1,62", weight: 60, vs: "Federikita", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/marti.png",},
  { name: "Mazza", nick: "Mazza", id: "list-Mazza", country: "Argentina", age: 24, height: "1,76", weight: 84, vs: "Robleis", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/mazza.png",},
  { name: "Migliore", nick: "Migliore", id: "list-Migliore", country: "Argentina", age: 44, height: "1,90", weight: 100, vs: "Maravilla", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/migliore.png",},
  { name: "Mike", nick: "Mike", id: "list-Mike", country: "México", age: 31, height: "1,70", weight: 75, vs: "Momo", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/mike.png",},
  { name: "Momo", nick: "Momo", id: "list-Momo", country: "Argentina", age: 35, height: "1,70", weight: 75, vs: "Mike", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/momo.png",},
  { name: "Rober", nick: "Rob Rob", id: "list-Rober", country: "Argentina", age: 40, height: "1,83", weight: 87, vs: "Emilio", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/rober.png",},
  { name: "Robleis", nick: "Robleis", id: "list-Robleis", country: "Argentina", age: 25, height: "1,67", weight: 72, vs: "Mazza", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/robleis.png",},
  { name: "Turco", nick: "Turco", id: "list-Turco", country: "Argentina", age: 60, height: "1,74", weight: 94, vs: "El Ruso", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/turco.png",},
  { name: "Will", nick: "Will", id: "list-Will", country: "Dominicana", age: 24, height: "1,85", weight: 93, vs: "Luken", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/will.png",},
  { name: "Yeyo", nick: "Yeyo", id: "list-Yeyo", country: "Argentina", age: 29, height: "1,66", weight: 65, vs: "Zeko", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/yeyo.png",},
  { name: "Zeko", nick: "Zeko", id: "list-Zeko", country: "Argentina", age: 25, height: "1,76", weight: 63, vs: "Yeyo", image: "https://d2elhppqcers9j.cloudfront.net/fightersimage/zeko.png",},
];
