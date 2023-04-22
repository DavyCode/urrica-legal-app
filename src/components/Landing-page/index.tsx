import Image from "next/image";
import Link from "next/link";

import Button from "../Button/index";

import Logo from "../../svgs/logo.svg";
import Avatars from "../../svgs/avatars.svg";
import Facebook from "../../svgs/facebook_sub.svg";
import Instagram from "../../svgs/instagram_sub.svg";
import Twitter from "../../svgs/twitter_sub.svg";

const LandingPage = (): JSX.Element => {
  // const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col mx-auto h-fit items-center bg-[#FAF1CC] px-4 md:px-0'>
        <div className='w-full md:w-3/4 md:mx-auto pt-5 h-10 justify-start mb-14 md:mb-8'>
          <Image src={Logo} alt='logo' width={147} height={40} />
        </div>
        <div className='flex item-center flex-col'>
          <h1 className='text-[35px] md:text-[56px] text-center md:w-[744px] font-medium leading-tight mb-4 md:mb-0 text-black mt-6 md:mt-0'>
            Helping <span className='text-[#E6B800]'>Law</span> Firms Relate with Clients in a Flexible Manner
          </h1>
          <div className='flex justify-center w-[307px] md:w-[400px] text-base font-normal md:h-[90px] mx-auto text-center md:mt-3 mb-6 md:mb-2 leading-6 text-black'>
            Lorem ipsum dolor sit amet consectetur. Convallis id ac risus morbi volutpat faucibus sit elementum.
            Vestibulum orci coi.
          </div>
          <Button
            variant='primary'
            value='Join the wait list'
            handleClick={() => {}}
            disabled={false}
            additionalClassname='rounded-lg bg-[#E6B800] hover:bg-[#ECA82D] text-black hover:text-white flex items-center justify-center w-full md:w-[343px] py-4 md:h-11 mx-auto font-medium text-base'
            type={"button"}
          />
          <div className='flex md:w-1/4 mx-auto flex-col text-center justify-center mt-4 md:mt-2'>
            <Image src={Avatars} alt='avatars' height={32} className='mx-auto' />
            <p className='text-sm font-normal mt-2 text-black'>500+ users joined the waitlist</p>
          </div>
          <ul className='flex font-normal text-lg text-center mt-6 mb-10 md:mb-2 gap-2 w-full md:w-2/4 mx-auto justify-center'>
            <li>
              <Link href='/'>
                <Image src={Facebook} alt='Facebook' width={38} height={38} />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <Image src={Instagram} alt='Instagram' width={38} height={38} />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <Image src={Twitter} alt='Twitter' width={38} height={38} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full mx-auto py-3 md:py-2 border-t text-center text-white bg-[#2E2500] '>
        Copyright <span>&copy;</span>2022 urrica
      </div>
    </>
  );
};

export default LandingPage;
