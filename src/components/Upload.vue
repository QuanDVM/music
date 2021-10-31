<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="p-6">
      <!-- Upload dropbox -->
      <div
        class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed
          border-gray-400 text-gray-400 transition duration-500 hover:text-white
          hover:bg-green-400 hover:border-green-400 hover:border-solid"
        :class="{ 'bg-green-400 border-green-400 border-solid': is_dragover }"
        @drag.prevent.stop="rundragNormal()"
        @dragover.prevent.stop="runOver()"
        @dragenter.prevent.stop=""
        @dragleave.prevent.stop="runLeave()"
        @drop.prevent.stop="upload($event)"
      >
        <h5>Drop your files here</h5>
      </div>
      <input type="file" multiple @change="upload($event)" />
      <hr class="my-6" />
      <!-- Progress bars -->
      <div class="mb-4" v-for="upload in uploads" :key="upload.name">
        <div class="font-bold text-sm" :class="upload.text_class">
          <i :class="upload.icon"></i>{{ upload.name }}
        </div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress bars -->
          <div
            class="transition-all progress-bar"
            :class="upload.variant"
            :style="{ width: `${upload.current_progress}%` }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage, auth, songsCollection } from '@/includes/firebase';

export default {
  name: 'Upload',
  data() {
    return {
      is_dragover: false,
      uploads: [],
    };
  },
  methods: {
    upload($event) {
      console.log($event);
      this.is_dragover = false;
      const files = [...$event.dataTransfer.files];

      files.forEach((file) => {
        if (file.type !== 'audio/mpeg') {
          return;
        }

        const storageRef = storage.ref(); // music-1da3d.appspot.com/songs
        const songsRef = storageRef.child(`songs/${file.name}`); // music-1da3d.appspot.com/songs/example.mp3
        const task = songsRef.put(file);

        const uploadIndex = this.uploads.push({
          task,
          current_progress: 0,
          name: file.name,
          variant: 'bg-blue-400',
          icon: 'fas fa-spinner fa-spin',
          text_class: '',
        }) - 1;
        task.on('state_changed', (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploads[uploadIndex].current_progress = progress;
        }, (error) => {
          this.uploads[uploadIndex].variant = 'bg-red-400';
          this.uploads[uploadIndex].icon = 'fas fa-times';
          this.uploads[uploadIndex].text_class = 'text-red-400';
          console.log(error);
        }, async () => {
          const song = {
            uid: auth.currentUser.uid,
            display_name: auth.currentUser.displayName,
            origin_name: task.snapshot.ref.name,
            modified_name: task.snapshot.ref.name,
            genre: '',
            comment_count: 0,
          };

          song.url = await task.snapshot.ref.getDownloadURL();

          await songsCollection.add(song);

          this.uploads[uploadIndex].variant = 'bg-green-400';
          this.uploads[uploadIndex].icon = 'fas fa-check';
          this.uploads[uploadIndex].text_class = 'text-green-400';
        });
      });
      console.log(files);
    },
    runOver() {
      console.log('run over');
      this.is_dragover = true;
    },
    runLeave() {
      console.log('run Leave');
      this.is_dragover = false;
    },
    runStart() {
      console.log('vao start');
    },
    runEnd() {
      console.log('vao end');
    },
    rundragNormal() {
      console.log('rundragNormal');
    },
  },
};
</script>

<style scoped>
.textRed {
  color: red;
}
</style>
