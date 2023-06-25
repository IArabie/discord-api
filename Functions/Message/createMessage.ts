import axios from 'axios';
import { MessageOptions, Token } from './Enums';

export default async function createMessage(channelId: string, options: MessageOptions) {
    axios({
        url: `https://discord.com/api/v10/channels/${channelId}/messages`,
        method: 'POST',
        headers: {
            Authorization: `Bot ${Token}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(options)
    }).then((data) => {
        console.log(data.data);
    })
}