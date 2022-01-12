function youCantSpell(text) {
  return {
    without(subText) {
      console.log(text);
    },
  };
}

console.log(youCantSpell("hgdujhb").without("text"));
