
import phone from "../icons/Vector (1).png";
import mail from "../icons/icons-mail.png";
const Contact = () => {
  return (
    <div>
    
      <div className="flex  font-[400] font-Poppis flex-col py-20 px-[100px] ">
        <div className="flex gap-3  text-[1.4rem]">
          <p className="opacity-75"> Home / </p>
          <span> Contact</span>
        </div>
        <div className="flex justify-between mb-20  text-[1.6rem]">
          <div className="flex shadow-lg p-20 flex-col gap-8">
            <div className="font-Poppis">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-[#DB4444] w-[40px] h-[40px] flex justify-center items-center">
                  {" "}
                  <img src={phone} alt="" />{" "}
                </div>
                <h2 className="font-[500] ">Call To Us</h2>
              </div>
              <ul className="ml-12 flex mt-8 flex-col gap-2 font-[400] ">
                <li className="">We are available 24/7, 7 days a week.s</li>
                <li className="">Phone: +8801611112222</li>
              </ul>
            </div>
            <div className="font-Poppis">
              <div className="flex items-center gap-4">
                <div className="p-2 w-[40px] rounded-full bg-[#DB4444]">
                  {" "}
                  <img src={mail} alt="" />{" "}
                </div>
                <h2 className="font-[500] ">Write To US</h2>
              </div>
              <ul className="ml-12 flex mt-8 flex-col gap-4 font-[400] ">
                <li className="">
                  Fill out our form and we will contact you within 24 hours.
                </li>
                <li className="">Emails: customer@exclusive.com</li>
                <li className="">Emails: support@exclusive.com</li>
              </ul>
            </div>
          </div>
          <div className="form  shadow-xl p-20">
            <div className="flex flex-col  gap-8">
              <div className="font-Poppis   text-[1.6rem] font-[400] flex overflow-hidden gap-4  justify-between">
                <div>
                  <input
                    placeholder="Your Name *"
                    className="bg-[#F5F5F5] px-3 py-4"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    placeholder="Your Email *"
                    className="bg-[#F5F5F5] px-3 py-4"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    placeholder="Your Phone *"
                    className="bg-[#F5F5F5] px-3 py-4"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-20 w-full justify-between">
                <div className="font-Poppis w-full flex flex-col gap-6 text-[1.6rem] font-[400] opacity-70">
                  <textarea
                    rows={10}
                    placeholder="Your Meassage"
                    className="bg-[#F5F5F5] px-3 py-4"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-10">
              <button className="border px-20 py-5 bg-[#DB4444] rounded-lg text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Contact;
