const handleAllSmoothScrollLinksAndEls = (arrayOfNameAttrStringPrompts, post) => {
  var arrayOfListeners = []
  var arrayOfLinks = []

  for (var i = 0; i < arrayOfNameAttrStringPrompts.length; i++) {
    let link = document.querySelector(`.${arrayOfNameAttrStringPrompts[i]}Link${post._id}`)
    let el = document.getElementById(`${arrayOfNameAttrStringPrompts[i]}El${post._id}`)

    if (link) {
      arrayOfListeners[i] = link.addEventListener('click', () => {
        el.scrollIntoView({block: "center", inline: "center"})
      })
      arrayOfLinks[i] = link
    }
  }

  return [arrayOfListeners, arrayOfLinks]
}

const handleToTheTopListeners = (post) => {
  var arrayOfListeners = []
  var linkArr = []
  var linkNodeList = document.querySelectorAll(`.toTheTopLink${post._id}`)
  var el = document.querySelector(`.toTheTopEl${post._id}`)
  
  if (linkNodeList) {
    linkArr = [...linkNodeList]

    for (var i = 0; i < linkArr.length; i++) {
      arrayOfListeners[i] = linkArr[i].addEventListener('click', () => {
        el.scrollIntoView({ block: "center", inline: "center"})
      })
    }
  }

  return [arrayOfListeners, linkArr]
}

const handleGoToSectionListeners = () => {
  //eventually this needs to be dynamic. I've included numbers in words
  //in the classes of the elements as a first pass at somehow
  //making this dynamic

  var arrayOfListeners = []
  var linkArr = []
  var linkNodeList = document.querySelectorAll(`.goToSection`)
  var el = document.querySelector(`.arriveAtSection`)
  
  console.log(linkNodeList)
  if (linkNodeList) {
    linkArr = [...linkNodeList]

    for (var i = 0; i < linkArr.length; i++) {
      arrayOfListeners[i] = linkArr[i].addEventListener('click', () => {
        el.scrollIntoView({ block: "center", inline: "center"})
      })
    }
  }

  return [arrayOfListeners, linkArr]
}

const handleRemoveEventHandlers = (listenerArr) => {
  for (var i = 0; i < listenerArr[0].length; i++) {
    listenerArr[1][i].removeEventListener('click', listenerArr[0][i])
  }
}

const handleCollectSSLinkNodeNames = (post) => {
  var ssLinkNodes = document.querySelectorAll(`.smoothScrollLink${post._id}`)
  var ssLinkNodesArr = [...ssLinkNodes]
  return ssLinkNodesArr.map(node => node.getAttribute('name'))
}

const SmoothScrollUtil = {
  handleAllSmoothScrollLinksAndEls,
  handleGoToSectionListeners,
  handleToTheTopListeners,
  handleRemoveEventHandlers,
  handleCollectSSLinkNodeNames
}

export default SmoothScrollUtil;