

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear}</p>
        <p>{length}{length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer