const insertToDOM = (pokemon) => {
  const body = document.querySelector("body");
  const image = document.createElement("img");
  image.src = pokemon.sprites.front_default;
  body.appendChild(image);
};

const sendReq = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((responce) => responce.json())
        .then((responce) => res(responce));
    }, 2000);
  });
};

(async () => {
  try {
    const responce1 = await sendReq(1);
    insertToDOM(responce1);
    console.log(responce1);

    const responce2 = await sendReq(2);
    insertToDOM(responce2);
    console.log(responce2);

    const responce3 = await sendReq(3);
    insertToDOM(responce3);
    console.log(responce3);
    const responce4 = await sendReq(4);
    insertToDOM(responce4);
    console.log(responce4);
  } catch (error) {
    console.log(error);
  }
})();
