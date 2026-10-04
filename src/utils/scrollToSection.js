// Shared smooth-scroll handler for in-page anchor links used across home page sections
export function scrollToSection(id) {
  return function handleScrollClick(event) {
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return

    window.history.pushState(null, '', `#${id}`)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
