
import { PiHandsPrayingThin } from "react-icons/pi";
const Header = () => {
  return (
    <div className="h-[20vh] lg:h-[35vh]">
          <div className="pt-[50px]">
              <div className="flex justify-center items-center py-1" >
                  <PiHandsPrayingThin className="lg:text-6xl" />
              </div>
              <section className="h-[100px] text-center">
                  <p className="text-[12px] lg:text-[22px]">a Tribut to </p>
                  <h1 className="font-bold lg:text-[34px]">A P J Abdul Kalam</h1>
                  <p className="text-[12px]font lg:text-[22px] font-bold">Former President of India</p>
                  <p className="text-[10px]  lg:text-[18px]">1931-2015</p>
              </section>
          </div>
    </div>
  )
}

export default Header
