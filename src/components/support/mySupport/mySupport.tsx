import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";
import MySupportCard1 from "./mySupportCard1";
import MySupportCard2 from "./mySupportCard2";

const MySupport = () => {
  return (
    <section className="flex flex-col items-center p-6 space-y-8 md:p-12">
      <h1 className={`${style.txtBlack5xlSB} text-center`}>My Support</h1>
      <p className={`${style.txtBlack} text-lg`}>
        Get up to date information about your Apple products including coverage,
        repairs, and much more.
      </p>
      <LinkBtn name="Sign in to My Support" />
      <div className="space-y-8 ">
        <MySupportCard1
          title="AppleCare+"
          description="Get unlimited repairs for accidental damage protection, 24/7 priority access to Apple experts, and more."
        />
        <MySupportCard2
          title="Apple Trade In"
          description="Turn an eligible device into credit towards a new one, or recycle it for free. "
        />
      </div>
      <div className="flex flex-col items-center justify-center md:w-[900px] space-y-8 text-center">
        <p className={style.txtBlack3xlSB}>Safe and reliable repairs</p>
        <p className={style.txtBlackLg}>
          At Apple, every product we make is built to last. We design durable,
          easy-to-use devices with innovative features that customers depend on,
          all while protecting their privacy and data. Customers should have
          access to safe, reliable, and secure repairs with genuine Apple parts
          if they need them. Learn more about Apple’s approach to expanding
          access to safe and reliable repairs. View (PDF)
        </p>
      </div>
    </section>
  );
};

export default MySupport;
