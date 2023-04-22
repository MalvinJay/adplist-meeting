/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import { Button } from '@alpha/ui';
import Link from 'next/link';
import { LogOut, CheckCircle, XCircle } from 'react-feather';

/* eslint-disable-next-line */

export function UserProfile({ user }) {

  return (
    <div className="profile-page">
      <section className="relative block h-[500px]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{backgroundImage: `url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')`}}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]" style={{transform: 'translateZ(0px)'}}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative w-full">
                    <img
                      src={user.picture || "https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"}
                      className="absolute right-[25%] shadow-xl rounded-full h-auto align-middle border-none -my-16 -ml-20 lg:-ml-16 w-[150px]"
                      alt="pic"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0 flex justify-end">
                    <Link href="/api/auth/logout">
                      <Button className='btn-primary !bg-red-400'>
                        <LogOut />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0</span><span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0</span><span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0</span><span className="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-0 text-blueGray-700">
                  {user?.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  <i className='opacity-50'>{user.nickname && `@${user.nickname}`}</i>
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  {user.email_verified ?
                    <div className='flex justify-center'><CheckCircle /> <span className='pl-2 font-bold'>Verified</span></div>
                    :
                    <div className='flex justify-center'><XCircle /> <span className='pl-2 font-bold'>Not Verified</span></div>
                  }
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, distinctio obcaecati sint quod quia numquam et qui dolore possimus laboriosam delectus blanditiis sunt quasi eaque modi voluptatibus maxime. Debitis, odio.
                    </p>
                    <a href="#pablo" className="font-normal text-pink-500">Show more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
