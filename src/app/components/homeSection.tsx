import Project from "@/app/components/projects";
import Image from "next/image";

export default function about() {
  return (
    // about Section
    <section className="py-14">
      <div className="container w-full">
        <div className="mb-10 flex h-auto flex-col gap-10 lg:h-[900px] lg:gap-4">
          <div className="lg:h-[280px] lg:w-[900px]">
            <h1 className="IBM_Play_Sans text-center text-[80px] font-extrabold text-[#F7F197] lg:text-left">
              About
            </h1>
            <p className="IBM_Play_Sans text-center text-[18px] lg:text-left">
            I am deeply passionate about web development and have a strong knowledge of various programming languages. I love exploring new features and technologies, and I pride myself on being a fast learner. My enthusiasm for the IT sector drives me to continuously enhance my skills and stay updated with industry trends, enabling me to tackle challenges effectively and contribute meaningfully to any project.
            </p>
          </div>

          <div className="400 ml-auto flex w-full flex-col gap-8 px-8 lg:h-[850px] lg:gap-14 lg:px-0">
            <div className="IBM_Play_Sans text-center text-[60px] font-extrabold text-[#F7F197]">
              <h1>Skills</h1>
            </div>

            <div className="flex w-full flex-col items-center gap-10 md:h-1/4 md:flex-row md:justify-center md:gap-10">
              <div className="md:h-50 flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 bg-white duration-500 hover:shadow-none hover:transition md:w-1/5 md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl md:shadow-[15px_15px_10px_black]">
                <Image
                  src="/images/html.png"
                  width={80}
                  height={80}
                  alt="HTML"
                  className=""
                />
                <h1 className="mt-6 text-xl font-bold">HTML</h1>
              </div>
              <div className="md:h-50 flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 bg-white duration-500 hover:shadow-none hover:transition md:w-1/5 md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl md:shadow-[15px_15px_10px_black]">
                <Image src="/images/css.png" width={80} height={80} alt="CSS" />
                <h1 className="mt-6 text-xl font-bold">CSS</h1>
              </div>
              <div className="md:h-50 flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 bg-white duration-500 hover:shadow-none hover:transition md:w-1/5 md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl md:shadow-[15px_15px_10px_black]">
                <Image
                  src="/images/javascript.png"
                  width={80}
                  height={80}
                  alt="javascript"
                />
                <h1 className="mt-6 text-xl font-bold">JavaScript</h1>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-10 md:h-1/4 md:flex-row md:justify-center md:gap-10">
              <div className="md:h-50 flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 bg-white duration-500 hover:shadow-none hover:transition md:w-1/5 md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl md:shadow-[15px_15px_10px_black]">
                <Image
                  src="/images/python.png"
                  width={80}
                  height={80}
                  alt="Python"
                />
                <h1 className="mt-6 text-xl font-bold">Python</h1>
              </div>
              <div className="md:h-50 flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 bg-white duration-500 hover:shadow-none hover:transition md:w-1/5 md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl md:shadow-[15px_15px_10px_black]">
                <Image
                  src="/images/type.png"
                  width={80}
                  height={80}
                  alt="TypeScript"
                />
                <h1 className="mt-6 text-xl font-bold">Typescript</h1>
              </div>
              <div className="md:h-50 flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 bg-white duration-500 hover:shadow-none hover:transition md:w-1/5 md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl md:shadow-[15px_15px_10px_black]">
                <Image
                  src="/images/nextjs.png"
                  width={80}
                  height={80}
                  alt="Next.js"
                />
                <h1 className="mt-6 text-xl font-bold">Next.Js</h1>
              </div>
            </div>
          </div>
        </div>

        <section>
          <Project />
        </section>

        <section>
          <div className="flex flex-col justify-between gap-10 lg:h-[600px] lg:gap-10 mt-14">
            <div className="h-[150px] space-y-4 md:space-y-0 lg:w-full">
              <h1 className="IBM_Play_Sans border-b-2 text-center text-[80px] font-extrabold text-[#F7F197] md:border-0">
                Contact
              </h1>
            </div>
            <div className="flex flex-col-reverse justify-between md:h-[450px] md:flex-row">
              <div className="flex h-[300px] flex-col justify-around px-5 md:h-auto md:w-[40%]">
                <div>
                  <h1 className="text-[38px] font-bold uppercase text-center md:text-left">
                    reach out me
                  </h1>
                </div>
                <div>
                  <h3 className="text-center text-[18px] font-bold md:text-left md:text-[24px]">
                    +92 346 285003
                  </h3>
                  <h3 className="text-center text-[18px] font-bold md:text-left md:text-[24px]">
                    nomanbrohi9@gmail.com
                  </h3>
                </div>
                <div className="flex justify-between">
                <p className="text-base md:text-left text-center font-medium uppercase text-[#141313]">
                  10st Abd EL Aziz Al Soud, 05th Floor, Manial,
                  Roda, Cairo, Egypt.
                  </p>
                </div>
              </div>
              <div className="px- bg-gradient-to-r from-[#B86ADF] to-[#FFB147] md:w-[60%]">
                <form className="mx-auto max-w-full space-y-4 rounded-lg p-6">
                  {/* First Line: Name and Email */}
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full border-b bg-transparent p-2 text-white" //need to modified on focus
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full border-b bg-transparent p-2 text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Line: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full border-b bg-transparent p-2 text-white"
                      required
                    />
                  </div>

                  {/* Third Line: Attach File */}
                  <div className="flex items-center">
                    <label
                      htmlFor="file"
                      className="cursor-pointer rounded-md bg-transparent px-4 py-2 font-semibold uppercase text-white transition duration-300 ease-in-out hover:bg-[#F5EE84] hover:text-black"
                    >
                      Attach File
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                    />
                  </div>

                  {/* Fourth Line: Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-[#F5EE84] p-2 font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:w-[211px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
