import CookiecordClient from "cookiecord";
import de from "dotenv";
import BlockModule from "./block";
de.config();

const client = new CookiecordClient({}, {});
new BlockModule(client);
client.login(process.env.TOKEN);
