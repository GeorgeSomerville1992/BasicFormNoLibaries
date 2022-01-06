const selectCurrentChoice = (selectedChoices, id) => {
  // find previous selected choice
  const previousSelectedChoice = selectedChoices.find((selectedChoice) => {
    const previousSelectedAnswer = selectedChoice.id === id;
    return previousSelectedAnswer;
  });

  // get index of previous selected choice
  const previousSelectedChoiceIndex = selectedChoices.indexOf(previousSelectedChoice);

  // delete previously selected choice
  if(previousSelectedChoiceIndex > -1) {
    selectedChoices.splice(previousSelectedChoiceIndex, 1);
  }

  return selectedChoices;
}

export default selectCurrentChoice;