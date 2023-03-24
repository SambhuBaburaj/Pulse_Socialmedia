import React from "react";

function Profile() {

const UserData=JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      <div className="bg-gray-900 w-screen  flex justify-end">
        <div className="w-5/6  flex justify-center ">
          <div className="w-11/12 flex justify-center">
            <div className="w-11/12  m-5 flex">
              <div className="w-1/6 ">
                <img
                  src={UserData.profileImage}

                  alt="Logo"
                  className="rounded-full w-32 m-4"
                />
              </div>

              <div className="w-full">
                <div className="w-full h-10 flex justify-between">
                  <strong className="text-3xl p-5">{UserData.username}</strong>
                  <button
                    class="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-heart"></i> Edit Profile
                  </button>
                </div>
                <div className="flex">
                  <div className="text-sm p-5">{UserData.followers.length} followers</div>
                  <div className="text-sm p-5">{UserData.following.length}  following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-end">
        <div className="w-5/6   -400  flex justify-center ">
          <div className="p-4 w-11/12 border-t-2 border-gray-600  flex justify-center">
           
            <div className=" w-11/12 rounded-sm  ">
              <div className="  grid grid-cols-4 rounded-lg bg-gray-800 ">
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    alt="Logo"
                    className="rounded-sm w-52  m-4"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    alt="Logo"
                    className="rounded-sm w-52  m-4"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    alt="Logo"
                    className="rounded-sm w-52  m-4"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    alt="Logo"
                    className="rounded-sm w-52  m-4"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    alt="Logo"
                    className="rounded-sm w-52  m-4"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    alt="Logo"
                    className="rounded-sm w-52  m-4"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    alt="Logo"
                    className="rounded-sm w-52  m-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
