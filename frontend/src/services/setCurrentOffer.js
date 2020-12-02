export default function setCurrentOffer(
  id,
  selectedOffer,
  offerDetails,
  setSelectedOffer
) {
  const findOffer = offerDetails.find((element) => element.id === id);
  setSelectedOffer(findOffer);
}
