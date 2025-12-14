<template>
  <main
    ref="top-home"
    id="top-home"
    :class="[
      'scroll-mt-24',
      locale === 'fr'
        ? 'bg-gradient-to-b from-orange-50 to-orange-100'
        : 'bg-gradient-to-br from-green-100 to-green-50'
    ]"
  >
    <div v-show="locale">
      <div
        id="yaacov"
        :class="[
          'transition-all duration-700 ease-out',
          locale === 'fr'
            ? 'bg-gradient-to-br from-orange-800 to-orange-900'
            : 'bg-gradient-to-br from-green-800 to-green-900',
          'opacity-100',
          'transform translate-y-0 scale-100',
          locale === 'mg' ? 'transition-transform duration-700 ease-in-out' : ''
        ]"
      >
        <div
          class="bg-black/80 text-amber-50 h-72 sm:h-80 md:h-2/4 px-6 py-10 xl:py-44 sm:py-24 sm:px-12 text-white-aura text-center tracking-widest sm:text-xl md:text-2xl"
        >
          <h3 class="underline mb-4 font-extrabold text-xl sm:text-2xl md:text-4xl 2xl:text-6xl">
            {{ $t('yaacovTitle') }}
          </h3>
          <p class="font-medium md:max-w-4xl md:m-auto md:pt-6 2xl:text-4xl 2xl:max-w-5xl">
            {{ $t('yaacovText') }}
          </p>
        </div>
        <div>
          <img :key="locale" :src="heroImages.yaacov" class="m-auto w-full xl:w-3/4 2xl:w-2/4" />
        </div>
      </div>

      <section
        id="qui"
        :ref="registerObserved"
        class="w-full scroll-mt-24 opacity-0 transform translate-y-10 transition-all duration-[1500ms]"
      >
        <div
          :class="[
            'm-0 bg-cover bg-center bg-no-repeat bg-photo-2 h-64 sm:h-72 2xl:h-80 bg-blend-soft-light w-full flex justify-center items-center',
            locale === 'fr'
              ? 'bg-gradient-to-br from-orange-800 to-orange-900 bg-orange-950'
              : 'bg-gradient-to-br from-green-800 to-green-900 bg-green-950'
          ]"
        >
          <h1 class="text-white font-bold text-3xl sm:text-4xl xl:text-5xl 2xl:text-5xl font-sans">
            {{ $t('whoWeAreTitle') }}
          </h1>
        </div>
        <div
          class="m-auto w-full py-4 pb-2 px-4 sm:py-8 sm:px-8 sm:text-lg my-8 max-w-lg md:max-w-full text-amber-950 text-sm tracking-wide xl:text-xl 2xl:py-24 2xl:px-56"
        >
          <p class="w-full m-auto">
            {{ $t('whoWeAreText') }}
          </p>

          <h2 class="py-4 xl:py-6 font-bold text-lg sm:text-xl xl:text-3xl 2xl:py-12 2xl:pb-8">
            {{ $t('ourFunctioningTitle') }}
          </h2>

          <p>
            {{ $t('ourFunctioningText') }}
          </p>
          <div
            class="grid grid-cols-3 gap-4 md:gap-24 lg:gap-36 xl:gap-40 w-full md:w-4/5 2xl:w-3/6 mt-8 2xl:mt-24 mx-auto"
          >
            <a
              v-for="partner in partnerLogos"
              :key="partner.href"
              :href="partner.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="w-full h-auto object-cover aspect-square"
                :alt="partner.alt"
                :src="partner.src"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="objectifs"
        :ref="registerObserved"
        class="w-full scroll-mt-24 opacity-0 transform translate-y-10 transition-all duration-700"
      >
        <div
          :class="[
            'bg-cover bg-center md:bg-bottom bg-no-repeat bg-photo-6 h-64 sm:h-72 2xl:h-80 bg-blend-soft-light w-full flex justify-center items-center',
            locale === 'fr'
              ? 'bg-gradient-to-br from-orange-800 to-orange-900 bg-orange-950'
              : 'bg-gradient-to-br from-green-800 to-green-900 bg-green-950'
          ]"
        >
          <h1 class="text-white font-bold text-3xl sm:text-4xl xl:text-5xl 2xl:text-5xl font-sans">
            {{ $t('objectifs.title') }}
          </h1>
        </div>
        <div
          class="m-auto py-4 pt-0 px-4 sm:py-8 sm:px-8 my-8 max-w-lg md:max-w-full text-amber-950 text-sm tracking-wide sm:text-lg xl:text-xl 2xl:py-24 2xl:px-56"
        >
          <div><img :src="heroImages.objectifs" class="m-auto pb-8 2xl:w-2/4" /></div>
          <p class="2xl:w-11/12 2xl:py-12">
            <b>{{ $t('objectifs.heart_title') }}</b> {{ $t('objectifs.heart_description') }}
            <br /><br />
            {{ $t('objectifs.reason_title') }}: <b>{{ $t('objectifs.encouragement') }}</b>
            {{ $t('objectifs.mission_description') }}
            <b>{{ $t('objectifs.mission_description_suite') }}</b>
          </p>
        </div>
      </section>

      <section
        id="actions"
        :ref="registerObserved"
        class="w-full scroll-mt-24 opacity-0 transform translate-y-10 transition-all duration-700"
      >
        <div
          :class="[
            'bg-cover bg-center bg-no-repeat bg-photo-4 h-64 sm:h-72 2xl:h-80 bg-blend-soft-light w-full flex justify-center items-center',
            locale === 'fr'
              ? 'bg-gradient-to-br from-orange-800 to-orange-900 bg-orange-950'
              : 'bg-gradient-to-br from-green-800 to-green-900 bg-green-950'
          ]"
        >
          <h1
            class="text-white font-bold text-3xl sm:text-4xl xl:text-5xl 2xl:text-5xl font-sans text-center"
          >
            {{ $t('actions_title') }}
          </h1>
        </div>
        <div
          class="m-auto py-4 pt-0 px-3 sm:py-8 sm:px-6 my-8 max-w-lg md:max-w-full text-amber-950 text-sm sm:text-base tracking-wide xl:text-xl 2xl:px-56"
        >
          <div
            v-for="item in actionItems"
            :key="item.titleKey"
            class="mt-8 first:mt-0"
          >
            <div>
              <img :src="item.image" class="m-auto mb-4 w-full md:w-3/4 2xl:w-2/4" />
            </div>

            <div class="flex mt-2 2xl:py-12 2xl:justify-center">
              <svg
                class="max-w-4 2xl:max-w-6 mr-4 mt-1 self-start"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"
                />
              </svg>
              <p>
                <b>{{ $t(item.titleKey) }}</b>
                <template v-if="item.descKey">
                  {{ ' ' + $t(item.descKey) }}
                </template>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ezra"
        :ref="registerObserved"
        :class="[
          'w-full h-[50vh] overflow-hidden',
          locale === 'fr'
            ? 'bg-gradient-to-br from-orange-800 to-orange-900'
            : 'bg-gradient-to-br from-green-800 to-green-900'
        ]"
      >
        <div
          class="bg-black/80 text-amber-50 h-full flex items-center justify-center px-6 py-12 sm:px-12 sm:py-24 text-white-aura text-center tracking-widest sm:text-lg md:text-4xl md:h-96 2xl:text-4xl 2xl:py-72 2xl:pb-96"
        >
          <div>
            <h3
              class="underline mb-4 font-extrabold text-xl sm:text-2xl md:text-4xl 2xl:text-5xl 2xl:mb-8"
            >
              {{ $t('ezra.title') }}
            </h3>
            <p class="font-medium pb-24">
              {{ $t('ezra.verse') }}
            </p>
          </div>
        </div>
      </section>

      <div
        :class="[
          'overflow-hidden h-auto w-auto',
          locale === 'fr'
            ? 'bg-gradient-to-b from-orange-950 to-orange-900'
            : 'bg-gradient-to-br from-green-950 to-green-900'
        ]"
      >
        <img
          :src="heroImages.afterEzra"
          class="w-full h-auto object-contain max-w-screen-md mx-auto"
        />
      </div>

      <section
        id="fsoutien"
        :ref="registerObserved"
        class="w-full scroll-mt-24 opacity-0 transform translate-y-10 transition-all duration-700"
      >
        <div
          :class="[
            'bg-cover bg-center md:bg-bottom bg-no-repeat bg-photo-1 h-64 sm:h-72 2xl:h-80 bg-blend-soft-light w-full flex justify-center items-center',
            locale === 'fr'
              ? 'bg-gradient-to-br from-orange-800 to-orange-900 bg-orange-950'
              : 'bg-gradient-to-br from-green-800 to-green-900 bg-green-950'
          ]"
        >
          <h1 class="text-white font-bold text-3xl sm:text-4xl font-sans text-center 2xl:text-5xl">
            {{ $t('supports.title') }}
          </h1>
        </div>

        <div
          class="m-auto py-4 px-4 sm:py-8 sm:px-8 my-8 max-w-lg md:max-w-full text-amber-950 text-sm sm:text-base tracking-wide xl:text-xl 2xl:py-24 2xl:px-56"
        >
          <p>{{ $t('supports.description') }}</p>

          <div class="flex mt-6 items-center justify-start flex-wrap">
            <svg
              class="max-w-8 2xl:max-w-8 mr-2 mt-1 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M352 64A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM232.7 264l22.9 31.5c6.5 8.9 16.3 14.7 27.2 16.1s21.9-1.7 30.4-8.7l88-72c17.1-14 19.6-39.2 5.6-56.3s-39.2-19.6-56.3-5.6l-55.2 45.2-26.2-36C253.6 156.7 228.6 144 202 144c-30.9 0-59.2 17.1-73.6 44.4L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432 72 432c-22.1 0-40 17.9-40 40s17.9 40 40 40l208 0c17.3 0 32.6-11.1 38-27.5s-.3-34.4-14.2-44.7L187.7 354l45-90z"
              />
            </svg>
            <h3 class="font-bold text-lg xl:text-2xl 2xl:text-2xl 2xl:py-4">
              {{ $t('supports.prayers.title') }}
            </h3>
            <ul class="w-full mt-2 ml-4 2xl:py-2">
              <li
                v-for="item in supportPrayers"
                :key="item.key"
                class="mt-2 first:mt-0 2xl:mt-4 flex items-start gap-2"
              >
                <i class="fa fa-circle text-xs mt-1" aria-hidden="true"></i>
                <span>{{ $t(item.key) }}</span>
              </li>
            </ul>
          </div>

          <div class="flex mt-6 items-center justify-start flex-wrap">
            <svg
              class="max-w-6 2xl:max-w-4 mr-2 mt-1 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M48.1 240c-.1 2.7-.1 5.3-.1 8l0 16c0 2.7 0 5.3 .1 8L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l28.3 0C89.9 419.9 170 480 264 480l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0c-57.9 0-108.2-32.4-133.9-80L256 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-143.8 0c-.1-2.6-.2-5.3-.2-8l0-16c0-2.7 .1-5.4 .2-8L256 240c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.9 0c25.7-47.6 76-80 133.9-80l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0C170 32 89.9 92.1 60.3 176L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l16.1 0z"
              />
            </svg>
            <h3 class="font-bold text-lg xl:text-2xl 2xl:text-2xl 2xl:py-4">
              {{ $t('supports.donations.title') }}
            </h3>
            <p class="w-full mt-2 ml-4">
              {{ $t('supports.donations.description') }}
            </p>
          </div>
          <div class="flex mt-6 items-center justify-start flex-wrap">
            <svg
              class="max-w-12 2xl:max-w-10 mr-2 mt-1 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352l41.8 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-76 0-4 0-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"
              />
            </svg>
            <h3 class="font-bold text-lg xl:text-2xl 2xl:py-4">
              {{ $t('supports.donations.dons_nature') }}
            </h3>
          </div>
        </div>
      </section>

      <section
        id="soutien"
        :ref="registerObserved"
        class="w-full mb-4 scroll-mt-24 opacity-0 transform translate-y-10 transition-all duration-700"
      >
        <div
          :class="[
            'bg-cover bg-center bg-no-repeat bg-photo-5 h-64 sm:h-72 w-full bg-blend-soft-light flex justify-center items-center 2xl:h-80',
            locale === 'fr'
              ? 'bg-gradient-to-br from-orange-800 to-orange-900 bg-orange-950'
              : 'bg-gradient-to-br from-green-800 to-green-900 bg-green-950'
          ]"
        >
          <h1 class="text-white font-bold text-3xl sm:text-4xl font-sans text-center 2xl:text-5xl">
            {{ $t('soutien.title') }}
          </h1>
        </div>

        <div
          class="m-auto py-2 px-4 sm:py-4 sm:px-8 my-6 max-w-lg md:max-w-full text-amber-950 text-sm sm:text-base tracking-wide xl:text-xl 2xl:py-24 2xl:px-56"
        >
          <div class="flex mt-4 items-center justify-start flex-wrap">
            <svg
              class="max-w-4 xl:max-w-6 sm:max-w-5 mr-2 mt-1 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
              />
            </svg>
            <h3 class="font-bold text-lg sm:text-xl xl:text-2xl 2xl:py-4">
              {{ $t('soutien.specificWork') }}
            </h3>
          </div>

          <div
            id="soutien-par-oeuvre"
            class="grid grid-cols-1 gap-y-16 lg:gap-y-24 p-8 pt-0 mt-8 mb-0 my-24 items-center"
          >
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 items-center"
            >
              <!-- Séparateur centré et moins large que le contenu -->
              <div v-if="index !== 0" class="col-span-full flex justify-center">
                <span class="block h-[3px] w-3/4 lg:w-2/3 bg-amber-300/80 rounded-full"></span>
              </div>

              <div
                :ref="registerObserved"
                class="opacity-0 transform translate-y-10 transition-all duration-700 relative flex flex-col items-center"
                :class="projectImageOrder(index)"
              >
                <a
                  :href="project.link"
                  class="rounded-full overflow-hidden w-48 h-48 md:w-80 md:h-80 relative bg-gray-200 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover"
                  />
                  <div
                    class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-pulse"
                  >
                    <span class="text-white text-lg font-semibold">{{ $t('soutien.support') }}</span>
                  </div>
                </a>
              </div>

              <div
                :ref="registerObserved"
                class="text-justify mt-4 text-md lg:text-lg font-semibold opacity-0 transform translate-y-10 transition-all delay-500 duration-700 self-center"
                :class="projectTextOrder(index)"
              >
                <h2 class="font-bold text-lg text-center mb-4">{{ project.title }}</h2>
                <p class="font-normal mb-16 lg:mb-0" v-html="project.description"></p>
                <div class="flex justify-center mt-10">
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
                  >
                    {{ $t('soutien.support') }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="flex mt-8 items-center justify-start flex-wrap">
            <svg
              class="max-w-4 xl:max-w-6 sm:max-w-5 mr-2 mt-1 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
              />
            </svg>
            <h3 class="font-bold text-lg sm:text-xl xl:text-2xl 2xl:py-4">
              {{ $t('donSpontane') }}
            </h3>
          </div>
          <div class="mt-2 sm:mt-4 ml-4">
            <p>{{ $t('compte') }} : Fon'i Yehôshoa</p>
            <div class="hover:text-blue-700">
              <a
                class="mt-1"
                href="https://www.paypal.com/paypalme/FONIYEHOSHOA?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000481&utm_unptid=8db73e84-b327-11ee-b62a-40a6b72e01ed&ppid=RT000481&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=7V8PETUK6EP3G&unptid=8db73e84-b327-11ee-b62a-40a6b72e01ed&calc=f74051263866b&unp_tpcid=ppme-social-business-profile-created&page=main%3Aemail%3ART000481&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.226.0&tenant_name=PAYPAL&xt=104038%2C127632"
                target="_blank"
                rel="noopener noreferrer"
              >
                fonyehoshoa@gmail.com
              </a>
            </div>
          </div>

          <div class="flex mt-4 items-center justify-start flex-wrap">
            <svg
              class="max-w-4 xl:max-w-6 sm:max-w-5 mr-2 mt-1 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>
            <h3 class="font-bold text-lg sm:text-xl xl:text-2xl 2xl:py-4">
              {{ $t('virementBancaire') }}
            </h3>
          </div>
          <div class="mt-2 sm:mt-4 ml-4">
            <p>BIC : CMCIFR2A</p>
            <p class="mt-1">IBAN : FR7610278022070002089950106</p>
          </div>

          <div class="flex mt-4 items-center justify-start flex-wrap">
            <svg
              class="max-w-4 xl:max-w-8 sm:max-w-5 mr-2 mt-1 self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm48 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16zM376 160l80 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24z"
              />
            </svg>
            <h3 class="font-bold text-lg sm:text-xl xl:text-2xl 2xl:py-4">{{ $t('cheque') }}</h3>
          </div>
          <div class="mt-2 sm:mt-4 ml-4">
            <p>{{ $t('ordreAssociation') }}</p>
          </div>
        </div>

        <p
          class="px-2 sm:px-4 text-sm font-bold text-amber-950 xl:text-2xl 2xl:py-4 2xl:m-auto 2xl:text-center"
        >
          {{ $t('noteMotifDon') }}
        </p>
      </section>

      <div
        id="contact"
        :class="[
          'bg-cover bg-center bg-no-repeat bg-photo-6 h-64 sm:h-72 w-full flex justify-center items-center 2xl:h-80',
          locale === 'fr'
            ? 'bg-gradient-to-br from-orange-800 to-orange-900 bg-orange-950 bg-blend-overlay'
            : 'bg-gradient-to-br from-green-800 to-green-900 bg-green-950 bg-blend-soft-light'
        ]"
      >
        <h1 class="text-white font-bold text-3xl sm:text-4xl font-sans text-center 2xl:text-5xl">
          {{ $t('contactUs') }}
        </h1>
      </div>
      <section
        id="contact-form"
        class="p-8 rounded-lg shadow-lg max-w-lg mx-auto bg-white bg-opacity-80 backdrop-blur-md mt-8 mb-12"
      >
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6"></h2>

        <div class="bg-indigo-100 p-4 rounded-lg shadow-md mb-6 text-center">
          <p class="text-gray-700 text-lg font-semibold">📞 {{ $t('contact_association') }} :</p>
          <p class="text-xl font-bold text-indigo-600">+33 6 33 05 48 92</p>
          <p class="text-xl font-bold text-indigo-600">fonyehoshoa@gmail.com</p>
        </div>

        <form
          action="https://formspree.io/f/meoebwov"
          method="POST"
          class="flex flex-col space-y-6"
          @submit="clearForm"
        >
          <label class="font-medium text-gray-700"> {{ $t('contact_nom') }} :</label>
          <input
            type="text"
            name="name"
            v-model="formData.name"
            required
            class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <label class="font-medium text-gray-700"> {{ $t('contact_email') }} :</label>
          <input
            type="email"
            name="email"
            v-model="formData.email"
            required
            class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <label class="font-medium text-gray-700"> {{ $t('contact_tel') }} :</label>
          <input
            type="tel"
            name="phone"
            v-model="formData.phone"
            required
            class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <label class="font-medium text-gray-700"> {{ $t('contact_message') }} :</label>
          <textarea
            name="message"
            v-model="formData.message"
            required
            class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            class="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </section>

      <section
        :ref="registerObserved"
        id="footer"
        :class="[
          ' text-amber-50 text-sm sm:text-base text-center pb-14 sm:pb-24 transition-all duration-700 opacity-0 translate-y-10',
          locale === 'fr'
            ? 'bg-gradient-to-br from-orange-800 to-orange-900 bg-orange-950'
            : 'bg-gradient-to-br from-green-800 to-green-900 bg-green-950'
        ]"
      >
        <p class="mx-auto px-2 italic pt-6 sm:pt-12 xl:text-2xl">
          Association caritative chrétienne
        </p>

        <div class="flex mt-4 items-center justify-center flex-wrap">
          <svg
            class="max-w-4 xl:max-w-8 mr-2 self-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path
              d="M497.39,361.81l-105.6-48a24,24,0,0,0-28.2,6.91l-42.8,51.4a321.6,321.6,0,0,1-143-143l51.4-42.8a24,24,0,0,0,6.91-28.2l-48-105.6A24.08,24.08,0,0,0,167.39,0H72A24,24,0,0,0,48,24C48,280.77,231.23,464,488,464a24,24,0,0,0,24-24V376A24,24,0,0,0,497.39,361.81Z"
            />
          </svg>
          <a class="hover:text-red-400 self-center xl:text-2xl" href="tel:+33633054892">
            +33 6 33 05 48 92
          </a>
        </div>

        <div class="flex mt-2 items-center justify-center flex-wrap">
          <svg
            class="max-w-4 xl:max-w-8 mr-2 self-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path
              d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
            />
          </svg>
          <a
            class="hover:text-red-400 self-center xl:text-2xl"
            href="mailto:fonyehoshoa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonyehoshoa@gmail.com
          </a>
        </div>

        <div class="flex mt-2 items-center justify-center flex-wrap">
          <svg
            class="max-w-4 xl:max-w-8 mr-2 self-center"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
            />
          </svg>
          <a
            class="self-center hover:text-red-400 xl:text-2xl"
            href="https://www.facebook.com/profile.php?id=61556205771803"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fon’i Yehôshoa
          </a>
        </div>

        <div class="flex mt-2 items-center justify-center flex-wrap">
          <svg
            class="max-w-4 xl:max-w-8 mr-2 self-center"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
          <a
            class="self-center hover:text-red-400 xl:text-2xl"
            href="https://www.instagram.com/foni_yehoshoa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            foni_yehoshoa
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Internationalisation
const { locale, tm } = useI18n()

// Données du formulaire de contact
const formData = ref({ name: '', email: '', phone: '', message: '' })

// Fonction utilitaire pour générer une URL d'asset gérée par Vite
const assetUrl = (path) => new URL(`../assets/${path}`, import.meta.url).href

// Données structurées pour simplifier les ajouts/modifications
const partnerLogos = [
  {
    href: 'https://www.labnr.org/',
    alt: 'Logo bonne nouvelle du royaume',
    src: assetUrl('photos/logoBNR.jpeg')
  },
  {
    href: 'https://objectifciel.fr/',
    alt: 'Logo objectif ciel',
    src: assetUrl('photos/obj-ciel-logo.png')
  },
  {
    href: 'https://madagascarpouryehoshoua.org/',
    alt: 'Logo madagascar pour yehoshoa',
    src: assetUrl('photos/mpy-logo.png')
  }
]

const actionItems = [
  {
    image: assetUrl('photos/img3.jpg'),
    titleKey: 'actions_distribution_title',
    descKey: 'actions_distribution_description'
  },
  {
    image: assetUrl('photos/img4.jpg'),
    titleKey: 'social_projects',
    descKey: 'social_projects_desc'
  },
  {
    image: assetUrl('photos/img5.jpg'),
    titleKey: 'medical_support',
    descKey: null
  },
  {
    image: assetUrl('photos/img6.jpg'),
    titleKey: 'education_training',
    descKey: 'education_training_desc'
  },
  {
    image: assetUrl('photos/img10.jpg'),
    titleKey: 'land_acquisition',
    descKey: 'land_acquisition_desc'
  }
]

const supportPrayers = [
  { key: 'supports.prayers.team' },
  { key: 'supports.prayers.beneficiaries' },
  { key: 'supports.prayers.vision' }
]

const fallbackImage = assetUrl('photos/img1.jpg')
const projectImages = {
  'siege-mpy': assetUrl('photos/siege-mpy-img.jpg'),
  'centre-hospitalier': assetUrl('photos/hopital-img.jpg'),
  'cantine-tulear': assetUrl('photos/cantine-img.jpg'),
  prisonniers: assetUrl('photos/prisonniers-img.jpg'),
  terrains: assetUrl('photos/terre-rouge-betafo.jpg')
}

const heroImages = {
  yaacov: assetUrl('photos/img1.jpg'),
  objectifs: assetUrl('photos/img2.jpg'),
  afterEzra: assetUrl('photos/img9.jpg')
}

// Projets de soutien provenant d'i18n (ajout via un objet par projet dans i18n)
const projects = computed(() => {
  const list = tm('soutien.projects')
  const safeList = Array.isArray(list) ? list : []
  return safeList.map((project) => ({
    ...project,
    image: projectImages[project.id] || fallbackImage
  }))
})

// Nettoyage du formulaire après envoi (léger délai pour laisser le submit partir)
const clearForm = () => {
  setTimeout(() => {
    formData.value = { name: '', email: '', phone: '', message: '' }
  }, 1000)
}

// IntersectionObserver : mise en place d'une fonction de ref partagée
const observedElements = []
let observer = null
const registerObserved = (el) => {
  if (el && !observedElements.includes(el)) {
    observedElements.push(el)
  }
}

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0')
      entry.target.classList.remove('opacity-0', 'translate-y-10')
      observer?.unobserve(entry.target)
    }
  })
}

// Ordre des colonnes selon la parité pour alterner image/texte tout en gardant l'alignement en grille
const projectImageOrder = (index) => (index % 2 === 0 ? 'lg:order-1' : 'lg:order-2')
const projectTextOrder = (index) => (index % 2 === 0 ? 'lg:order-2' : 'lg:order-1')

onMounted(() => {
  // Détecter Firefox pour appliquer la classe adéquate
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')
  if (isFirefox) {
    document.body.classList.add('firefox')
  }

  observer = new IntersectionObserver(handleIntersection, { root: null, threshold: 0.13 })
  observedElements.forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
