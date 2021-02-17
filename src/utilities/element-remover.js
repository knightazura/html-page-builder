const buildRemoveButton = (parentElement) => {
  let button = document.createElement("button")
  let classes = "el-remover absolute right-0 bg-red-600 rounded text-white text-xs p-2"

  button.classList.add(...classes.split(" "))
  button.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 9L9 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 9L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
  button.addEventListener("click", event => {
    let parent = event.target.closest(parentElement.tagName)
    parent.remove()
  })
  return button
}

export default buildRemoveButton