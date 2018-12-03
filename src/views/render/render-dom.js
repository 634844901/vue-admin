export default {
  functional: true,
  props: {
    name: String
  },
  render: (h, ctx) => {
    return h('i', {
      style: {
        color: 'pink'
      }
    }, ctx.props.name)
  }
}

