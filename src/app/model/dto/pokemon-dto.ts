class Pokemon {
    constructor() { }
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndice[];
    height: Number;
    held_items: HeldItem[];
    id: Number;
    is_default: boolean;
    location_area_encounters: String;
    moves: Moves[];
    name: String;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Types[];
    weight: number;
}


class Ability {
    constructor() { }

    name: String;
    url: String;
    is_hidden: String;
    slot: number;
}

class Form {
    name: String;
    url: String;
}


class GameIndice {
    game_index: number;
    version: any;
}


class HeldItem {
    item: any;
    version_details: any;

}


class Moves {
    move: Move;
    version_group_details: any;
}


class Move {
    name: String;
    url: String;

}

class Species {
    name: String;
    url: String;

}

class Sprites {
    back_default: String;
    back_female: String;
    back_shiny: String;
    back_shiny_female: String;
    front_default: String;
    front_female: String;
    front_shiny: String;
    front_shiny_female: String;
}

class Stat {
    base_stat: number;
    effort: number;
    stat: any;
}

class Types {
    slot: String;
    type: any;
}

export { Pokemon, Ability, Form, GameIndice, HeldItem, Moves, Move, Species, Sprites, Stat, Types };
