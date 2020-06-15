const fasticons = () => {
  let i = document.querySelectorAll(".icon");
  for (let x = 0; x < i.length; x++) {
    i[x].closest(".icon").classList.add(i[x].outerHTML.match(/(?<=#)(.*)(?=")/g));
  }
}; fasticons();