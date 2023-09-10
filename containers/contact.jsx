const Contact = () => {
  return (
    <div id="contact" className=" bg_head skills ">
      <div className=" contact">
        <div className=" verticle_bg">CONTACT ME</div>
        <div>
          <div className=" header animated_underline">
            Intrested in building something extraordinary
          </div>
          <div className=" relative">
            <div class="login-box">
              <h2>New projects, freelance inquiry or even a coffee</h2>
              <form>
                <div class="user-box">
                  <input type="text" name="" required="" />
                  <label>Username</label>
                </div>
                <div class="user-box">
                  <input type="email" name="" required="" />
                  <label>Email</label>
                </div>
                <div class="user-box">
                  <textarea rows="10" cols="40" name="" required=""></textarea>
                  <label>Message</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
