import Navbar from '@/components/Navbar'
import Allhero from '@/components/Allhero'
import Footer from '@/components/Footer'
import backgroundimage from '@/public/assets/Rectangle 1.png'
import React from 'react'
import blog1 from '@/public/assets/Rectangle 68.png'
import blog2 from '@/public/assets/Rectangle 68 (1).png'
import blog3 from '@/public/assets/Rectangle 68 (2).png'
import Image from 'next/image'
import Banifits from '@/components/Banifits'
const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Allhero src={backgroundimage} page='Blog' />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              {/* Blog Post Card */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={blog1} alt="Blog post" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Your blog post content here...</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>


              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={blog2} alt="Blog post" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Your blog post content here...</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>


              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={blog3} alt="Blog post" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Your blog post content here...</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>


              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={blog1} alt="Blog post" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Your blog post content here...</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>
              {/* Add more blog post cards as needed */}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Categories Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Marketing</a></li>
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                
              <li className="flex gap-4">
                  <Image src={blog2} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Image src={blog1} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  <Image src={blog3} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  <Image src={blog2} alt="blog image" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>
                {/* Add more recent posts as needed */}
              </ul>
            </div>
          </aside>
        </div>
      </main>
<Banifits/>
      <Footer />
    </>
  )
}

export default BlogPage