export const rings = [
  { name: "Adopt", position: 0 },
  { name: "Trial", position: 1 },
  { name: "Assess", position: 2 },
  { name: "Hold", position: 3 },
  { name: "Depricate", position: 4 }
];

export function sortedRings() {
  return rings.sort(x => x.position);
}
