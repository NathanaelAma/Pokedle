import { Generations, Types } from "pokenode-ts";

// TODO: Add in generations urls for images

export const Urls = {
  ARTWORK_URL:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
  SVG_URL:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
};

export const generations = [
  {
    id: Generations.GENERATION_I,
    offset: 0,
    limit: 151,
  },
  {
    id: 2,
    offset: 151,
    limit: 100,
  },
  {
    id: Generations.GENERATION_III,
    offset: 251,
    limit: 135,
  },
  {
    id: Generations.GENERATION_IV,
    offset: 386,
    limit: 107,
  },
  {
    id: Generations.GENERATION_V,
    offset: 493,
    limit: 156,
  },
  {
    id: Generations.GENERATION_VI,
    offset: 649,
    limit: 72,
  },
  {
    id: Generations.GENERATION_VII,
    offset: 721,
    limit: 88,
  },
  {
    id: Generations.GENERATION_VIII,
    offset: 809,
    limit: 89,
  },
];

export const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7aC7ac",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const types = {
  normal: {
    id: Types.NORMAL,
    name: "Normal",
    color: colors.normal,
    svg: "/types/normal.svg",
  },
  fire: {
    id: Types.FIRE,
    name: "Fire",
    color: colors.fire,
    svg: "/types/fire.svg",
  },
  water: {
    id: Types.WATER,
    name: "Water",
    color: colors.water,
    svg: "/types/water.svg",
  },
  electric: {
    id: Types.ELECTRIC,
    name: "Electric",
    color: colors.electric,

    svg: "/types/electric.svg",
  },
  grass: {
    id: Types.GRASS,
    name: "Grass",
    color: colors.grass,
    svg: "/types/grass.svg",
  },
  ice: {
    id: Types.ICE,
    name: "Ice",
    color: colors.ice,
    svg: "/types/ice.svg",
  },
  fighting: {
    id: Types.FIGHTING,
    name: "Fighting",
    color: colors.fighting,
    svg: "/types/fighting.svg",
  },
  poison: {
    id: Types.POISON,
    name: "Poison",
    color: colors.poison,
    svg: "/types/poison.svg",
  },
  ground: {
    id: Types.GROUND,
    name: "Ground",
    color: colors.ground,
    svg: "/types/ground.svg",
  },
  flying: {
    id: Types.FLYING,
    name: "Flying",
    color: colors.flying,
    svg: "/types/flying.svg",
  },
  psychic: {
    id: Types.PSYCHIC,
    name: "Psychic",
    color: colors.psychic,
    svg: "/types/psychic.svg",
  },
  bug: {
    id: Types.BUG,
    name: "Bug",
    color: colors.bug,
    svg: "/types/bug.svg",
  },
  rock: {
    id: Types.ROCK,
    name: "Rock",
    color: colors.rock,
    svg: "/types/rock.svg",
  },
  ghost: {
    id: Types.GHOST,
    name: "Ghost",
    color: colors.ghost,
    svg: "/types/ghost.svg",
  },
  dragon: {
    id: Types.DRAGON,
    name: "Dragon",
    color: colors.dragon,
    svg: "/types/dragon.svg",
  },
  dark: {
    id: Types.DARK,
    name: "Dark",
    color: colors.dark,
    svg: "/types/dark.svg",
  },
  steel: {
    id: Types.STEEL,
    name: "Steel",
    color: colors.steel,
    svg: "/types/steel.svg",
  },
  fairy: {
    id: Types.FAIRY,
    name: "Fairy",
    color: colors.fairy,
    svg: "/types/fairy.svg",
  },
};
