"use client";
import React, { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaEye, FaUser } from "react-icons/fa";

const Dashboard = () => {

  // Ensure you have the correct session handling in place

  useEffect(() => {
    const checkSession = async () => {
      const session = await getServerSession();
      if (!session) {
        redirect("/login");
      }
    };
    checkSession();

  })


  const [about, setAbout] = useState(false);

  return (
    <div className="md:flex ">
      <div className="w-1/4    p-4">

        {/* Profile Image */}
        <div className="flex items-center justify-center mb-4">
          <Image src="/assets/profile.avif" width={200} height={200} alt="Profile Photo" />
        </div>
        {/* Work */}

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold mb-2">Work </h2>
            <hr className="flex-1 ml-4 border-gray-300" />
          </div>
          <ul className="space-y-2">
            <li className="my-6">
              <div className="font-medium">Frontend Developer</div>
              <div className="text-sm text-gray-600">Acme Corp &middot; 2021 - Present</div>
              <h5 className="text-sm">Dhaka, Bangladesh</h5>
            </li>
            <li>
              <div className="font-medium">UI Designer</div>
              <div className="text-sm text-gray-600">Beta Studio &middot; 2019 - 2021</div>
            </li>
          </ul>
        </section>
        {/* Skills */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold mb-2">Skills </h2>
            <hr className="flex-1 ml-4 border-gray-300" />
          </div>
          <div>
            <ul className="space-y-2 font-bold">
              <li className="text-sm">JavaScript</li>
              <li className="text-sm">React</li>
              <li className="text-sm">Next.js</li>
              <li className="text-sm">Tailwind CSS</li>
              <li className="text-sm">Node.js</li>
            </ul>
          </div>
        </section>
      </div>
      <div className="w-3/4 bg-white p-4">
        {/*Name and location  */}
        <div className="flex items-center justify-between my-4   ">
          <div>
            <div className="flex items-center space-x-4  ">
              <h1 className="text-2xl font-bold ">John Doe</h1>
              <p className="text-sm text-gray-600 flex items-center space-x-2"> <FaLocationDot />  <span>Dhaka, Bangladesh</span></p>
            </div>
            <h2 className="text-sm font-bold">Web Developer</h2>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
              <span className="ml-3 text-sm font-medium text-gray-700">Make Public</span>
            </label>
          </div>
        </div>
        {/* Ratting  */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold mb-2">Ratting </h2>
            <hr className="flex-1 ml-4 border-gray-300" />
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
            <span className="text-sm text-gray-600">(4.0)</span>
          </div>
        </div>
        {/* TimeLine And About */}
        <div className="mt-10">
            <div className="flex items-center space-x-4 mb-6">
            <div
              className={`flex items-center cursor-pointer px-3 py-1 rounded ${!about ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-700"}`}
              onClick={() => setAbout(false)}
            >
              <FaEye className="inline-block mr-2" />
              <span className="text-sm font-semibold">TimeLine</span>
            </div>
            <div
              className={`flex items-center cursor-pointer px-3 py-1 rounded ${about ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-700"}`}
              onClick={() => setAbout(true)}
            >
              <FaUser className="inline-block mr-2" />
              <span className="text-sm font-semibold">About</span>
            </div>
            </div>
            <div>
            {about ? (
              <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">About</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    Passionate web developer with 5+ years of experience in building responsive and user-friendly applications. Skilled in JavaScript, React, and UI/UX design.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 shadow-sm">
                      <span className="font-semibold w-24">Phone:</span>
                      <span>+880 1234-567890</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 shadow-sm">
                      <span className="font-semibold w-24">Email:</span>
                      <span>johndoe@email.com</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 shadow-sm">
                      <span className="font-semibold w-24">Address:</span>
                      <span>123 Main Street, Gulshan, Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 shadow-sm">
                      <span className="font-semibold w-24">Website:</span>
                      <a
                        href="https://johndoe.dev"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        johndoe.dev
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 shadow-sm">
                      <span className="font-semibold w-24">Gender:</span>
                      <span>Male</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 shadow-sm">
                      <span className="font-semibold w-24">Age:</span>
                      <span>29</span>
                    </div>
                  </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                  Completed Jobs
                  <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-semibold rounded-full px-3 py-1 shadow">
                    3
                  </span>
                </h3>
                <div className="flex flex-col gap-6">
                  {/* Job 1 */}
                  <div className="flex flex-row items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all px-6 py-5 gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-900 text-lg">Landing Page Redesign</span>
                        <span className="text-xs text-white bg-gradient-to-r from-blue-500 to-blue-400 px-3 py-1 rounded-full font-semibold shadow-sm">
                          2 months
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                        Redesigned the main landing page for a SaaS startup to improve conversions and user experience.
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-gray-500 truncate">
                          <span className="font-medium text-gray-700">Feedback:</span>
                          <span className="italic ml-1">"Excellent work, very responsive and creative!"</span>
                        </span>
                        <span className="flex items-center gap-1 text-yellow-500 font-bold text-lg ml-4">
                          ★★★★★
                          <span className="text-gray-400 text-xs ml-1 font-medium">(5.0)</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Job 2 */}
                  <div className="flex flex-row items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all px-6 py-5 gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-900 text-lg">E-commerce Dashboard</span>
                        <span className="text-xs text-white bg-gradient-to-r from-blue-500 to-blue-400 px-3 py-1 rounded-full font-semibold shadow-sm">
                          1.5 months
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                        Built a custom dashboard for an online store to manage products, orders, and analytics.
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-gray-500 truncate">
                          <span className="font-medium text-gray-700">Feedback:</span>
                          <span className="italic ml-1">"Delivered on time and exceeded expectations."</span>
                        </span>
                        <span className="flex items-center gap-1 text-yellow-500 font-bold text-lg ml-4">
                          ★★★★☆
                          <span className="text-gray-400 text-xs ml-1 font-medium">(4.5)</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Job 3 */}
                  <div className="flex flex-row items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all px-6 py-5 gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-900 text-lg">Portfolio Website</span>
                        <span className="text-xs text-white bg-gradient-to-r from-blue-500 to-blue-400 px-3 py-1 rounded-full font-semibold shadow-sm">
                          1 month
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                        Developed a modern, responsive portfolio website for a creative professional.
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-gray-500 truncate">
                          <span className="font-medium text-gray-700">Feedback:</span>
                          <span className="italic ml-1">"Great communication and quality work."</span>
                        </span>
                        <span className="flex items-center gap-1 text-yellow-500 font-bold text-lg ml-4">
                          ★★★★★
                          <span className="text-gray-400 text-xs ml-1 font-medium">(5.0)</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
