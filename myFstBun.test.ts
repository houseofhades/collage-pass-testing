import {test} from "bun:test";

test(
    "fetch test", async () =>  {
        let res = await fetch(
            "http://localhost:3000",
            {
                method: "POST",
                body: {
                    fname: "Rohith",
                    
                }
            }
        )
        .then((res) => console.log(`res is ${res}`));
        await console.log(`hello test ${JSON.stringify(res)}`);
    }
);