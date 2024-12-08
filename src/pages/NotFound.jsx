
const NotFound= () => {
  return (
    <div>
   
      <div className="flex  font-[400] font-Poppis flex-col py-20 mb-10 ">
        <div className="flex gap-3 px-[100px]   text-[1.4rem]">
          <p className="opacity-75"> Home / </p>
          <span> 404 Error</span>
        </div>

       
            <center className="flex flex-col gap-8">
                <h1 className="font-Inter font-[500] text-[11rem]">404 Not Found</h1>
                <p className="font-Poppis font-[400] text-[1.6rem]">Your visited page not found. You may go home page.</p>
                <button className="bg-[#DB4444] font-Poppis font-[500] text-[1.6rem] w-fit self-center text-tfa px-6 py-4">
                Back to home page
        </button>
            </center>
  

      </div>
    
    </div>
  );
};

export default NotFound;
