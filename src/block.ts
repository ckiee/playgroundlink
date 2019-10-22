import { command, Module, listener, default as CookiecordClient } from "cookiecord";
import { Message, GuildMember, User } from "discord.js";
import makeURL from "./blob";
const regex = /```(typescript|ts)\s?((.|\n)+)\s?```/g;

export default class ExampleModule extends Module {
	constructor(client: CookiecordClient) {
		super(client);
	}

	@listener({ event: "message" })
	onMsg(msg: Message) {
		const res = regex.exec(msg.content);
		if (!res) return;
		msg.reply(makeURL(res[2]));
	}
}