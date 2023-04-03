export type confessionData = {
    subject: string;
    reason: string;
    details: string;
};

export type ConfessionDB = {
    confDBarray: Array<confessionData>
};

export const confessionDB: ConfessionDB = {confDBarray: []};