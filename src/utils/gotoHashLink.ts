function gotoID(id: string) {
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default gotoID;
