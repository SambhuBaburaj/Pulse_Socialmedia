import { Fragment, useState } from "react";

import { Button } from "@material-tailwind/react";
import { SharePost } from "../../Api/APIcalls";
import axios from "axios";

export default function Example({ setMediaModal, MediaModal }) {
  const [ViewImage, setViewImage] = useState();
const [Image,SetImage]=useState()
const [Disc,setDisc]=useState('')
const [ PostErr,setPostErr]=useState(false)
  //upload Image

  const UploadImage = (e) => {
    console.log(e);
    setViewImage(URL.createObjectURL(e.target.files[0]));
    setPostErr(false)
SetImage(e.target.files[0])
  };

  const close = () => {
    setMediaModal(false);

  
  };
  //submit control
  const handleSubmit = async (e) => {
    e.preventDefault();
if(Image)
{
  let formData = new FormData();
  formData.append("file",Image);
  formData.append('PostDIsc',Disc)
  // console.log(formData,'this is form data');
    let data =await SharePost(formData).then((data)=>
    {

setMediaModal(false)
    });
}
else{
setPostErr(true)

}



  };

  return (
    <div
      // onClick={() => {
      //   setMediaModal(false);
      // }}
      className="  bg-gray-700/[.8] fixed inset-0 z-50   "
    >
      <div className="  flex h-screen justify-center items-center ">
        <div class="flex items-center justify-between">
          <div class=" opacity-100 border-0 rounded-lg shadow-lg relative flex flex-col w-full min-w-[400px] bg-black outline-none focus:outline-none">
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              class="relative p-6 "
            >

              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Add Caption{" "}
              </label>

              <input onChange={(e)=>
              {
                setDisc(e.target.value)
                setPostErr(false)
              }}
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="here......"
                required
              />
              <br />
             {PostErr? <label className="text-red-500" htmlFor="">please upload a image</label>:''}
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Upload Image{" "}
              </label>

              {ViewImage ? (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  class="flex items-center justify-center w-full"
                >
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64  "
                  >
                    <div class="flex flex-col items-center justify-center pt-9 pb-6">
                      <img
                        className=" border  w-full h-64 mb-3 text-gray-400"
                        src={ViewImage}
                        alt=""
                      />
                    </div>
                    <input
                      onChange={(event) => {
                        UploadImage(event.target.files);
                      }}
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                    />
                  </label>
                </div>
              ) : (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  class="flex items-center justify-center w-full"
                >
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        photos or Videos
                      </p>
                    </div>
                    <input
                      onChange={UploadImage}
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
            <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                onClick={() => {
                  setMediaModal(false);
                }}
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Close
              </button>
              <Button onClick={handleSubmit} color="green">
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
