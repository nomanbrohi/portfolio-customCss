import Image from "next/image";

export default function about() {
  return (
    // about Section
    <section className="py-14">
      <div className="container w-full">
        <div className="flex flex-col gap-10 h-auto lg:gap-4">
          <div className="lg:h-[300px] md:space-y-0 space-y-4 w-full">
            <h1 className="IBM_Play_Sans md:border-0 border-b-2 text-center text-[80px] font-extrabold text-[#F7F197]">
              About
            </h1>
            <p className="IBM_Play_Sans text-center text-[18px] lg:text-left">
            I am deeply passionate about web development and have a strong knowledge of various programming languages. I love exploring new features and technologies, and I pride myself on being a fast learner. My enthusiasm for the IT sector drives me to continuously enhance my skills and stay updated with industry trends, enabling me to tackle challenges effectively and contribute meaningfully to any project.
            </p>
          </div>
          <div className="ml-auto flex flex-col gap-8 px-8 lg:h-[500px] lg:w-[931px] lg:gap-14 lg:px-0">
            <div className="space-y-4">
              <ul className="list-disc">
                <li>
                  <h1 className="IBM_Play_Sans text-[18px] font-bold">
                    Broadway Pizza
                  </h1>
                  <h3 className="IBM_Play_Sans text-[16px]">
                  Customer Representative
                  </h3>
                  <h3 className="IBM_Play_Sans text-[16px] font-medium">
                    2012-2014
                  </h3>
                </li>
              </ul>
              <p className="IBM_Play_Sans text-[18px]">
              At Broadway Pizza, I took on a dual role as a customer representative and supervisor. I managed customer inquiries, handled orders, and provided guidance to team members. My supervisory responsibilities included training new team members, overseeing daily operations, and ensuring high customer service standards. 
              </p>
            </div>

            <div className="space-y-4">
              <ul className="list-disc">
                <li>
                  <h1 className="IBM_Play_Sans text-[18px] font-bold">
                    Food Panda
                  </h1>
                  <h3 className="IBM_Play_Sans text-[16px]">
                  Vendor Representative
                  </h3>
                  <h3 className="IBM_Play_Sans text-[16px] font-medium">
                    2016-2017
                  </h3>
                </li>
              </ul>
              <p className="IBM_Play_Sans text-[18px]">
              In my role as a vendor representative at Foodpanda, I developed strong communication and problem-solving skills while assisting customers and vendors. I was responsible for managing inquiries, resolving issues, and ensuring a smooth operational flow. This experience enhanced my ability to work in a fast-paced environment and taught me the importance of customer service in the food delivery industry.
              </p>
            </div>
          </div>

          <div className="ml-auto flex w-full flex-col gap-8 px-8 lg:h-[650px] lg:gap-14 lg:px-0">
            <div className="IBM_Play_Sans text-center text-[60px] font-extrabold text-[#F7F197]">
              <h1>Skills</h1>
            </div>

            <div className="flex md:flex-row md:justify-center md:gap-10 flex-col items-center gap-10 md:h-1/4 w-full">
              <div className="flex flex-col justify-center items-center md:h-50 md:w-1/5 h-52 w-full md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl rounded-lg bg-white border-2 md:shadow-[15px_15px_10px_black] duration-500 hover:shadow-none hover:transition">
                <Image
                  src="/images/html.png"
                  width={80}
                  height={80}
                  alt="HTML"
                  className=""
                />
                <h1 className="mt-6 text-xl font-bold">HTML</h1>
              </div>
              <div className="flex flex-col justify-center items-center md:h-50 md:w-1/5 h-52 w-full md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl rounded-lg bg-white border-2 md:shadow-[15px_15px_10px_black] duration-500 hover:shadow-none hover:transition">
                <Image
                  src="/images/css.png"
                  width={80}
                  height={80}
                  alt="CSS"
                />
                <h1 className="mt-6 text-xl">CSS</h1>
              </div>
              <div className="flex flex-col justify-center items-center md:h-50 md:w-1/5 h-52 w-full md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl rounded-lg bg-white border-2 md:shadow-[15px_15px_10px_black] duration-500 hover:shadow-none hover:transition">
                <Image
                  src="/images/javascript.png"
                  width={80}
                  height={80}
                  alt="javascript"
                />
                <h1 className="mt-6 text-xl">JavaScript</h1>
              </div>
            </div>

            <div className="flex md:flex-row md:justify-center md:gap-10 flex-col items-center gap-10 md:h-1/4 w-full">
              <div className="flex flex-col justify-center items-center md:h-50 md:w-1/5 h-52 w-full md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl rounded-lg bg-white border-2 md:shadow-[15px_15px_10px_black] duration-500 hover:shadow-none hover:transition">
                <Image
                  src="/images/python.png"
                  width={80}
                  height={80}
                  alt="Python"
                />
                <h1 className="mt-6 text-xl">Python</h1>
              </div>
              <div className="flex flex-col justify-center items-center md:h-50 md:w-1/5 h-52 w-full md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl rounded-lg bg-white border-2 md:shadow-[15px_15px_10px_black] duration-500 hover:shadow-none hover:transition">
                <Image
                  src="/images/type.png"
                  width={80}
                  height={80}
                  alt="TypeScript"
                />
                <h1 className="mt-6 text-xl">Typescript</h1>
              </div>
              <div className="flex flex-col justify-center items-center md:h-50 md:w-1/5 h-52 w-full md:-translate-x-[8px] md:-translate-y-[8px] md:transform md:rounded-3xl rounded-lg bg-white border-2 md:shadow-[15px_15px_10px_black] duration-500 hover:shadow-none hover:transition">
                <Image
                  src="/images/nextjs.png"
                  width={80}
                  height={80}
                  alt="Next.js"
                />
                <h1 className="mt-6 text-xl">Next.Js</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
