export interface Customer {
	firstname: string;
    middlename: string;
    lastname: string;
    date: string;
    gender: string;
    region: string;
    country: string;
    state: string;
    city: string;
    coach: coach[];
    athlete:athlete[];
}

export interface athlete {
    sport: string;
    school_level: string;
    
    offense: string;
    defense: string;
    specialTeams: string;
    primaryposition: string;
    secondaryposition: string;
    basketball: string;
    height: string;
    weight: string;
    forty: string;
    
    shuttle: string;
    bench: string;
    squat: string;
    cline: string;
    vertical: string;
}

export interface coach {
    street: string;
    postcode: string;
}
