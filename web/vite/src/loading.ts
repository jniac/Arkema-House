const element = document.querySelector('.loading')!

export const loading = {
  set: (text: string) => {
    element.textContent = text
  },
  remove: () => {
    element.remove()
  },
}
