export function buildGreeting(name) {
  const paragraph = document.createElement('p')
  paragraph.textContent = `Hello ${name}!`
  return paragraph
}