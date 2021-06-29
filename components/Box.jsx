export default function Box(props) {
  let [t, r, b, l] = [0, 0, 0, 0]
  ;({ t, r, b, l } = props)
  return (
    <div
      styles={{
        marginTop: t + 'px',
        marginRight: r + 'px',
        marginBottom: b + 'px',
        marginLeft: l + 'px',
      }}
    >
      {props.children}
    </div>
  )
}
