for (var i = 0; i < 10; i++) {
  function num(i) {
    console.log(i);
  }
  setTimeout(
    (a) => {
      num(i);
    },
    0,
    a
  );
}
