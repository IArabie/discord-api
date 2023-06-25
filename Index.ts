import { DiscordTogether, ApplicationTargetID } from "./Functions/DiscordTogether";
import createMessage from "./Functions/Message/createMessage";

createMessage('1108305098045665282', {
    content: 'Hello World'
})

DiscordTogether('1108349699049672764', {
    target_application_id: ApplicationTargetID.Bobble,
    target_type: 2,
    temporary: true,
    max_age: 90000,
    max_uses: 0
})
