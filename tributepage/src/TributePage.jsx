
import Bio from "./Bio";
import Footer from "./Footer";
import Header from "./Header";
const TributePage = () => {
  return (
    <div className=' bg-gray-500/15 h-full w-screen'>
      <Header />
      <div className="xl:h-[80vh]w-screen flex items-center justify-center">
        <img src="https://love.quotes.tn/wp-content/uploads/2021/04/28-abdul-kalam-quotes-30-APJ-Abdul-Kalam-Quotes.jpg?v=1618324020" className="h-full" alt="" />
      </div>
      <Bio />
      <Footer />
    </div>
  )
}

export default TributePage
