<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>

</template>


<script>


import TheNavigation from "@/components/nav/TheNavigation";
export default {
  name: 'App',
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        {id: 't1', name: 'Frontend Engineers',  members: ['u1', 'u2']},
        {id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3']},
        {id: 't3', name: 'Client Consulting', members: ['u4', 'u5']}
      ],
      users: [
        {id: 'u1', fullName: 'Justin Moreyl', role: 'Engineer'},
        {id: 'u2', fullName: 'Olga Moreyl', role: 'Engineer'},
        {id: 'u3', fullName: 'Alex Moreyl', role: 'Engineer'},
        {id: 'u4', fullName: 'Mike Moreyl', role: 'Consultant'},
        {id: 'u5', fullName: 'Mark Moreyl', role: 'Consultant'},

      ]
    }
  },

  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
