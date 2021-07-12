import React from "react";
import "./style.css";

const Try = () => {
  return (
    <div>
      <h2>Message</h2>
      <div class="profile_img">
                  <div class="avatar-upload">
                    <div class="avatar-edit">
                      <input
                        id="imageUpload"
                        type="file"
                        name="avatar"
                        // onChange={selectImageToUpload}
                      />
                      <label for="imageUpload"></label>
                    </div>
                    <div class="avatar-preview">
                      <div
                        id="imagePreview"
                        // style={{ backgroundImage: `url(${info.avatar})` }}
                      ></div>
                    </div>
                  </div>
                </div>
    </div>
  );
};

export default Try;
