<template>
  <div class="p-5 h-screen w-[90%] bg-gray-200 mx-auto">
    <div class=" h-full bg-white flex flex-col rounded-xl overflow-hidden shadow-xl">
      <!-- navbar -->
      <div class=" border-b px-5 py-1 flex justify-between items-center">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="-149.1 -248.49675 1292.2 1490.9805">
                    <g transform="translate(-15 -11.5)">
                        <linearGradient y2="1005.5" x2="512" y1="11.5" x1="512" gradientUnits="userSpaceOnUse" id="a">
                            <stop offset="0" stop-color="#00b2ff"/>
                            <stop offset="1" stop-color="#006aff"/>
                        </linearGradient>
                        <path
                            d="M512 11.5c-280 0-497 205.1-497 482.1 0 144.9 59.4 270.1 156.1 356.6 8.1 7.3 13 17.4 13.4 28.3l2.7 88.4c.9 28.2 30 46.5 55.8 35.2l98.6-43.5c8.4-3.7 17.7-4.4 26.5-2 45.3 12.5 93.6 19.1 143.9 19.1 280 0 497-205.1 497-482.1S792 11.5 512 11.5z"
                            fill="url(#a)" fill-rule="evenodd" clip-rule="evenodd"/>
                        <path
                            d="M213.6 634.6l146-231.6c23.2-36.8 73-46 107.8-19.9l116.1 87.1c10.7 8 25.3 7.9 35.9-.1l156.8-119c20.9-15.9 48.3 9.2 34.2 31.4L664.5 614c-23.2 36.8-73 46-107.8 19.9l-116.1-87.1c-10.7-8-25.3-7.9-35.9.1L247.8 666c-20.9 15.9-48.3-9.2-34.2-31.4z"
                            fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/>
                    </g>
                </svg>
            </span>
        <!-- search -->
        <div class=" w-1/2 relative focus-within:shadow-lg" x-data="{ search : false }">
          <div class="flex items-center w-full focus-within:border px-3 py-2  focus-within:border-b-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300 mr-5" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input type="text" placeholder="Search.."
                   class=" w-full outline-none placeholder:text-slate-300 font-semibold">
          </div>
          <!-- alpine js  -->
        </div>
        <!-- profile -->
        <div class="flex space-x-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400 " fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <img src="https://source.unsplash.com/random/500x500/?face" class="h-10 w-10 rounded-full" alt="">

        </div>

      </div>
      <!-- body -->
      <div class="h-full flex">
        <!-- slidebar 1 -->
        <div class="h-full w-64 border-r pt-10 px-5">
          <p class="text-xs font-medium text-gray-400">MAIN</p>
          <!-- menu-item -->
          <div
              class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Dashboard
          </div>

          <p class="text-xs font-medium text-gray-400 mt-8">APPLICATIONS</p>
          <div
              class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">

              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

            </svg>
            Calender
          </div>

          <div class="mt-4 py-1.5 text-sm font-medium  text-blue-500 group cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5   mr-4  stroke-blue-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>

            </svg>
            Messages
          </div>

          <div
              class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">


              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>


            </svg>
            Contacts
          </div>

          <div
              class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">

              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>

            </svg>
            Team Members
          </div>

          <div
              class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">

              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
            </svg>
            Projects
          </div>

          <div
              class="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">

              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            Job Listing
          </div>


        </div>
        <!-- sidebar 2 -->
        <div class="h-full w-96 bg-slate-50 border-r flex flex-col">
          <div class="h-16 border-b px-4 flex items-center justify-center space-x-4">
            <div class="px-4 py-4 border-b-4 border-b-blue-500">All</div>
            <div class="px-4 py-4 ">Archived</div>
          </div>
          <div class="h-full">

            <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
              <img
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="">
              <div class="ml-4">
                <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                </p>
                <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                  available...</p>
              </div>
            </div>

            <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
              <img
                  src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                  class="h-12 w-12 border-2 border-white rounded-full" alt="">
              <div class="ml-4">
                <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                </p>
                <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
              </div>
            </div>

            <div
                class="px-5 py-4   flex items-center bg-white cursor-pointer border-l-4 border-l-blue-500 border-t border-b">
              <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500 "
                  class="h-12 w-12 border-2 border-white rounded-full" alt="">
              <div class="ml-4">
                <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Mircel Jones</p>
                <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Ok, Thanks.</p>
              </div>
            </div>

            <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
              <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="">
              <div class="ml-4">
                <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Uran Poland</p>
                <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">We own hidden
                  lake..</p>
              </div>
            </div>

            <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
              <img
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="">
              <div class="ml-4">
                <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                </p>
                <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                  avaliable...</p>
              </div>
            </div>

            <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
              <img
                  src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                  class="h-12 w-12 border-2 border-white rounded-full" alt="">
              <div class="ml-4">
                <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                </p>
                <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full h-full flex flex-col">
          <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
            <div class="flex items-center">
              <img class="h-10 w-10 overflow-hidden rounded-full"
                   src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                   alt="">
              <p class="font-semibold ml-3 text-slate-600">Mircel Jones</p>
            </div>
            <div class="flex items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
              </svg>

            </div>
          </div>
          <div class="h-full px-10 py-4 overflow-auto scrollbar-thin">
            <!-- message container -->
            <div class="text-center my-5" id="message-container">
              <hr class="-mb-3">
              <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Wednesday, Feburary
                            5</span>
            </div>
            <!-- messages -->
            <div v-for="(item, index) in 4" :key="index">
              <HackathonLeftMessageComponent
                  :name="answerMessages[index].name"
                  :date-string="answerMessages[index].dateString"
                  :text="answerMessages[index].text"
                  :image="answerMessages[index].image"
              />
              <HackathonRightMessageComponent
                  :name="responseMessages[index].name"
                  :date-string="responseMessages[index].dateString"
                  :text="responseMessages[index].text"
                  :image="responseMessages[index].image"
              />
            </div>

            <div class="text-center  my-5">
              <hr class="-mb-3">
              <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                            5</span>
            </div>
            <!-- messages -->
            <div class="w-full flex flex-start">
              <div class="w-1/2">
                <div class="flex items-center">
                  <img class="h-5 w-5 overflow-hidden rounded-full"
                       src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                       alt="">
                  <p class="font-semibold ml-3 text-sm text-slate-600">Hogeschool PXL<span
                      class="text-slate-400 text-xs">3:21 PM</span></p>
                </div>

                <div class="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                  <p class=" text-sm text-slate-500">
                    Ok, bedankt voor de info :-)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="  w-full  px-5 py-3">
            <div
                class="h-12 flex justify-between px-3 items-center border border-transparent bg-slate-50 focus-within:border-slate-300 rounded-lg">
              <input type="text" class="w-full px-3 bg-transparent outline-none placeholder:text-slate-400"
                     placeholder="Type your message">
              <div class="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import HackathonLeftMessageComponent from "./HackathonLeftMessageComponent.vue";
import HackathonRightMessageComponent from "./HackathonRightMessageComponent.vue";

const answerMessages = [
  {
    name: 'Hogeschool PXL ',
    dateString: "3:45 PM",
    text: "Klinkt wel leuk! Ben je gewoon de dag zelf in de vroege ochtend naar daar gegaan?",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    name: 'Hogeschool PXL ',
    dateString: "4:03 PM",
    text: "Wat heb je daar dan allemaal gedaan?",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    name: 'Hogeschool PXL ',
    dateString: "4:17 PM",
    text: "Hoe zag de middag er verder uit?",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    name: 'Hogeschool PXL ',
    dateString: "6:51 PM",
    text: "Wat heb je nog verder in de namiddag gedaan?",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
]

const responseMessages = [
  {
    name: 'Me',
    dateString: "3:47 PM",
    text: `Mike en ik hadden vooraf besloten om de avond voor de hackathon al naar Antwerpen te vertrekken. Dit leek ons aangenamer, aangezien het evenement om 8:00 uur begon en we dus vroeg uit bed moesten. Daarnaast bood het ons ook een mooie opportuniteit om wat aan teambuilding te doen en er een leuke uitstap van te maken. De dag ervoor hadden we nog les, dus vertrokken we in de avond richting Antwerpen. We verkenden samen de stad en gingen daarna uit eten. Oorspronkelijk wilden we ook een activiteit doen, maar waren we zo vermoeid door het schoolwerk van de afgelopen weken dat we uiteindelijk besloten om rustig in het hotel te ontspannen.<br><br>
           De volgende ochtend vertrokken we richting de hackathon. Bij aankomst zagen we meteen veel bekende gezichten van Hogeschool PXL, die ook deelnamen aan hetzelfde evenement. Enkele deelnemers hadden zich ook ingeschreven voor hetzelfde thema als wij.
`,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    name: 'Me',
    dateString: "4:08 PM",
    text: `Om 9:00 uur kregen we een korte briefing over het dagprogramma en de verwachtingen. Vervolgens werden we in onze teams verdeeld en kregen we enkele coaches toegewezen. Na de briefing begaven we ons naar ons lokaal om aan de hackathon te beginnen. Daar kregen we verdere uitleg over de opdrachten. Tijdens de hackathon moesten we acht opdrachten voltooien, elk met een verschillende moeilijkheidsgraad: easy, medium of difficult. Om een opdracht op te lossen, moesten we eerst een tekst ontcijferen en op basis daarvan een geschikt algoritme in C# (.NET) programmeren. Aan het einde van de dag presenteerden we onze oplossingen aan de groep. De jury bepaalde de winnaar op basis van het aantal voltooide opdrachten en de kwaliteit van de presentatie. Daarnaast werd er een publieksfavoriet verkozen. Beide winnaars ontvingen een mooie prijs.<br><br>
Om 9:30 uur gingen Mike en ik direct aan de slag. We hadden vooraf geen strategie bepaald en besloten samen elke opdracht te bespreken en op te lossen. We begonnen met een "gemakkelijke" opdracht om op te warmen. Dit bleek echter een flinke uitdaging te zijn en werd uiteindelijk de opdracht waar we de meeste tijd aan besteedden. De opdracht vereiste het schrijven van een wiskundig algoritme dat een berekening maakte op basis van de afgelegde afstand van een duiker. De duiker kon zich in vier richtingen bewegen (links, rechts, onder, boven), waarbij elke richting een specifieke afstand had. We begrepen de vraag niet goed, en zelfs na meerdere keren de coach om uitleg te vragen, was het ons nog steeds niet duidelijk welke berekening we moesten maken. Na enkele uren vast te hebben gezeten en een korte pauze te hebben genomen, besloten Mike en ik onze aanpak te wijzigen. We splitsten ons op om verschillende opdrachten afzonderlijk aan te pakken, zodat we de verloren tijd konden inhalen.
`,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    name: 'Me',
    dateString: "5:12 PM",
    text: `Rond het middaguur kregen we lunch aangeboden die bestond uit verschillende broodjes en soep. Dit moment gebruikten we ook om bij te praten met de andere deelnemers van PXL en even te ontspannen. Hoewel velen goed vorderden met de opdrachten, was er ook wel wat frustratie bij sommigen omdat ze bepaalde opdrachten niet konden oplossen. Dat was bij ons ook het geval.`,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    name: 'Me ',
    dateString: "8:23 PM",
    text: `In de namiddag ging ik aan de slag met een andere opdracht. Hoewel deze als "medium" werd geclassificeerd, bleek deze veel eenvoudiger dan de eerste oefening. De opdracht bestond uit het vertalen van een reeks speciale tekens naar het Nederlands. De enige aanwijzing die we kregen, was welke tekens overeenkwamen met welke Nederlandse letters. Om het uitdagender te maken, waren er symbolen gebruikt die niet standaard op een toetsenbord beschikbaar zijn. Hierdoor kon de IDE deze tekens niet correct weergeven, tenzij je de instellingen aanpaste. Dit ontdekten we gelukkig vrij snel, waardoor we de opdracht vlot konden oplossen. Ondertussen had Mike ook een oplossing gevonden voor de eerste opdracht.<br><br>
Na het oplossen van de eerste twee opdrachten bleven er nog maar enkele uren over. We besloten ons opnieuw op te splitsen, zodat we tegelijkertijd aan opdracht drie en vier konden werken. Hoewel we dicht bij de oplossing kwamen, ontbrak de tijd om deze volledig af te ronden. Dit kwam doordat we naast het programmeren ook een presentatie voor de jury moesten voorbereiden.<br><br>
De presentaties duurden ongeveer twee uur, en het was inspirerend om te zien hoe creatief anderen hun opdrachten hadden aangepakt. Mike en ik waren als een-na-laatste aan de beurt en gaven onze presentatie met een vleugje humor. Nadat de laatste groep had gepresenteerd, konden we stemmen voor de publieksfavoriet.<br><br>
Met het einde van de hackathon in zicht verzamelden we ons in de algemene ruimte voor het avondeten. Er was een uitgebreid all-you-can-eat buffet met Aziatische gerechten, maaltijdsoepen en natuurlijk de geliefde Vlaamse friet. Na het diner werden de winnaars bekendgemaakt. Helaas vielen Mike en ik niet in de prijzen, maar wisten we op voorhand wel al dat twee van de acht opgeloste opdrachten niet genoeg zouden zijn om kans te maken. Tot slot werden we bedankt voor onze deelname, en was het tijd om terug naar huis te gaan.
`,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
  },
]

</script>

<style>
</style>