import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer bg-black text-white">
            <div className='footer-first-part flex flex-col lg:flex-row justify-between mx-auto max-w-7xl px-4'>
                <div className='footer-form p-4 lg:p-8 lg:w-1/2'>
                    <span className="block text-lg font-semibold">BE THE FIRST TO KNOW</span>
                    <div>
                        <span className="block pt-2 lg:pt-4">Sign up for updates and exclusive offers</span>
                    </div>
                    <div className='form mt-4'>
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full lg:w-64 h-8 " />
                        {/* Submit button */}
                        <button className="btn btn-primary ml-2 border border-gray-400 text-gray-400 rounded p-1 lg:p-2">SUBSCRIBE</button>
                    </div>
                </div>
                <div className='footer-ct block lg:w-1/2'>
                    <div className='block items-center p-4'>
                        <h3 className="text-lg font-semibold">CONTACT US</h3>
                        <span>+91566565656</span>
                        <p>xyz@1234floter.com</p>
                    </div>
                    <div className='p-4'>
                        <h3 className="text-lg font-semibold">CURRENCY</h3>
                        <div className="mr-4 flex items-center">
                            <Image
                                src="/images/United States of America (US).png"
                                width={30}
                                height={40}
                                alt="USA Flag"
                            />
                            <span className="ml-2">USA</span>
                        </div>
                        <span className="block text-xs">Tranctions will be completed in euros and a currency refrence is available on hover </span>
                    </div>
                </div>
            </div>

            <hr className="mt-6 w-5/6 mx-auto h-px bg-gray-400" />


            <div class=" bg-black text-white">
                <div class="mx-auto w-full max-w-screen-xl">
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 px-4 py-6 lg:py-10">
                        <div>
                            <h2 class="mb-6 text-base font-semibold  uppercase dark:text-white">Company</h2>
                            <ul class=" font-medium">
                                <li class="mb-4">
                                    <a href="#" class=" hover:underline">About</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Careers</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Brand Center</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-base font-semibold  uppercase dark:text-white">Help center</h2>
                            <ul class=" font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Discord Server</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Twitter</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Facebook</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='block '> 
                            <div>
                                <h2 class="mb-6 text-base font-semibold  uppercase text-white">Social</h2>
                                <div className="grid grid-flow-col gap-1">
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                </div>

                            </div>
                            <div className='pt-8'>
                                <h2 class="mb-6 text-base font-semibold  uppercase text-white">META MUSE ACCEPTS</h2>
                                <ul class="text-gray-500  font-medium flex ">
                                    <li class="mb-4 px-2">
                                        <Image
                                            src="/images/accepts2.png"
                                            width={30}
                                            height={40}
                                        />
                                    </li>
                                    <li class="mb-4 px-2">
                                        <Image
                                            src="/images/accepts2.png"
                                            width={30}
                                            height={40}
                                        />
                                    </li>
                                    <li class="mb-4 px-2">
                                        <Image
                                            src="/images/accepts2.png"
                                            width={30}
                                            height={40}
                                        />
                                    </li>
                                    <li class="mb-4 px-2">
                                        <Image
                                            src="/images/accepts2.png"
                                            width={30}
                                            height={40}
                                        />
                                    </li>
                                    <li class="mb-4 px-2">
                                        <Image
                                            src="/images/accepts2.png"
                                            width={30}
                                            height={40}
                                        />
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </footer>


    );
}

export default Footer;
