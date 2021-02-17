const build = store => {
  // Built page
  const rootContainer = store.getters.pageBuilt
  const mainDropZone = document.getElementById("main-drop-zone")

  const copiedMdz = mainDropZone.cloneNode(true)
  
  // Remove marker
  const allMcs = copiedMdz.querySelectorAll(".modified-component")
  allMcs.forEach(el => el.classList.remove("modified-component--marker"))
  // Remove element remover button
  const allRemoverButton = copiedMdz.querySelectorAll(".el-remover")
  allRemoverButton.forEach(el => el.remove())
  
  // For page built / preview
  rootContainer.innerHTML = copiedMdz.innerHTML

  // Save built page
  store.commit("buildRealPage", rootContainer)

  return mainDropZone
}

export default build