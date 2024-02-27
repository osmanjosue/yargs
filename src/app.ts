import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async () => {
    await main();
})();

async function main() {
    
    const {b:base, l:limit, s:showTable}= yarg;

    ServerApp.run({base, limit, showTable});
}

/* console.log(process.argv); */

/* const [tsnode, app, ...args]= process.argv;

console.log(args); */

//clase: yargs
/* import { yarg } from "./config/plugins/args.plugin";

console.log(yarg.b) */
//clase: yargs