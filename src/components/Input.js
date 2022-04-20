export default function Input({ label, id, ...rest }) {
  return <section class="input-group">
    <input
      id={id}
      {...rest}
    />
    <label for={id}>{label}</label>
  </section>
}
