<template>
  <header id="header" class="lg:pt-10 pt-6 relative z-40">
    <div class="max-w-content mx-auto px-5 w-full">
      <nav class="flex items-center gap-5 justify-between">
        <div class="flex items-center gap-16">
          <NuxtLink activeClass="active" to="/" class="flex-shrink-0"
            ><img alt="logo" src="assets/img/Group 2405.png"
          /></NuxtLink>
          <div class="relative">
            <ul
              class="items-center hidden lg:flex gap-6 xl:gap-10 text-secondary text-sm xl:text-base"
            >
              <li>
                <NuxtLink
                  class="hover:after:-bottom-3 hover:after:opacity-100 hover:opacity-100 opacity-40"
                  activeClass="active"
                  to="/"
                  >صفحه اصلی</NuxtLink
                >
              </li>
              <li class="group">
                <a
                  class="flex items-center gap-2 dropdownArea relative opacity-60 group-hover:opacity-100"
                >
                  <p>خدمات ما</p>
                  <svg
                    class="text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M8.77136 1.11444L4.99994 4.88586L1.22851 1.11444"
                      stroke="black"
                      stroke-width="1.25714"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <!-- svg -->
                  <svg
                    class="absolute top-6 right-[13px] servicesArrow transition-all opacity-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="9"
                    viewBox="0 0 33 9"
                    fill="white"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.8066 8.5H0.193359C4.85352 8.18393 9.22656 6.06978 12.375 2.57672C14.5801 0.129671 18.4199 0.129671 20.625 2.57672C23.7734 6.06978 28.1465 8.18393 32.8066 8.5Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                <div
                  class="group-hover:opacity-100 group-hover:visible invisible transition-all hidden md:block absolute group-hover:top-5 top-16 inset-x-0 w-full z-40"
                >
                  <div class="rounded-3xl bg-white shadow-2 p-3 mt-6 relative">
                    <!-- shape -->
                    <img
                      alt="bg"
                      src="assets/img/Pattern (5).png"
                      class="absolute left-0 top-0"
                    />
                    <!-- list1 -->
                    <div
                      class="list1 grid grid-cols-3 py-2 text-center text-secondary font-extrabold font-rokh text-sm"
                    >
                      <a
                        @mouseenter="toggleTabs(1)"
                        :class="{
                          'text-black': openTab !== 1,
                          'text-secondary': openTab === 1,
                        }"
                        class="cursor-pointer relative"
                      >
                        <img
                          alt="product"
                          src="assets/img/Rectangle 42.png"
                          class="block mx-auto mb-4 w-20"
                        />
                        <p>خدمات 1</p>
                        <svg
                          class="absolute left-0 ltr:right-0 ltr:left-auto top-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="80"
                          viewBox="0 0 1 80"
                          fill="none"
                        >
                          <line
                            opacity="0.2"
                            x1="0.499939"
                            y1="2.18557e-08"
                            x2="0.499935"
                            y2="80"
                            stroke="black"
                          ></line>
                        </svg>
                        <!-- arrow -->
                        <svg
                          :class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }"
                          class="absolute w-6 inset-x-0 mx-auto top-[125px] transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="9"
                          viewBox="0 0 33 9"
                          fill="white"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.8066 8.5H0.193359C4.85352 8.18393 9.22656 6.06978 12.375 2.57672C14.5801 0.129671 18.4199 0.129671 20.625 2.57672C23.7734 6.06978 28.1465 8.18393 32.8066 8.5Z"
                            fill="#643394"
                          ></path>
                        </svg>
                      </a>
                      <a
                        @mouseenter="toggleTabs(2)"
                        :class="{
                          'text-black': openTab !== 2,
                          'text-secondary': openTab === 2,
                        }"
                        class="cursor-pointer relative"
                      >
                        <img
                          alt="product"
                          src="assets/img/Rectangle 42.png"
                          class="block mx-auto mb-4 w-20"
                        />
                        <p>خدمات 2</p>
                        <svg
                          class="absolute left-0 ltr:right-0 ltr:left-auto top-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="80"
                          viewBox="0 0 1 80"
                          fill="none"
                        >
                          <line
                            opacity="0.2"
                            x1="0.499939"
                            y1="2.18557e-08"
                            x2="0.499935"
                            y2="80"
                            stroke="black"
                          ></line>
                        </svg>
                        <!-- arrow -->
                        <svg
                          :class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }"
                          class="absolute w-6 inset-x-0 mx-auto top-[125px] transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="9"
                          viewBox="0 0 33 9"
                          fill="white"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.8066 8.5H0.193359C4.85352 8.18393 9.22656 6.06978 12.375 2.57672C14.5801 0.129671 18.4199 0.129671 20.625 2.57672C23.7734 6.06978 28.1465 8.18393 32.8066 8.5Z"
                            fill="#643394"
                          ></path>
                        </svg>
                      </a>
                      <a
                        @mouseenter="toggleTabs(3)"
                        :class="{
                          'text-black': openTab !== 3,
                          'text-secondary': openTab === 3,
                        }"
                        class="cursor-pointer relative"
                      >
                        <img
                          alt="product"
                          src="assets/img/Rectangle 42.png"
                          class="block mx-auto mb-4 w-20"
                        />
                        <p>خدمات 3</p>
                        <!-- arrow -->
                        <svg
                          :class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }"
                          class="absolute w-6 inset-x-0 mx-auto top-[125px] transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="9"
                          viewBox="0 0 33 9"
                          fill="white"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M32.8066 8.5H0.193359C4.85352 8.18393 9.22656 6.06978 12.375 2.57672C14.5801 0.129671 18.4199 0.129671 20.625 2.57672C23.7734 6.06978 28.1465 8.18393 32.8066 8.5Z"
                            fill="#643394"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <!-- list2 -->
                    <div
                      class="bg-purple list2 relative overflow-hidden rounded-3xl p-6 mt-2 text-sm text-white font-light"
                    >
                      <!-- shape -->
                      <img
                        alt="bg"
                        src="assets/img/Pattern (5).png"
                        class="absolute [transform:rotateY(180deg)] right-0 top-0"
                      />
                      <!--  -->
                      <ul :class="{ 'hidden': openTab !== 1, 'grid': openTab === 1 }" class="relative grid grid-cols-3 gap-6">
                        <!--  -->
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                      </ul>
                      <ul :class="{ 'hidden': openTab !== 2, 'grid': openTab === 2 }" class="relative grid grid-cols-3 gap-6">
                        <!--  -->
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم 1</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                      </ul>
                      <ul :class="{ 'hidden': openTab !== 3, 'grid': openTab === 3 }" class="relative grid grid-cols-3 gap-6">
                        <!--  -->
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم 2</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                        <li>
                          <a class="flex items-center gap-2">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="#f6ab36"
                              ></circle>
                            </svg>
                            <p>لورم ایپسوم</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <NuxtLink
                  class="hover:after:-bottom-3 hover:after:opacity-100 hover:opacity-100 opacity-40"
                  activeClass="active"
                  to="/faqs"
                  >پرسش و پاسخ</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="hover:after:-bottom-3 hover:after:opacity-100 hover:opacity-100 opacity-40"
                  activeClass="active"
                  to="/contact"
                  >تماس با ما</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  class="hover:after:-bottom-3 hover:after:opacity-100 hover:opacity-100 opacity-40"
                  activeClass="active"
                  to="about"
                  >درباره ما</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <a
          id="contact-modal"
          class="bg-gold shadow-1 py-4 btnHover px-9 text-white rounded-[20px] rounded-tl-none ltr:rounded-tr-none ltr:rounded-tl-[20px] hidden lg:flex items-center justify-center gap-[10px] text-sm font-bold"
        >
          <p>همین الان شروع کنید</p>
          <svg
            class="ltr:rotate-180"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M5.60005 10.8L0.800049 5.99999L5.60005 1.19999"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </a>
        <!-- ham icon && contact icon -->
        <div class="flex lg:hidden items-center gap-4">
          <div @click="openMenu">
            <svg
              :class="{ block: !open, hidden: open }"
              class="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5.995C2 5.445 2.446 5 2.995 5L11.005 5C11.2689 5 11.522 5.10483 11.7086 5.29143C11.8952 5.47803 12 5.73111 12 5.995C12 6.25889 11.8952 6.51197 11.7086 6.69857C11.522 6.88517 11.2689 6.99 11.005 6.99L2.995 6.99C2.445 6.99 2 6.545 2 5.995ZM2 12C2 11.45 2.446 11.005 2.995 11.005L21.005 11.005C21.2689 11.005 21.522 11.1098 21.7086 11.2964C21.8952 11.483 22 11.7361 22 12C22 12.2639 21.8952 12.517 21.7086 12.7036C21.522 12.8902 21.2689 12.995 21.005 12.995L2.995 12.995C2.445 12.995 2 12.549 2 12ZM2.995 17.01C2.73111 17.01 2.47803 17.1148 2.29143 17.3014C2.10483 17.488 2 17.7411 2 18.005C2 18.2689 2.10483 18.522 2.29143 18.7086C2.47803 18.8952 2.73111 19 2.995 19L15.005 19C15.1357 19 15.2651 18.9743 15.3858 18.9243C15.5065 18.8743 15.6162 18.801 15.7086 18.7086C15.801 18.6162 15.8743 18.5065 15.9243 18.3858C15.9743 18.2651 16 18.1357 16 18.005C16 17.8743 15.9743 17.7449 15.9243 17.6242C15.8743 17.5035 15.801 17.3938 15.7086 17.3014C15.6162 17.209 15.5065 17.1357 15.3858 17.0857C15.2651 17.0357 15.1357 17.01 15.005 17.01L2.995 17.01Z"
                fill="#1E2D48"
              />
            </svg>
            <svg
              :class="{ block: open, hidden: !open }"
              class="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.80399 6.39693C7.61739 6.21034 7.36431 6.10551 7.10042 6.10551C6.83653 6.10551 6.58345 6.21034 6.39685 6.39693C6.21025 6.58353 6.10542 6.83662 6.10542 7.10051C6.10542 7.3644 6.21025 7.61748 6.39685 7.80408L14.8892 16.2964C14.9816 16.3888 15.0913 16.4621 15.212 16.5121C15.3327 16.5621 15.4621 16.5879 15.5928 16.5879C15.7234 16.5879 15.8528 16.5621 15.9735 16.5121C16.0943 16.4621 16.204 16.3888 16.2963 16.2964C16.3887 16.204 16.462 16.0943 16.512 15.9736C16.562 15.8529 16.5878 15.7235 16.5878 15.5929C16.5878 15.4622 16.562 15.3328 16.512 15.2121C16.462 15.0914 16.3887 14.9817 16.2963 14.8893L7.80399 6.39693Z"
                fill="#1E2D48"
              />
              <path
                d="M6.39693 14.8894C6.21034 15.076 6.10551 15.329 6.10551 15.5929C6.1055 15.8568 6.21033 16.1099 6.39693 16.2965C6.58353 16.4831 6.83661 16.5879 7.10051 16.5879C7.3644 16.5879 7.61748 16.4831 7.80408 16.2965L16.2964 7.80416C16.3888 7.71176 16.4621 7.60207 16.5121 7.48136C16.5621 7.36064 16.5879 7.23125 16.5879 7.10059C16.5879 6.96992 16.5621 6.84053 16.5121 6.71982C16.4621 6.5991 16.3888 6.48941 16.2964 6.39701C16.204 6.30462 16.0943 6.23133 15.9736 6.18133C15.8529 6.13132 15.7235 6.10559 15.5929 6.10559C15.4622 6.10559 15.3328 6.13132 15.2121 6.18133C15.0914 6.23133 14.9817 6.30462 14.8893 6.39701L6.39693 14.8894Z"
                fill="#1E2D48"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
    <!-- mobile menu -->
    <div
      :class="{ active: open }"
      class="rounded-3xl mobileMenu top-[100px] lg:hidden absolute bg-white -mt-2 z-40 text-black text-sm font-bold left-5 right-5"
    >
      <!-- arrow -->
      <svg
        class="-top-2 ltr:right-8 ltr:left-auto left-8 absolute"
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="9"
        viewBox="0 0 33 9"
        fill="white"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.8066 8.5H0.193359C4.85352 8.18393 9.22656 6.06978 12.375 2.57672C14.5801 0.129671 18.4199 0.129671 20.625 2.57672C23.7734 6.06978 28.1465 8.18393 32.8066 8.5Z"
          fill="white"
        ></path>
      </svg>
      <!-- shape -->
      <img
        alt="shape"
        src="assets/img/Pattern (7).png"
        class="absolute top-0 ltr:right-0 ltr:left-auto left-0 ltr:[transform:rotateY(180deg)] -z-1"
      />
      <!-- menu -->
      <ul class="p-[22px]">
        <li class="mb-8">
          <NuxtLink class="block" to="/">صفحه اصلی</NuxtLink>
        </li>
        <li class="mb-8">
          <a
            @click="showDropDown"
            class="flex items-center justify-between dropdownBtn"
          >
            <p>نمونه کارها</p>
            <svg
              :class="{ 'rotate-0': dropdownOpen }"
              class="rotate-180 transition-all arrowSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M10.6001 5.68237L5.8001 0.882374L1.0001 5.68237"
                stroke="black"
                stroke-linecap="square"
              />
            </svg>
          </a>
          <ul
            :class="{ active: dropdownOpen }"
            class="font-light text-black dropdownContent text-sm"
          >
            <li
              class="py-4 ltr:pl-2 ltr:pr-0 ltr:ml-[6px] ltr:mr-0 pr-2 mr-[6px]"
            >
              <a class="flex items-center justify-between text-black">
                <div
                  class="flex items-center gap-3 relative ltr:-left-2 ltr:right-auto ltr:-ml-2 ltr:mr-0 right-0 -mr-2"
                >
                  <svg
                    class="flex-shrink-0"
                    width="21"
                    height="7"
                    viewBox="0 0 21 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x="0.199951"
                      width="20.8"
                      height="6.02105"
                      rx="3.01053"
                      fill="#C8C8C8"
                    ></rect>
                  </svg>
                  <p>نمونه کار 1</p>
                </div>
              </a>
            </li>
            <li
              class="py-4 ltr:pl-2 ltr:pr-0 ltr:ml-[6px] ltr:mr-0 pr-2 mr-[6px]"
            >
              <a class="flex items-center justify-between text-black">
                <div
                  class="flex items-center gap-3 relative ltr:-left-2 ltr:right-auto ltr:-ml-2 ltr:mr-0 right-0 -mr-2"
                >
                  <svg
                    class="flex-shrink-0"
                    width="21"
                    height="7"
                    viewBox="0 0 21 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x="0.199951"
                      width="20.8"
                      height="6.02105"
                      rx="3.01053"
                      fill="#C8C8C8"
                    ></rect>
                  </svg>
                  <p>نمونه کار 2</p>
                </div>
              </a>
            </li>
            <li
              class="py-4 ltr:pl-2 ltr:pr-0 ltr:ml-[6px] ltr:mr-0 pr-2 mr-[6px]"
            >
              <a class="flex items-center justify-between text-black">
                <div
                  class="flex items-center gap-3 relative ltr:-left-2 ltr:right-auto ltr:-ml-2 ltr:mr-0 right-0 -mr-2"
                >
                  <svg
                    class="flex-shrink-0"
                    width="21"
                    height="7"
                    viewBox="0 0 21 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x="0.199951"
                      width="20.8"
                      height="6.02105"
                      rx="3.01053"
                      fill="#C8C8C8"
                    ></rect>
                  </svg>
                  <p>نمونه کار 3</p>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li class="mb-8">
          <NuxtLink class="block" to="/services">خدمات</NuxtLink>
        </li>
        <li class="mb-8">
          <NuxtLink class="block" to="/blog">بلاگ</NuxtLink>
        </li>
        <li class="mb-8">
          <NuxtLink class="block" to="/contact">تماس با ما</NuxtLink>
        </li>
        <li>
          <NuxtLink class="block" to="/about">درباره ما</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const open = ref(false);
const dropdownOpen = ref(false);
const openTab = ref(1);

function openMenu() {
  open.value = !open.value;
}
function showDropDown() {
  dropdownOpen.value = !dropdownOpen.value;
}
function toggleTabs(tabNumber) {
  openTab.value = tabNumber;
}
</script>

<style>
</style>