// helloWorld.js
export const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
};

export const message = async () => {
    const msg = await helloWorld();
    console.log(msg);
};

