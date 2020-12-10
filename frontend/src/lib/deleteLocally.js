export default function deleteLocally(key) {
  localStorage.setItem(key, []);
}
