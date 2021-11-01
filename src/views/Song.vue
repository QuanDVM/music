<template>
  <div>
    <section class="w-full mb-8 py-14 text-center text-white relative">
      <div class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
        style="background-image: url(/assets/img/song-header.png)">
      </div>
      <div class="container mx-auto flex items-center">
        <button type="button" class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full
          focus:outline-none">
          <i class="fas fa-play"></i>
        </button>
        <div class="z-50 text-left ml-8">
          <div class="text-3xl font-bold">Song Title</div>
          <div>Blues Rock</div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto mt-6">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Comments (15)</span>
          <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
          <form>
            <textarea
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                duration-500 focus:outline-none focus:border-black rounded mb-4"
              placeholder="Your comment here..."></textarea>
            <button
              type="submit"
              class="py-1.5 px-3 rounded text-white bg-green-600"
            >Submit</button>
          </form>
          <select
            class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded">
            <option value="1">Latest</option>
            <option value="2">Oldest</option>
          </select>
        </div>
      </div>
    </section>
    <ul class="container mx-auto">
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
      <li class="p-6 bg-gray-50 border border-gray-200">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">Elaine Dreyfuss</div>
          <time>5 mins ago</time>
        </div>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium der doloremque laudantium.
        </p>
      </li>
    </ul>

    <!-- Player -->
    <div class="fixed bottom-0 left-0 bg-white p-5 pb-4 text-left align-top w-full h-16">
      <div class="relative">
        <!-- Play/Pause Button -->
        <div class="float-left w-7 h-7 leading-3">
          <button type="button">
            <i class="fa fa-play text-gray-500 text-xl"></i>
          </button>
        </div>
        <!-- Current Position -->
        <div class="float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-5 mt-1">
          <span class="player-currenttime">00:00</span>
        </div>
        <!-- Scrub -->
        <div class="float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub">
          <div class="absolute left-0 right-0 text-lg text-center mx-auto player-song-info">
            <span class="song-title">Song Title</span> by
            <span class="song-artist">Artist</span>
          </div>
          <span class="block w-full h-2 rounded m-1 mt-2 bg-gray-200 relative cursor-pointer">
            <span class="absolute top-neg-8 text-gray-800 text-lg" style="left: 50%;">
              <i class="fas fa-circle"></i>
            </span>
            <span class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
              style="width: 50%;"></span>
          </span>
        </div>
        <!-- Duration -->
        <div class="float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-8 mt-1">
          <span class="player-duration">03:06</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
};
</script>

<style>

</style>
