
export type userData = {
    alter: number;
    geschlecht: 'männlich' | 'weiblich';
    wohnkanton: string;
    plz: number;
    interesse?: 'Studium allgemein' | 'bfh' | 'test' | 'andere hochschule';
    aktuelleTätigkeit?: 'schülerIn' | 'studentIn' | 'berufsausbildung' | 'berufstätig' | 'sonstiges';
};

const fragebogen: userData[] = [
    {alter: 22, geschlecht: 'weiblich', wohnkanton: 'bern', plz: 3006},
    {alter: 35, geschlecht: 'männlich', wohnkanton: 'zürich', plz: 1234},
    {alter: 18, geschlecht: 'männlich', wohnkanton: 'wallis', plz: 2222, interesse: 'Studium allgemein'},
    {alter: 25, geschlecht: 'männlich', wohnkanton: 'bern', plz: 3302, interesse: 'bfh', aktuelleTätigkeit: 'berufsausbildung'},
];

export const SEED = {
    fragebogen: fragebogen,
};