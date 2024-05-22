import "../app/globals.css"; 

const Loader = ({ text }: { text?: string}) => {
  return (
    <div id="preloder">
        <h1 className="text-4xl">{text}</h1>
        <div className="loader" />
    </div>
  )
}

export default Loader