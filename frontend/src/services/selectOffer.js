export default function selectOffer(id, offerDetails, setSelectedOffer) {
  const findOffer = offerDetails.find((element) => element.id === id);
  setSelectedOffer(findOffer);
}
