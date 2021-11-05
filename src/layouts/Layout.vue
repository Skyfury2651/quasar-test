<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-primary"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navigation tab
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
<!--    <q-footer>-->
<!--      <q-tabs class="text-white">-->
<!--        <q-route-tab name="todo" icon="mail" label="Todo" to="/todo" exact class="text-white"></q-route-tab>-->
<!--        <q-route-tab name="settings" icon="mail" label="Setting" to="/settings" exact class="text-white"></q-route-tab>-->
<!--      </q-tabs>-->
<!--    </q-footer>-->
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Todo',
    caption: 'To do page',
    icon: 'list',
    link: '/todo'
  },
  {
    title: 'Settings',
    caption: 'Setting page',
    icon: 'code',
    link: '/settings'
  },
];

import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
