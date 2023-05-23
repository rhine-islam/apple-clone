import style from "../../../style/style";

import LinkBtn from "../../buttons/linkBtn";
import GiftIcon from "../../icons/giftIcon";
import ServiceProgram from "../serviceProgram/serviceProgram";

const Guide = () => {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 md:w-[1100px] gap-12 p-8">
        <div className="space-y-8 md:col-span-2">
          <h1 className={style.txtBlack2xlB}>Beware of counterfeit parts</h1>
          <p className={style.txtBlackLg}>
            Some counterfeit and third party power adapters and batteries may
            not be designed properly and could result in safety issues. To
            ensure you receive a genuine Apple battery during a battery
            replacement, we recommend visiting an Apple Store or Apple
            Authorized Service Provider. If you need a replacement adapter to
            charge your Apple device, we recommend getting an Apple power
            adapter. Also non-genuine replacement displays may have compromised
            visual quality and may fail to work correctly. Apple-certified
            screen repairs are performed by trusted experts who use genuine
            Apple parts.
          </p>
        </div>
        <div className="space-y-8 ">
          <GiftIcon />
          <h1 className={style.txtBlack2xlB}>Be aware of gift card scams</h1>
          <p className={style.txtBlackLg}>
            Be aware of scams involving Apple Gift Cards, App Store & iTunes
            Gift Cards, and Apple Store Gift Cards.
          </p>
          <LinkBtn name="Learn more" />
        </div>
        <div className="md:col-span-2">
          <ServiceProgram />
        </div>
      </div>
    </div>
  );
};

export default Guide;
