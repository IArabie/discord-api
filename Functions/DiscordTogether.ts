import axios from 'axios';
import { Token } from './Message/Enums';

export function DiscordTogether(channelId: string, options: DiscordTogetherOptions) {
    const invite = axios({
        url: `https://discord.com/api/v10/channels/${channelId}/invites`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bot ${Token}`
        },
        data: JSON.stringify(options)
    }).then((data) => {
        const { code } = data.data;
        console.log(`https://discord.com/invite/${code}`);
    })
}


interface DiscordTogetherOptions {
    max_age?: number;
    max_uses?: number;
    target_application_id: string;
    target_type: number,
    temporary: boolean;
}

export enum ApplicationTargetID {
    YouTube = '880218394199220334',
    YouTubeDev = '880218832743055411',
    Poker = '755827207812677713',
    Betrayal = '773336526917861400',
    Fishing = '814288819477020702',
    Chess = '832012774040141894',
    ChessDev = '832012586023256104',
    Lettertile = '879863686565621790',
    WordSnack = '879863976006127627',
    DoodleCrew = '878067389634314250',
    Awkword = '879863881349087252', 
    Spellcast = '852509694341283871',
    Checkers = '832013003968348200',
    PuttParty = '763133495793942528',
    Sketchheads = '902271654783242291', 
    Ocho = '832025144389533716',
    Puttpartyqa = '945748195256979606',
    Sketchyartist = '879864070101172255',
    Land = '903769130790969345',
    Meme = '950505761862189096',
    Askaway = '976052223358406656',
    Bobble = '947957217959759964',
}