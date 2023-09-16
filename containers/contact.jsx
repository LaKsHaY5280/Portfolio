import Form from "@/components/form";

const Contact = () => {
  return (
    <div id="contact" className=" bg_head skills ">
        <div className=" verticle_bg">CONTACT ME</div> 
      <div className=" contact">
        <div>
          <div className=" header animated_underline">
            Intrested in building something extraordinary
          </div>
          <div className=" relative">
            <div className="form-box">
              <h2>New projects, freelance inquiry or even a coffee</h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
