// just takes an array and spits out an object as {ORIGINAL_NAME: "original name "}

const temp = ["classic", "wotlk", "dragonflight"];

let newConst = {};

temp.forEach((item) => {
    const itemKey = item
        .toUpperCase()
        .split(" ")
        .join("_")
        .replace(/[^\w\s]/gi, "");
    newConst[itemKey] = item;
});

console.log(newConst);
