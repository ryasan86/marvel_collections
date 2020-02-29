const createEdges = nodes => {
  return nodes.map(node => ({
    node: {
      ...node,
      thumbnail: `${node.thumbnail.path}/portrait_incredible.${node.thumbnail.extension}`
    }
  }))
}

export default createEdges
