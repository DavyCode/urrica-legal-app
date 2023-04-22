import Button from "../Button";

interface IProps {
  handlePostAuthorization: () => void
}

const RightStat:React.FC<IProps> = ({handlePostAuthorization = () => {}}) => {
    return (
      <>
        <div className="md:hidden w-10 h-10 rounded-full flex justify-center items-center text-white fixed right-2 bottom-4 bg-[#FAD360] hover:bg-[#D6B01B] text-2xl cursor-pointer shadow animate-pulse hover:animate-bounce" onClick={() => 
                handlePostAuthorization()
              }>+</div>
          <div className="hidden md:block mx-auto md:w-[26%] bg-white md:fixed right-2 top-30 order-first">
            <Button
              variant="primary"
              type="submit"
              value="Create post"
              handleClick={() => handlePostAuthorization()}
              additionalClassname={
                "w-full shadow md:mt-5 py-2 h-10 font-bold rounded-full text-xs md:text-sm text-[#050505] mr-2 md:mr-0 bg-[#EFECE2]"
              }
            />
            <br />
            <div className="w-full h-fit border border-[#F1F1F1] rounded-lg mt-3 md:mt-0 overflow-hidden">
              <div className="text-color flex justify-center items-center bg-[#FAD360] font-bold w-full py-6 mb-5">
                Urrica Community
              </div>
              {/* <div className="flex justify-evenly w-full mb-10">
                <div className="flex flex-col text-center">
                  <h2 className="text-xl font-bold text-color">1k</h2>
                  <span className="text-sm">Members</span>
                </div>
                <div className="flex flex-col text-center">
                  <h2 className="flex items-center text-xl font-bold text-color">
                    <span className="animate-ping inline-block bg-[#19C07A] rounded-full h-1 w-1"></span>
                    200
                  </h2>
                  <span className="text-sm">Online</span>
                </div>
                <div className="flex flex-col text-center">
                  <h2 className="text-xl font-bold text-color">12k</h2>
                  <span className="text-sm">Posts</span>
                </div>
              </div> */}
            </div>
          </div>
        </>
    )
}

export default RightStat
